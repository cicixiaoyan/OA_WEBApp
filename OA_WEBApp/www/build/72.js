webpackJsonp([72],{

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusPageModule", function() { return AboutusPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aboutus__ = __webpack_require__(797);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutusPageModule = (function () {
    function AboutusPageModule() {
    }
    AboutusPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aboutus__["a" /* AboutusPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aboutus__["a" /* AboutusPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__aboutus__["a" /* AboutusPage */]
            ]
        })
    ], AboutusPageModule);
    return AboutusPageModule;
}());

//# sourceMappingURL=aboutus.module.js.map

/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_NativeService__ = __webpack_require__(45);
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




/**
 * Generated class for the AboutusPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AboutusPage = (function () {
    function AboutusPage(navCtrl, navParams, nativeService, httpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeService = nativeService;
        this.httpService = httpService;
        this.period = "2017";
        this.updateStr = "检查更新";
        this.data = {
            "version": "V0.0.1",
            "appName": "成都永朔科技有限公司",
            "logo": "assets/img/logo.png",
            "copyright": "成都永朔科技有限公司所有"
        };
        var thisYear = new Date().getFullYear();
        this.period = (thisYear === 2017) ? "2017" : "2017 - " + thisYear;
    }
    AboutusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutusPage');
    };
    AboutusPage.prototype.detectionUpgrade = function () {
        var _this = this;
        var version = this.nativeService.getVersionNumber();
        // 从服务器获取最新版本号
        this.httpService.get("url").map(function (res) { return res.json; })
            .subscribe(function (item) {
            if (item[0].version == version) {
                return _this.updateStr = "已是最新版";
            }
            else {
                _this.nativeService.detectionUpgrade();
            }
        });
    };
    AboutusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aboutus',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\account\aboutus\aboutus.html"*/`<!--\n  Generated template for the AboutusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>关于我们</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding text-center>\n    <img [src]="data.logo" alt="公司logo" />\n    <h2>{{data.appName}}</h2>\n    <p>{{data.version}}</p>\n    <button ion-button (click)="detectionUpgrade()">{{updateStr}}</button>\n\n</ion-content>\n<ion-footer text-center>{{data.copyright}}&copy;{{period}}</ion-footer>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\account\aboutus\aboutus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__["a" /* HttpService */]])
    ], AboutusPage);
    return AboutusPage;
}());

//# sourceMappingURL=aboutus.js.map

/***/ })

});
//# sourceMappingURL=72.js.map