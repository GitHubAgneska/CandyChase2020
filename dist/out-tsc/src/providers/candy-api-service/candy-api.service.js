import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";
import { BackpackServiceProvider } from '../backpack-service/backpack-service';
import { shareReplay } from 'rxjs/operators';
var CACHE_SIZE = 2;
var CandyAPIService = /** @class */ (function () {
    function CandyAPIService(httpService, backpackService) {
        this.httpService = httpService;
        this.backpackService = backpackService;
        this.candyItem = { "_id": "", "product_name": "", "amountInBackpack": null };
    }
    Object.defineProperty(CandyAPIService.prototype, "candy", {
        // share a single instance of api request across all subscribers
        // ( make next method private
        get: function () {
            if (!this.cache$) {
                this.cache$ = this.getAllCandyFromApi().pipe(shareReplay(CACHE_SIZE));
            }
            return this.cache$;
        },
        enumerable: true,
        configurable: true
    });
    // get all candy list from api, max 50 results  | => TO DO : clean up doublons in list
    CandyAPIService.prototype.getAllCandyFromApi = function () {
        return this.httpService.get("https://world.openfoodfacts.org/cgi/search.pl?search_terms=bonbon&search_simple=1&action=process&json=1&page_size=50")
            .pipe(map(function (response) {
            var result = response.json().products; // '.products' => for object from api contains 2 other main fields!
            console.log(result);
            return result;
        }));
    };
    // get candy by id from api
    CandyAPIService.prototype.getCandyById = function (candyId) {
        return this.httpService.get("https://world.openfoodfacts.org/api/v0/product/" + candyId + ".json").pipe(map(function (response) {
            var result = response.json().product;
            // console.log(result);
            return result;
        }));
    };
    CandyAPIService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Http,
            BackpackServiceProvider])
    ], CandyAPIService);
    return CandyAPIService;
}());
export { CandyAPIService };
//# sourceMappingURL=candy-api.service.js.map