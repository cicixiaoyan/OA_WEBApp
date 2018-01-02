webpackJsonp([43],{

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffAttendanceSettingsPageModule", function() { return StaffAttendanceSettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_attendance_settings__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__staff_attendance_settings_service__ = __webpack_require__(807);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var StaffAttendanceSettingsPageModule = /** @class */ (function () {
    function StaffAttendanceSettingsPageModule() {
    }
    StaffAttendanceSettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__staff_attendance_settings__["a" /* StaffAttendanceSettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__staff_attendance_settings__["a" /* StaffAttendanceSettingsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__staff_attendance_settings_service__["a" /* StaffAttendanceSettingsService */]]
        })
    ], StaffAttendanceSettingsPageModule);
    return StaffAttendanceSettingsPageModule;
}());

//# sourceMappingURL=staff-attendance-settings.module.js.map

/***/ }),

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffAttendanceSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { StaffAttendanceSettingsService } from './staff-attendance-settings-service';
var StaffAttendanceSettingsPage = /** @class */ (function () {
    function StaffAttendanceSettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.list = [];
        this.isEmpty = false;
        this.data = {};
        this.data = {
            "PageIndex": 0,
            "PageSize": 100
        };
        this.initializeItems();
    }
    StaffAttendanceSettingsPage.prototype.initializeItems = function () {
        this.getList(this.data);
    };
    StaffAttendanceSettingsPage.prototype.doRead = function (id) {
        this.navCtrl.push("HolidayGroupSettingsViewPage", { "isWrite": false, "Id": id });
    };
    StaffAttendanceSettingsPage.prototype.doSet = function (id) {
        this.navCtrl.push("HolidayGroupSettingsViewPage", { "isWrite": true });
    };
    StaffAttendanceSettingsPage.prototype.doRefresh = function (refresher) {
        this.list = [];
        console.log(this.data);
        this.getList(this.data);
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    StaffAttendanceSettingsPage.prototype.getList = function (data) {
        this.list = [
            {
                "Id": '1',
                "Name": '张三',
                "Code": '001',
                "Sex": '男',
                "Indate": '2017-01-01',
                "Dept": '研发部',
                "Duty": '员工',
                "Status": '正常' // 状态
            },
            {
                "Id": '2',
                "Name": '李四',
                "Code": '002',
                "Sex": '女',
                "Indate": '2017-10-01',
                "Dept": '总部',
                "Duty": '员工',
                "Status": '正常' // 状态
            },
            {
                "Id": '3',
                "Name": '王五',
                "Code": '002',
                "Sex": '女',
                "Indate": '2017-10-01',
                "Dept": '总部',
                "Duty": '员工',
                "Status": '正常' // 状态
            },
        ];
        // this.staffAttendanceSettingsService.getList(data).subscribe(resJson => {
        //     if (resJson.Result && resJson.Data.length !== 0 && typeof(resJson.Data) !== "string"){
        //       let list = resJson.Data;
        //       this.list = [...this.list, ...list];
        //       this.isEmpty = false;
        //     }else{
        //       this.staffAttendanceSettingsService.httpService.nativeService.showToast(resJson.Data);
        //       this.isEmpty = true;
        //       this.list = [];
        //     }
        // });
    };
    StaffAttendanceSettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-staff-attendance-settings',template:/*ion-inline-start:"/Users/lieon/Desktop/OA_WEBApp/OA_WEBApp/src/pages/attendance-management/staff-attendance-settings/staff-attendance-settings.html"*/'<!--\n  Generated template for the StaffAttendanceSettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>员工考勤设定</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n      <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="正在刷新...">\n      </ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n      <ion-item-sliding *ngFor="let item of list;let i = index" (click)="doRead(item.Id)">\n          <ion-item>\n              <ion-avatar item-start><span>{{item.Code}}</span></ion-avatar>\n              <span>{{item.Name}}&emsp;{{item.Sex}}</span>\n              <p class="font-12">入职日期：{{item.InDate|date:"yyyy年MM月dd日 HH时mm分"}}</p>\n              <p class="font-12">{{item.Dept}}&nbsp;|&nbsp;{{item.Duty}}</p>\n          </ion-item>\n          <ion-item-options side="right">\n              <button ion-button color="primary" (click)="doSet(item.Id)">\n                  <i class="iconfont icon-basicset"></i>基础设置\n              </button>\n              <button ion-button color="primary" (click)="doRead(item.Id)">工作日\n              </button>\n          </ion-item-options>\n      </ion-item-sliding>\n  </ion-list>\n  <empty *ngIf="isEmpty"></empty>\n</ion-content>\n'/*ion-inline-end:"/Users/lieon/Desktop/OA_WEBApp/OA_WEBApp/src/pages/attendance-management/staff-attendance-settings/staff-attendance-settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
    ], StaffAttendanceSettingsPage);
    return StaffAttendanceSettingsPage;
}());

//# sourceMappingURL=staff-attendance-settings.js.map

/***/ }),

/***/ 807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffAttendanceSettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StaffAttendanceSettingsService = /** @class */ (function () {
    function StaffAttendanceSettingsService(httpService) {
        this.httpService = httpService;
    }
    StaffAttendanceSettingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */]])
    ], StaffAttendanceSettingsService);
    return StaffAttendanceSettingsService;
}());

//# sourceMappingURL=staff-attendance-settings-service.js.map

/***/ })

});
//# sourceMappingURL=43.js.map