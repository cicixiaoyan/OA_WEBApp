webpackJsonp([24],{

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarPageModule", function() { return CarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__car__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__car_service__ = __webpack_require__(746);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CarPageModule = (function () {
    function CarPageModule() {
    }
    CarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__car__["a" /* CarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__car__["a" /* CarPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__car__["a" /* CarPage */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__car_service__["a" /* CarService */]]
        })
    ], CarPageModule);
    return CarPageModule;
}());

//# sourceMappingURL=car.module.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarService = (function () {
    function CarService(httpService) {
        this.httpService = httpService;
    }
    CarService.prototype.getList = function (param) {
        return this.httpService.postFormData("ashx/BusVehicleLs.ashx", param).map(function (res) { return res.json(); });
    };
    CarService.prototype.geDetail = function (id) {
        return this.httpService.postFormData("ashx/BusVehicleDetail.ashx", { "Id": id })
            .map(function (res) { return res.json(); });
    };
    CarService.prototype.add = function (param) {
        return this.httpService.postFormData("ashx/BusVehicleLsAdd.ashx", param).map(function (res) { return res.json(); });
    };
    CarService.prototype.mod = function (param) {
        return this.httpService.postFormData("ashx/BusVehicleLsMod.ashx", param).map(function (res) { return res.json(); });
    };
    CarService.prototype.geStatus = function (status) {
        return this.httpService.postFormData("ashx/BusQuery.ashx", { "Status": status })
            .map(function (res) { return res.json(); });
    };
    CarService.prototype.getDriverList = function (param) {
        return this.httpService.postFormData("ashx/DriverLs.ashx", param).map(function (res) { return res.json(); });
    };
    CarService.prototype.getDriverDetails = function (id) {
        return this.httpService.postFormData("ashx/DriverDetails.ashx", { "Id": id })
            .map(function (res) { return res.json(); });
    };
    CarService.prototype.driverAdd = function (param) {
        return this.httpService.postFormData("ashx/DriverAdd.ashx", param).map(function (res) { return res.json(); });
    };
    CarService.prototype.driverMod = function (param) {
        return this.httpService.postFormData("ashx/DriverMod.ashx", param).map(function (res) { return res.json(); });
    };
    CarService.prototype.driverDel = function (id) {
        return this.httpService.postFormData("ashx/DriverDel.ashx", { "Id": id })
            .map(function (res) { return res.json(); });
    };
    CarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */]])
    ], CarService);
    return CarService;
}());

//# sourceMappingURL=car_service.js.map

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_GlobalData__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__car_service__ = __webpack_require__(746);
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
 * Generated class for the CarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CarPage = (function () {
    function CarPage(navCtrl, navParams, globalData, modalCtrl, CarService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalData = globalData;
        this.modalCtrl = modalCtrl;
        this.CarService = CarService;
        this.isEmpty = false;
        this.list = [];
        this.moredata = true;
        this.data = {};
        this.data = {
            "PageIndex": 0,
            "PageSize": 8
        };
        this.initializeItems();
    }
    CarPage.prototype.initializeItems = function () {
        this.getList(this.data);
    };
    CarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Message');
    };
    CarPage.prototype.doRead = function (id) {
        console.log(id, "id");
        // this.navCtrl.push("CarReadPage", { Params: Params });
        this.navCtrl.push("CarReadPage", { "Id": id });
    };
    CarPage.prototype.doWrite = function () {
        // let modal = this.modalCtrl.create("CarAddPage");
        // modal.present();
        // modal.onDidDismiss(data => {
        //     data && console.log(data);
        // });
        this.navCtrl.push("CarAddPage");
    };
    CarPage.prototype.doRefresh = function (refresher) {
        this.list = [];
        this.data.PageIndex = 0;
        this.getList(this.data);
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    CarPage.prototype.doInfinite = function () {
        if (this.moredata) {
            this.data.PageIndex++;
            this.getList(this.data);
        }
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve();
            }, 500);
        });
    };
    CarPage.prototype.getList = function (data) {
        var _this = this;
        this.CarService.getList(data).subscribe(function (resJson) {
            if (resJson.Result && resJson.Data.length !== 0 && typeof (resJson.Data) !== "string") {
                var list = resJson.Data;
                _this.list = _this.list.concat(list);
                _this.moredata = true;
                _this.isEmpty = false;
            }
            else {
                _this.moredata = false;
                if (_this.data.PageIndex === 0) {
                    _this.CarService.httpService.nativeService.showToast(resJson.Data);
                    _this.isEmpty = true;
                    _this.list = [];
                }
            }
        });
    };
    CarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-car',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\car\car.html"*/`<!--\n  Generated template for the CarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>车辆</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n      <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="正在刷新...">\n      </ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n    <ion-item (click)="doRead(bus.Id)" *ngFor="let bus of list">\n      <h2 >{{bus.BusName}}</h2><ion-note item-end>{{BusStatus}}</ion-note>\n      <h3>管理员：{{bus.BusManger}}&emsp;核载：{{bus.BusPassenger}}人</h3>\n      <p>启动日期：{{bus.StartDate}}</p>\n    </ion-item>\n    <!-- <ion-item (click)="doRead()">\n      <h2 >川AML796 北斗星牌</h2><ion-note item-end>已借出</ion-note>\n      <h3>管理员：何小凤&emsp;核载：4人</h3>\n      <p>启动日期：2005-11-12</p>\n    </ion-item>\n    <ion-item (click)="doRead()">\n      <h2 >川AML796 北斗星牌</h2><ion-note item-end>已借出</ion-note>\n      <h3>管理员：何小凤&emsp;核载：4人</h3>\n      <p>启动日期：2005-11-12</p>\n    </ion-item> -->\n  </ion-list>\n  <div *ngIf="isEmpty" text-center padding style="font-size:.9em;">\n      <div padding>暂无消息数据！！！</div>\n      <img src="assets/img/face/face2.png" height="100">\n  </div>\n  <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())" [enabled]="moredata" threshold="100px">\n      <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中..."></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <ion-fab bottom right>\n      <button ion-fab color="danger" (click)="doWrite()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\car\car.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_GlobalData__["a" /* GlobalData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_GlobalData__["a" /* GlobalData */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__car_service__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__car_service__["a" /* CarService */]) === "function" && _e || Object])
    ], CarPage);
    return CarPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=car.js.map

/***/ })

});
//# sourceMappingURL=24.js.map