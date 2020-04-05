import * as tslib_1 from "tslib";
import { CandyAPIService } from '../../providers/candy-api-service/candy-api.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CandyDetailsPage } from '../candy-details/candy-details';
import { BackpackServiceProvider } from '../../providers/backpack-service/backpack-service';
import { KeyvaluePipe } from '../../pipes/keyvalue/keyvalue';
import { ShortenStringPipe } from '../../pipes/shorten-string/shorten-string';
var BackpackPage = /** @class */ (function () {
    function BackpackPage(navCtrl, navParams, candyService, backpackService, keyvaluepipe, shortenString) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.candyService = candyService;
        this.backpackService = backpackService;
        this.keyvaluepipe = keyvaluepipe;
        this.shortenString = shortenString;
        // this.currentLevel = { "idLevel":"", "levelName": "", "levelImg": "", "bannerMessage":"", "levelCard":"", "levelCardName":"" };
    }
    BackpackPage.prototype.ngOnInit = function () {
        // retrieve all candy items
        this.setBackpack();
    };
    BackpackPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // retrieve total candy/ points
        this.backpackService.currentBackpackCount.subscribe(function (data) { return _this.totalCandy = data; });
        //console.log("TOTAL CANDY AT INIT: ", this.totalCandy);
    };
    BackpackPage.prototype.setBackpack = function () {
        var _this = this;
        this.backpackService.currentBackpack.subscribe(function (data) { return _this.collectedCandy = data; });
        //console.log("COLLECTED CANDY RETRIEVED ON INIT: ", this.collectedCandy);
    };
    BackpackPage.prototype.seeCandyInfos = function (id) {
        this.navCtrl.push(CandyDetailsPage, { idparam: id });
    };
    BackpackPage = tslib_1.__decorate([
        Component({
            selector: 'page-backpack',
            templateUrl: 'backpack.html'
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            NavParams,
            CandyAPIService,
            BackpackServiceProvider,
            KeyvaluePipe,
            ShortenStringPipe])
    ], BackpackPage);
    return BackpackPage;
}());
export { BackpackPage };
//# sourceMappingURL=backpack.js.map