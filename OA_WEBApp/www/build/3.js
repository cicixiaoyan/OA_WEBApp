webpackJsonp([3],{

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmsPageModule", function() { return SmsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sms__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__smsService__ = __webpack_require__(773);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SmsPageModule = (function () {
    function SmsPageModule() {
    }
    SmsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sms__["a" /* SmsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sms__["a" /* SmsPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__sms__["a" /* SmsPage */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__smsService__["a" /* SmsService */]]
        })
    ], SmsPageModule);
    return SmsPageModule;
}());

//# sourceMappingURL=sms.module.js.map

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmsService; });
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



var SmsService = (function () {
    function SmsService(httpService) {
        this.httpService = httpService;
        this.smsStatus = {
            "sent": 1,
            "toBeSent": 0,
        };
    }
    SmsService.prototype.getList = function (param) {
        // PageIndex, PageSize, UserId, Status
        return this.httpService.postFormData("ashx/Smsls.ashx", param).map(function (res) { return res.json(); });
    };
    SmsService.prototype.write = function (param) {
        // IsTimer, SendDate, UserId, Content, CellPhone
        return this.httpService.postFormData("ashx/SmsAdd.ashx", param).map(function (res) { return res.json(); });
    };
    SmsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */]])
    ], SmsService);
    return SmsService;
}());

//# sourceMappingURL=smsService.js.map

/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_GlobalData__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__smsService__ = __webpack_require__(773);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { SmsReadPage } from '../sms/sms-read/sms-read';
// import { SmsWritePage } from '../sms/sms-write/sms-write';

/**
 * Generated class for the SmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SmsPage = (function () {
    function SmsPage(navCtrl, navParams, globalData, modalCtrl, smsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalData = globalData;
        this.modalCtrl = modalCtrl;
        this.smsService = smsService;
        this.box = "inbox";
        this.isSent = true; // 默认为已发送
        this.isEmpty = false;
        this.list = [];
        this.moredata = true;
        this.list = [];
        this.data = {
            "PageSize": 5,
            "PageIndex": 0,
            "Uid": this.globalData.Uid,
            "Status": this.smsService.smsStatus["sent"],
        };
        this.initializeItems();
    }
    SmsPage.prototype.initializeItems = function () {
        var _this = this;
        this._getList(this.data);
        setInterval(function () {
            _this.getNewList(_this.data);
        }, 50000);
    };
    SmsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Mail');
    };
    SmsPage.prototype.checkRead = function (bol) {
        if (bol === void 0) { bol = false; }
        this.data.PageIndex = 0;
        this.list = [];
        if (bol) {
            this.isSent = true;
            this.data.Status = this.smsService.smsStatus["sent"];
        }
        else {
            this.isSent = false;
            this.data.Status = this.smsService.smsStatus["toBeSent"];
        }
        this._getList(this.data);
    };
    SmsPage.prototype.doRead = function (parma) {
        this.navCtrl.push("SmsReadPage", { "Params": parma });
    };
    SmsPage.prototype.doWrite = function () {
        var _this = this;
        var modal = this.modalCtrl.create("SmsWritePage");
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data.isRefresh) {
                _this.doRefresh();
            }
        });
        // this.navCtrl.push(MailWrite);
    };
    SmsPage.prototype.doRefresh = function (refresher) {
        console.log("加载更多");
        // this.initializeItems();
        this.moredata = true;
        this.list = [];
        this.data.PageIndex = 0;
        this._getList(this.data);
        setTimeout(function () {
            console.log('数据加载完成');
            refresher.complete();
        }, 1000);
    };
    SmsPage.prototype.doInfinite = function () {
        if (this.moredata) {
            this.data.PageIndex++;
            this._getList(this.data);
        }
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve();
            }, 500);
        });
    };
    SmsPage.prototype.getNewList = function (data) {
        var _this = this;
        data.PageIndex = 0;
        this.smsService.getList(data).subscribe(function (list) {
            if (list.Result == true) {
                var arr = list.Data.filter(function (item) {
                    return item.Id !== _this.list[0].Id;
                });
                if (arr !== []) {
                    _this.list = _this.list.concat(arr);
                }
            }
        });
    };
    SmsPage.prototype._getList = function (inboxData) {
        var _this = this;
        this.smsService.getList(inboxData).subscribe(function (resJson) {
            if (resJson.Result && resJson.Data.length !== 0 && typeof (resJson.Data) !== "string") {
                var list = resJson.Data;
                _this.list = _this.list.concat(list);
            }
            else {
                _this.moredata = false;
                if (_this.data.PageIndex === 0) {
                    _this.smsService.httpService.nativeService.showToast(resJson.Data);
                    _this.list = [];
                }
            }
        });
    };
    SmsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sms',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\sms\sms.html"*/`<!--\n  Generated template for the SmsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>短信</ion-title>\n  </ion-navbar>\n    <div class="subbox">\n        <div>\n            <button ion-button small (click)="checkRead(true)" class="button-ios-light" [ngClass]="{\'button-ios-calm\':isSent}">已发送</button>\n            <button ion-button small (click)="checkRead()" class="button-ios-light" [ngClass]="{\'button-ios-calm\':!isSent}">待发送</button>\n        </div>\n    </div>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="正在刷新...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ion-list>\n        <ion-item-sliding *ngFor="let sms of list" (click)="doRead(sms)">\n            <ion-item>\n                <!-- <ion-avatar item-left>\n                    <img src="assets/img/mike.png">\n                </ion-avatar> -->\n                <span style="color:#2196F3;" *ngIf="sms.Status==0">●&nbsp;</span><span>{{sms.SmsMsg}}</span>\n                <p class="font-12">发至:{{sms.AccessNumber}}&emsp;{{sms.SendDate|date:"yyyy年MM月dd日 HH时mm分"}}</p>\n            </ion-item>\n            <ion-item-options side="right">\n                <button ion-button color="primary">\n                    <ion-icon name="md-trash"></ion-icon>删除\n                </button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n    <div *ngIf="isEmpty" text-center padding style="font-size:.9em;">\n        <div padding>暂无消息数据！！！</div>\n        <img src="assets/img/face/face2.png" height="100">\n    </div>\n    <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())" [enabled]="moredata" threshold="100px">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    <ion-fab bottom right>\n        <button ion-fab color="danger" (click)="doWrite()"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n</ion-content>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\sms\sms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_GlobalData__["a" /* GlobalData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__smsService__["a" /* SmsService */]])
    ], SmsPage);
    return SmsPage;
}());

//# sourceMappingURL=sms.js.map

/***/ })

});
//# sourceMappingURL=3.js.map