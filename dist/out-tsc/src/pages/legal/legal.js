import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the LegalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LegalPage = /** @class */ (function () {
    function LegalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LegalPage.prototype.ionViewDidLoad = function () {
    };
    LegalPage = tslib_1.__decorate([
        IonicPage(),
        Component({
            selector: 'page-legal',
            templateUrl: 'legal.html',
        }),
        tslib_1.__metadata("design:paramtypes", [NavController, NavParams])
    ], LegalPage);
    return LegalPage;
}());
export { LegalPage };
//# sourceMappingURL=legal.js.map