import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import leaflet from 'leaflet';
import { Coordonne } from '../../models/coordonne.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class GeolocServiceProvider {

  public geo: Coordonne;
  public map: any;

  // keep track of user's age to display the right map
  userAgeRange$ = new BehaviorSubject(0);
  currentUserAgeRange = this.userAgeRange$.asObservable();

  constructor(
    public geolocation: Geolocation) {}


  setGeo(geoloc) {
    this.geo = geoloc;
  }

  getGeo() {
    return this.geo;
  }

  
  public getLocation() {
    this.geolocation.getCurrentPosition().then((res) => {
      this.setGeo(res);
      console.log('latitude: ' + res.coords.latitude);
    }).catch((error) => {
      console.log('Error getting location', error);
      });
  }


  public loadmap() {
    // initialize Leaflet
    this.map = leaflet.map('map').setView({lon: 0, lat: 0}, 2);
    // this.map = leaflet.map("map").fitWorld();

    // add the OpenStreetMap tiles
    leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attributions: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.map.locate({
      setView: true,
      maxZoom: 15
    }).on('locationfound', (e) => {
      let markerGroup = leaflet.featureGroup();
      let marker: any = leaflet.marker([e.latitude, e.longitude]).on('click', () => {
        alert('Marker clicked');
      })
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);
    }).on('locationerror', (err) => {
      alert(err.message);
    })
  }


  setMarker() {

    // custom marker
/*     const myIcon = leaflet.icon({
      iconUrl: 'my-icon.png',
      iconSize: [38, 95],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
      shadowUrl: 'my-icon-shadow.png',
      shadowSize: [68, 95],
      shadowAnchor: [22, 94]
  }); */

    let markerGroup = leaflet.featureGroup();
    let marker: any = leaflet.marker([this.geo.coords.latitude, this.geo.coords.longitude]);

    markerGroup.addLayer(marker);
    this.map.addLayer(markerGroup);
  }


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

  // test to add dark overlay around designated quest area
  addBoundaries() {
    this.geolocation.getCurrentPosition().then((res) => {
      //var imageUrl = '../assets/graphicMat/fantom.svg',
      //imageBounds = [[res.coords.latitude, res.coords.longitude],[res.coords.latitude, res.coords.longitude]],
      //options = [ {zIndex: 2}];
      //leaflet.imageOverlay(imageUrl, imageBounds, options).addTo(this.map);
    })
  }


  // trace path on the map while questing
  public tracePath() {
    // create a red polyline from an array of LatLng points
    var latlngs = [
      [45.51, -122.68],
      [37.77, -122.43],
      [34.04, -118.2]
    ];
    var polyline = leaflet.polyline(latlngs, {color: 'red'}).addTo(this.map);
    // zoom the map to the polyline
    this.map.fitBounds(polyline.getBounds());
  }

  // --- display map portion according to age
}


 // ++ show the scale bar on the lower left corner
  // L.control.scale().addTo(map);
  //  // show a marker on the map
  //  L.marker({lon: 0, lat: 0}).bindPopup('The center of the world').addTo(map);


