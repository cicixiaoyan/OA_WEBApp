webpackJsonp([37],{

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffFileMaintenanceWorkExperiencePageModule", function() { return StaffFileMaintenanceWorkExperiencePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_work_experience__ = __webpack_require__(792);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StaffFileMaintenanceWorkExperiencePageModule = (function () {
    function StaffFileMaintenanceWorkExperiencePageModule() {
    }
    StaffFileMaintenanceWorkExperiencePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_work_experience__["a" /* StaffFileMaintenanceWorkExperience */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_work_experience__["a" /* StaffFileMaintenanceWorkExperience */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_work_experience__["a" /* StaffFileMaintenanceWorkExperience */]]
        })
    ], StaffFileMaintenanceWorkExperiencePageModule);
    return StaffFileMaintenanceWorkExperiencePageModule;
}());

//# sourceMappingURL=staff-file-maintenance-work-experience.module.js.map

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffFileMaintenanceWorkExperience; });
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
 * Generated class for the StaffFileMaintenanceWorkExperiencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StaffFileMaintenanceWorkExperience = (function () {
    function StaffFileMaintenanceWorkExperience(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    StaffFileMaintenanceWorkExperience.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StaffFileMaintenanceWorkExperiencePage');
    };
    StaffFileMaintenanceWorkExperience.prototype.add = function () {
        var modal = this.modalCtrl.create("StaffFileMaintenanceWorkExperienceAdd");
        modal.present();
        modal.onDidDismiss(function (data) {
            data && console.log(data);
        });
    };
    StaffFileMaintenanceWorkExperience = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-staff-file-maintenance-work-experience',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\staff-file-maintenance\staff-file-maintenance-work-experience\staff-file-maintenance-work-experience.html"*/`<!--\n  Generated template for the StaffFileMaintenanceWorkExperiencePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>工作经历</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n        <ion-item-sliding>\n          <ion-item  *ngFor="let item of list"  (click)="doRead(item.Id)">\n            <h3>2017-12-18~2017-12-04</h3>\n            <h2>工商管理</h2>\n            <p>我是工作单位我是工作</p>\n          </ion-item>\n          <ion-item-options side="right">\n            <button ion-button color="primary"><ion-icon name="md-trash"></ion-icon>删除</button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n      <div text-center>\n          <button (click)="add()" icon-left ion-button color="secondary" small outline round><ion-icon name="home"></ion-icon>添加</button>\n      </div>\n</ion-content>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\staff-file-maintenance\staff-file-maintenance-work-experience\staff-file-maintenance-work-experience.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */]) === "function" && _c || Object])
    ], StaffFileMaintenanceWorkExperience);
    return StaffFileMaintenanceWorkExperience;
    var _a, _b, _c;
}());

//# sourceMappingURL=staff-file-maintenance-work-experience.js.map

/***/ })

});
//# sourceMappingURL=37.js.map