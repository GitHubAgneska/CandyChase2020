import * as tslib_1 from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GeolocServiceProvider } from '../../providers/geoloc-service/geoloc.service';
import { Geolocation } from '@ionic-native/geolocation';
import { MyAddressesPage } from '../my-addresses/my-addresses';
var MapPage = /** @class */ (function () {
    //  public currentUserAgeRange:number;
    function MapPage(navCtrl, geolocService, geolocation) {
        this.navCtrl = navCtrl;
        this.geolocService = geolocService;
        this.geolocation = geolocation;
    }
    MapPage.prototype.ngOnInit = function () {
        // this.currentUserAgeRange = this.geolocService.getCurrentAgeRange();
        // console.log(this.currentUserAgeRange);
    };
    MapPage.prototype.ionViewWillEnter = function () { };
    MapPage.prototype.ionViewDidEnter = function () {
        this.geolocService.newCoords(500);
        this.geolocService.loadmap();
    };
    MapPage.prototype.addCircle = function () {
        this.geolocService.addCircle();
    };
    MapPage.prototype.myAddresses = function () {
        this.navCtrl.push(MyAddressesPage);
    };
    MapPage.prototype.ionViewWillLeave = function () {
        // if(this.map) { this.map.remove(); }
    };
    tslib_1.__decorate([
        ViewChild('map'),
        tslib_1.__metadata("design:type", ElementRef)
    ], MapPage.prototype, "mapContainer", void 0);
    MapPage = tslib_1.__decorate([
        Component({
            selector: 'page-map',
            templateUrl: 'map.html'
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            GeolocServiceProvider,
            Geolocation])
    ], MapPage);
    return MapPage;
}());
export { MapPage };
//# sourceMappingURL=map.js.map