import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LevelServiceProvider } from '../../providers/level-api-service/level-api.service';
import { BackpackServiceProvider } from '../../providers/backpack-service/backpack-service';
var MyCardsPage = /** @class */ (function () {
    function MyCardsPage(navCtrl, navParams, backpackService, levelService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.backpackService = backpackService;
        this.levelService = levelService;
    }
    MyCardsPage.prototype.ionViewDidLoad = function () {
        // this.levelService.currentLevel.subscribe(data => { this.levelName = data }); 
        console.log("level name = " + this.levelName);
    };
    MyCardsPage = tslib_1.__decorate([
        IonicPage(),
        Component({
            selector: 'page-my-cards',
            templateUrl: 'my-cards.html',
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            NavParams,
            BackpackServiceProvider,
            LevelServiceProvider])
    ], MyCardsPage);
    return MyCardsPage;
}());
export { MyCardsPage };
//# sourceMappingURL=my-cards.js.map