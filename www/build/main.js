webpackJsonp([11],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_geoloc_service_geoloc_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_addresses_my_addresses__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapPage = /** @class */ (function () {
    //  public currentUserAgeRange:number;
    function MapPage(navCtrl, geolocService, geolocation) {
        this.navCtrl = navCtrl;
        this.geolocService = geolocService;
        this.geolocation = geolocation;
    }
    MapPage.prototype.ngOnInit = function () {
        // this.currentUserAgeRange = this.geolocService.getCurrentAgeRange();
        // console.log(this.currentUserAgeRange);
    };
    MapPage.prototype.ionViewWillEnter = function () { };
    MapPage.prototype.ionViewDidEnter = function () {
        this.geolocService.newCoords(500);
        this.geolocService.loadmap();
    };
    MapPage.prototype.addCircle = function () {
        this.geolocService.addCircle();
    };
    MapPage.prototype.myAddresses = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__my_addresses_my_addresses__["a" /* MyAddressesPage */]);
    };
    MapPage.prototype.ionViewWillLeave = function () {
        // if(this.map) { this.map.remove(); }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapPage.prototype, "mapContainer", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/map/map.html"*/'<ion-header>\n  <ion-navbar color="customColor">\n    <ion-title text-center class="mainTitles">\n      Your map\n    </ion-title>\n    <ion-buttons end> \n      <button ion-button icon-only color="orange" (click)="addCircle()">\n        <ion-icon name="md-locate"></ion-icon>\n      </button>\n    <button ion-button icon-only color="orange" (click)="myAddresses()"><ion-icon name="md-globe"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="mapPage-container">\n\n  <div class="mapContainer">\n    <div id="map"></div>\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/map/map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_geoloc_service_geoloc_service__["a" /* GeolocServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveUnderscorePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RemoveUnderscorePipe = /** @class */ (function () {
    function RemoveUnderscorePipe() {
    }
    RemoveUnderscorePipe.prototype.transform = function (value) {
        var toReplace = /[-_]/gm;
        if (value) {
            return value = value.toString().replace(toReplace, ' ');
        }
    };
    RemoveUnderscorePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'removeUnderscore',
            pure: true
        })
    ], RemoveUnderscorePipe);
    return RemoveUnderscorePipe;
}());

//# sourceMappingURL=remove-underscore.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveCharsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RemoveCharsPipe = /** @class */ (function () {
    function RemoveCharsPipe() {
    }
    RemoveCharsPipe.prototype.transform = function (value) {
        if (value.charAt(2) === ':') {
            return value.substring(3, value.length);
            // or return value.slice(3, value.length);
        }
        return value;
    };
    RemoveCharsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'removeChars',
        })
    ], RemoveCharsPipe);
    return RemoveCharsPipe;
}());

//# sourceMappingURL=remove-chars.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_candy_api_service_candy_api_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_backpack_service_backpack_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_geoloc_service_geoloc_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_shorten_string_shorten_string__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







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
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/list/list.html"*/'\n<ion-header>\n  <ion-navbar color="customColor">\n    <ion-title text-center class="mainTitles">Candy to find</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="candyPageContainer">\n  <div class="add-label">\n    <img src="assets/graphicMat/bubble_add2.png" alt="" />\n  </div>\n  <div class="candyList" *ngIf="candyList.length > 0">\n    <div *ngFor="let candyItem of candyList">\n      <div class="candyItem">\n        <div class="candyThumbnail">\n          <img src="{{candyItem.image_front_url}}" class="magic">\n        </div>\n        <div class="candyName">\n          <!-- <h2>{{data.brands_tags[1]}}</h2> -->\n          <h1>{{candyItem.product_name | shortenString:30 }}</h1>\n        </div>\n        <div class="plus-btn">\n          <!-- <button (click)="sendId(candyItem._id)"> -->\n          <button (click)="addCandyToBackpack(candyItem)">\n            <img src="assets/graphicmat/zoomIn.png" alt="plus-button"/>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_candy_api_service_candy_api_service__["a" /* CandyAPIService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_backpack_service_backpack_service__["a" /* BackpackServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_5__providers_geoloc_service_geoloc_service__["a" /* GeolocServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__pipes_shorten_string_shorten_string__["a" /* ShortenStringPipe */]])
    ], ListPage);
    return ListPage;
}());

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

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/about/about.html"*/'\n<ion-header>\n\n  <ion-navbar color="customColor">\n    <ion-title>about</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgeSelectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_geoloc_service_geoloc_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AgeSelectPage = /** @class */ (function () {
    function AgeSelectPage(navCtrl, navParams, geolocService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocService = geolocService;
    }
    AgeSelectPage.prototype.ionViewDidLoad = function () { };
    AgeSelectPage.prototype.setAge = function (ageRange) {
        this.ageRange = ageRange;
        console.log("AGE: ", this.ageRange);
        // this.geolocService.currentUserAgeRange.subscribe(currentAge => this.ageRange = currentAge);
        this.geolocService.setCurrentAgeRange(this.ageRange);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */]);
        /*     .then(() => {
                  const index = this.navCtrl.getActive().index;
                  this.navCtrl.remove(index-1);
              }); */
    };
    AgeSelectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-age-select',template:/*ion-inline-start:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/age-select/age-select.html"*/'<!-- <ion-header>\n  <ion-navbar color="customColor">\n    <ion-title text-center class="mainTitles">\n    </ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content class="ageSelectPage-container">\n\n    <div class="mapSelectAge">\n\n      <p>Select your age!</p>\n      <button (click)="setAge(1)">3 - 6</button>\n      <button (click)="setAge(2)">7 - 9</button>\n      <button (click)="setAge(3)"> + 10</button>\n\n    </div>\n    \n</ion-content>'/*ion-inline-end:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/age-select/age-select.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_geoloc_service_geoloc_service__["a" /* GeolocServiceProvider */]])
    ], AgeSelectPage);
    return AgeSelectPage;
}());

//# sourceMappingURL=age-select.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAddressesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MyAddressesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyAddressesPage = /** @class */ (function () {
    function MyAddressesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyAddressesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyAddressesPage');
    };
    MyAddressesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-addresses',template:/*ion-inline-start:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/my-addresses/my-addresses.html"*/'<ion-header>\n    <ion-navbar color="customColor">\n      <ion-title text-center>Your addresses</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content class="addressesPage-container">\n\n  <div class="map-sample">\n    <img src="assets/graphicMat/map_sample.png" alt="" />\n  </div>\n\n  <div class="address-list-container">\n    <h5></h5>\n    <div class="address-item">\n      <h6></h6>\n    </div>\n    <img src="assets/graphicMat/haunted_house.png" alt="" />\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/my-addresses/my-addresses.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MyAddressesPage);
    return MyAddressesPage;
}());

//# sourceMappingURL=my-addresses.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandyDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_candy_api_service_candy_api_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_keyvalue_keyvalue__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_remove_underscore_remove_underscore__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_remove_chars_remove_chars__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






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
    CandyDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-candy-details',template:/*ion-inline-start:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/candy-details/candy-details.html"*/'<ion-header>\n  <ion-navbar color="customColor">\n    <ion-title text-center class="mainTitles">Candy Infos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="candyDetailsPage-container">\n  <div class="candyDetailsPage" *ngIf="candyItem">\n\n      <div class="candyItemTitle">\n        <div class="candyThumbnail">\n          <img src="{{candyItem.image_front_url}}">\n        </div>\n        <div>\n          <h1>{{ candyItem.product_name | shortenString:30 }}</h1>\n        </div> \n      </div>\n\n      <div class="candy-checklist row">\n        <ul class="col">\n          <li class="row">\n            <div *ngIf="organic;else elseblock"><img [src]=iconTrue /></div>\n            <ng-template #elseblock><img [src]=iconFalse /></ng-template>\n            Organic\n          </li>\n          <li class="row">\n          <div *ngIf="additives;else elseblock"><img [src]=iconTrue /></div>\n          <ng-template #elseblock><img [src]=iconFalse /></ng-template>\n          Additives</li>\n<!--           <li class="row">\n          <div *ngIf="preservatives;else elseblock"><img [src]=iconTrue /></div>\n          <ng-template #elseblock><img [src]=iconFalse /></ng-template>\n          Preservatives</li> -->\n        </ul> \n        <ul class="col">\n          <li class="row">\n          <div *ngIf="glutenFree;else elseblock"><img [src]=iconTrue /></div>\n          <ng-template #elseblock><img [src]=iconFalse /></ng-template>\n          Gluten free</li>\n          <li class="row">\n          <div *ngIf="vegan;else elseblock"><img [src]=iconTrue /></div>\n          <ng-template #elseblock><img [src]=iconFalse /></ng-template>\n          Vegan</li>\n          <li class="row">\n          <div *ngIf="vegetarian;else elseblock"><img [src]=iconTrue /></div>\n          <ng-template #elseblock><img [src]=iconFalse /></ng-template>\n          Vegetarian</li>\n        </ul> \n      </div>\n      <div class="rubrik">\n        <h1 (click)="toggleIngredients()">Ingredients hierarchy<span class="arrowIcon"></span></h1>\n        <div class="candyIngredients" *ngIf="showIngredients">\n          <table>\n            <tr *ngFor="let i of candyItem.ingredients_tags">\n              <td>\n                {{ i | removeChars | removeUnderscore }}\n              </td>\n            </tr>\n          </table>\n        </div>\n      </div>\n\n      <div class="rubrik">\n        <h1 (click)="toggleNutriscore()">Nutriscore</h1>\n        <div class="candyNutriscore" *ngIf="showNutriscore">\n          <table>\n            <tr *ngFor="let i of candyItem.nutriscore_data | keyvalue">\n              <td>\n                {{ i.key | removeUnderscore }}\n              </td>\n              <td>\n                {{ i.value }}\n              </td>\n            </tr>\n          </table>\n        </div>\n      </div>\n      \n      <div class="rubrik">\n        <h1 (click)="toggleAllergens()">Allergens</h1>\n        <div class="candyAllergens" *ngIf="showAllergens">\n          <table>\n            <tr *ngFor="let i of candyItem.allergens_hierarchy">\n              <td>\n                {{ i | removeChars }}\n              </td>\n            </tr>\n          </table>\n        </div>\n      </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/candy-details/candy-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_candy_api_service_candy_api_service__["a" /* CandyAPIService */],
            __WEBPACK_IMPORTED_MODULE_3__pipes_keyvalue_keyvalue__["a" /* KeyvaluePipe */],
            __WEBPACK_IMPORTED_MODULE_4__pipes_remove_underscore_remove_underscore__["a" /* RemoveUnderscorePipe */],
            __WEBPACK_IMPORTED_MODULE_5__pipes_remove_chars_remove_chars__["a" /* RemoveCharsPipe */]])
    ], CandyDetailsPage);
    return CandyDetailsPage;
}());

//# sourceMappingURL=candy-details.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LegalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LegalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LegalPage = /** @class */ (function () {
    function LegalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LegalPage.prototype.ionViewDidLoad = function () {
    };
    LegalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-legal',template:/*ion-inline-start:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/legal/legal.html"*/'<!--\n  Generated template for the LegalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>legal</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/legal/legal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LegalPage);
    return LegalPage;
}());

//# sourceMappingURL=legal.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_candy_api_service_candy_api_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_backpack_service_backpack_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_cards_my_cards__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_level_service_level_service__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






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
    LevelPage.prototype.ngOnInit = function () { this.setLevel(); };
    LevelPage.prototype.ionViewDidEnter = function () { };
    LevelPage.prototype.setLevel = function () {
        var _this = this;
        // console.log('candy total: ' + this.totalCandy);
        this.levelService.currentLevel.subscribe(function (data) { _this.level.levelName = data; console.log(_this.level.levelName); });
    };
    LevelPage.prototype.goToMyCards = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__my_cards_my_cards__["a" /* MyCardsPage */]);
    };
    LevelPage.prototype.ionViewDidLeave = function () { };
    LevelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-level',template:/*ion-inline-start:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/level/level.html"*/'<ion-header>\n  <ion-navbar color="customColor">\n    <ion-title text-center>Your level</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="levelPage-container">\n\n  <div class="levelElements">\n    <!-- <div>\n        <p>you have {{ totalPoints }} points</p> \n    </div> -->\n    <div class="levelNumber">\n      <h2><span>{{level.levelName}}</span></h2>\n    </div>\n\n    <div class="ribbon">\n      <img src="{{ level.bannerMessage }}" alt="" />\n    </div>\n\n    <div class="levelImage">\n      <img src="{{ level.levelImg }}" alt="" />\n    </div>\n  </div>\n\n  <div class="level-bottom-elements">\n    <div class="level-bubble">\n      <h2>Next mission:<br>Get the <span>{{ nextLevel.levelCardName }} !</span></h2>\n    </div>\n    <div class="next-level-card">\n      <img src="{{ nextLevel.levelCard}}" alt="" />\n    </div>\n  </div>\n  <button (click)="goToMyCards()">see my cards</button>\n\n</ion-content>'/*ion-inline-end:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/level/level.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_candy_api_service_candy_api_service__["a" /* CandyAPIService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_backpack_service_backpack_service__["a" /* BackpackServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_level_service_level_service__["a" /* LevelService */]])
    ], LevelPage);
    return LevelPage;
}());

//# sourceMappingURL=level.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyCardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_level_api_service_level_api_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_backpack_service_backpack_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
    MyCardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-cards',template:/*ion-inline-start:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/my-cards/my-cards.html"*/'<ion-header>\n  <ion-navbar color="customColor">\n    <ion-title text-center>Your cards</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="myCardsPage-container">\n\n</ion-content>\n'/*ion-inline-end:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/my-cards/my-cards.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_backpack_service_backpack_service__["a" /* BackpackServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_level_api_service_level_api_service__["a" /* LevelServiceProvider */]])
    ], MyCardsPage);
    return MyCardsPage;
}());

//# sourceMappingURL=my-cards.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/login/login.html"*/'<ion-header>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rules_rules__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__legal_legal__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__age_select_age_select__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* ListPage */]);
    };
    MyHomePage.prototype.goToStart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__age_select_age_select__["a" /* AgeSelectPage */]);
    };
    MyHomePage.prototype.goToRules = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__rules_rules__["a" /* RulesPage */]);
    };
    MyHomePage.prototype.goToLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    MyHomePage.prototype.goToLegal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__legal_legal__["a" /* LegalPage */]);
    };
    MyHomePage.prototype.goToAbout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__about_about__["a" /* AboutPage */]);
    };
    MyHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-home',template:/*ion-inline-start:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/my-home/my-home.html"*/'<ion-header>\n  <ion-navbar color="customColor">\n    <ion-title text-center class="mainTitles">Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="homepage-container card-background-page">\n\n  <div class="menu-container">\n\n    <ion-row>\n      <ion-col>\n        <img src="assets/graphicMat/menu_rules.png" alt="menu-rules" (click)="goToRules()" />\n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <img src="assets/graphicMat/menu_play.png" alt="menu-login" (click)="goToStart()" />\n      </ion-col>\n      <ion-col>\n        <img src="assets/graphicMat/menu_login.png" alt="menu-login" (click)="goToLogin()" />\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col>\n        <img src="assets/graphicMat/menu_about.png" alt="menu-about" (click)="goToAbout()"/>\n      </ion-col>      \n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <img src="assets/graphicMat/menu_legal.png" alt="menu-legal" (click)="goToLegal()"/>\n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n\n  </div>\n</ion-content>\n\n<!--     <ion-fab>\n      <button ion-fab><img src="assets/graphicmat/zoomIn.png" alt="plus-button" /></button>\n    </ion-fab> -->\n\n<!-- test ion fab button -->\n  <!--  <ion-fab bottom right>\n      <button ion-fab>Share</button>\n      <ion-fab-list side="top">\n        <button ion-fab>Facebook</button>\n        <button ion-fab>Twitter</button>\n        <button ion-fab>Youtube</button>\n      </ion-fab-list>\n      <ion-fab-list side="left">\n        <button ion-fab>Vimeo</button>\n      </ion-fab-list>\n    </ion-fab> -->'/*ion-inline-end:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/my-home/my-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MyHomePage);
    return MyHomePage;
}());

//# sourceMappingURL=my-home.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RulesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RulesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RulesPage = /** @class */ (function () {
    function RulesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RulesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RulesPage');
    };
    RulesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rules',template:/*ion-inline-start:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/rules/rules.html"*/'<ion-header>\n  <ion-navbar color="customColor">\n    <ion-title>rules</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/rules/rules.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RulesPage);
    return RulesPage;
}());

//# sourceMappingURL=rules.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_geoloc_service_geoloc_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_candy_api_service_candy_api_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, navParams, geolocService, candyService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocService = geolocService;
        this.candyService = candyService;
        this.batsBg = "assets/graphicMat/gradient_bats.png";
        this.img_candyTitle = "assets/graphicMat/title_candy.png";
        this.img_chaseTitle = "assets/graphicMat/title_chase.png";
        this.img_circles = "assets/graphicMat/circles.png";
    }
    WelcomePage.prototype.ionViewWillEnter = function () {
        // get coords as soon as app opens
        this.geolocService.getLocation();
        // get candylist as 'hot observable' and cache response
        this.candyList$ = this.candyService.candy;
        if (this.candyList$) {
            console.log(this.candyList$);
        }
        ;
    };
    WelcomePage.prototype.start = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/welcome/welcome.html"*/'<ion-header>\n</ion-header>\n\n<ion-content class="homepage-container">\n\n    <div class="titles-container">\n      <img [src]="img_candyTitle" class="candyTitle" alt="candy title" />\n      <p>chase !</p>\n    </div>\n\n    <div>\n      <div class="startButton" (click)="start()">\n        <p>start!</p>\n      </div>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_geoloc_service_geoloc_service__["a" /* GeolocServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_candy_api_service_candy_api_service__["a" /* CandyAPIService */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 185;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		703,
		10
	],
	"../pages/age-select/age-select.module": [
		704,
		9
	],
	"../pages/candy-details/candy-details.module": [
		705,
		8
	],
	"../pages/legal/legal.module": [
		706,
		7
	],
	"../pages/level/level.module": [
		707,
		6
	],
	"../pages/login/login.module": [
		708,
		5
	],
	"../pages/my-addresses/my-addresses.module": [
		709,
		4
	],
	"../pages/my-cards/my-cards.module": [
		710,
		3
	],
	"../pages/my-home/my-home.module": [
		711,
		2
	],
	"../pages/rules/rules.module": [
		712,
		1
	],
	"../pages/welcome/welcome.module": [
		713,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 231;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__level_api_service_level_api_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__backpack_service_backpack_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LevelService = /** @class */ (function () {
    function LevelService(http, backpackService, levelProvider) {
        this.http = http;
        this.backpackService = backpackService;
        this.levelProvider = levelProvider;
        // keep track of current level name --  
        this.levelName$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]("1");
        this.currentLevel = this.levelName$.asObservable();
    }
    // keep track of current level --> whole object
    // public level$: BehaviorSubject<Level> = new BehaviorSubject(this.level);
    // currentLevel = this.level$.asObservable();
    // method for components to update current level (besides regular count)
    LevelService.prototype.update_level = function (levelName) {
        this.levelName$.next(levelName);
    };
    LevelService.prototype.retriveLevelList = function () {
        var _this = this;
        this.levelProvider.getLevelList().subscribe(function (response) {
            _this.myArrayOfLevels = response;
        });
    };
    LevelService.prototype.retrieveCurrentTotalPoints = function () {
        var _this = this;
        this.totalPoints$ = this.backpackService.currentBackpackCount.subscribe(function (data) { _this.totalPoints = data; });
        console.log('TOTAL POINTS RETRIEVED: ', this.totalPoints);
    };
    LevelService.prototype.setCurrentLevel = function (totalPoints) {
        if (totalPoints <= 7) {
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
        // this.update_level(this.level);
        this.update_level(this.levelName);
    };
    LevelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__backpack_service_backpack_service__["a" /* BackpackServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__level_api_service_level_api_service__["a" /* LevelServiceProvider */]])
    ], LevelService);
    return LevelService;
}());

//# sourceMappingURL=level.service.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__backpack_backpack__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__level_level__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_home_my_home__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = /** @class */ (function () {
    function TabsPage(events, detectorRef) {
        this.events = events;
        this.detectorRef = detectorRef;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__list_list__["a" /* ListPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* MapPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__backpack_backpack__["a" /* BackpackPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__level_level__["a" /* LevelPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_6__my_home_my_home__["a" /* MyHomePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab5Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab1Root" tabTitle="List" tabIcon="paper"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Map" tabIcon="map"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Backpack" tabIcon="paper"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Level" tabIcon="star"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackpackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_candy_api_service_candy_api_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__candy_details_candy_details__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_backpack_service_backpack_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_keyvalue_keyvalue__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_shorten_string_shorten_string__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__candy_details_candy_details__["a" /* CandyDetailsPage */], { idparam: id });
    };
    BackpackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-backpack',template:/*ion-inline-start:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/backpack/backpack.html"*/'<ion-header>\n  <ion-navbar color="customColor">\n    <ion-title text-center class="mainTitles">Backpack</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="backpackPage-container">\n\n  <div class="backpack-elements-container" *ngIf="collectedCandy">\n    <div class="bag-illust">\n      <img src="assets/graphicMat/candyBag.png" alt="" />\n    </div>\n\n    <div class="totalcandy">\n      <h2>Total candy</h2>\n      <h2>{{totalCandy}}</h2>\n    </div>\n\n    <div class="cornCandy-container">\n      <ng-container *ngFor="let i of [].constructor(3)">\n        <img src="assets/graphicMat/corn_candy.png" alt="" />\n      </ng-container>\n    </div>\n\n    <div class="totalpoints">\n      <h2>You have</h2>\n      <h2>{{totalCandy}} points !</h2>\n    </div>\n\n<!-- TO DO : get level (banner) at init --\n      <div class="current-level">\n          <h2>Current level</h2>\n          <h2>{{levelName}}</h2>\n      </div> -->\n\n    <div class="myCollectedCandy" *ngFor="let item of collectedCandy">\n      <div class="candyItem">\n        <div class="candyThumbnail">\n          <img src="{{item.image_front_url}}">\n        </div>\n        <div class="candyName">\n          <!-- <h2>{{data.brands_tags[1]}}</h2> -->\n          <h1>{{ item.product_name | shortenString:30 }}</h1>\n          <button (click)="seeCandyInfos(item._id)">see infos</button>\n        </div>\n        <div class="amount">\n          <h1>{{item.amountInBackpack}}</h1>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/backpack/backpack.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_candy_api_service_candy_api_service__["a" /* CandyAPIService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_backpack_service_backpack_service__["a" /* BackpackServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__pipes_keyvalue_keyvalue__["a" /* KeyvaluePipe */],
            __WEBPACK_IMPORTED_MODULE_6__pipes_shorten_string_shorten_string__["a" /* ShortenStringPipe */]])
    ], BackpackPage);
    return BackpackPage;
}());

//# sourceMappingURL=backpack.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys_keys__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keyvalue_keyvalue__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__remove_underscore_remove_underscore__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shorten_string_shorten_string__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__remove_chars_remove_chars__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__keys_keys__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_2__keyvalue_keyvalue__["a" /* KeyvaluePipe */],
                __WEBPACK_IMPORTED_MODULE_3__remove_underscore_remove_underscore__["a" /* RemoveUnderscorePipe */],
                __WEBPACK_IMPORTED_MODULE_3__remove_underscore_remove_underscore__["a" /* RemoveUnderscorePipe */],
                __WEBPACK_IMPORTED_MODULE_4__shorten_string_shorten_string__["a" /* ShortenStringPipe */],
                __WEBPACK_IMPORTED_MODULE_5__remove_chars_remove_chars__["a" /* RemoveCharsPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__keys_keys__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_2__keyvalue_keyvalue__["a" /* KeyvaluePipe */],
                __WEBPACK_IMPORTED_MODULE_3__remove_underscore_remove_underscore__["a" /* RemoveUnderscorePipe */],
                __WEBPACK_IMPORTED_MODULE_3__remove_underscore_remove_underscore__["a" /* RemoveUnderscorePipe */],
                __WEBPACK_IMPORTED_MODULE_4__shorten_string_shorten_string__["a" /* ShortenStringPipe */],
                __WEBPACK_IMPORTED_MODULE_5__remove_chars_remove_chars__["a" /* RemoveCharsPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(376);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_geoloc_service_geoloc_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_candy_api_service_candy_api_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_level_api_service_level_api_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_backpack_service_backpack_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_map_service_map_service__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_level_service_level_service__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_storage_service_browserStorage_service__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_error_service_error_service__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipes_pipes_module__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_keyvalue_keyvalue__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pipes_remove_underscore_remove_underscore__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_shorten_string_shorten_string__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_remove_chars_remove_chars__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_welcome_welcome__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_login_login__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_my_home_my_home__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_map_map__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_list_list__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_backpack_backpack__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_level_level__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_candy_details_candy_details__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_my_addresses_my_addresses__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_my_cards_my_cards__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_rules_rules__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_legal_legal__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_about_about__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_age_select_age_select__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// DEPENDENCIES ***********************************************************************************












// SERVICES ***************************************************************************************







// PIPES *******************************************************************************************





// PAGES *******************************************************************************************










// STATIC PAGES **************************************************************************************




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_backpack_backpack__["a" /* BackpackPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_my_home_my_home__["a" /* MyHomePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_level_level__["a" /* LevelPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_candy_details_candy_details__["a" /* CandyDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_rules_rules__["a" /* RulesPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_legal_legal__["a" /* LegalPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_my_addresses_my_addresses__["a" /* MyAddressesPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_age_select_age_select__["a" /* AgeSelectPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_my_cards_my_cards__["a" /* MyCardsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_19__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/age-select/age-select.module#AgeSelectPageModule', name: 'AgeSelectPage', segment: 'age-select', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/candy-details/candy-details.module#CandyDetailsPageModule', name: 'CandyDetailsPage', segment: 'candy-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/legal/legal.module#LegalPageModule', name: 'LegalPage', segment: 'legal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/level/level.module#LevelPageModule', name: 'LevelPage', segment: 'level', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-addresses/my-addresses.module#MyAddressesPageModule', name: 'MyAddressesPage', segment: 'my-addresses', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-cards/my-cards.module#MyCardsPageModule', name: 'MyCardsPage', segment: 'my-cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-home/my-home.module#MyHomePageModule', name: 'MyHomePage', segment: 'my-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rules/rules.module#RulesPageModule', name: 'RulesPage', segment: 'rules', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_25__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_backpack_backpack__["a" /* BackpackPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_rules_rules__["a" /* RulesPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_legal_legal__["a" /* LegalPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_my_addresses_my_addresses__["a" /* MyAddressesPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_my_home_my_home__["a" /* MyHomePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_level_level__["a" /* LevelPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_candy_details_candy_details__["a" /* CandyDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_age_select_age_select__["a" /* AgeSelectPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_my_cards_my_cards__["a" /* MyCardsPage */]
            ],
            providers: [
                /*     AngularFireAuth, */
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
                // Diagnostic,
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_candy_api_service_candy_api_service__["a" /* CandyAPIService */],
                __WEBPACK_IMPORTED_MODULE_8__providers_geoloc_service_geoloc_service__["a" /* GeolocServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_level_api_service_level_api_service__["a" /* LevelServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_backpack_service_backpack_service__["a" /* BackpackServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_20__pipes_keyvalue_keyvalue__["a" /* KeyvaluePipe */],
                __WEBPACK_IMPORTED_MODULE_21__pipes_remove_underscore_remove_underscore__["a" /* RemoveUnderscorePipe */],
                __WEBPACK_IMPORTED_MODULE_22__pipes_shorten_string_shorten_string__["a" /* ShortenStringPipe */],
                __WEBPACK_IMPORTED_MODULE_23__pipes_remove_chars_remove_chars__["a" /* RemoveCharsPipe */],
                __WEBPACK_IMPORTED_MODULE_15__providers_map_service_map_service__["a" /* MapServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_level_service_level_service__["a" /* LevelService */],
                __WEBPACK_IMPORTED_MODULE_17__providers_storage_service_browserStorage_service__["a" /* BrowserStorageService */],
                __WEBPACK_IMPORTED_MODULE_18__providers_error_service_error_service__["a" /* ErrorServiceProvider */]
                // { provide: BROWSER_STORAGE, {} etc  } => ? 
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_20__pipes_keyvalue_keyvalue__["a" /* KeyvaluePipe */],
                __WEBPACK_IMPORTED_MODULE_21__pipes_remove_underscore_remove_underscore__["a" /* RemoveUnderscorePipe */],
                __WEBPACK_IMPORTED_MODULE_22__pipes_shorten_string_shorten_string__["a" /* ShortenStringPipe */],
                __WEBPACK_IMPORTED_MODULE_23__pipes_remove_chars_remove_chars__["a" /* RemoveCharsPipe */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menu) {
        this.menu = menu;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackpackServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__level_api_service_level_api_service__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BackpackServiceProvider = /** @class */ (function () {
    // ---
    function BackpackServiceProvider(http, levelService) {
        this.http = http;
        this.levelService = levelService;
        // keep track of backpack state --
        this.backpack$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
        this.currentBackpack = this.backpack$.asObservable();
        // keep track of candy total --  
        this.totalCandyInBackpack$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](0);
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
    BackpackServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__level_api_service_level_api_service__["a" /* LevelServiceProvider */]])
    ], BackpackServiceProvider);
    return BackpackServiceProvider;
}());

// TODO : + backend => create new backpack for each user 
//# sourceMappingURL=backpack-service.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandyAPIService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__backpack_service_backpack_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
                this.cache$ = this.getAllCandyFromApi().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["shareReplay"])(CACHE_SIZE));
            }
            return this.cache$;
        },
        enumerable: true,
        configurable: true
    });
    // get all candy list from api, max 50 results  | => TO DO : clean up doublons in list
    CandyAPIService.prototype.getAllCandyFromApi = function () {
        return this.httpService.get("https://world.openfoodfacts.org/cgi/search.pl?search_terms=bonbon&search_simple=1&action=process&json=1&page_size=50")
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (response) {
            var result = response.json().products; // '.products' => for object from api contains 2 other main fields!
            console.log(result);
            return result;
        }));
    };
    // get candy by id from api
    CandyAPIService.prototype.getCandyById = function (candyId) {
        return this.httpService.get("https://world.openfoodfacts.org/api/v0/product/" + candyId + ".json").pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (response) {
            var result = response.json().product;
            // console.log(result);
            return result;
        }));
    };
    CandyAPIService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__backpack_service_backpack_service__["a" /* BackpackServiceProvider */]])
    ], CandyAPIService);
    return CandyAPIService;
}());

//# sourceMappingURL=candy-api.service.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeolocServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { BehaviorSubject } from 'rxjs';
var GeolocServiceProvider = /** @class */ (function () {
    function GeolocServiceProvider(geolocation) {
        this.geolocation = geolocation;
        this.markerIcon = {
            icon: __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.icon({
                iconSize: [25, 41],
                iconAnchor: [10, 41],
                popupAnchor: [2, -40],
                // specify the path here
                iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
                shadowUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png"
            })
        };
        this.currentLat = 0;
        this.currentLong = 0;
        this.dist = 0;
        this.mybounds = [];
    }
    // access/modify current coords  
    GeolocServiceProvider.prototype.setGeo = function (geoloc) {
        this.geo = geoloc;
    };
    GeolocServiceProvider.prototype.getGeo = function () {
        return this.geo;
    };
    // access /modify current user's age
    GeolocServiceProvider.prototype.setCurrentAgeRange = function (age) {
        this.currentUserAgeRange = age;
    };
    GeolocServiceProvider.prototype.getCurrentAgeRange = function () {
        return this.currentUserAgeRange;
    };
    // get current location
    GeolocServiceProvider.prototype.getLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (res) {
            _this.setGeo(res);
            _this.currentLat = res.coords.latitude;
            _this.currentLong = res.coords.longitude;
            console.log('get loc, current coords = : ' + _this.currentLat, _this.currentLong);
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    GeolocServiceProvider.prototype.watchPosition = function () {
        this.geolocation.watchPosition();
    };
    // get distance from age param
    GeolocServiceProvider.prototype.getDist = function (ageRange) {
        this.currentUserAgeRange = ageRange;
        console.log("Age: ", this.currentUserAgeRange);
        if (this.currentUserAgeRange === 1) {
            this.dist = 300;
        }
        else {
            if (this.currentUserAgeRange === 2) {
                this.dist = 500;
            }
            else {
                this.dist = 800;
            }
        }
        return this.dist;
    };
    // calculate new coords for map age filter, using current coords and distance 'dist'
    // we need 4 points to delimit a perimeter of x meters around current position :
    // current pos(lat + distance , long + distance), pos(lat - distance, long - distance)
    GeolocServiceProvider.prototype.newCoords = function (dist) {
        var r_earth = 6378;
        this.dist = dist;
        console.log("CURRENT: ", this.currentLong, this.currentLat);
        var m = (1 / ((2 * Math.PI / 360) * r_earth)) / 1000; //1 meter in degree
        var new_latitude1 = this.currentLat + (this.dist * m);
        var new_longitude1 = this.currentLong + (this.dist * m) / Math.cos(this.currentLat * (Math.PI / 180));
        console.log("new point 1 : ", new_latitude1, new_longitude1);
        var new_latitude2 = this.currentLat - (this.dist * m);
        var new_longitude2 = this.currentLong - (this.dist * m) / Math.cos(this.currentLat * (Math.PI / 180));
        this.mybounds = [new_latitude1, new_longitude1, new_latitude2, new_longitude2];
        console.log('BOUNDS= ', this.mybounds);
        return this.mybounds;
    };
    // load map using new coords to display map portion with 'set bounds' 
    GeolocServiceProvider.prototype.loadmap = function () {
        var _this = this;
        console.log('BOUNDS AT LOAD MAP = ', this.mybounds);
        var corner1 = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.latLng(this.mybounds[0], this.mybounds[1]), corner2 = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.latLng(this.mybounds[2], this.mybounds[3]), bounds = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.latLngBounds(corner1, corner2);
        // initialize Leaflet
        this.map = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.map("map");
        // add the OpenStreetMap tiles
        __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attributions: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
        this.map.locate({
            setView: true,
            maxZoom: 18
        })
            .on('locationfound', function (e) {
            var markerGroup = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.featureGroup();
            var marker = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([e.latitude, e.longitude], _this.markerIcon).on('click', function () {
                alert('Marker clicked');
            });
            markerGroup.addLayer(marker);
            _this.map.addLayer(markerGroup);
        })
            .on('locationerror', function (err) {
            alert(err.message);
        });
        //show the scale bar on the lower left corner
        __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.control.scale().addTo(this.map);
        // add bounds from age-range select and fit map to bounds
        this.addBounds(bounds);
        // add marker to the map + pop up text
        //leaflet.marker({lon: 0, lat: 0}).bindPopup('The center of the world').addTo(this.map);
    };
    // add bounds around current position on map
    GeolocServiceProvider.prototype.addBounds = function (bounds) {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (res) {
            __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.rectangle(bounds, { color: "#00000", weight: 1 })
                .addTo(_this.map);
            _this.map.fitBounds(bounds);
        }).catch(function (error) {
            console.log('Error getting bounds', error);
        });
    };
    // additional tools for map -- 
    GeolocServiceProvider.prototype.setMarker = function () {
        // custom marker
        var myIcon = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.icon({
            iconUrl: 'my-icon.png',
            iconSize: [38, 95],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76],
            shadowUrl: 'my-icon-shadow.png',
            shadowSize: [68, 95],
            shadowAnchor: [22, 94]
        });
        var markerGroup = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.featureGroup();
        var marker = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([this.geo.coords.latitude, this.geo.coords.longitude]);
        markerGroup.addLayer(marker);
        this.map.addLayer(markerGroup);
    };
    // add 50m radius around current position on map
    GeolocServiceProvider.prototype.addCircle = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (res) {
            __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.circle([res.coords.latitude, res.coords.longitude], {
                color: 'green',
                fillColor: '#7CFC00',
                fillOpacity: 0.2,
                radius: 50
            }).addTo(_this.map);
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    // trace path on the map while questing
    GeolocServiceProvider.prototype.tracePath = function () {
        // create a red polyline from an array of LatLng points
        var latlngs = [
            [45.51, -122.68],
            [37.77, -122.43],
            [34.04, -118.2]
        ];
        var polyline = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.polyline(latlngs, { color: 'red' }).addTo(this.map);
        // zoom the map to the polyline
        this.map.fitBounds(polyline.getBounds());
    };
    GeolocServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */]])
    ], GeolocServiceProvider);
    return GeolocServiceProvider;
}());

// this.new_latitude1  = this.currentLat  + (this.dist / r_earth) * (180 / Math.PI);
// this.new_longitude1 = this.currentLong + (this.dist / r_earth) * (180 / Math.PI) / Math.cos(this.currentLat * Math.PI/180);
//# sourceMappingURL=geoloc.service.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    //Takes a value and makes it lowercase
    KeysPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.toLowerCase();
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'keys',
        })
    ], KeysPipe);
    return KeysPipe;
}());

//# sourceMappingURL=keys.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapServiceProvider = /** @class */ (function () {
    function MapServiceProvider(http) {
        this.http = http;
    }
    MapServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], MapServiceProvider);
    return MapServiceProvider;
}());

//# sourceMappingURL=map-service.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BROWSER_STORAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


// * https://angular.io/guide/dependency-injection-in-action#supply-a-custom-provider-with-inject
// There are times when the dependency we define is either a primitive, object, or function. 
// In such a scenario, the class token cannot be used as there is no class. 
// Angular solves this problem using InjectionToken 
var BROWSER_STORAGE = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* InjectionToken */]('Browser Storage');
// factory: () => localStorage ;
// The factory function returns the localStorage property that is 
// attached to the browser window object.
// original syntax ( issue ): 
/* export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage
}); */
var BrowserStorageService = /** @class */ (function () {
    function BrowserStorageService(storage, http) {
        this.storage = storage;
        this.http = http;
    }
    // The Inject decorator is a constructor parameter used to specify a custom provider 
    // of a dependency. This custom provider can now be overridden during testing 
    // with a mock API of localStorage instead of interacting with real browser APIs.
    BrowserStorageService.prototype.get = function (key) {
        this.storage.getItem(key);
    };
    BrowserStorageService.prototype.set = function (key, value) {
        this.storage.setItem(key, value);
    };
    BrowserStorageService.prototype.remove = function (key) {
        this.storage.removeItem(key);
    };
    BrowserStorageService.prototype.clear = function () {
        this.storage.clear();
    };
    BrowserStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])(BROWSER_STORAGE)),
        __metadata("design:paramtypes", [Storage, __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], BrowserStorageService);
    return BrowserStorageService;
}());

//# sourceMappingURL=browserStorage-service.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// @ USE
// Logic for parsing error messages and stack traces from the server and client
var ErrorServiceProvider = /** @class */ (function () {
    function ErrorServiceProvider(http) {
        this.http = http;
    }
    ErrorServiceProvider.prototype.getClientMessage = function (error) {
        if (!navigator.onLine) {
            return 'No Internet Connection';
        }
        return error.message ? error.message : error.toString();
    };
    ErrorServiceProvider.prototype.getClientStack = function (error) {
        return error.stack;
    };
    ErrorServiceProvider.prototype.getServerMessage = function (error) {
        return error.message;
    };
    ErrorServiceProvider.prototype.getServerStack = function (error) {
        // handle stack trace
        return 'stack';
    };
    ErrorServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ErrorServiceProvider);
    return ErrorServiceProvider;
}());

//# sourceMappingURL=error.service.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (response) {
            var result = response.json();
            //console.log("je suis levellist 0", result[0]);
            return result;
        }));
    };
    // retrieve models of level objects by id in json from local folder
    LevelServiceProvider.prototype.getLevelById = function (idLevel) {
    };
    LevelServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], LevelServiceProvider);
    return LevelServiceProvider;
}());

//# sourceMappingURL=level-api.service.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyvaluePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeyvaluePipe = /** @class */ (function () {
    function KeyvaluePipe() {
    }
    KeyvaluePipe.prototype.transform = function (object) {
        var a = [];
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                a.push({ key: key, value: object[key] });
            }
        }
        console.log("je suis keyvalue pipe object: ", a);
        return a;
    };
    KeyvaluePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'keyvalue',
            pure: true
            // https://www.bennadel.com/blog/3325-understanding-pipe-instantiation-life-cycles-in-angular-4-2-3.htm
        })
    ], KeyvaluePipe);
    return KeyvaluePipe;
}());

//# sourceMappingURL=keyvalue.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortenStringPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ShortenStringPipe = /** @class */ (function () {
    function ShortenStringPipe() {
    }
    ShortenStringPipe.prototype.transform = function (value, maxChars) {
        var lastEmptyIndex = null;
        if (value.length > maxChars) {
            if (value.charAt(maxChars - 1) != ' ') {
                for (var i = maxChars - 1; i >= 0; i--) {
                    if (value[i] == ' ') {
                        lastEmptyIndex = i;
                        break;
                    }
                    else {
                        lastEmptyIndex = lastEmptyIndex;
                    }
                }
            }
            else {
                lastEmptyIndex = value[maxChars];
            }
            return value.substring(0, lastEmptyIndex);
        }
        else {
            return value;
        }
    };
    ShortenStringPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'shortenString',
        })
    ], ShortenStringPipe);
    return ShortenStringPipe;
}());

//# sourceMappingURL=shorten-string.js.map

/***/ })

},[371]);
//# sourceMappingURL=main.js.map