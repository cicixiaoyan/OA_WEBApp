webpackJsonp([58],{

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffFileMaintenanceSocialRelationshipPageModule", function() { return StaffFileMaintenanceSocialRelationshipPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_social_relationship__ = __webpack_require__(838);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StaffFileMaintenanceSocialRelationshipPageModule = (function () {
    function StaffFileMaintenanceSocialRelationshipPageModule() {
    }
    StaffFileMaintenanceSocialRelationshipPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_social_relationship__["a" /* StaffFileMaintenanceSocialRelationship */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_social_relationship__["a" /* StaffFileMaintenanceSocialRelationship */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_social_relationship__["a" /* StaffFileMaintenanceSocialRelationship */]]
        })
    ], StaffFileMaintenanceSocialRelationshipPageModule);
    return StaffFileMaintenanceSocialRelationshipPageModule;
}());

//# sourceMappingURL=staff-file-maintenance-social-relationship.module.js.map

/***/ }),

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffFileMaintenanceSocialRelationship; });
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
 * Generated class for the StaffFileMaintenanceSocialRelationshipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StaffFileMaintenanceSocialRelationship = (function () {
    function StaffFileMaintenanceSocialRelationship(navCtrl, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.getList();
    }
    StaffFileMaintenanceSocialRelationship.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StaffFileMaintenanceSocialRelationshipPage');
    };
    StaffFileMaintenanceSocialRelationship.prototype.add = function () {
        var modal = this.modalCtrl.create("StaffFileMaintenanceSocialRelationshipAddPage");
        modal.present();
        modal.onDidDismiss(function (data) {
            data && console.log(data);
        });
    };
    StaffFileMaintenanceSocialRelationship.prototype.doRead = function (id) {
        var parma = {
            "Id": id,
            "readOnly": (this.navParams.get("readOnly") ? true : null)
        };
        var modal = this.modalCtrl.create("StaffFileMaintenanceSocialRelationshipAddPage", parma);
        modal.present();
        modal.onDidDismiss(function (data) {
            data && console.log(data);
        });
    };
    StaffFileMaintenanceSocialRelationship.prototype.getList = function () {
        this.list = [
            {
                'Id': '1',
                'Name': '父亲',
                'Relationship': '父子',
                'Mobile': '1311111111',
            },
            {
                'Id': '2',
                'Name': '母亲',
                'Relationship': '母子',
                'Mobile': '1311111111'
            },
        ];
    };
    StaffFileMaintenanceSocialRelationship = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-staff-file-maintenance-social-relationship',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\staff-file-maintenance\staff-file-maintenance-social-relationship\staff-file-maintenance-social-relationship.html"*/`<!--\n  Generated template for the StaffFileMaintenanceSocialRelationshipPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>社会关系</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="正在刷新...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ion-list>\n      <ion-item-sliding *ngFor="let item of list"  (click)="doRead(item.Id)">\n        <ion-item  >\n          <h2>{{item.Name}}<span float-right color="royal">{{item.Relationship}}</span></h2>\n          <p>{{item.Mobile}}</p>\n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button color="primary"><ion-icon name="md-trash"></ion-icon>删除</button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n    <div text-center>\n        <button (click)="add()" icon-left ion-button color="secondary" small outline round><ion-icon name="add"></ion-icon>添加</button>\n    </div>\n</ion-content>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\staff-file-maintenance\staff-file-maintenance-social-relationship\staff-file-maintenance-social-relationship.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
    ], StaffFileMaintenanceSocialRelationship);
    return StaffFileMaintenanceSocialRelationship;
}());

//# sourceMappingURL=staff-file-maintenance-social-relationship.js.map

/***/ })

});
//# sourceMappingURL=58.js.map