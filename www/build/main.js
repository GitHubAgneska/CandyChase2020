webpackJsonp([10],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_geoloc_service_geoloc_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_addresses_my_addresses__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapPage = (function () {
    function MapPage(navCtrl, geolocService, geolocation) {
        this.navCtrl = navCtrl;
        this.geolocService = geolocService;
        this.geolocation = geolocation;
    }
    MapPage.prototype.ngOnInit = function () {
        // this.currentUserAgeRange = this.geolocService.getCurrentAgeRange();
        // console.log(this.currentUserAgeRange);
        this.geolocService.loadmap();
    };
    MapPage.prototype.ionViewDidEnter = function () {
        // console.log("ENTERED");
    };
    MapPage.prototype.ionViewDidLoad = function () {
        // console.log("LOADED");
        this.geo = this.geolocService.getGeo();
        console.log(this.geo);
        if (this.geo != undefined) {
            this.geolocService.setMarker();
        }
        this.geolocService.getLocation();
        // this.newCoords(500);
    };
    MapPage.prototype.addCircle = function () {
        this.geolocService.addCircle();
        // this.geolocService.addBoundaries();
    };
    MapPage.prototype.myAddresses = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__my_addresses_my_addresses__["a" /* MyAddressesPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapPage.prototype, "mapContainer", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/map/map.html"*/'<ion-header>\n  <ion-navbar color="customColor">\n    <ion-title text-center class="mainTitles">\n      Map\n    </ion-title>\n    <ion-buttons end> \n      <button ion-button icon-only color="primary" (click)="addCircle()">\n        <ion-icon name="md-locate"></ion-icon>\n      </button>\n    <button ion-button icon-only color="primary" (click)="myAddresses()"><ion-icon name="md-globe"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="mapPage-container">\n \n  <div class="mapContainer">\n    <div id="map"></div>\n  </div>\n<!--    <div class="mapSelectAge">\n    <p>Select your age!</p>\n    <button (click)="selectArea1()">3 - 6</button>\n    <button (click)="selectArea2()">7 - 9</button>\n    <button (click)="selectArea3()"> + 10</button>\n  </div> -->\n</ion-content>\n\n'/*ion-inline-end:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/map/map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_geoloc_service_geoloc_service__["a" /* GeolocServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 138:
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

var RemoveUnderscorePipe = (function () {
    function RemoveUnderscorePipe() {
    }
    RemoveUnderscorePipe.prototype.transform = function (value) {
        if (value) {
            return value = value.toString().replace('_', ' ');
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

/***/ 139:
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

var RemoveCharsPipe = (function () {
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

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_candy_api_service_candy_api_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_backpack_service_backpack_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_geoloc_service_geoloc_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_shorten_string_shorten_string__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ListPage = (function () {
    function ListPage(toast, candyService, backpackService, geolocation, geolocService, shortenString) {
        this.toast = toast;
        this.candyService = candyService;
        this.backpackService = backpackService;
        this.geolocation = geolocation;
        this.geolocService = geolocService;
        this.shortenString = shortenString;
        this.candyList = [];
        this.candyItem = {
            _id: "", product_name: "", amountInBackpack: 0,
            image_front_url: "", brands_tags: [], ingredients_tags: [],
            nutriscore_data: [], additive_tags: []
        };
        this.itemsInBackpack = [];
        this.totalCandy = 0;
    }
    ListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.candyService.getAllCandyFromApi()
            .subscribe(function (response) {
            _this.candyList = response;
            // console.log(this.candyList);
        });
    };
    ListPage.prototype.addCandyToBackpack = function (candyItem) {
        var _this = this;
        this.backpackService.currentBackpackCount.subscribe(function (data) { return _this.totalCandy = data; });
        // alert new points as user clicks '+' 
        this.toast.create({
            message: "+1 Point! " + name,
            duration: 300,
            position: "middle",
            cssClass: "custom-toast"
        }).present();
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
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/list/list.html"*/'\n<ion-header>\n  <ion-navbar color="customColor">\n    <ion-title text-center class="mainTitles">Candy to find</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="candyPageContainer">\n  <div class="add-label">\n    <img src="assets/graphicMat/bubble_add2.png" alt="" />\n  </div>\n  <div class="candyList" *ngIf="candyList.length > 0">\n    <div *ngFor="let candyItem of candyList">\n      <div class="candyItem">\n        <div class="candyThumbnail">\n          <img src="{{candyItem.image_front_url}}" class="magic">\n        </div>\n        <div class="candyName">\n          <!-- <h2>{{data.brands_tags[1]}}</h2> -->\n          <h1>{{candyItem.product_name | shortenString:30 }}</h1>\n        </div>\n        <div class="plus-btn">\n          <!-- <button (click)="sendId(candyItem._id)"> -->\n          <button (click)="addCandyToBackpack(candyItem)">\n            <img src="assets/graphicmat/zoomIn.png" alt="plus-button"/>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_candy_api_service_candy_api_service__["a" /* CandyService */],
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

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgeSelectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_geoloc_service_geoloc_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AgeSelectPage = (function () {
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
    };
    AgeSelectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-age-select',template:/*ion-inline-start:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/age-select/age-select.html"*/'<ion-header>\n  <ion-navbar color="customColor">\n    <ion-title text-center class="mainTitles">\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="ageSelectPage-container">\n\n    <div class="mapSelectAge">\n\n      <p>Select your age!</p>\n      <button (click)="setAge(1)">3 - 6</button>\n      <button (click)="setAge(2)">7 - 9</button>\n      <button (click)="setAge(3)"> + 10</button>\n\n    </div>\n    \n</ion-content>'/*ion-inline-end:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/age-select/age-select.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_geoloc_service_geoloc_service__["a" /* GeolocServiceProvider */]])
    ], AgeSelectPage);
    return AgeSelectPage;
}());

//# sourceMappingURL=age-select.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAddressesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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
var MyAddressesPage = (function () {
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MyAddressesPage);
    return MyAddressesPage;
}());

//# sourceMappingURL=my-addresses.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandyDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_candy_api_service_candy_api_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_keyvalue_keyvalue__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_remove_underscore_remove_underscore__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_remove_chars_remove_chars__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CandyDetailsPage = (function () {
    function CandyDetailsPage(navCtrl, navParams, candyService, keyvaluepipe, removeUnderscore, removeChars) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.candyService = candyService;
        this.keyvaluepipe = keyvaluepipe;
        this.removeUnderscore = removeUnderscore;
        this.removeChars = removeChars;
        this.candyId = this.navParams.get("idparam");
        this.candyItem = { _id: "", product_name: "", generic_name_fr: "",
            image_front_url: "", brands_tags: [], ingredients_tags: [],
            nutriscore_data: [], additive_tags: [] };
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
        });
    };
    CandyDetailsPage.prototype.toggleIngredients = function () {
        this.showIngredients = !this.showIngredients;
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
            selector: 'page-candy-details',template:/*ion-inline-start:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/candy-details/candy-details.html"*/'<ion-header>\n  <ion-navbar color="customColor">\n    <ion-title text-center class="mainTitles">Candy Infos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="candyDetailsPage-container">\n  <div class="candyDetailsPage" *ngIf="candyItem">\n\n      <div class="candyItemTitle">\n        <div class="candyThumbnail">\n          <img src="{{candyItem.image_front_url}}">\n        </div>\n        <div>\n          <h1>{{ candyItem.product_name | shortenString:30 }}</h1>\n        </div> \n      </div>\n\n      <div class="rubrik">\n        <h1 (click)="toggleIngredients()">Ingredients<span class="arrowIcon"></span></h1>\n        <div class="candyIngredients" *ngIf="showIngredients">\n          <table>\n            <tr *ngFor="let i of candyItem.ingredients_tags">\n              <td>\n                {{ i | removeChars }}\n              </td>\n            </tr>\n          </table>\n        </div>\n      </div>\n\n      <div class="rubrik">\n        <h1 (click)="toggleNutriscore()">Nutriscore</h1>\n        <div class="candyNutriscore" *ngIf="showNutriscore">\n          <table>\n            <tr *ngFor="let i of candyItem.nutriscore_data | keyvalue">\n              <td>\n                {{ i.key | removeUnderscore }}\n              </td>\n              <td>\n                {{ i.value }}\n              </td>\n            </tr>\n          </table>\n        </div>\n      </div>\n      \n      <div class="rubrik">\n        <h1 (click)="toggleAllergens()">Allergens</h1>\n        <div class="candyAllergens" *ngIf="showAllergens">\n          <table>\n            <tr *ngFor="let i of candyItem.ingredients_tags">\n              <td>\n                {{ i.key }}\n              </td>\n            </tr>\n          </table>\n        </div>\n      </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/candy-details/candy-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_candy_api_service_candy_api_service__["a" /* CandyService */],
            __WEBPACK_IMPORTED_MODULE_3__pipes_keyvalue_keyvalue__["a" /* KeyvaluePipe */],
            __WEBPACK_IMPORTED_MODULE_4__pipes_remove_underscore_remove_underscore__["a" /* RemoveUnderscorePipe */],
            __WEBPACK_IMPORTED_MODULE_5__pipes_remove_chars_remove_chars__["a" /* RemoveCharsPipe */]])
    ], CandyDetailsPage);
    return CandyDetailsPage;
}());

//# sourceMappingURL=candy-details.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LegalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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
var LegalPage = (function () {
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LegalPage);
    return LegalPage;
}());

//# sourceMappingURL=legal.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_candy_api_service_candy_api_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_level_api_service_level_api_service__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_backpack_service_backpack_service__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LevelPage = (function () {
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
    LevelPage.prototype.ngOnInit = function () {
        var _this = this;
        this.backpackService.currentBackpackCount.subscribe(function (data) { return _this.totalPoints = data; });
        this.totalCandy = this.totalPoints;
        console.log(this.totalPoints);
    };
    LevelPage.prototype.ionViewWillEnter = function () {
        this.setCurrentLevel(this.totalPoints);
    };
    // retrieve current total candy/total points from candy service, 
    // and set level accordingly, using json 'levelmodels'
    LevelPage.prototype.setCurrentLevel = function (totalPoints) {
        var _this = this;
        this.backpackService.currentBackpackCount.subscribe(function (data) { return _this.totalPoints = data; });
        //console.log('total Points retrieved by level service: ', this.totalPoints);
        this.levelService.getLevelList().subscribe(function (response) {
            _this.myArray = response;
            //console.log("response modellist: ", this.myArray[0]);
            //console.log("je suis myarray dans setcurrentLevel: ", this.myArray);
            if (totalPoints <= 7) {
                _this.level = _this.myArray[0];
                _this.level.levelName = _this.myArray[0].levelName;
                //console.log( "je suis LEVEL NAME: ",this.level.levelName);
                _this.level.levelImg = _this.myArray[0].levelImg;
                _this.level.bannerMessage = _this.myArray[0].bannerMessage;
                _this.level.levelCard = _this.myArray[0].levelCard;
                _this.nextLevel = _this.myArray[1];
                _this.nextLevel.levelName = _this.myArray[1].levelName;
                _this.nextLevel.levelCard = _this.myArray[1].levelCard;
                _this.nextLevel.levelCardName = _this.myArray[1].levelCardName;
            }
            if (totalPoints > 7 && totalPoints <= 12) {
                _this.level = _this.myArray[1];
                _this.level.levelName = _this.myArray[1].levelName;
                //console.log( "je suis LEVEL NAME: ",this.level.levelName);
                _this.level.levelImg = _this.myArray[1].levelImg;
                _this.level.bannerMessage = _this.myArray[1].bannerMessage;
                _this.level.levelCard = _this.myArray[1].levelCard;
                _this.nextLevel = _this.myArray[2];
                _this.nextLevel.levelName = _this.myArray[2].levelName;
                _this.nextLevel.levelCard = _this.myArray[2].levelCard;
                _this.nextLevel.levelCardName = _this.myArray[2].levelCardName;
            }
            if (totalPoints > 12 && totalPoints <= 18) {
                _this.level = _this.myArray[2];
                _this.level.levelName = _this.myArray[2].levelName;
                //console.log( "je suis LEVEL NAME: ",this.level.levelName);
                _this.level.levelImg = _this.myArray[2].levelImg;
                _this.level.bannerMessage = _this.myArray[2].bannerMessage;
                _this.level.levelCard = _this.myArray[2].levelCard;
                _this.nextLevel = _this.myArray[3];
                _this.nextLevel.levelName = _this.myArray[3].levelName;
                _this.nextLevel.levelCard = _this.myArray[3].levelCard;
                _this.nextLevel.levelCardName = _this.myArray[3].levelCardName;
            }
            if (totalPoints > 18) {
                _this.level = _this.myArray[3];
                _this.level.levelName = _this.myArray[3].levelName;
                //console.log( "je suis LEVEL NAME: ",this.level.levelName);
                _this.level.levelImg = _this.myArray[3].levelImg;
                _this.level.bannerMessage = _this.myArray[3].bannerMessage;
                _this.level.levelCard = _this.myArray[3].levelCard;
                _this.nextLevel = _this.myArray[4];
                _this.nextLevel.levelName = _this.myArray[4].levelName;
                _this.nextLevel.levelCard = _this.myArray[4].levelCard;
                _this.nextLevel.levelCardName = _this.myArray[4].levelCardName;
            }
            _this.backpackService.update_level(_this.level.levelName);
        });
    };
    LevelPage.prototype.ionViewDidLeave = function () {
    };
    LevelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-level',template:/*ion-inline-start:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/level/level.html"*/'<ion-header>\n  <ion-navbar color="customColor">\n    <ion-title text-center>Your level</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="levelPage-container">\n\n  <div class="levelElements">\n    <!-- <div>\n        <p>you have {{ totalPoints }} points</p> \n    </div> -->\n    <div class="levelNumber">\n      <h2><span>{{level.levelName}}</span></h2>\n    </div>\n\n    <div class="ribbon">\n      <img src="{{ level.bannerMessage }}" alt="" />\n    </div>\n\n    <div class="levelImage">\n      <img src="{{ level.levelImg }}" alt="" />\n    </div>\n  </div>\n\n  <div class="level-bottom-elements">\n    <div class="level-bubble">\n      <h2>Next mission:<br>Get the <span>{{ nextLevel.levelCardName }} !</span></h2>\n    </div>\n    <div class="next-level-card">\n      <img src="{{ nextLevel.levelCard}}" alt="" />\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/level/level.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_candy_api_service_candy_api_service__["a" /* CandyService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_backpack_service_backpack_service__["a" /* BackpackServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_level_api_service_level_api_service__["a" /* LevelServiceProvider */]])
    ], LevelPage);
    return LevelPage;
}());

//# sourceMappingURL=level.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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
var LoginPage = (function () {
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rules_rules__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__legal_legal__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__age_select_age_select__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyHomePage = (function () {
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MyHomePage);
    return MyHomePage;
}());

//# sourceMappingURL=my-home.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RulesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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
var RulesPage = (function () {
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RulesPage);
    return RulesPage;
}());

//# sourceMappingURL=rules.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_geoloc_service_geoloc_service__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams, geolocService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocService = geolocService;
        this.batsBg = "assets/graphicMat/gradient_bats.png";
        this.img_candyTitle = "assets/graphicMat/title_candy.png";
        this.img_chaseTitle = "assets/graphicMat/title_chase.png";
        this.img_circles = "assets/graphicMat/circles.png";
    }
    /*   GoToPage(): void {
        setTimeout(() => {
          this.navCtrl.push(TabsPage);
        }, 1500);
      } */
    WelcomePage.prototype.ionViewDidLoad = function () {
        //  this.geolocService.getLocation();
        //  this.geolocService.loadmap();
    };
    WelcomePage.prototype.start = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/welcome/welcome.html"*/'<ion-header>\n</ion-header>\n\n<ion-content class="homepage-container">\n\n    <div class="titles-container">\n      <img [src]="img_candyTitle" class="candyTitle" alt="candy title" />\n      <p>chase !</p>\n    </div>\n\n    <div>\n      <div class="startButton" (click)="start()">\n        <p>start!</p>\n      </div>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_geoloc_service_geoloc_service__["a" /* GeolocServiceProvider */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 184:
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
webpackEmptyAsyncContext.id = 184;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		699,
		9
	],
	"../pages/age-select/age-select.module": [
		700,
		8
	],
	"../pages/candy-details/candy-details.module": [
		701,
		7
	],
	"../pages/legal/legal.module": [
		702,
		6
	],
	"../pages/level/level.module": [
		703,
		5
	],
	"../pages/login/login.module": [
		704,
		4
	],
	"../pages/my-addresses/my-addresses.module": [
		705,
		3
	],
	"../pages/my-home/my-home.module": [
		706,
		2
	],
	"../pages/rules/rules.module": [
		707,
		1
	],
	"../pages/welcome/welcome.module": [
		708,
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

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__candy_api_service_candy_api_service__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LevelServiceProvider = (function () {
    function LevelServiceProvider(httpService, candyService) {
        this.httpService = httpService;
        this.candyService = candyService;
        this.levelListUrl = 'assets/levelsData.json';
        this.levelList = [];
        this.level = { "idLevel": "", "levelName": "", "levelImg": "", "bannerMessage": "", "levelCard": "", "levelCardName": "" };
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__candy_api_service_candy_api_service__["a" /* CandyService */]])
    ], LevelServiceProvider);
    return LevelServiceProvider;
}());

//# sourceMappingURL=level-api-service.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_map__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__backpack_backpack__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__level_level__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_home_my_home__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* ListPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__map_map__["a" /* MapPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__backpack_backpack__["a" /* BackpackPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__level_level__["a" /* LevelPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__my_home_my_home__["a" /* MyHomePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="List" tabIcon="paper"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Map" tabIcon="map"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Backpack" tabIcon="paper"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Level" tabIcon="star"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Home" tabIcon="home"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/hildegardagnesgenay/Documents/AndBEYOND/CANDY_CHASE_2020_ionic/candyChase2020/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackpackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_candy_api_service_candy_api_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__candy_details_candy_details__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_backpack_service_backpack_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_keyvalue_keyvalue__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_shorten_string_shorten_string__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BackpackPage = (function () {
    function BackpackPage(navCtrl, navParams, candyService, backpackService, keyvaluepipe, shortenString) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.candyService = candyService;
        this.backpackService = backpackService;
        this.keyvaluepipe = keyvaluepipe;
        this.shortenString = shortenString;
    }
    BackpackPage.prototype.ngOnInit = function () {
        this.setBackpack();
    };
    BackpackPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.backpackService.currentBackpackCount.subscribe(function (data) { return _this.totalCandy = data; });
        //console.log("TOTAL CANDY AT INIT: ", this.totalCandy);
        this.backpackService.currentLevel.subscribe(function (levelName) { return _this.levelName = levelName; });
        //console.log("LEVEL NAME RETRIEVED: ", this.levelName);
    };
    /* public ionViewWillEnter() {
        this.backpackService.currentLevel.subscribe(levelName => this.levelName = levelName);
      } */
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_candy_api_service_candy_api_service__["a" /* CandyService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_backpack_service_backpack_service__["a" /* BackpackServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__pipes_keyvalue_keyvalue__["a" /* KeyvaluePipe */],
            __WEBPACK_IMPORTED_MODULE_6__pipes_shorten_string_shorten_string__["a" /* ShortenStringPipe */]])
    ], BackpackPage);
    return BackpackPage;
}());

/* --method with api call to retrieve backpack with candy id
this.collectedCandy.forEach((item) => {
this.candyService.getCandyById(item._id).subscribe((response:Candy) => {
  this.candyName = response.product_name;
  item._id = this.candyName;
  return item;
}); */ 
//# sourceMappingURL=backpack.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys_keys__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keyvalue_keyvalue__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__remove_underscore_remove_underscore__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shorten_string_shorten_string__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__remove_chars_remove_chars__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PipesModule = (function () {
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

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(374);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_geoloc_service_geoloc_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_diagnostic__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_candy_api_service_candy_api_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_level_api_service_level_api_service__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_backpack_service_backpack_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_pipes_module__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_keyvalue_keyvalue__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_remove_underscore_remove_underscore__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipes_shorten_string_shorten_string__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_remove_chars_remove_chars__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_welcome_welcome__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_login_login__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_my_home_my_home__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_map_map__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_list_list__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_backpack_backpack__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_level_level__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_candy_details_candy_details__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_my_addresses_my_addresses__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_rules_rules__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_legal_legal__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_about_about__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_age_select_age_select__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_backpack_backpack__["a" /* BackpackPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_my_home_my_home__["a" /* MyHomePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_level_level__["a" /* LevelPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_candy_details_candy_details__["a" /* CandyDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_rules_rules__["a" /* RulesPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_legal_legal__["a" /* LegalPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_my_addresses_my_addresses__["a" /* MyAddressesPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_age_select_age_select__["a" /* AgeSelectPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/age-select/age-select.module#AgeSelectPageModule', name: 'AgeSelectPage', segment: 'age-select', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/candy-details/candy-details.module#CandyDetailsPageModule', name: 'CandyDetailsPage', segment: 'candy-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/legal/legal.module#LegalPageModule', name: 'LegalPage', segment: 'legal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/level/level.module#LevelPageModule', name: 'LevelPage', segment: 'level', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-addresses/my-addresses.module#MyAddressesPageModule', name: 'MyAddressesPage', segment: 'my-addresses', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-home/my-home.module#MyHomePageModule', name: 'MyHomePage', segment: 'my-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rules/rules.module#RulesPageModule', name: 'RulesPage', segment: 'rules', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_22__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_backpack_backpack__["a" /* BackpackPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_rules_rules__["a" /* RulesPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_legal_legal__["a" /* LegalPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_my_addresses_my_addresses__["a" /* MyAddressesPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_my_home_my_home__["a" /* MyHomePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_level_level__["a" /* LevelPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_candy_details_candy_details__["a" /* CandyDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_age_select_age_select__["a" /* AgeSelectPage */]
            ],
            providers: [
                /*     AngularFireAuth, */
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_candy_api_service_candy_api_service__["a" /* CandyService */],
                __WEBPACK_IMPORTED_MODULE_8__providers_geoloc_service_geoloc_service__["a" /* GeolocServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_level_api_service_level_api_service__["a" /* LevelServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_backpack_service_backpack_service__["a" /* BackpackServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_keyvalue_keyvalue__["a" /* KeyvaluePipe */],
                __WEBPACK_IMPORTED_MODULE_18__pipes_remove_underscore_remove_underscore__["a" /* RemoveUnderscorePipe */],
                __WEBPACK_IMPORTED_MODULE_19__pipes_shorten_string_shorten_string__["a" /* ShortenStringPipe */],
                __WEBPACK_IMPORTED_MODULE_20__pipes_remove_chars_remove_chars__["a" /* RemoveCharsPipe */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_17__pipes_keyvalue_keyvalue__["a" /* KeyvaluePipe */],
                __WEBPACK_IMPORTED_MODULE_18__pipes_remove_underscore_remove_underscore__["a" /* RemoveUnderscorePipe */],
                __WEBPACK_IMPORTED_MODULE_19__pipes_shorten_string_shorten_string__["a" /* ShortenStringPipe */],
                __WEBPACK_IMPORTED_MODULE_20__pipes_remove_chars_remove_chars__["a" /* RemoveCharsPipe */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__backpack_service_backpack_service__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CandyService = (function () {
    function CandyService(httpService, backpackService) {
        this.httpService = httpService;
        this.backpackService = backpackService;
        this.candyItem = { "_id": "", "product_name": "", "amountInBackpack": null };
    }
    // get all candy list from api, max 50 results  | => TO DO : clean up doublons in list
    CandyService.prototype.getAllCandyFromApi = function () {
        return this.httpService.get("https://world.openfoodfacts.org/cgi/search.pl?search_terms=bonbon&search_simple=1&action=process&json=1&page_size=50")
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (response) {
            var result = response.json().products; // '.products' => for object from api contains 2 other main fields!
            // console.log(result);
            return result;
        }));
    };
    // get candy by id from api
    CandyService.prototype.getCandyById = function (candyId) {
        return this.httpService.get("https://world.openfoodfacts.org/api/v0/product/" + candyId + ".json").pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (response) {
            var result = response.json().product;
            // console.log(result);
            return result;
        }));
    };
    CandyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__backpack_service_backpack_service__["a" /* BackpackServiceProvider */]])
    ], CandyService);
    return CandyService;
}());

//# sourceMappingURL=candy-api-service.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeolocServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(400);
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
var GeolocServiceProvider = (function () {
    function GeolocServiceProvider(geolocation) {
        this.geolocation = geolocation;
        this.currentLat = 0;
        this.currentLong = 0;
        this.dist = 0;
        this.new_latitude1 = 0;
        this.new_longitude1 = 0;
        this.new_latitude2 = 0;
        this.new_longitude2 = 0;
        this.myNewCoords = [];
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
    // get current location
    GeolocServiceProvider.prototype.getLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (res) {
            _this.setGeo(res);
            console.log('latitude: ' + res.coords.latitude);
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        // console.log(this.newCoords(5));
    };
    // calculate new coords for map age filter, using current coords and distance 'dist'
    // we need 4 points to delimit a perimeter of x meters around current position :
    // current pos(lat + distance , long + distance), pos(lat - distance, long - distance)
    GeolocServiceProvider.prototype.newCoords = function (dist) {
        var r_earth = 6378;
        this.dist = dist;
        this.currentLat = this.geo.coords.latitude;
        this.currentLong = this.geo.coords.longitude;
        console.log("CURRENT: ", this.currentLong, this.currentLat);
        var m = (1 / ((2 * Math.PI / 360) * r_earth)) / 1000; //1 meter in degree
        this.new_latitude1 = this.currentLat + (this.dist * m);
        this.new_longitude1 = this.currentLong + (this.dist * m) / Math.cos(this.currentLat * (Math.PI / 180));
        console.log("new lat: ", this.new_latitude1);
        console.log("new long: ", this.new_longitude1);
        this.new_latitude2 = this.currentLat - (this.dist * m);
        this.new_longitude2 = this.currentLong - (this.dist * m) / Math.cos(this.currentLat * (Math.PI / 180));
        // this.new_latitude1  = this.currentLat  + (this.dist / r_earth) * (180 / Math.PI);
        // this.new_longitude1 = this.currentLong + (this.dist / r_earth) * (180 / Math.PI) / Math.cos(this.currentLat * Math.PI/180);
        this.myNewCoords.push(this.new_latitude1, this.new_longitude1, this.new_latitude2, this.new_longitude2);
        this.mybounds = this.myNewCoords;
        return this.mybounds;
    };
    GeolocServiceProvider.prototype.getNewCoords = function () {
        return this.mybounds;
    };
    // load map using new coords to display map portion with 'set bounds' 
    GeolocServiceProvider.prototype.loadmap = function () {
        var _this = this;
        // initialize Leaflet
        this.map = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.map('map').setView({ lon: 0, lat: 0 }, 2);
        // this.map = leaflet.map("map").fitWorld();
        // add the OpenStreetMap tiles
        __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attributions: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
        this.map.locate({
            setView: true,
            maxZoom: 18,
            minZoom: 16,
        })
            .on('locationfound', function (e) {
            var markerGroup = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.featureGroup();
            var marker = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([e.latitude, e.longitude]).on('click', function () {
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
        // add marker to the map + pop up text
        //leaflet.marker({lon: 0, lat: 0}).bindPopup('The center of the world').addTo(this.map);
    };
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
    // add radius around current position on map
    GeolocServiceProvider.prototype.addCircle = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (res) {
            __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.circle([res.coords.latitude, res.coords.longitude], {
                color: 'green',
                fillColor: '#7CFC00',
                fillOpacity: 0.2,
                radius: 500
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

//# sourceMappingURL=geoloc-service.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackpackServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BackpackServiceProvider = (function () {
    // ---
    function BackpackServiceProvider(http) {
        this.http = http;
        // keep track of backpack state --
        this.backpack$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
        this.currentBackpack = this.backpack$.asObservable();
        // keep track of candy total --  
        this.totalCandyInBackpack$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](0);
        this.currentBackpackCount = this.totalCandyInBackpack$.asObservable();
        // keep track of current level --  
        this.levelName$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]("");
        this.currentLevel = this.levelName$.asObservable();
        this.itemsInBackpack = [];
        this.candyItem = { "_id": "", "product_name": "", "amountInBackpack": 0 };
        this.totalPoints = 0;
    }
    // method for components to update backpack
    BackpackServiceProvider.prototype.update_backpack = function (itemsInBackpack) {
        this.backpack$.next(itemsInBackpack);
    };
    // method for components to update total candy
    BackpackServiceProvider.prototype.update_totalCandyCount = function (totalCandy) {
        this.totalCandyInBackpack$.next(totalCandy);
    };
    // method for components to update current level (besides regular count)
    BackpackServiceProvider.prototype.update_level = function (levelName) {
        this.levelName$.next(levelName);
    };
    BackpackServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], BackpackServiceProvider);
    return BackpackServiceProvider;
}());

// TODO : + backend => create new backpack for each user 
//# sourceMappingURL=backpack-service.js.map

/***/ }),

/***/ 680:
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

var KeysPipe = (function () {
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

/***/ 84:
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

var KeyvaluePipe = (function () {
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

/***/ 85:
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

var ShortenStringPipe = (function () {
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

},[369]);
//# sourceMappingURL=main.js.map