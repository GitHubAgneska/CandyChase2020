import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
    };
    AboutPage = tslib_1.__decorate([
        IonicPage(),
        Component({
            selector: 'page-about',
            templateUrl: 'about.html',
        }),
        tslib_1.__metadata("design:paramtypes", [NavController, NavParams])
    ], AboutPage);
    return AboutPage;
}());
export { AboutPage };
//# sourceMappingURL=about.js.map