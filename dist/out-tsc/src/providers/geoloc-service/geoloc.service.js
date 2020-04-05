import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import leaflet from 'leaflet';
// import { BehaviorSubject } from 'rxjs';
var GeolocServiceProvider = /** @class */ (function () {
    function GeolocServiceProvider(geolocation) {
        this.geolocation = geolocation;
        this.markerIcon = {
            icon: leaflet.icon({
                iconSize: [25, 41],
                iconAnchor: [10, 41],
                popupAnchor: [2, -40],
                // specify the path here
                iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
                shadowUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png"
            })
        };
        this.currentLat = 0;
        this.currentLong = 0;
        this.dist = 0;
        this.mybounds = [];
    }
    // access/modify current coords  
    GeolocServiceProvider.prototype.setGeo = function (geoloc) {
        this.geo = geoloc;
    };
    GeolocServiceProvider.prototype.getGeo = function () {
        return this.geo;
    };
    // access /modify current user's age
    GeolocServiceProvider.prototype.setCurrentAgeRange = function (age) {
        this.currentUserAgeRange = age;
    };
    GeolocServiceProvider.prototype.getCurrentAgeRange = function () {
        return this.currentUserAgeRange;
    };
    // get current location
    GeolocServiceProvider.prototype.getLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (res) {
            _this.setGeo(res);
            _this.currentLat = res.coords.latitude;
            _this.currentLong = res.coords.longitude;
            console.log('get loc, current coords = : ' + _this.currentLat, _this.currentLong);
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    GeolocServiceProvider.prototype.watchPosition = function () {
        this.geolocation.watchPosition();
    };
    // get distance from age param
    GeolocServiceProvider.prototype.getDist = function (ageRange) {
        this.currentUserAgeRange = ageRange;
        console.log("Age: ", this.currentUserAgeRange);
        if (this.currentUserAgeRange === 1) {
            this.dist = 300;
        }
        else {
            if (this.currentUserAgeRange === 2) {
                this.dist = 500;
            }
            else {
                this.dist = 800;
            }
        }
        return this.dist;
    };
    // calculate new coords for map age filter, using current coords and distance 'dist'
    // we need 4 points to delimit a perimeter of x meters around current position :
    // current pos(lat + distance , long + distance), pos(lat - distance, long - distance)
    GeolocServiceProvider.prototype.newCoords = function (dist) {
        var r_earth = 6378;
        this.dist = dist;
        console.log("CURRENT: ", this.currentLong, this.currentLat);
        var m = (1 / ((2 * Math.PI / 360) * r_earth)) / 1000; //1 meter in degree
        var new_latitude1 = this.currentLat + (this.dist * m);
        var new_longitude1 = this.currentLong + (this.dist * m) / Math.cos(this.currentLat * (Math.PI / 180));
        console.log("new point 1 : ", new_latitude1, new_longitude1);
        var new_latitude2 = this.currentLat - (this.dist * m);
        var new_longitude2 = this.currentLong - (this.dist * m) / Math.cos(this.currentLat * (Math.PI / 180));
        this.mybounds = [new_latitude1, new_longitude1, new_latitude2, new_longitude2];
        console.log('BOUNDS= ', this.mybounds);
        return this.mybounds;
    };
    // load map using new coords to display map portion with 'set bounds' 
    GeolocServiceProvider.prototype.loadmap = function () {
        var _this = this;
        console.log('BOUNDS AT LOAD MAP = ', this.mybounds);
        var corner1 = leaflet.latLng(this.mybounds[0], this.mybounds[1]), corner2 = leaflet.latLng(this.mybounds[2], this.mybounds[3]), bounds = leaflet.latLngBounds(corner1, corner2);
        // initialize Leaflet
        this.map = leaflet.map("map");
        // add the OpenStreetMap tiles
        leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attributions: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
        this.map.locate({
            setView: true,
            maxZoom: 18
        })
            .on('locationfound', function (e) {
            var markerGroup = leaflet.featureGroup();
            var marker = leaflet.marker([e.latitude, e.longitude], _this.markerIcon).on('click', function () {
                alert('Marker clicked');
            });
            markerGroup.addLayer(marker);
            _this.map.addLayer(markerGroup);
        })
            .on('locationerror', function (err) {
            alert(err.message);
        });
        //show the scale bar on the lower left corner
        leaflet.control.scale().addTo(this.map);
        // add bounds from age-range select and fit map to bounds
        this.addBounds(bounds);
        // add marker to the map + pop up text
        //leaflet.marker({lon: 0, lat: 0}).bindPopup('The center of the world').addTo(this.map);
    };
    // add bounds around current position on map
    GeolocServiceProvider.prototype.addBounds = function (bounds) {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (res) {
            leaflet.rectangle(bounds, { color: "#00000", weight: 1 })
                .addTo(_this.map);
            _this.map.fitBounds(bounds);
        }).catch(function (error) {
            console.log('Error getting bounds', error);
        });
    };
    // additional tools for map -- 
    GeolocServiceProvider.prototype.setMarker = function () {
        // custom marker
        var myIcon = leaflet.icon({
            iconUrl: 'my-icon.png',
            iconSize: [38, 95],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76],
            shadowUrl: 'my-icon-shadow.png',
            shadowSize: [68, 95],
            shadowAnchor: [22, 94]
        });
        var markerGroup = leaflet.featureGroup();
        var marker = leaflet.marker([this.geo.coords.latitude, this.geo.coords.longitude]);
        markerGroup.addLayer(marker);
        this.map.addLayer(markerGroup);
    };
    // add 50m radius around current position on map
    GeolocServiceProvider.prototype.addCircle = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (res) {
            leaflet.circle([res.coords.latitude, res.coords.longitude], {
                color: 'green',
                fillColor: '#7CFC00',
                fillOpacity: 0.2,
                radius: 50
            }).addTo(_this.map);
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    // trace path on the map while questing
    GeolocServiceProvider.prototype.tracePath = function () {
        // create a red polyline from an array of LatLng points
        var latlngs = [
            [45.51, -122.68],
            [37.77, -122.43],
            [34.04, -118.2]
        ];
        var polyline = leaflet.polyline(latlngs, { color: 'red' }).addTo(this.map);
        // zoom the map to the polyline
        this.map.fitBounds(polyline.getBounds());
    };
    GeolocServiceProvider = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Geolocation])
    ], GeolocServiceProvider);
    return GeolocServiceProvider;
}());
export { GeolocServiceProvider };
// this.new_latitude1  = this.currentLat  + (this.dist / r_earth) * (180 / Math.PI);
// this.new_longitude1 = this.currentLong + (this.dist / r_earth) * (180 / Math.PI) / Math.cos(this.currentLat * Math.PI/180);
//# sourceMappingURL=geoloc.service.js.map