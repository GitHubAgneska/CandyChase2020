import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CandyAPIService } from '../../providers/candy-api-service/candy-api.service';
import { BackpackServiceProvider } from '../../providers/backpack-service/backpack-service';
import { MyCardsPage } from '../my-cards/my-cards';
import { LevelService } from '../../providers/level-service/level.service';
var LevelPage = /** @class */ (function () {
    function LevelPage(navCtrl, navParams, candyService, backpackService, levelService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.candyService = candyService;
        this.backpackService = backpackService;
        this.levelService = levelService;
        this.levels = [];
        this.level = { "idLevel": "", "levelName": "", "levelImg": "", "bannerMessage": "", "levelCard": "", "levelCardName": "" };
        this.nextLevel = { "idLevel": "", "levelName": "", "levelImg": "", "bannerMessage": "", "levelCard": "", "levelCardName": "" };
    }
    LevelPage.prototype.ngOnInit = function () { };
    LevelPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.levelService.setCurrentLevel();
        this.currentLevel$ = this.levelService.currentLevel.subscribe(function (data) { return _this.currentLevel.levelName = data; });
        console.log('CURRENT LEVEL RETRIEVED: ', this.currentLevel.levelName);
    };
    LevelPage.prototype.goToMyCards = function () {
        this.navCtrl.push(MyCardsPage);
    };
    LevelPage.prototype.ionViewDidLeave = function () { };
    LevelPage = tslib_1.__decorate([
        IonicPage(),
        Component({
            selector: 'page-level',
            templateUrl: 'level.html',
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            NavParams,
            CandyAPIService,
            BackpackServiceProvider,
            LevelService])
    ], LevelPage);
    return LevelPage;
}());
export { LevelPage };
//# sourceMappingURL=level.js.map