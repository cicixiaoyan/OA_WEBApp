webpackJsonp([40],{

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffFileMaintenanceSetPageModule", function() { return StaffFileMaintenanceSetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_set__ = __webpack_require__(789);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StaffFileMaintenanceSetPageModule = (function () {
    function StaffFileMaintenanceSetPageModule() {
    }
    StaffFileMaintenanceSetPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_set__["a" /* StaffFileMaintenanceSet */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_set__["a" /* StaffFileMaintenanceSet */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_set__["a" /* StaffFileMaintenanceSet */]]
        })
    ], StaffFileMaintenanceSetPageModule);
    return StaffFileMaintenanceSetPageModule;
}());

//# sourceMappingURL=staff-file-maintenance-set.module.js.map

/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffFileMaintenanceSet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
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
 * Generated class for the StaffFileMaintenanceSetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StaffFileMaintenanceSet = (function () {
    function StaffFileMaintenanceSet(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = "StaffFileMaintenanceBasicImfornation";
        this.tab2Root = "StaffFileMaintenanceWorkExperience";
        this.tab3Root = "StaffFileMaintenanceSocialRelationship";
        this.tab4Root = "StaffFileMaintenanceEducation";
    }
    StaffFileMaintenanceSet.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StaffFileMaintenanceSetPage');
    };
    StaffFileMaintenanceSet = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-staff-file-maintenance-set',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\staff-file-maintenance\staff-file-maintenance-set\staff-file-maintenance-set.html"*/`<ion-header>\n    <ion-navbar>\n        <ion-title>员工档案维护</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-tabs  #myTabs tabsPlacement="top" name="staff-file-maintemance-tab">\n    <ion-tab [root]="tab1Root" tabTitle="基本资料" tabIcon="ios-home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="工作经历" tabIcon="ios-mail"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="社会关系" tabIcon="ios-notifications"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="教育经历" tabIcon="ios-settings"></ion-tab>\n</ion-tabs>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\staff-file-maintenance\staff-file-maintenance-set\staff-file-maintenance-set.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
    ], StaffFileMaintenanceSet);
    return StaffFileMaintenanceSet;
}());

//# sourceMappingURL=staff-file-maintenance-set.js.map

/***/ })

});
//# sourceMappingURL=40.js.map