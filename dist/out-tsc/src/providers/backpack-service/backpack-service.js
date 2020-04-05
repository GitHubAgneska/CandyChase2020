import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LevelServiceProvider } from '../level-api-service/level-api.service';
var BackpackServiceProvider = /** @class */ (function () {
    // ---
    function BackpackServiceProvider(http, levelService) {
        this.http = http;
        this.levelService = levelService;
        // keep track of backpack state --
        this.backpack$ = new BehaviorSubject([]);
        this.currentBackpack = this.backpack$.asObservable();
        // keep track of candy total --  
        this.totalCandyInBackpack$ = new BehaviorSubject(0);
        this.currentBackpackCount = this.totalCandyInBackpack$.asObservable();
        this.itemsInBackpack = [];
        this.candyItem = { "_id": "", "product_name": "", "amountInBackpack": 0 };
        this.totalPoints = 0;
        this.levels = [];
        this.level = { "idLevel": "", "levelName": "", "levelImg": "", "bannerMessage": "", "levelCard": "", "levelCardName": "" };
        this.nextLevel = { "idLevel": "", "levelName": "", "levelImg": "", "bannerMessage": "", "levelCard": "", "levelCardName": "" };
    }
    // method for components to update backpack
    BackpackServiceProvider.prototype.update_backpack = function (itemsInBackpack) {
        this.backpack$.next(itemsInBackpack);
    };
    // method for components to update total candy
    BackpackServiceProvider.prototype.update_totalCandyCount = function (totalCandy) {
        this.totalCandyInBackpack$.next(totalCandy);
    };
    BackpackServiceProvider = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient, LevelServiceProvider])
    ], BackpackServiceProvider);
    return BackpackServiceProvider;
}());
export { BackpackServiceProvider };
// TODO : + backend => create new backpack for each user 
//# sourceMappingURL=backpack-service.js.map