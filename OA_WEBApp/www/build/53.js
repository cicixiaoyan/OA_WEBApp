webpackJsonp([53],{

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffFileMaintenanceEducationPageModule", function() { return StaffFileMaintenanceEducationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_education__ = __webpack_require__(822);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StaffFileMaintenanceEducationPageModule = (function () {
    function StaffFileMaintenanceEducationPageModule() {
    }
    StaffFileMaintenanceEducationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_education__["a" /* StaffFileMaintenanceEducation */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_education__["a" /* StaffFileMaintenanceEducation */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_education__["a" /* StaffFileMaintenanceEducation */]]
        })
    ], StaffFileMaintenanceEducationPageModule);
    return StaffFileMaintenanceEducationPageModule;
}());

//# sourceMappingURL=staff-file-maintenance-education.module.js.map

/***/ }),

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffFileMaintenanceEducation; });
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


/**
 * Generated class for the StaffFileMaintenanceEducationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StaffFileMaintenanceEducation = (function () {
    function StaffFileMaintenanceEducation(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.list = [];
        this.isShowAdd = true;
        this.getList();
    }
    StaffFileMaintenanceEducation.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StaffFileMaintenanceWorkExperiencePage');
    };
    StaffFileMaintenanceEducation.prototype.add = function () {
        var modal = this.modalCtrl.create("StaffFileMaintenanceEducationAddPage");
        modal.present();
        modal.onDidDismiss(function (data) {
            data && console.log(data);
        });
    };
    StaffFileMaintenanceEducation.prototype.doRead = function (id) {
        var parma = {
            "Id": id,
            "readOnly": (this.navParams.get("readOnly") ? true : null)
        };
        var modal = this.modalCtrl.create("StaffFileMaintenanceEducationAddPage", parma);
        modal.present();
        modal.onDidDismiss(function (data) {
            data && console.log(data);
        });
    };
    StaffFileMaintenanceEducation.prototype.getList = function () {
        this.list = [
            {
                "Id": '1',
                'StartDate': '2017-08-08',
                'EndDate': '2017-08-08',
                'School': '我是学校1',
                'Major': '专业1',
                'Remarks': '我是备注'
            },
            {
                "Id": '2',
                'StartDate': '2017-08-08',
                'EndDate': '2017-08-08',
                'School': '我是学校2',
                'Major': '专业1',
                'Remarks': ''
            },
        ];
    };
    StaffFileMaintenanceEducation = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-staff-file-maintenance-education',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\staff-file-maintenance\staff-file-maintenance-education\staff-file-maintenance-education.html"*/`<!--\n  Generated template for the StaffFileMaintenanceEducationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    \n      <ion-navbar>\n        <ion-title>教育经历</ion-title>\n      </ion-navbar>\n    \n    </ion-header>\n    \n    \n    <ion-content>\n        <ion-refresher (ionRefresh)="doRefresh($event)">\n            <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="正在刷新...">\n            </ion-refresher-content>\n        </ion-refresher>\n        <ion-list>\n            <ion-item-sliding   *ngFor="let item of list"  (click)="doRead(item.Id)">\n              <ion-item>\n                <h3>{{item.StartDate}}~{{item.EndDate}}</h3>\n                <h2>{{item.Major}}|{{item.School}}</h2>\n                <p *ngIf="item.Remarks !== \'\'">{{item.Remarks}}</p>\n                <ion-icon name="arrow-forward" item-end color="stable"></ion-icon>\n              </ion-item>\n              <ion-item-options side="right">\n                <button ion-button color="primary"><ion-icon name="md-trash"></ion-icon>删除</button>\n              </ion-item-options>\n            </ion-item-sliding>\n          </ion-list>\n        <div text-center>\n            <button (click)="add()" icon-left ion-button color="secondary" small outline round><ion-icon name="add"></ion-icon>添加</button>\n        </div>\n    </ion-content>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\staff-file-maintenance\staff-file-maintenance-education\staff-file-maintenance-education.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */]])
    ], StaffFileMaintenanceEducation);
    return StaffFileMaintenanceEducation;
}());

//# sourceMappingURL=staff-file-maintenance-education.js.map

/***/ })

});
//# sourceMappingURL=53.js.map