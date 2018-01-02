webpackJsonp([37],{

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BacklogDetailModule", function() { return BacklogDetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backlog_detail__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__backlogService__ = __webpack_require__(779);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BacklogDetailModule = (function () {
    function BacklogDetailModule() {
    }
    BacklogDetailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__backlog_detail__["a" /* BacklogDetail */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__backlog_detail__["a" /* BacklogDetail */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__backlog_detail__["a" /* BacklogDetail */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__backlogService__["a" /* BacklogService */]]
        })
    ], BacklogDetailModule);
    return BacklogDetailModule;
}());

//# sourceMappingURL=backlog-detail.module.js.map

/***/ }),

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BacklogService; });
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

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BacklogDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backlogService__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__ = __webpack_require__(45);
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
 * Generated class for the BacklogDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BacklogDetail = (function () {
    function BacklogDetail(navCtrl, navParams, backlogService, nativeService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.backlogService = backlogService;
        this.nativeService = nativeService;
        this.item = [];
        this.isComplete = false;
        console.log(this.navParams.get("id"));
        this.initializeItems();
    }
    BacklogDetail.prototype.initializeItems = function () {
        var _this = this;
        var data = {
            "Id": this.navParams.get("id"),
            "Uid": this.backlogService.httpService.globalData.Uid
        };
        this.backlogService.getDone(data).subscribe(function (resJson) {
            if (resJson.Result) {
                _this.item = resJson.Data;
            }
            else {
                _this.nativeService.showToast(resJson.Data);
                _this.navCtrl.pop();
            }
        });
    };
    BacklogDetail.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BacklogDetail');
    };
    BacklogDetail.prototype.approved = function () {
        console.log("审批通过");
    };
    BacklogDetail.prototype.overrule = function () {
        console.log("审批驳回");
    };
    BacklogDetail.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    BacklogDetail = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-backlog-detail',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\home\backlog\backlog-detail\backlog-detail.html"*/`<!--\n  Generated template for the BacklogDetail page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>事项详情</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-card>\n        <ion-card-header>\n            33ee\n        </ion-card-header>\n        <ion-card-content>\n            <ion-list>\n                <ion-item>\n                    <ion-label>当前步骤：</ion-label>\n                    <ion-input type="text" placeholder="当前步骤1"></ion-input>\n                </ion-item>\n\n                <ion-item *ngIf="isComplete">\n                    <ion-label>审批模式：</ion-label>\n                    <ion-input type="text" placeholder="无"></ion-input>\n                </ion-item>\n\n                <div *ngIf="!isComplete">\n                    <ion-item>\n                        <ion-label>&emsp;流水号：<em>&emsp;1&nbsp;—</em></ion-label>\n\n                        <ion-input type="text" placeholder="请输入流水号"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-label>审批状态：</ion-label>\n                        <ion-input type="text" placeholder="无"></ion-input>\n                    </ion-item>\n                </div>\n\n\n                <div id="strhtm" style="min-height: 100px;overflow-x:auto;"></div>\n\n            </ion-list>\n            <ion-row>\n                <ion-col col-auto style="padding-left:12px;padding-top:5px;text-align:right;">\n                    &nbsp;相关附件：\n                </ion-col>\n                <ion-col col-lg-8 col-xl-6 style="position: relative;padding-left: 40px;background-color: #d7eaf9;">\n                    <ion-icon name="md-image" color="energized" style="position:absolute;left:.4rem;display:inline-block;font-size:3.6rem;"></ion-icon>\n                    <div>\n                        <span>text.png</span>\n                        <span ng-click="" style="position:absolute;right:10px;font-size:1.2rem">下载</span>\n                        <p style="font-size:1.2rem;">2.5M</p>\n                    </div>\n                </ion-col>\n            </ion-row>\n\n            <ion-list *ngIf="!isComplete">\n                <ion-item>\n                    <ion-label>审批记录：</ion-label>\n                    <ion-textarea type="text" placeholder="无"></ion-textarea>\n                </ion-item>\n                <ion-item>\n                    <ion-textarea placeholder="请输入本次审批意见" rows="2"></ion-textarea>\n                </ion-item>\n            </ion-list>\n\n\n        </ion-card-content>\n        <ion-row text-center>\n            <ion-col col-4>\n                <button ion-button icon-left clear small>\n                    <ion-icon name="md-checkmark"></ion-icon>\n                    <div>审批通过</div>\n                </button>\n            </ion-col>\n            <ion-col col-4>\n                <button ion-button icon-left clear small>\n                    <ion-icon name="md-close"></ion-icon>\n                    <div>审批驳回</div>\n                </button>\n            </ion-col>\n            <ion-col col-4>\n                <button ion-button icon-left clear small>\n                    <ion-icon name="md-return-left"></ion-icon>\n                    <div>返回</div>\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n\n</ion-content>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\home\backlog\backlog-detail\backlog-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__backlogService__["a" /* BacklogService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */]])
    ], BacklogDetail);
    return BacklogDetail;
}());

//# sourceMappingURL=backlog-detail.js.map

/***/ })

});
//# sourceMappingURL=37.js.map