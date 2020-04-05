import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LevelServiceProvider } from '../level-api-service/level-api.service';
import { BackpackServiceProvider } from '../backpack-service/backpack-service';
var LevelService = /** @class */ (function () {
    function LevelService(http, backpackService, levelProvider) {
        this.http = http;
        this.backpackService = backpackService;
        this.levelProvider = levelProvider;
        // keep track of current level name --  
        this.levelName$ = new BehaviorSubject("1");
        this.currentLevel = this.levelName$.asObservable();
    }
    // method for components to update current level (besides regular count)
    LevelService.prototype.update_level = function (levelName) {
        this.levelName$.next(levelName);
    };
    // keep track of current level --> whole object
    // public level$: BehaviorSubject<Level> = new BehaviorSubject(this.level);
    // currentLevel = this.level$.asObservable();
    // -----
    LevelService.prototype.retriveLevelList = function () {
        var _this = this;
        this.levelProvider.getLevelList().subscribe(function (response) {
            _this.myArrayOfLevels = response;
            console.log(_this.myArrayOfLevels);
        });
        return this.myArrayOfLevels;
    };
    LevelService.prototype.retrieveCurrentTotalPoints = function () {
        var _this = this;
        this.totalPoints$ = this.backpackService.currentBackpackCount.subscribe(function (data) { _this.totalPoints = data; });
        // console.log('TOTAL POINTS RETRIEVED: ', this.totalPoints);
    };
    LevelService.prototype.calculateCurrentLevel = function (totalPoints) {
        totalPoints = this.totalPoints$;
        console.log('TOTAL POINTS = : ', this.totalPoints);
        if (this.totalPoints <= 7) {
            console.log('IS < 7');
            this.level = this.myArrayOfLevels[0];
            this.level.levelName = this.myArrayOfLevels[0].levelName;
            //console.log( "je suis LEVEL NAME: ",this.level.levelName);
            this.level.levelImg = this.myArrayOfLevels[0].levelImg;
            this.level.bannerMessage = this.myArrayOfLevels[0].bannerMessage;
            this.level.levelCard = this.myArrayOfLevels[0].levelCard;
            this.nextLevel = this.myArrayOfLevels[1];
            this.nextLevel.levelName = this.myArrayOfLevels[1].levelName;
            this.nextLevel.levelCard = this.myArrayOfLevels[1].levelCard;
            this.nextLevel.levelCardName = this.myArrayOfLevels[1].levelCardName;
        }
        if (totalPoints > 7 && totalPoints <= 12) {
            this.level = this.myArrayOfLevels[1];
            this.level.levelName = this.myArrayOfLevels[1].levelName;
            //console.log( "je suis LEVEL NAME: ",this.level.levelName);
            this.level.levelImg = this.myArrayOfLevels[1].levelImg;
            this.level.bannerMessage = this.myArrayOfLevels[1].bannerMessage;
            this.level.levelCard = this.myArrayOfLevels[1].levelCard;
            this.nextLevel = this.myArrayOfLevels[2];
            this.nextLevel.levelName = this.myArrayOfLevels[2].levelName;
            this.nextLevel.levelCard = this.myArrayOfLevels[2].levelCard;
            this.nextLevel.levelCardName = this.myArrayOfLevels[2].levelCardName;
        }
        if (totalPoints > 12 && totalPoints <= 18) {
            this.level = this.myArrayOfLevels[2];
            this.level.levelName = this.myArrayOfLevels[2].levelName;
            console.log("je suis LEVEL NAME: ", this.level.levelName);
            this.level.levelImg = this.myArrayOfLevels[2].levelImg;
            this.level.bannerMessage = this.myArrayOfLevels[2].bannerMessage;
            this.level.levelCard = this.myArrayOfLevels[2].levelCard;
            this.nextLevel = this.myArrayOfLevels[3];
            this.nextLevel.levelName = this.myArrayOfLevels[3].levelName;
            this.nextLevel.levelCard = this.myArrayOfLevels[3].levelCard;
            this.nextLevel.levelCardName = this.myArrayOfLevels[3].levelCardName;
        }
        if (totalPoints > 18) {
            this.level = this.myArrayOfLevels[3];
            this.level.levelName = this.myArrayOfLevels[3].levelName;
            console.log("je suis LEVEL NAME: ", this.level.levelName);
            this.level.levelImg = this.myArrayOfLevels[3].levelImg;
            this.level.bannerMessage = this.myArrayOfLevels[3].bannerMessage;
            this.level.levelCard = this.myArrayOfLevels[3].levelCard;
            this.nextLevel = this.myArrayOfLevels[4];
            this.nextLevel.levelName = this.myArrayOfLevels[4].levelName;
            this.nextLevel.levelCard = this.myArrayOfLevels[4].levelCard;
            this.nextLevel.levelCardName = this.myArrayOfLevels[4].levelCardName;
        }
        console.log(this.level.levelName);
        this.update_level(this.levelName);
        // this.update_level(this.level);
    };
    LevelService.prototype.setCurrentLevel = function () {
        this.retrieveCurrentTotalPoints();
        console.log('TOTAL POINTS RETRIEVED: ', this.totalPoints);
        this.retriveLevelList();
        this.calculateCurrentLevel(this.totalPoints);
        console.log('CURRENT LEVEL: ', this.level.levelName);
    };
    LevelService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            BackpackServiceProvider,
            LevelServiceProvider])
    ], LevelService);
    return LevelService;
}());
export { LevelService };
//# sourceMappingURL=level.service.js.map