webpackJsonp([10],{

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BacklogModule", function() { return BacklogModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backlog__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__backlogService__ = __webpack_require__(731);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BacklogModule = (function () {
    function BacklogModule() {
    }
    BacklogModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__backlog__["a" /* Backlog */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__backlog__["a" /* Backlog */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__backlog__["a" /* Backlog */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__backlogService__["a" /* BacklogService */]]
        })
    ], BacklogModule);
    return BacklogModule;
}());

//# sourceMappingURL=backlog.module.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BacklogService; });
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


// import {Observable} from "rxjs";

var BacklogService = (function () {
    function BacklogService(httpService) {
        this.httpService = httpService;
        this.Status = {
            notdone: 0,
            done: 1 // 已办理
        };
    }
    BacklogService.prototype.getNotDoneList = function (param) {
        return this.httpService.postFormData('/ashx/TodoLs.ashx', param).map(function (res) { return res.json(); });
    };
    BacklogService.prototype.getDoneList = function (param) {
        return this.httpService.postFormData('/ashx/TodoLs.ashx', param).map(function (res) { return res.json(); });
    };
    BacklogService.prototype.getDone = function (param) {
        return this.httpService.postFormData('/ashx/TodoDetail.ashx', param).map(function (res) { return res.json(); });
    };
    BacklogService.prototype.getNotDone = function (param) {
        return this.httpService.postFormData('/ashx/TodoDetail.ashx', param).map(function (res) { return res.json(); });
    };
    BacklogService.prototype.TodoApprove = function (param) {
        return this.httpService.postFormData('/ashx/TodoApprove.ashx', param).map(function (res) { return res.json(); });
    };
    BacklogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */]])
    ], BacklogService);
    return BacklogService;
}());

//# sourceMappingURL=backlogService.js.map

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Backlog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backlogService__ = __webpack_require__(731);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { BacklogDetail } from './backlog-detail/backlog-detail';

/**
 * Generated class for the Backlog page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Backlog = (function () {
    function Backlog(navCtrl, navParams, backlogService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.backlogService = backlogService;
        this.work = "notDone";
        this.nxPage = "BacklogDetail";
        this.items = [];
        this.moredata = true;
        this.isEmpty = false;
        this.data = {
            "PageIndex": 1,
            "PageSize": 10,
            "Status": this.backlogService.Status["notdone"],
            "Uid": this.backlogService.httpService.globalData.Uid
        };
        this.getNotDoneList(this.data);
    }
    Backlog.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Backlog');
    };
    Backlog.prototype.doRefresh = function (refresher) {
        // this.initializeItems();
        this.moredata = true;
        this.data.PageIndex = 1;
        this.items = [];
        if (this.work === "notDone") {
            // ....
            this.data.Status = this.backlogService.Status["notdone"];
            this.getNotDoneList(this.data);
        }
        else {
            // ...
            this.data.Status = this.backlogService.Status["done"];
            this.getDoneList(this.data);
        }
        if (!!refresher) {
            setTimeout(function () {
                console.log('数据加载完成');
                refresher.complete();
            }, 1000);
        }
    };
    Backlog.prototype.doInfinite = function () {
        if (this.moredata) {
            if (this.work === "ontDone") {
                // ....
                this.getNotDoneList(this.data);
            }
            else {
                // ...
                this.getDoneList(this.data);
            }
        }
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve();
            }, 500);
        });
    };
    Backlog.prototype.getNotDoneList = function (data) {
        var _this = this;
        this.backlogService.getNotDoneList(data).subscribe(function (resJson) {
            if (resJson.Result && resJson.Result !== []) {
                _this.isEmpty = false;
                _this.items = _this.items.concat(resJson.Data);
            }
            else {
                _this.moredata = false;
                _this.isEmpty = _this.data.PageIndex == 1 ? true : false;
            }
        });
    };
    Backlog.prototype.getDoneList = function (data) {
        var _this = this;
        this.backlogService.getDoneList(data).subscribe(function (resJson) {
            if (resJson.Result && resJson.Result !== []) {
                _this.isEmpty = false;
                _this.items = _this.items.concat(resJson.Data);
            }
            else {
                _this.moredata = false;
                _this.isEmpty = _this.data.PageIndex == 1 ? true : false;
            }
        });
    };
    Backlog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-backlog',template:/*ion-inline-start:"F:\GithubSourceCode\OA_WEBApp\src\pages\home\backlog\backlog.html"*/`<!--\n\n  Generated template for the Backlog page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>待办事项</ion-title>\n\n    </ion-navbar>\n\n    <ion-toolbar no-border-top>\n\n        <ion-segment class="content-ios" [(ngModel)]="work" (ngModelChange)="doRefresh()">\n\n            <ion-segment-button value="notDone">\n\n                未办理\n\n            </ion-segment-button>\n\n            <ion-segment-button value="done">\n\n                已办理\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <div [ngSwitch]="work">\n\n        <ion-refresher (ionRefresh)="doRefresh($event)">\n\n            <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="正在刷新...">\n\n            </ion-refresher-content>\n\n        </ion-refresher>\n\n\n\n        <ion-list *ngSwitchCase="\'notDone\'">\n\n\n\n            <button ion-item *ngFor="let work of items" [navPush]="nxPage" [navParams]="{id:work.Id}">\n\n                <span>&nbsp;[{{work.Title}}]{{work.WorkNumber}}</span>\n\n                <p>发起人：{{work.Originator}}&emsp;当前步骤：{{work.Step}}</p>\n\n            </button>\n\n\n\n        </ion-list>\n\n\n\n        <ion-list *ngSwitchCase="\'done\'">\n\n            <button ion-item *ngFor="let work of items" [navPush]="nxPage" [navParams]="{id:work.Id}">\n\n                <span>&nbsp;[{{work.Title}}]{{work.WorkNumber}}</span>\n\n                <p>发起人：{{work.Originator}}&emsp;当前步骤：{{work.Step}}</p>\n\n            </button>\n\n        </ion-list>\n\n\n\n        <div *ngIf="isEmpty" text-center padding style="font-size:.9em;">\n\n            <div padding>暂无此类信息！！！</div>\n\n            <img src="assets/img/face/face2.png" height="100">\n\n        </div>\n\n\n\n        <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())" [enabled]="moredata" threshold="100px">\n\n            <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中..."></ion-infinite-scroll-content>\n\n        </ion-infinite-scroll>\n\n\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"F:\GithubSourceCode\OA_WEBApp\src\pages\home\backlog\backlog.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__backlogService__["a" /* BacklogService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__backlogService__["a" /* BacklogService */]])
    ], Backlog);
    return Backlog;
}());

//# sourceMappingURL=backlog.js.map

/***/ })

});
//# sourceMappingURL=10.js.map