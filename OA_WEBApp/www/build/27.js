webpackJsonp([27],{

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementPageModule", function() { return AnnouncementPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__announcement__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__announcementService__ = __webpack_require__(751);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AnnouncementPageModule = (function () {
    function AnnouncementPageModule() {
    }
    AnnouncementPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__announcement__["a" /* AnnouncementPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__announcement__["a" /* AnnouncementPage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__announcementService__["a" /* AnnouncementService */]]
        })
    ], AnnouncementPageModule);
    return AnnouncementPageModule;
}());

//# sourceMappingURL=announcement.module.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementService; });
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



/**
 * Generated class for the AnnouncementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnnouncementService = (function () {
    function AnnouncementService(httpService) {
        this.httpService = httpService;
        this.announcementStatus = {
            "enter": "录入",
            "published": "已发布",
            "all": "0" // 全部
        };
    }
    AnnouncementService.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login');
    };
    AnnouncementService.prototype.getList = function (param) {
        return this.httpService.postFormData("ashx/Announcement.ashx", param)
            .map(function (res) { return res.json(); });
    };
    AnnouncementService.prototype.detail = function (key) {
        return this.httpService.postFormData("ashx/AnnouncementDetail.ashx", { "attKey": key })
            .map(function (res) { return res.json(); });
    };
    AnnouncementService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */]])
    ], AnnouncementService);
    return AnnouncementService;
}());

//# sourceMappingURL=announcementService.js.map

/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__announcementService__ = __webpack_require__(751);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AnnouncementDetailPage } from './announcement-detail/announcement-detail';

/**
 * Generated class for the AnnouncementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnnouncementPage = (function () {
    function AnnouncementPage(navCtrl, navParams, announcementService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.announcementService = announcementService;
        this.nxPage = "AnnouncementDetailPage";
        this.checkBtn = { "enter": true, "published": false, "all": false };
        //   page: number = 1;
        //   size: number = 1;
        this.moredata = true; // 是否能加载更多
        this.isEmpty = false; // 是否无数据
        this.items = [];
        this.data = {
            "UserId": this.announcementService.httpService.globalData.Uid,
            "PageIndex": 0,
            "PageSize": 10,
            "Status": this.announcementService.announcementStatus["enter"]
        };
        this.initializeItems();
    }
    AnnouncementPage.prototype.initializeItems = function () {
        this.getList();
    };
    AnnouncementPage.prototype.doRefresh = function (refresher) {
        this.data.PageIndex = 0;
        this.initializeItems();
        setTimeout(function () {
            console.log('数据加载完成');
            refresher.complete();
        }, 1000);
    };
    AnnouncementPage.prototype.doInfinite = function () {
        if (this.moredata) {
            this.data.PageIndex++;
            this.getList();
        }
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve();
            }, 500);
        });
    };
    // 选择录入、已发布、全部
    AnnouncementPage.prototype.checkRead = function (name) {
        if (name === void 0) { name = "enter"; }
        this.data.PageIndex = 0;
        this.items = [];
        this.checkBtn = { "enter": false, "published": false, "all": false };
        this.checkBtn[name] = true;
        if (name === "enter") {
            // 参数设置
            this.data.Status = this.announcementService.announcementStatus["enter"];
        }
        else if (name === "published") {
            // 参数设置
            this.data.Status = this.announcementService.announcementStatus["published"];
        }
        else {
            // 参数设置
            this.data.Status = this.announcementService.announcementStatus["all"];
        }
        this.getList();
    };
    AnnouncementPage.prototype.getList = function () {
        var _this = this;
        this.announcementService.getList(this.data).subscribe(function (resJson) {
            if (resJson.Result && resJson.Data.length !== 0 && typeof (resJson.Data) !== "string") {
                _this.moredata = true;
                _this.isEmpty = false;
                var list = resJson.Data;
                _this.items = _this.items.concat(list);
            }
            else {
                _this.moredata = false;
                _this.isEmpty = _this.data.PageIndex == 0 ? true : false;
            }
        });
        //   return this.httpService.postFormData("ashx/Notice.ashx/noticeall", data).map(Response => Response.json());
    };
    AnnouncementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Notice');
    };
    AnnouncementPage.prototype.itemSelected = function () {
    };
    AnnouncementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-announcement',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\announcement\announcement.html"*/`<!--\n  Generated template for the AnnouncementPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <ion-title>公告管理</ion-title>\n  </ion-navbar>\n\n  <div class="subbox">\n    <div >\n        <button ion-button small (click)="checkRead(\'enter\')" class="button-ios-light" [ngClass]="{\'button-ios-calm\':checkBtn.enter}">录入</button>\n        <button ion-button small (click)="checkRead(\'published\')" class="button-ios-light" [ngClass]="{\'button-ios-calm\':checkBtn.published}">已发布</button>\n        <button ion-button small (click)="checkRead(\'all\')" class="button-ios-light" [ngClass]="{\'button-ios-calm\':checkBtn.all}">全部</button>\n    </div>\n  </div>\n  <!-- <ion-searchbar color="dark" type="text" placeholder="请输入关键字" [(ngModel)]="searchKey"\n   [showCancelButton]="true" cancelButtonText="搜索" (ionCancel)="search($event)"></ion-searchbar> -->\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n      <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="正在刷新...">\n      </ion-refresher-content>\n  </ion-refresher>\n  <ion-list inset style="margin:16px 0;">\n      <button ion-item *ngFor="let item of items" [navPush]="nxPage" [navParams]="{item:item}">\n          <span>[{{item.AnnouncementType}}]{{item.AnnouncementTitle}}</span>\n          <p>{{item.AnnouncementPublishPerson}}&emsp;{{item.AnnouncementPublishDate|date:"yyyy年MM月dd日 HH时mm分"}}</p>\n      </button>\n  </ion-list>\n  <div *ngIf="isEmpty" text-center padding style="font-size:.9em;">\n      <div padding>暂无公告！！！</div>\n      <img src="assets/img/face/face2.png" height="100">\n  </div>\n  <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())" [enabled]="moredata" threshold="100px">\n      <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中..."></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\announcement\announcement.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__announcementService__["a" /* AnnouncementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__announcementService__["a" /* AnnouncementService */]) === "function" && _c || Object])
    ], AnnouncementPage);
    return AnnouncementPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=announcement.js.map

/***/ })

});
//# sourceMappingURL=27.js.map