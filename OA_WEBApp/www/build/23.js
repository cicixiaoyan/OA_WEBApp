webpackJsonp([23],{

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileApplicationReviewViewPageModule", function() { return FileApplicationReviewViewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_application_review_view__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fileApplicationService__ = __webpack_require__(775);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FileApplicationReviewViewPageModule = (function () {
    function FileApplicationReviewViewPageModule() {
    }
    FileApplicationReviewViewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__file_application_review_view__["a" /* FileApplicationReviewViewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__file_application_review_view__["a" /* FileApplicationReviewViewPage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__fileApplicationService__["a" /* FileApplicationService */]]
        })
    ], FileApplicationReviewViewPageModule);
    return FileApplicationReviewViewPageModule;
}());

//# sourceMappingURL=file-application-review-view.module.js.map

/***/ }),

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileApplicationService; });
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



var FileApplicationService = (function () {
    function FileApplicationService(httpService) {
        this.httpService = httpService;
        this.status = {
            "审批中": '审批中',
            "已同意": '已同意',
            "已拒绝": '已拒绝',
        };
    }
    FileApplicationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */]])
    ], FileApplicationService);
    return FileApplicationService;
}());

//# sourceMappingURL=fileApplicationService.js.map

/***/ }),

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileApplicationReviewViewPage; });
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


var FileApplicationReviewViewPage = (function () {
    function FileApplicationReviewViewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Id = '';
        this.ApprovalComments = '我是审核意见';
        this.readOnly = false;
        this.Id = this.navParams.get('Id');
    }
    FileApplicationReviewViewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FileApplicationReviewViewPage');
    };
    FileApplicationReviewViewPage.prototype.agree = function () {
        // 审核通过
        console.log(this.Id, this.ApprovalComments);
    };
    FileApplicationReviewViewPage.prototype.oppose = function () {
        // 审核不通过
        console.log(this.Id, this.ApprovalComments);
    };
    FileApplicationReviewViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-file-application-review-view',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\file-application\file-application-review\file-application-review-view\file-application-review-view.html"*/`<ion-header>\n\n  <ion-navbar>\n    <ion-title>档案申请基本信息</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-auto>&emsp;申请人：</ion-col>\n          <ion-col class=\'right-info\'>张三</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-auto>申请日期：</ion-col>\n          <ion-col class=\'right-info\'>2017-12-12</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-auto>申请理由：</ion-col>\n          <ion-col class=\'right-info\'>我是申请理由我是申请理由我是申请理由我是申请理由我是申请理由我是申请理由</ion-col>\n        </ion-row>\n        <ion-row padding-top margin-top class=\'idivider\'>\n          <ion-col col-auto>审批意见：</ion-col>\n          <ion-col  class=\'right-info\' *ngIf="!readOnly">\n            <ion-textarea rows=\'5\'  [(ngModel)]="ApprovalComments"></ion-textarea>\n          </ion-col>\n          <ion-col  class=\'right-info\' *ngIf="readOnly">{{ApprovalComments}}</ion-col>\n        </ion-row>\n\n\n      </ion-grid>\n      <div padding-top text-center>\n        <button (click)=\'agree()\' ion-button small icon-left color="secondary"><ion-icon name="md-checkmark"></ion-icon>同意使用</button>\n        <button (click)=\'oppose()\' ion-button small icon-left color="danger" outline><ion-icon name="md-close"></ion-icon>拒绝使用</button>\n      </div>\n    </ion-card-content>\n\n</ion-card>\n\n</ion-content>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\file-application\file-application-review\file-application-review-view\file-application-review-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
    ], FileApplicationReviewViewPage);
    return FileApplicationReviewViewPage;
}());

//# sourceMappingURL=file-application-review-view.js.map

/***/ })

});
//# sourceMappingURL=23.js.map