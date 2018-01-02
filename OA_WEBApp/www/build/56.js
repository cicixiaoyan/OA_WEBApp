webpackJsonp([56],{

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffFileMaintenancePageModule", function() { return StaffFileMaintenancePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance__ = __webpack_require__(840);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StaffFileMaintenancePageModule = (function () {
    function StaffFileMaintenancePageModule() {
    }
    StaffFileMaintenancePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance__["a" /* StaffFileMaintenance */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance__["a" /* StaffFileMaintenance */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance__["a" /* StaffFileMaintenance */]]
        })
    ], StaffFileMaintenancePageModule);
    return StaffFileMaintenancePageModule;
}());

//# sourceMappingURL=staff-file-maintenance.module.js.map

/***/ }),

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffFileMaintenance; });
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
 * Generated class for the StaffFileMaintenancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StaffFileMaintenance = (function () {
    function StaffFileMaintenance(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.list = [];
        this.checkBtn = {
            Drafting: false,
            Delivered: true,
            Approved: false,
            HasBeenReturned: false,
            completed: false,
        };
        this.moredata = true;
        this.isEmpty = false;
        this.getList(this.data);
    }
    StaffFileMaintenance.prototype.ionViewDidLoad = function () {
    };
    StaffFileMaintenance.prototype.doRead = function (Params) {
        this.navCtrl.push("StaffFileMaintenanceSet", { "Id": Params, "readOnly": true });
        // let modal = this.modalCtrl.create("MeetingEditPage");
        // modal.present();
        // modal.onDidDismiss(data => {
        //     data && console.log(data);
        // });
    };
    StaffFileMaintenance.prototype.doWrite = function () {
        this.navCtrl.push("StaffFileMaintenanceSet");
    };
    StaffFileMaintenance.prototype.doRefresh = function (refresher) {
        this.list = [];
        this.data.PageIndex = 0;
        this.getList(this.data);
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    StaffFileMaintenance.prototype.doInfinite = function () {
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
    StaffFileMaintenance.prototype.getList = function (data) {
        this.list = [
            {
                "Id": "70",
                "StaffNumber": "070",
                "Name": "刘展志",
                "Sex": "男",
                "FirstEdu": "本科",
                "Dept": "检验科",
                "Indate": "2017-07-03",
            },
            {
                "Id": "69",
                "Name": "姚美英",
                "Dept": "其他",
                "Indate": "2017-07-03",
                "FirstEdu": "高中",
                "Sex": "女",
                "StaffNumber": "069",
            },
            {
                "Id": "68",
                "Name": "卿明月",
                "Dept": "重大传染病防控科",
                "Indate": "2017-07-03",
                "FirstEdu": "高中",
                "Sex": "女",
                "StaffNumber": "068",
            },
        ];
        // this.meetingService.getList(data).subscribe((resJson) => {
        //   if (resJson.Result  &&  resJson.Data.length !== 0 && (resJson.Data instanceof Array)){
        //     this.moredata = true;
        //     this.isEmpty = false;
        //     let list = resJson.Data;
        //     this.list = [...this.list, ...list];
        //   }else{
        //     this.moredata = false;
        //     this.isEmpty = (this.data.PageIndex == 0) ? true : false;
        //   }
        // });
    };
    StaffFileMaintenance = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-staff-file-maintenance',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\staff-file-maintenance\staff-file-maintenance.html"*/`<!--\n  Generated template for the StaffFileMaintenancePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>员工档案维护</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="正在刷新...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ion-list>\n      <ion-item-sliding  *ngFor="let item of list"  (click)="doRead(item.Id)">\n        <ion-item >\n          <ion-avatar item-start><span>{{item.StaffNumber}}</span></ion-avatar>\n          <h2>{{item.Name}}•{{item.Sex}}&emsp;<span float-right>{{item.FirstEdu}}</span></h2>\n          <h3>部门：{{item.Dept}}</h3>\n          <p>{{item.Indate}}入职</p>\n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button color="primary"><ion-icon name="md-trash"></ion-icon>删除</button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n    <empty *ngIf="isEmpty"></empty>\n    <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())" [enabled]="moredata" threshold="100px">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    <ion-fab bottom right>\n        <button ion-fab color="danger" (click)="doWrite()"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n</ion-content>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\staff-file-maintenance\staff-file-maintenance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */]])
    ], StaffFileMaintenance);
    return StaffFileMaintenance;
}());

//# sourceMappingURL=staff-file-maintenance.js.map

/***/ })

});
//# sourceMappingURL=56.js.map