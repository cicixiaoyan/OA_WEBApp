webpackJsonp([49],{

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeModule", function() { return WelcomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome__ = __webpack_require__(866);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WelcomeModule = /** @class */ (function () {
    function WelcomeModule() {
    }
    WelcomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* Welcome */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* Welcome */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* Welcome */]
            ]
        })
    ], WelcomeModule);
    return WelcomeModule;
}());

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Welcome; });
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


// import { TabsPage } from '../tabs/tabs';
// import { LoginPage } from "../login/login";
/**
 * Generated class for the Welcome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Welcome = /** @class */ (function () {
    function Welcome(viewCtrl, navParams, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    Welcome.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Welcome');
    };
    Welcome.prototype.goToHome = function () {
        // this.navCtrl.setRoot(TabsPage, { index: 0 });
        this.viewCtrl.dismiss();
        var modal = this.modalCtrl.create("LoginPage");
        modal.present();
        modal.onDidDismiss(function (data) {
            data && console.log(data);
        });
    };
    Welcome = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/lieon/Desktop/OA_WEBApp/OA_WEBApp/src/pages/welcome/welcome.html"*/'<!--\n  Generated template for the Welcome page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="nav-decor">\n\n    <ion-navbar>\n        <ion-title>welcome</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-slides pager>\n\n        <ion-slide>\n            <img src="assets/img/welcome/slide1.jpg" />\n        </ion-slide>\n\n        <ion-slide>\n            <img src="assets/img/welcome/slide2.png" />\n        </ion-slide>\n\n        <ion-slide>\n            <img src="assets/img/welcome/slide3.png" />\n        </ion-slide>\n\n        <ion-slide>\n            <ion-row>\n                <ion-col>\n                    <img src="assets/img/welcome/slide4.png" />\n                </ion-col>\n            </ion-row>\n            <ion-row class="start-button">\n                <ion-col>\n                    <button ion-button clear color="light" (click)="goToHome()">立即启动</button>\n                </ion-col>\n            </ion-row>\n        </ion-slide>\n\n    </ion-slides>\n\n</ion-content>'/*ion-inline-end:"/Users/lieon/Desktop/OA_WEBApp/OA_WEBApp/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */]])
    ], Welcome);
    return Welcome;
}());

//# sourceMappingURL=welcome.js.map

/***/ })

});
//# sourceMappingURL=49.js.map