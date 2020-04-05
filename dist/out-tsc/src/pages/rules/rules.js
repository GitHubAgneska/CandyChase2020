import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the RulesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RulesPage = /** @class */ (function () {
    function RulesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RulesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RulesPage');
    };
    RulesPage = tslib_1.__decorate([
        IonicPage(),
        Component({
            selector: 'page-rules',
            templateUrl: 'rules.html',
        }),
        tslib_1.__metadata("design:paramtypes", [NavController, NavParams])
    ], RulesPage);
    return RulesPage;
}());
export { RulesPage };
//# sourceMappingURL=rules.js.map