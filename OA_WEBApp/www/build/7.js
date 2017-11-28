webpackJsonp([7],{

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingPageModule", function() { return MeetingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meeting__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__meeting_service__ = __webpack_require__(743);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MeetingPageModule = (function () {
    function MeetingPageModule() {
    }
    MeetingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__meeting__["a" /* MeetingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__meeting__["a" /* MeetingPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__meeting__["a" /* MeetingPage */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__meeting_service__["a" /* MeetingService */]]
        })
    ], MeetingPageModule);
    return MeetingPageModule;
}());

//# sourceMappingURL=meeting.module.js.map

/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(88);
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
            Drafting: 1,
            Delivered: 2,
            Approved: 3,
            HasBeenReturned: 4,
            completed: 5,
        };
    }
    MeetingService.prototype.getList = function (param) {
        console.log(12, param);
        return this.httpService.postFormData("ashx/MailList.ashx", param).map(function (res) { return res.json(); });
    };
    MeetingService.prototype.read = function (id) {
        return this.httpService.postFormData("ashx/MailList.ashx", { "id": id }).map(function (res) { return res.json(); });
    };
    MeetingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */]])
    ], MeetingService);
    return MeetingService;
}());

//# sourceMappingURL=meeting_service.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meeting_service__ = __webpack_require__(743);
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
 * Generated class for the MeetingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MeetingPage = (function () {
    function MeetingPage(navCtrl, navParams, meetingService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
        this.data = {
            Status: this.meetingService.meetingStatus["Delivered"],
            Uid: this.meetingService.httpService.globalData.Uid,
            PageIndex: 1,
            PageSize: 8
        };
        this.getList(this.data);
    }
    MeetingPage.prototype.ionViewDidLoad = function () {
    };
    // 选择已读、未读、全部
    MeetingPage.prototype.checkRead = function (name) {
        if (name === void 0) { name = "read"; }
        this.data.PageIndex = 1;
        this.list = [];
        this.checkBtn = { Drafting: false, Delivered: false, Approved: false,
            HasBeenReturned: false, completed: false,
        };
        this.checkBtn[name] = true;
        this.data.Status = this.meetingService.meetingStatus[name];
        this.getList(this.data);
    };
    MeetingPage.prototype.doRefresh = function (refresher) {
        console.log("加载更多");
        // this.initializeItems();
        this.list = [];
        this.data.PageIndex = 1;
        this.getList(this.data);
        setTimeout(function () {
            console.log('数据加载完成');
            refresher.complete();
        }, 1000);
    };
    MeetingPage.prototype.doInfinite = function () {
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
    MeetingPage.prototype.getList = function (data) {
        this.list = [
            {
                Status: 0,
                Theme: "会议主题1",
                StartTime: "2017-12-12 15:15",
                location: "会议室01",
                Id: "170905001",
            },
            {
                Status: 1,
                Theme: "会议主题2",
                StartTime: "2017-12-12 15:15",
                location: "会议室02",
                Id: "170905002",
            },
            {
                Status: 3,
                Theme: "会议主题1",
                StartTime: "2017-12-12 15:15",
                location: "会议室01",
                Id: "170905001",
            },
            {
                Status: 4,
                Theme: "会议主题2",
                StartTime: "2017-12-12 15:15",
                location: "会议室02",
                Id: "170905002",
            },
            {
                Status: 5,
                Theme: "会议主题3",
                StartTime: "2017-12-12 15:15",
                location: "会议室03",
                Id: "170905003",
            }
        ];
    };
    MeetingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-meeting',template:/*ion-inline-start:"F:\GithubSourceCode\OA_WEBApp\src\pages\meeting\meeting.html"*/`<!--\n\n  Generated template for the MeetingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>会议</ion-title>\n\n  </ion-navbar>\n\n\n\n  <div  class="subbox">\n\n    <div >\n\n        <button ion-button small (click)="checkRead(\'Drafting\')" class="button-ios-light" [ngClass]="{\'button-ios-calm\':checkBtn.Drafting}">起草中</button>\n\n        <button ion-button small (click)="checkRead(\'Delivered\')" class="button-ios-light" [ngClass]="{\'button-ios-calm\':checkBtn.Delivered}">送审中</button>\n\n        <button ion-button small (click)="checkRead(\'Approved\')" class="button-ios-light" [ngClass]="{\'button-ios-calm\':checkBtn.Approved}">已审批</button>\n\n        <button ion-button small (click)="checkRead(\'HasBeenReturned\')" class="button-ios-light" [ngClass]="{\'button-ios-calm\':checkBtn.HasBeenReturned}">已退回</button>\n\n        <button ion-button small (click)="checkRead(\'completed\')" class="button-ios-light" [ngClass]="{\'button-ios-calm\':checkBtn.completed}">已完成</button>\n\n    </div>\n\n</div>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n      <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="正在刷新...">\n\n      </ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let meeting of list"  (click)="doRead(meeting.Id)">\n\n        <ion-item>\n\n            <span class="status-new-dot" *ngIf="meeting.Status==\'1\'">●&nbsp;</span><span>我是会议主题</span>\n\n            <p class="font-12">地点:{{meeting.Location}}&emsp;{{meeting.StartTime}}</p>\n\n        </ion-item>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n  <div *ngIf="isEmpty" text-center padding style="font-size:.9em;">\n\n      <div padding>暂无消息数据！！！</div>\n\n      <img src="assets/img/face/face2.png" height="100">\n\n  </div>\n\n  <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())" [enabled]="moredata" threshold="100px">\n\n      <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中..."></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n  <ion-fab bottom right>\n\n      <button ion-fab color="danger" (click)="doWrite()"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>\n\n</ion-content>\n\n`/*ion-inline-end:"F:\GithubSourceCode\OA_WEBApp\src\pages\meeting\meeting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__meeting_service__["a" /* MeetingService */]])
    ], MeetingPage);
    return MeetingPage;
}());

//# sourceMappingURL=meeting.js.map

/***/ })

});
//# sourceMappingURL=7.js.map