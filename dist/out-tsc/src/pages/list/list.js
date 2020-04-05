import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { CandyAPIService } from '../../providers/candy-api-service/candy-api.service';
import { BackpackServiceProvider } from '../../providers/backpack-service/backpack-service';
import { GeolocServiceProvider } from '../../providers/geoloc-service/geoloc.service';
import { ShortenStringPipe } from '../../pipes/shorten-string/shorten-string';
var ListPage = /** @class */ (function () {
    function ListPage(toast, candyService, backpackService, geolocation, geolocService, shortenString) {
        this.toast = toast;
        this.candyService = candyService;
        this.backpackService = backpackService;
        this.geolocation = geolocation;
        this.geolocService = geolocService;
        this.shortenString = shortenString;
        this.candyList = [];
        this.candyItem = { _id: "", product_name: "", amountInBackpack: 0,
            image_front_url: "", brands_tags: [], ingredients_tags: [],
            nutriscore_data: [], additives_tags: [], allergens_hierarchy: [] };
        this.candyChecklist = { additives: false,
            preservatives: false,
            organic: false,
            glutenFree: false,
            vegan: false,
            vegetarian: false };
        this.itemsInBackpack = [];
        this.totalCandy = 0;
        // this.youLevelUp = false;
    }
    ListPage.prototype.ngOnInit = function () { };
    ListPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        //this.candyList$ = this.candyService.candy;
        this.candyService.getAllCandyFromApi()
            .subscribe(function (response) {
            _this.candyList = response;
            // console.log(this.candyList);
        });
    };
    ListPage.prototype.addCandyToBackpack = function (candyItem) {
        var _this = this;
        this.backpackService.currentBackpackCount.subscribe(function (data) { return _this.totalCandy = data; });
        this.candyItem = candyItem;
        this.candyItem.product_name = candyItem.product_name;
        this.candyItem._id = candyItem._id;
        this.candyItem.amountInBackpack = candyItem.amountInBackpack | 0;
        // new candy has not been added yet
        var added = false;
        // look into items of backpack if new candy id already exists
        for (var _i = 0, _a = this.itemsInBackpack; _i < _a.length; _i++) {
            var item = _a[_i];
            // if id exists : only increase amount of this candy
            if (item.product_name === this.candyItem.product_name) {
                item.amountInBackpack += 1;
                added = true;
                break;
            }
        }
        // if id does not exist : add new candy to backpack (and increase amount)
        if (!added) {
            this.candyItem.amountInBackpack += 1;
            this.itemsInBackpack.push(this.candyItem);
        }
        //console.log("ITEMS : ", this.itemsInBackpack);
        //console.log(this.itemsInBackpack.forEach(item => console.log(item.amountInBackpack)));
        // save new total of all candy
        this.backpackService.update_totalCandyCount(this.totalCandy += 1);
        // save backpack new state 
        this.backpackService.update_backpack(this.itemsInBackpack);
        //this.geolocService.getLocation();
        // alert new points as user clicks '+' 
        this.toast.create({
            message: "+1 Point! " + name,
            duration: 300,
            position: "middle",
            cssClass: "custom-toast"
        }).present();
        this.toast.create({
            message: "TOTAL POINTS :" + this.totalCandy + "!",
            duration: 400,
            position: "middle",
            cssClass: "custom-toast"
        }).present();
        if (this.totalCandy % 5 === 0) {
            this.toast.create({
                duration: 800,
                position: "middle",
                cssClass: "levelUp"
            }).present();
            this.toast.create({
                duration: 400,
                position: "middle",
                cssClass: "newCard"
            }).present();
        }
    };
    ListPage = tslib_1.__decorate([
        Component({
            selector: 'page-list',
            templateUrl: 'list.html'
        }),
        tslib_1.__metadata("design:paramtypes", [ToastController,
            CandyAPIService,
            BackpackServiceProvider,
            Geolocation,
            GeolocServiceProvider,
            ShortenStringPipe])
    ], ListPage);
    return ListPage;
}());
export { ListPage };
/*
  public getLocation() {
    this.geolocation.getCurrentPosition().then((res) => {
      this.geolocService.setGeo(res);
      console.log('latitude: ' + res.coords.latitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  } */
//# sourceMappingURL=list.js.map