import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { RulesPage } from '../rules/rules';
import { LoginPage } from '../login/login';
import { LegalPage } from '../legal/legal';
import { AboutPage } from '../about/about';
import { AgeSelectPage } from '../age-select/age-select';
var MyHomePage = /** @class */ (function () {
    function MyHomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.batsBg = "assets/graphicMat/gradient_bats.png";
        this.img_candyTitle = "assets/graphicMat/title_candy.png";
        this.img_chaseTitle = "assets/graphicMat/title_chase.png";
        this.img_circles = "assets/graphicMat/circles.png";
    }
    MyHomePage.prototype.goto = function () {
        this.navCtrl.push(ListPage);
    };
    MyHomePage.prototype.goToStart = function () {
        this.navCtrl.push(AgeSelectPage);
    };
    MyHomePage.prototype.goToRules = function () {
        this.navCtrl.push(RulesPage);
    };
    MyHomePage.prototype.goToLogin = function () {
        this.navCtrl.push(LoginPage);
    };
    MyHomePage.prototype.goToLegal = function () {
        this.navCtrl.push(LegalPage);
    };
    MyHomePage.prototype.goToAbout = function () {
        this.navCtrl.push(AboutPage);
    };
    MyHomePage = tslib_1.__decorate([
        IonicPage(),
        Component({
            selector: 'page-my-home',
            templateUrl: 'my-home.html',
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            NavParams])
    ], MyHomePage);
    return MyHomePage;
}());
export { MyHomePage };
//# sourceMappingURL=my-home.js.map