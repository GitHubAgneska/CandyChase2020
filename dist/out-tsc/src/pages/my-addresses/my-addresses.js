import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the MyAddressesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyAddressesPage = /** @class */ (function () {
    function MyAddressesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyAddressesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyAddressesPage');
    };
    MyAddressesPage = tslib_1.__decorate([
        IonicPage(),
        Component({
            selector: 'page-my-addresses',
            templateUrl: 'my-addresses.html',
        }),
        tslib_1.__metadata("design:paramtypes", [NavController, NavParams])
    ], MyAddressesPage);
    return MyAddressesPage;
}());
export { MyAddressesPage };
//# sourceMappingURL=my-addresses.js.map