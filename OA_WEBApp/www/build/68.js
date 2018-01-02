webpackJsonp([68],{

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsModule", function() { return ContactsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts__ = __webpack_require__(794);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactsModule = /** @class */ (function () {
    function ContactsModule() {
    }
    ContactsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contacts__["a" /* Contacts */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contacts__["a" /* Contacts */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__contacts__["a" /* Contacts */]
            ]
        })
    ], ContactsModule);
    return ContactsModule;
}());

//# sourceMappingURL=contacts.module.js.map

/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contacts; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { ContactsDetail } from './contacts-detail/contacts-detail';
/**
 * Generated class for the Contacts page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Contacts = /** @class */ (function () {
    function Contacts(navCtrl, navParams, httpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.searchKey = "";
        this.nxPage = "ContactsDetail";
        this.moredata = true;
        this.isEmpty = false;
        this.initializeItems();
    }
    Contacts.prototype.doRefresh = function (refresher) {
        this.initializeItems();
        setTimeout(function () {
            console.log('数据加载完成');
            refresher.complete();
        }, 2000);
    };
    Contacts.prototype.initializeItems = function () {
        var _this = this;
        this.httpService.postFormData("ashx/UserSheet.ashx", { "Name": this.searchKey })
            .map(function (Response) { return Response.json(); })
            .subscribe(function (resJson) {
            if (resJson.Result && resJson.Data.length !== 0 && typeof (resJson.Data) !== "string") {
                _this.items = resJson.Data;
                _this.isEmpty = false;
            }
            else {
                _this.isEmpty = true;
                _this.moredata = false;
                _this.httpService.nativeService.showToast(resJson.Data || "无数据");
            }
        });
    };
    Contacts.prototype.search = function (refresher, key) {
        var _this = this;
        this.initializeItems();
        return this.httpService.postFormData("ashx/UserSheet.ashx", { "Name": key })
            .map(function (Response) { return Response.json(); })
            .subscribe(function (resJson) {
            if (resJson.Result && resJson.Data.length !== 0 && typeof (resJson.Data) !== "string") {
                _this.items = resJson.Data;
                _this.isEmpty = false;
            }
            else {
                _this.items = [];
                _this.isEmpty = true;
                _this.moredata = false;
            }
        });
        // setTimeout(() => {
        //   console.log('数据加载完成');
        //   refresher.complete();
        // }, 2000);
    };
    Contacts = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contacts',template:/*ion-inline-start:"/Users/lieon/Desktop/OA_WEBApp/OA_WEBApp/src/pages/home/contacts/contacts.html"*/'<!--\n  Generated template for the Contacts page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>通讯录</ion-title>\n    </ion-navbar>\n    <ion-searchbar color="dark" type="text" placeholder="请输入姓名" [(ngModel)]="searchKey" [showCancelButton]="true" cancelButtonText="搜索" (ionCancel)="search($event, searchKey)">\n    </ion-searchbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="正在刷新...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <!--<ion-refresher on-refresh="doRefresh()"></ion-refresher>-->\n    <ion-list inset style="margin:16px 0;">\n        <button ion-item *ngFor="let contact of items" [navPush]="nxPage" [navParams]="{id:contact.Uid}">\n            <span>{{contact.Name}}({{contact.Uid}})</span>\n            <p>{{contact.Dept}}&emsp;{{contact.Duty}}</p>\n        </button>\n    </ion-list>\n    <div *ngIf="isEmpty" text-center padding style="font-size:.9em;">\n        <div padding>未搜索到信息！！！</div>\n        <img src="assets/img/face/face2.png" height="100">\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/lieon/Desktop/OA_WEBApp/OA_WEBApp/src/pages/home/contacts/contacts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */]])
    ], Contacts);
    return Contacts;
}());

//# sourceMappingURL=contacts.js.map

/***/ })

});
//# sourceMappingURL=68.js.map