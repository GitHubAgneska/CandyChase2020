import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { GeolocServiceProvider } from '../../providers/geoloc-service/geoloc.service';
import { CandyAPIService } from '../../providers/candy-api-service/candy-api.service';
var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, navParams, geolocService, candyService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocService = geolocService;
        this.candyService = candyService;
        this.batsBg = "assets/graphicMat/gradient_bats.png";
        this.img_candyTitle = "assets/graphicMat/title_candy.png";
        this.img_chaseTitle = "assets/graphicMat/title_chase.png";
        this.img_circles = "assets/graphicMat/circles.png";
    }
    WelcomePage.prototype.ionViewWillEnter = function () {
        // get coords as soon as app opens
        this.geolocService.getLocation();
        // get candylist as 'hot observable' and cache response
        this.candyList$ = this.candyService.candy;
        if (this.candyList$) {
            console.log(this.candyList$);
        }
        ;
    };
    WelcomePage.prototype.start = function () {
        this.navCtrl.push(TabsPage);
    };
    WelcomePage = tslib_1.__decorate([
        IonicPage(),
        Component({
            selector: 'page-welcome',
            templateUrl: 'welcome.html',
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            NavParams,
            GeolocServiceProvider,
            CandyAPIService])
    ], WelcomePage);
    return WelcomePage;
}());
export { WelcomePage };
//# sourceMappingURL=welcome.js.map