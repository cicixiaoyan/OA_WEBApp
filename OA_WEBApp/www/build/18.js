webpackJsonp([18],{

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmsReadPageModule", function() { return SmsReadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sms_read__ = __webpack_require__(765);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SmsReadPageModule = (function () {
    function SmsReadPageModule() {
    }
    SmsReadPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sms_read__["a" /* SmsReadPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sms_read__["a" /* SmsReadPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__sms_read__["a" /* SmsReadPage */]
            ]
        })
    ], SmsReadPageModule);
    return SmsReadPageModule;
}());

//# sourceMappingURL=sms-read.module.js.map

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmsReadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
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
 * Generated class for the SmsReadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SmsReadPage = (function () {
    function SmsReadPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.detail = [];
        this.initializeItems();
    }
    SmsReadPage.prototype.initializeItems = function () {
        this.detail = this.navParams.get("Params");
        console.log(this.detail);
        this.Content = this.detail.SmsMsg;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], SmsReadPage.prototype, "content", void 0);
    SmsReadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sms-read',template:/*ion-inline-start:"F:\GithubSourceCode\OA_WEBApp\src\pages\sms\sms-read\sms-read.html"*/`<!--\n\n  Generated template for the SmsReadPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>短息详情</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n        <ion-label>接收号码&emsp;</ion-label>\n\n        <ion-input type="text" disabled="disabled" [(ngModel)]="detail.AccessNumber" placeholder="系统管理员"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label>发送时间</ion-label>\n\n        <ion-input type="test" disabled="disabled" [(ngModel)]="detail.SendDate" placeholder="发送时间未知"></ion-input>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <div>\n\n    <ion-scroll scrollY="true" class="sms-content">\n\n        <div padding-horizontal [innerHTML]="Content"></div>\n\n        <!-- <div class="mydiv"></div> -->\n\n    \n\n    </ion-scroll>\n\n  </div>\n\n</ion-content>\n\n`/*ion-inline-end:"F:\GithubSourceCode\OA_WEBApp\src\pages\sms\sms-read\sms-read.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
    ], SmsReadPage);
    return SmsReadPage;
}());

//# sourceMappingURL=sms-read.js.map

/***/ })

});
//# sourceMappingURL=18.js.map