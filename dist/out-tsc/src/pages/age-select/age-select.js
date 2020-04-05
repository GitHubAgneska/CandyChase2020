import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GeolocServiceProvider } from '../../providers/geoloc-service/geoloc.service';
import { MapPage } from '../map/map';
var AgeSelectPage = /** @class */ (function () {
    function AgeSelectPage(navCtrl, navParams, geolocService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocService = geolocService;
    }
    AgeSelectPage.prototype.ionViewDidLoad = function () { };
    AgeSelectPage.prototype.setAge = function (ageRange) {
        this.ageRange = ageRange;
        console.log("AGE: ", this.ageRange);
        this.geolocService.setCurrentAgeRange(this.ageRange);
        this.navCtrl.push(MapPage);
        /*
          make map current active page
          .then(() => {
                    const index = this.navCtrl.getActive().index;
                    this.navCtrl.remove(index-1);
                }); */
    };
    AgeSelectPage = tslib_1.__decorate([
        IonicPage(),
        Component({
            selector: 'page-age-select',
            templateUrl: 'age-select.html',
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            NavParams,
            GeolocServiceProvider])
    ], AgeSelectPage);
    return AgeSelectPage;
}());
export { AgeSelectPage };
//# sourceMappingURL=age-select.js.map