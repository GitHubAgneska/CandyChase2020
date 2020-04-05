import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";
var LevelServiceProvider = /** @class */ (function () {
    function LevelServiceProvider(httpService) {
        this.httpService = httpService;
        this.levelListUrl = 'assets/levelsData.json';
        this.levelList = [];
        // this.level = { "idLevel": "", "levelName": "", "levelImg": "", "bannerMessage": "", "levelCard": "", "levelCardName": "" };
    }
    // retrieve all models of json 'level models' from local folder
    LevelServiceProvider.prototype.getLevelList = function () {
        return this.httpService.get(this.levelListUrl)
            .pipe(map(function (response) {
            var result = response.json();
            //console.log("je suis levellist 0", result[0]);
            return result;
        }));
    };
    // retrieve models of level objects by id in json from local folder
    LevelServiceProvider.prototype.getLevelById = function (idLevel) {
    };
    LevelServiceProvider = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Http])
    ], LevelServiceProvider);
    return LevelServiceProvider;
}());
export { LevelServiceProvider };
//# sourceMappingURL=level-api.service.js.map