webpackJsonp([16],{

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingSearchPageModule", function() { return MeetingSearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meeting_search__ = __webpack_require__(852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__meeting_service__ = __webpack_require__(776);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MeetingSearchPageModule = (function () {
    function MeetingSearchPageModule() {
    }
    MeetingSearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__meeting_search__["a" /* MeetingSearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__meeting_search__["a" /* MeetingSearchPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__meeting_search__["a" /* MeetingSearchPage */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__meeting_service__["a" /* MeetingService */]]
        })
    ], MeetingSearchPageModule);
    return MeetingSearchPageModule;
}());

//# sourceMappingURL=meeting-search.module.js.map

/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MeetingService = (function () {
    function MeetingService(httpService) {
        this.httpService = httpService;
        this.meetingStatus = {
            Drafting: "起草中",
            Delivered: "送审中",
            Approved: "已审批",
            HasBeenReturned: "已退回",
            completed: "已完成",
        };
    }
    MeetingService.prototype.getList = function (param) {
        return this.httpService.postFormData("ashx/MeetLs.ashx", param).map(function (res) { return res.json(); });
    };
    MeetingService.prototype.write = function (param) {
        return this.httpService.postFormData("ashx/MeetAdd.ashx", param).map(function (res) { return res.json(); });
    };
    MeetingService.prototype.read = function (param) {
        return this.httpService.postFormData("ashx/MeetDetail.ashx", param).map(function (res) { return res.json(); });
    };
    MeetingService.prototype.mod = function (param) {
        return this.httpService.postFormData("ashx/MeetMod.ashx", param).map(function (res) { return res.json(); });
    };
    MeetingService.prototype.MeetPlaceLs = function () {
        return this.httpService.postFormData("ashx/MeetPlaceLs.ashx", {}).map(function (res) { return res.json(); });
    };
    MeetingService.prototype.MeetTypeLs = function () {
        return this.httpService.postFormData("ashx/MeetTypeLs.ashx", {}).map(function (res) { return res.json(); });
    };
    MeetingService.prototype.GetMeetingPlaceAndType = function () {
        var MeetPlaceLs = this.httpService.postFormData("ashx/MeetPlaceLs.ashx", {}).map(function (res) { return res.json(); });
        var MeetTypeLs = this.httpService.postFormData("ashx/MeetTypeLs.ashx", {}).map(function (res) { return res.json(); });
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].forkJoin([MeetPlaceLs, MeetTypeLs]);
    };
    MeetingService.prototype.GetDeptLs = function () {
        return this.httpService.postFormData("ashx/BmLs.ashx", {}).map(function (res) { return res.json(); });
    };
    MeetingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_HttpService__["a" /* HttpService */]])
    ], MeetingService);
    return MeetingService;
}());

//# sourceMappingURL=meeting_service.js.map

/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetingSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meeting_service__ = __webpack_require__(776);
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
 * Generated class for the MeetingSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MeetingSearchPage = (function () {
    function MeetingSearchPage(navCtrl, navParams, modalCtrl, meetingService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.meetingService = meetingService;
        this.checkBtn = {
            Drafting: false,
            Delivered: true,
            Approved: false,
            HasBeenReturned: false,
            completed: false,
        };
        this.moredata = true;
        this.isEmpty = false;
        this.searchKey = "";
        this.data = {
            "status": this.meetingService.meetingStatus["Delivered"],
            "uid": this.meetingService.httpService.globalData.Uid,
            "PageIndex": 0,
            "PageSize": 8
        };
        this.list = [
            {}
        ];
        // this.getList(this.data);
    }
    MeetingSearchPage.prototype.ionViewDidLoad = function () {
    };
    // 选择状态
    MeetingSearchPage.prototype.checkRead = function (name) {
        if (name === void 0) { name = "Delivered"; }
        this.data.PageIndex = 0;
        this.list = [];
        this.checkBtn = { Drafting: false, Delivered: false, Approved: false,
            HasBeenReturned: false, completed: false,
        };
        this.checkBtn[name] = true;
        this.data.status = this.meetingService.meetingStatus[name];
        console.log(this.data);
        this.getList(this.data);
    };
    MeetingSearchPage.prototype.doRead = function (Params) {
        this.navCtrl.push("MeetingEditPage", { "Id": Params });
    };
    MeetingSearchPage.prototype.search = function (e) {
    };
    MeetingSearchPage.prototype.doRefresh = function (refresher) {
        this.list = [];
        this.data.PageIndex = 0;
        this.getList(this.data);
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    MeetingSearchPage.prototype.doInfinite = function () {
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
    MeetingSearchPage.prototype.getList = function (data) {
        var _this = this;
        this.meetingService.getList(data).subscribe(function (resJson) {
            if (resJson.Result && resJson.Data.length !== 0 && (resJson.Data instanceof Array)) {
                _this.moredata = true;
                _this.isEmpty = false;
                var list = resJson.Data;
                _this.list = _this.list.concat(list);
                console.log(_this.list);
            }
            else {
                _this.moredata = false;
                _this.isEmpty = (_this.data.PageIndex == 0) ? true : false;
            }
        });
    };
    MeetingSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-meeting-search',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\meeting\meeting-search\meeting-search.html"*/`<!--\n  Generated template for the MeetingSearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>会议查询</ion-title>\n  </ion-navbar>\n  <ion-searchbar color="dark" type="text" placeholder="请输入会议主题" [(ngModel)]="searchKey"\n  [showCancelButton]="true" cancelButtonText="搜索" (ionCancel)="search($event)"></ion-searchbar>\n  <div  class="subbox">\n      <div >\n          <button ion-button small (click)="checkRead(\'Drafting\')" class="button-ios-light" [ngClass]="{\'button-ios-calm\':checkBtn.Drafting}">起草中</button>\n          <button ion-button small (click)="checkRead(\'Delivered\')" class="button-ios-light" [ngClass]="{\'button-ios-calm\':checkBtn.Delivered}">送审中</button>\n          <button ion-button small (click)="checkRead(\'Approved\')" class="button-ios-light" [ngClass]="{\'button-ios-calm\':checkBtn.Approved}">已审批</button>\n          <button ion-button small (click)="checkRead(\'HasBeenReturned\')" class="button-ios-light" [ngClass]="{\'button-ios-calm\':checkBtn.HasBeenReturned}">已退回</button>\n          <button ion-button small (click)="checkRead(\'completed\')" class="button-ios-light" [ngClass]="{\'button-ios-calm\':checkBtn.completed}">已完成</button>\n      </div>\n    </div>\n</ion-header>\n\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="正在刷新...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ion-list>\n      <ion-item-sliding *ngFor="let meeting of list"  (click)="doRead(meeting.Id)">\n          <ion-item>\n              <span>{{meeting.Title}}</span>\n              <p class="font-12">地点:{{meeting.Place}}&emsp;{{meeting.StartDate}}</p>\n          </ion-item>\n      </ion-item-sliding>\n    </ion-list>\n    <div *ngIf="isEmpty" text-center padding style="font-size:.9em;">\n        <div padding>暂无消息数据！！！</div>\n        <img src="assets/img/face/face2.png" height="100">\n    </div>\n    <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())" [enabled]="moredata" threshold="100px">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\meeting\meeting-search\meeting-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__meeting_service__["a" /* MeetingService */]])
    ], MeetingSearchPage);
    return MeetingSearchPage;
}());

//# sourceMappingURL=meeting-search.js.map

/***/ })

});
//# sourceMappingURL=16.js.map