webpackJsonp([64],{

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsDetailModule", function() { return ContactsDetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts_detail__ = __webpack_require__(742);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactsDetailModule = (function () {
    function ContactsDetailModule() {
    }
    ContactsDetailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contacts_detail__["a" /* ContactsDetail */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contacts_detail__["a" /* ContactsDetail */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__contacts_detail__["a" /* ContactsDetail */]
            ]
        })
    ], ContactsDetailModule);
    return ContactsDetailModule;
}());

//# sourceMappingURL=contacts-detail.module.js.map

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { UserInfo } from "../../../../model/UserInfo";

/**
 * Generated class for the ContactsDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ContactsDetail = (function () {
    function ContactsDetail(navCtrl, navParams, httpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        // checkman: UserInfo = new UserInfo();
        this.checkman = {};
        this.initializeItems();
    }
    ContactsDetail.prototype.initializeItems = function () {
        var _this = this;
        return this.httpService.postFormData("ashx/UserInfo.ashx", { "Id": this.navParams.get("id") })
            .map(function (Response) { return Response.json(); })
            .subscribe(function (resJson) {
            if (resJson.Result) {
                _this.checkman = resJson.Data;
                console.log(resJson.Data);
            }
            else {
                _this.checkman = {};
            }
        });
    };
    ContactsDetail.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactsDetail');
    };
    ContactsDetail.prototype.call = function (num) {
        window.location.href = "tel:" + num;
    };
    ContactsDetail = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contacts-detail',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\home\contacts\contacts-detail\contacts-detail.html"*/`<!--\n  Generated template for the ContactsDetail page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>详细信息</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-grid>\n        <ion-row style="border-bottom: 2px solid #ddd;padding-bottom: 0;">\n            <ion-col col-4 text-center style="border-right:1px solid #ddd;">\n                <img src="../assets/img/ben.png" alt="photo" style="height: 70px;width: 70px;border-radius: 50%;">\n                <div>{{checkman.Name}}&nbsp;·<span class="royal">&nbsp;{{checkman.Sex}}</span></div>\n            </ion-col>\n            <ion-col col-8>\n                <p>账号：{{checkman.Uid || "未知"}}</p>\n                <p>职位：{{checkman.Duty}}</p>\n                <p>公司：{{checkman.Company}}</p>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-list>\n        <ion-item>\n            <ion-icon color="energized" name="ios-analytics" item-left></ion-icon>\n            部门\n            <ion-note item-right>{{checkman.Dept}}</ion-note>\n\n        </ion-item>\n        <ion-item (click)="call(checkman.tel)">\n            <ion-icon color="danger" name="md-call" item-left></ion-icon>\n            电话\n            <ion-note item-right>{{checkman.InlinePhone}}</ion-note>\n        </ion-item>\n        <ion-item (click)="call(checkman.mobile)">\n            <ion-icon color="calm" name="md-phone-portrait" item-left></ion-icon>\n            手机\n            <ion-note item-right>{{checkman.Mobile}}</ion-note>\n        </ion-item>\n        <!-- <ion-item>\n            <ion-icon color="balanced" name="md-send" item-left></ion-icon>\n            传真\n            <ion-note item-right>{{checkman.fax}}</ion-note>\n        </ion-item> -->\n        <ion-item>\n            <ion-icon color="royal" name="md-mail" item-left></ion-icon>\n            邮件\n            <ion-note item-right>{{checkman.Mail}}</ion-note>\n        </ion-item>\n\n\n    </ion-list>\n\n</ion-content>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\home\contacts\contacts-detail\contacts-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */]])
    ], ContactsDetail);
    return ContactsDetail;
}());

//# sourceMappingURL=contacts-detail.js.map

/***/ })

});
//# sourceMappingURL=64.js.map