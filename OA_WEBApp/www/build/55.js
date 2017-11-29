webpackJsonp([55],{

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(772);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsModule = (function () {
    function TabsModule() {
    }
    TabsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]
            ]
        })
    ], TabsModule);
    return TabsModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_backButtonService__ = __webpack_require__(364);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Home } from '../home/home';
// import { Mail } from '../mail/mail';
// import { MessagePage } from '../message/message';
// import { AnnouncementPage } from '../announcement/announcement';
// import { Account } from '../account/account';


var TabsPage = (function () {
    function TabsPage(navParams, platform, backButtonService) {
        var _this = this;
        this.platform = platform;
        this.backButtonService = backButtonService;
        this.tab1Root = "Home";
        this.tab2Root = "MessagePage";
        this.tab3Root = "AnnouncementPage";
        this.tab4Root = "Account";
        this.mySelectedIndex = navParams.data.tabIndex || 0;
        this.tab1Root = navParams.data.tab1Component || "Home";
        platform.ready().then(function () {
            _this.backButtonService.registerBackButtonAction(_this.tabs);
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mainTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Tabs */])
    ], TabsPage.prototype, "tabs", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\tabs\tabs.html"*/`<ion-tabs #mainTabs [selectedIndex]="mySelectedIndex">\n    <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="ios-home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="信息" tabIcon="ios-mail"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="公告" tabIcon="ios-notifications"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="设置" tabIcon="ios-settings"></ion-tab>\n</ion-tabs>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\tabs\tabs.html"*/,
            selector: 'page-tabs',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__services_backButtonService__["a" /* BackButtonService */]])
    ], TabsPage);
    return TabsPage;
}());

// WEBPACK FOOTER //
// ./src/pages/tabs/tabs.ts
//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=55.js.map