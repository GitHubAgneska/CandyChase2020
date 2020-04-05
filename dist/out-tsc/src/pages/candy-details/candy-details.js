import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CandyAPIService } from '../../providers/candy-api-service/candy-api.service';
import { KeyvaluePipe } from '../../pipes/keyvalue/keyvalue';
import { RemoveUnderscorePipe } from '../../pipes/remove-underscore/remove-underscore';
import { RemoveCharsPipe } from '../../pipes/remove-chars/remove-chars';
var CandyDetailsPage = /** @class */ (function () {
    function CandyDetailsPage(navCtrl, navParams, candyService, keyvaluepipe, removeUnderscore, removeChars) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.candyService = candyService;
        this.keyvaluepipe = keyvaluepipe;
        this.removeUnderscore = removeUnderscore;
        this.removeChars = removeChars;
        this.iconTrue = 'assets/icon/icon_true.png';
        this.iconFalse = 'assets/icon/icon_false.png';
        this.candyId = this.navParams.get("idparam");
        this.candyItem = { _id: "", product_name: "", generic_name_fr: "",
            image_front_url: "", brands_tags: [], ingredients_tags: [],
            nutriscore_data: [], additives_tags: [], allergens_hierarchy: [], labels: "" };
        this.candyChecklist = { additives: false,
            preservatives: false,
            organic: false,
            glutenFree: false,
            vegan: false,
            vegetarian: false };
        this.showIngredients = false;
        this.showAllergens = false;
        this.showNutriscore = false;
    }
    CandyDetailsPage.prototype.ionViewDidLoad = function () { };
    CandyDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.candyService.getCandyById(this.candyId)
            .subscribe(function (response) {
            _this.candyItem = response;
            _this.candyOfList = response;
            _this.candyItem.product_name = response.product_name;
            _this.candyItem.image_front_url = response.image_front_url;
            _this.candyItem.ingredients_tags = response.ingredients_tags;
            _this.candyItem.nutriscore_data = response.nutriscore_data;
            _this.candyItem.allergens_hierarchy = response.allergens_hierarchy;
            _this.candyItem.additives_tags = response.additives_tags;
            _this.candyItem.labels = response.labels;
            console.log('candy response: ', response);
            for (var _i = 0, _a = _this.candyItem.allergens_hierarchy; _i < _a.length; _i++) {
                var x = _a[_i];
                if (x === 'gluten') {
                    _this.candyChecklist.glutenFree = false;
                    _this.glutenFree = false;
                }
            }
            /*  ( x === 'milk' ||  x === 'butter' ||  x === 'eggs') */
            for (var _b = 0, _c = _this.candyItem.ingredients_tags; _b < _c.length; _b++) {
                var x = _c[_b];
                if (x === 'milk') {
                    _this.vegan = false;
                }
                if (x === 'gelatin') {
                    _this.vegetarian = false;
                    _this.vegan = false;
                }
                else {
                    _this.vegetarian = true;
                }
            }
            if (_this.candyItem.additives_tags && _this.candyItem.additives_tags.length > 0) {
                _this.additives = true;
            }
            if (_this.candyItem.labels && _this.candyItem.labels.length > 0) {
                _this.candyItem.labels.split(',').forEach(function (x) {
                    if (x === 'bio' || x === 'ab') {
                        _this.organic = true;
                    }
                });
            }
        });
    };
    CandyDetailsPage.prototype.toggleIngredients = function () {
        this.showIngredients = !this.showIngredients;
        this.selected = !this.selected;
    };
    CandyDetailsPage.prototype.toggleAllergens = function () {
        this.showAllergens = !this.showAllergens;
    };
    CandyDetailsPage.prototype.toggleNutriscore = function () {
        this.showNutriscore = !this.showNutriscore;
    };
    CandyDetailsPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    CandyDetailsPage = tslib_1.__decorate([
        IonicPage(),
        Component({
            selector: 'page-candy-details',
            templateUrl: 'candy-details.html',
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            NavParams,
            CandyAPIService,
            KeyvaluePipe,
            RemoveUnderscorePipe,
            RemoveCharsPipe])
    ], CandyDetailsPage);
    return CandyDetailsPage;
}());
export { CandyDetailsPage };
//# sourceMappingURL=candy-details.js.map