webpackJsonp([19],{

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingMaintenancePageModule", function() { return TrainingMaintenancePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__training_maintenance__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__training_maintenance_service__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TrainingMaintenancePageModule = (function () {
    function TrainingMaintenancePageModule() {
    }
    TrainingMaintenancePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__training_maintenance__["a" /* TrainingMaintenancePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__training_maintenance__["a" /* TrainingMaintenancePage */]),
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__training_maintenance__["a" /* TrainingMaintenancePage */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__training_maintenance_service__["a" /* TrainingMaintenanceService */]]
        })
    ], TrainingMaintenancePageModule);
    return TrainingMaintenancePageModule;
}());

//# sourceMappingURL=training-maintenance.module.js.map

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingMaintenanceService; });
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



var TrainingMaintenanceService = (function () {
    function TrainingMaintenanceService(httpService) {
        this.httpService = httpService;
    }
    TrainingMaintenanceService.prototype.getList = function (param) {
        return this.httpService.postFormData("ashx/MeetLs.ashx", param).map(function (res) { return res.json(); });
    };
    TrainingMaintenanceService.prototype.write = function (param) {
        return this.httpService.postFormData("ashx/MeetLs.ashx", param).map(function (res) { return res.json(); });
    };
    TrainingMaintenanceService.prototype.read = function (param) {
        return this.httpService.postFormData("ashx/MeetLs.ashx", param).map(function (res) { return res.json(); });
    };
    TrainingMaintenanceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */]])
    ], TrainingMaintenanceService);
    return TrainingMaintenanceService;
}());

//# sourceMappingURL=training-maintenance_service.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingMaintenancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__training_maintenance_service__ = __webpack_require__(762);
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
 * Generated class for the TrainingMaintenancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrainingMaintenancePage = (function () {
    function TrainingMaintenancePage(navCtrl, navParams, popoverCtrl, trainingMaintenanceService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.trainingMaintenanceService = trainingMaintenanceService;
        this.list = [];
        this.moredata = true;
        this.isEmpty = false;
        this.data = {
            "uid": this.trainingMaintenanceService.httpService.globalData.Uid,
            "PageIndex": 0,
            "PageSize": 8
        };
        this.getList(this.data);
    }
    TrainingMaintenancePage.prototype.ionViewDidLoad = function () {
    };
    TrainingMaintenancePage.prototype.presentPopover = function (myEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create("TrainingMaintenanceSearch", { "search": this.search });
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(function (search) {
            console.log(search);
            if (search) {
                _this.search = search.search;
                var data = search.search;
                data.uid = _this.trainingMaintenanceService.httpService.globalData.Uid;
                data.PageIndex = 0;
                data.PageSize = 8;
                _this.getList(data);
            }
        });
    };
    TrainingMaintenancePage.prototype.doRead = function (Params) {
        this.navCtrl.push("TrainingMaintenanceSetPage", { "Id": Params });
    };
    TrainingMaintenancePage.prototype.doWrite = function () {
        this.navCtrl.push("TrainingMaintenanceSetPage");
        // let modal = this.modalCtrl.create("TrainingMaintenanceSetPage");
        // modal.present();
        // modal.onDidDismiss(data => {
        //     data && console.log(data);
        // });
    };
    TrainingMaintenancePage.prototype.doRefresh = function (refresher) {
        this.list = [];
        this.data.PageIndex = 1;
        this.getList(this.data);
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    TrainingMaintenancePage.prototype.doInfinite = function () {
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
    TrainingMaintenancePage.prototype.getList = function (data) {
        this.list = [
            {
                Id: "1",
                Title: "dfwsef",
                StartDate: '2017-12-05',
                EndDate: '2017-12-05',
                Object: '',
                Instructor: '李老师',
                Place: '222'
            },
            {
                Id: "2",
                Title: "dfwsef",
                StartDate: '2017-12-05',
                EndDate: '2017-12-05',
                Object: '',
                Instructor: '李老师',
                Place: ''
            },
        ];
        // this.trainingMaintenanceService.getList(data).subscribe((resJson) => {
        //   if (resJson.Result  &&  resJson.Data.length !== 0 && (resJson.Data instanceof Array)){
        //     this.moredata = true;
        //     this.isEmpty = false;
        //     let list = resJson.Data;
        //     this.list = [...this.list, ...list];
        //   }else{
        //     this.moredata = false;
        //     this.isEmpty = (this.data.PageIndex == 1) ? true : false;
        //   }
        // });
    };
    TrainingMaintenancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-training-maintenance',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\training-maintenance\training-maintenance.html"*/`<!--\n  Generated template for the TrainingMaintenancePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>培训维护</ion-title>\n    <ion-buttons end  (click)="presentPopover($event)">\n        <button ion-button icon-only>\n          <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="正在刷新...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ion-list>\n      <ion-item-sliding *ngFor="let train of list"  (click)="doRead(train.Id)">\n          <ion-item>\n              <span>{{train.Title}}</span>\n              <div class="small">讲师：{{train.Instructor}}</div>\n              <p class="small" *ngIf="train.Place !== \'\'">地点：{{train.Place}}</p>\n              <p class="small">时间：{{train.StartDate}}&nbsp;~&nbsp;{{train.EndDate}}</p>\n          </ion-item>\n      </ion-item-sliding>\n    </ion-list>\n    <empty *ngIf="isEmpty"></empty>\n    <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())" [enabled]="moredata" threshold="100px">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    <ion-fab bottom right>\n        <button ion-fab color="danger" (click)="doWrite()"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n</ion-content>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\training-maintenance\training-maintenance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__training_maintenance_service__["a" /* TrainingMaintenanceService */]])
    ], TrainingMaintenancePage);
    return TrainingMaintenancePage;
}());

//# sourceMappingURL=training-maintenance.js.map

/***/ })

});
//# sourceMappingURL=19.js.map