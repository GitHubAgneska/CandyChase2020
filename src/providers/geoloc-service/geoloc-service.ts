import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import leaflet from 'leaflet';
import { Coordonne } from '../../models/coordonne.model';
// import { BehaviorSubject } from 'rxjs';

@Injectable()
export class GeolocServiceProvider {

  public geo: Coordonne;
  public map: any;
  
  public currentUserAgeRange: number;
  public currentLat: number;
  public currentLong: number;
  public dist: number;
  public mybounds:number[];

  constructor(
    public geolocation: Geolocation) {
      this.currentLat = 0;
      this.currentLong = 0;
      this.dist = 0;
      this.mybounds = [];
    }

  // access/modify current coords  
  public setGeo(geoloc) {
    this.geo = geoloc;
  }
  public getGeo() {
    return this.geo;
  }

  // access /modify current user's age
  public setCurrentAgeRange(age: number) {
    this.currentUserAgeRange = age;
  }
  public getCurrentAgeRange() {
    return this.currentUserAgeRange;
  }


  // get current location
  public getLocation() {
    this.geolocation.getCurrentPosition().then((res) => {
      this.setGeo(res);
      this.currentLat = res.coords.latitude;
      this.currentLong = res.coords.longitude;
      console.log('get loc, current coords = : ' + this.currentLat, this.currentLong);

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }


  // get distance from age param
  public getDist(ageRange:number) {
    this.currentUserAgeRange = ageRange;
    console.log("Age: ", this.currentUserAgeRange);

    if ( this.currentUserAgeRange === 1) {
      this.dist = 300;
    } else {
      if ( this.currentUserAgeRange === 2) {
        this.dist = 500;
      } else { this.dist = 800; }
    }
    return this.dist;
  }

    // calculate new coords for map age filter, using current coords and distance 'dist'
  // we need 4 points to delimit a perimeter of x meters around current position :
  // current pos(lat + distance , long + distance), pos(lat - distance, long - distance)
  public newCoords(dist: number) {

    const r_earth = 6378;
    this.dist = dist;
    console.log("CURRENT: ", this.currentLong, this.currentLat);

    let m = (1 / ((2 * Math.PI / 360) * r_earth)) / 1000;  //1 meter in degree

    let new_latitude1 = this.currentLat + (this.dist * m);
    let new_longitude1 = this.currentLong + (this.dist * m) / Math.cos(this.currentLat * (Math.PI / 180));
    console.log("new point 1 : ", new_latitude1, new_longitude1);

    let new_latitude2 = this.currentLat - (this.dist * m);
    let new_longitude2 = this.currentLong - (this.dist * m) / Math.cos(this.currentLat * (Math.PI / 180));

    this.mybounds = [new_latitude1, new_longitude1,new_latitude2, new_longitude2 ];
    console.log('BOUNDS= ', this.mybounds);

    return this.mybounds;
  }


  // load map using new coords to display map portion with 'set bounds' 
  public loadmap() {
    
    console.log('BOUNDS AT LOAD MAP = ', this.mybounds);
    var corner1 = leaflet.latLng(this.mybounds[0], this.mybounds[1]),
    corner2 = leaflet.latLng(this.mybounds[2], this.mybounds[3]),
    bounds = leaflet.latLngBounds(corner1, corner2);
    
    // initialize Leaflet
    this.map = leaflet.map("map");

    //leaflet.rectangle(bounds, {color: "#00000", weight: 1}).addTo(this.map);

    //
    // this.map = leaflet.map("map").fitBounds(bounds);
    //leaflet.map("map").setMaxBounds(bounds);
    //this.map = leaflet.map('map').setView({ lon: 0, lat: 0 }, 2);
    // this.map = leaflet.map("map").fitWorld();

    // add the OpenStreetMap tiles
    leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attributions: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.map.locate({
      setView: true,
      maxZoom: 18
    })
      .on('locationfound', (e) => {
        let markerGroup = leaflet.featureGroup();
        let marker: any = leaflet.marker([e.latitude, e.longitude]).on('click', () => {
          alert('Marker clicked');
        })
        markerGroup.addLayer(marker);
        this.map.addLayer(markerGroup);
      })
      .on('locationerror', (err) => {
        alert(err.message);
      })
      

    //show the scale bar on the lower left corner
    leaflet.control.scale().addTo(this.map);
    this.addBounds(bounds);
    this.map.fitBounds(bounds);
    // add marker to the map + pop up text
    //leaflet.marker({lon: 0, lat: 0}).bindPopup('The center of the world').addTo(this.map);
  }


  // add radius around current position on map
  addBounds(bounds) {
    this.geolocation.getCurrentPosition().then((res) => {
      leaflet.rectangle( bounds, {color: "#00000", weight: 1})
      .addTo(this.map);

    }).catch((error) => {
      console.log('Error getting bounds', error);
    });
  }



  // additional tools for map -- 

  setMarker() {
    // custom marker
    const myIcon = leaflet.icon({
      iconUrl: 'my-icon.png',
      iconSize: [38, 95],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
      shadowUrl: 'my-icon-shadow.png',
      shadowSize: [68, 95],
      shadowAnchor: [22, 94]
    });
    let markerGroup = leaflet.featureGroup();
    let marker: any = leaflet.marker([this.geo.coords.latitude, this.geo.coords.longitude]);
    markerGroup.addLayer(marker);
    this.map.addLayer(markerGroup);
  }

  // add radius around current position on map
  addCircle() {
    this.geolocation.getCurrentPosition().then((res) => {
      leaflet.circle([res.coords.latitude, res.coords.longitude], {
        color: 'green',
        fillColor: '#7CFC00',
        fillOpacity: 0.2,
        radius: 500
      }).addTo(this.map);

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  
  // trace path on the map while questing
  public tracePath() {
    // create a red polyline from an array of LatLng points
    var latlngs = [
      [45.51, -122.68],
      [37.77, -122.43],
      [34.04, -118.2]
    ];
    var polyline = leaflet.polyline(latlngs, { color: 'red' }).addTo(this.map);
    // zoom the map to the polyline
    this.map.fitBounds(polyline.getBounds());
  }

}




    // this.new_latitude1  = this.currentLat  + (this.dist / r_earth) * (180 / Math.PI);
    // this.new_longitude1 = this.currentLong + (this.dist / r_earth) * (180 / Math.PI) / Math.cos(this.currentLat * Math.PI/180);
