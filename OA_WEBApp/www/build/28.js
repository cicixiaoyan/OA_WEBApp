webpackJsonp([28],{

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverPageModule", function() { return DriverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driver__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__car_service__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DriverPageModule = (function () {
    function DriverPageModule() {
    }
    DriverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__driver__["a" /* DriverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__driver__["a" /* DriverPage */]),
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__driver__["a" /* DriverPage */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__car_service__["a" /* CarService */]]
        })
    ], DriverPageModule);
    return DriverPageModule;
}());

//# sourceMappingURL=driver.module.js.map

/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(61);
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

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__car_service__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__ = __webpack_require__(45);
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
 * Generated class for the DriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DriverPage = (function () {
    function DriverPage(navCtrl, navParams, nativeService, carService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeService = nativeService;
        this.carService = carService;
        this.list = [];
        this.isEmpty = false;
        this.data = {};
        this.data = {
            "PageIndex": 0,
            "PageSize": 100
        };
        this.initializeItems();
    }
    DriverPage.prototype.initializeItems = function () {
        this.getList(this.data);
    };
    DriverPage.prototype.doRead = function (id) {
        this.navCtrl.push("DriverSetPage", { "isWrite": false, "Id": id });
    };
    DriverPage.prototype.doWrite = function () {
        this.navCtrl.push("DriverSetPage", { "isWrite": true });
    };
    DriverPage.prototype.doRefresh = function (refresher) {
        this.list = [];
        console.log(this.data);
        this.getList(this.data);
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    DriverPage.prototype.getList = function (data) {
        var _this = this;
        this.carService.getDriverList(data).subscribe(function (resJson) {
            if (resJson.Result && resJson.Data.length !== 0 && typeof (resJson.Data) !== "string") {
                var list = resJson.Data;
                _this.list = _this.list.concat(list);
                _this.isEmpty = false;
            }
            else {
                _this.carService.httpService.nativeService.showToast(resJson.Data);
                _this.isEmpty = true;
                _this.list = [];
            }
        });
    };
    DriverPage.prototype.delete = function (id, index) {
        var _this = this;
        this.carService.driverDel(id).subscribe(function (resJson) {
            if (resJson.Result) {
                _this.list.splice(index, 1);
                _this.nativeService.showToast("删除成功", 300);
            }
            else {
                _this.nativeService.showToast(resJson.Data, 800);
            }
        });
    };
    DriverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-driver',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\car\driver\driver.html"*/`<!--\n  Generated template for the DriverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>驾驶员档案</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="正在刷新...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ion-list>\n        <ion-item-sliding *ngFor="let item of list;let i = index" (click)="doRead(item.Id)">\n            <ion-item>\n                <span>{{item.Name}}&emsp;{{item.Sex}}</span>\n                <p class="font-12"><span *ngIf="item.Age">{{item.Age}}岁&emsp;</span>入职日期：{{item.InDate|date:"yyyy年MM月dd日 HH时mm分"}}</p>\n            </ion-item>\n            <ion-item-options side="right">\n                <button ion-button color="primary" (click)="delete(item.Id, i)">\n                    <ion-icon name="md-trash"></ion-icon>删除\n                </button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n    <empty *ngIf="isEmpty"></empty>\n    <ion-fab bottom right>\n        <button ion-fab color="danger" (click)="doWrite()"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n\n</ion-content>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\car\driver\driver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_2__car_service__["a" /* CarService */]])
    ], DriverPage);
    return DriverPage;
}());

//# sourceMappingURL=driver.js.map

/***/ })

});
//# sourceMappingURL=28.js.map