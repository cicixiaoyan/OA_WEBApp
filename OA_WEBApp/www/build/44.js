webpackJsonp([44],{

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidayGroupSettingsPageModule", function() { return HolidayGroupSettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__holiday_group_settings__ = __webpack_require__(805);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__holiday_group_settings_service__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HolidayGroupSettingsPageModule = (function () {
    function HolidayGroupSettingsPageModule() {
    }
    HolidayGroupSettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__holiday_group_settings__["a" /* HolidayGroupSettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__holiday_group_settings__["a" /* HolidayGroupSettingsPage */]),
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__holiday_group_settings_service__["a" /* HolidayGroupSettingsService */]]
        })
    ], HolidayGroupSettingsPageModule);
    return HolidayGroupSettingsPageModule;
}());

//# sourceMappingURL=holiday-group-settings.module.js.map

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HolidayGroupSettingsService; });
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



var HolidayGroupSettingsService = (function () {
    function HolidayGroupSettingsService(httpService) {
        this.httpService = httpService;
    }
    HolidayGroupSettingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */]])
    ], HolidayGroupSettingsService);
    return HolidayGroupSettingsService;
}());

//# sourceMappingURL=holiday-group-settings-service.js.map

/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HolidayGroupSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__holiday_group_settings_service__ = __webpack_require__(785);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HolidayGroupSettingsPage = (function () {
    function HolidayGroupSettingsPage(navCtrl, navParams, holidayGroupSettingsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.holidayGroupSettingsService = holidayGroupSettingsService;
        this.list = [];
        this.isEmpty = false;
        this.data = {};
        this.data = {
            "PageIndex": 0,
            "PageSize": 100
        };
        this.initializeItems();
    }
    HolidayGroupSettingsPage.prototype.initializeItems = function () {
        this.getList(this.data);
    };
    HolidayGroupSettingsPage.prototype.doRead = function (id) {
        this.navCtrl.push("HolidayGroupSettingsViewPage", { "readOnly": true, "Id": id });
    };
    HolidayGroupSettingsPage.prototype.doWrite = function () {
        this.navCtrl.push("HolidayGroupSettingsViewPage");
    };
    HolidayGroupSettingsPage.prototype.doRefresh = function (refresher) {
        this.list = [];
        console.log(this.data);
        this.getList(this.data);
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    HolidayGroupSettingsPage.prototype.getList = function (data) {
        this.list = [
            {
                "Id": '1',
                "GroupName": '张三',
                "Years": '2017',
                "TotalDays": '10',
                "LeaveDays": '0',
                "TuneOffDays": '10',
                "SickLeaveDays": '0',
            },
        ];
        // this.holidayGroupSettingsService.getList(data).subscribe(resJson => {
        //     if (resJson.Result && resJson.Data.length !== 0 && typeof(resJson.Data) !== "string"){
        //       let list = resJson.Data;
        //       this.list = [...this.list, ...list];
        //       this.isEmpty = false;
        //     }else{
        //       this.holidayGroupSettingsService.httpService.nativeService.showToast(resJson.Data);
        //       this.isEmpty = true;
        //       this.list = [];
        //     }
        // });
    };
    HolidayGroupSettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-holiday-group-settings',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\attendance-management\holiday-group-settings\holiday-group-settings.html"*/`<ion-header>\n\n  <ion-navbar>\n    <ion-title>员工考勤设定</ion-title>\n    <ion-buttons end>\n       <button ion-button end (click)="doWrite()">\n         添加\n       </button>\n   </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n      <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="正在刷新...">\n      </ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n      <ion-item-sliding *ngFor="let item of list;let i = index" (click)="doRead(item.Id)">\n          <ion-item>\n              <ion-avatar item-start><span>{{item.Years}}</span></ion-avatar>\n              <span>{{item.GroupName}}</span>\n              <p class="font-12">事假({{item.LeaveDays}}天)&emsp;调休({{item.TuneOffDays}}天)&emsp;病假({{item.SickLeaveDays}}天)</p>\n              <p class="font-12">累计总天数：{{item.TotalDays}}天</p>\n          </ion-item>\n      </ion-item-sliding>\n  </ion-list>\n  <empty *ngIf="isEmpty"></empty>\n</ion-content>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\attendance-management\holiday-group-settings\holiday-group-settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__holiday_group_settings_service__["a" /* HolidayGroupSettingsService */]])
    ], HolidayGroupSettingsPage);
    return HolidayGroupSettingsPage;
}());

//# sourceMappingURL=holiday-group-settings.js.map

/***/ })

});
//# sourceMappingURL=44.js.map