webpackJsonp([20],{

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageReadOutPageModule", function() { return MessageReadOutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_read_out__ = __webpack_require__(761);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessageReadOutPageModule = (function () {
    function MessageReadOutPageModule() {
    }
    MessageReadOutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__message_read_out__["a" /* MessageReadOutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__message_read_out__["a" /* MessageReadOutPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__message_read_out__["a" /* MessageReadOutPage */]]
        })
    ], MessageReadOutPageModule);
    return MessageReadOutPageModule;
}());

//# sourceMappingURL=message-read-out.module.js.map

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageReadOutPage; });
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
 * Generated class for the MessageReadOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessageReadOutPage = (function () {
    function MessageReadOutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.messageDetail = [];
        this.initializeItems();
    }
    MessageReadOutPage.prototype.initializeItems = function () {
        this.messageDetail = this.navParams.get("Params");
        this.messageContent = this.messageDetail.Title;
    };
    MessageReadOutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessageReadOutPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], MessageReadOutPage.prototype, "content", void 0);
    MessageReadOutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message-read-out',template:/*ion-inline-start:"F:\GithubSourceCode\OA_WEBApp\src\pages\message\message-read-out\message-read-out.html"*/`<!--\n\n  Generated template for the MessageReadOutPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n      <ion-navbar>\n\n          <ion-title>消息详情</ion-title>\n\n      </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content overflow-scroll="true" style="background: #f4f4f4;overflow: hidden;">\n\n      <div>\n\n          <ion-list>\n\n  \n\n              <ion-item>\n\n                  <ion-label>发送人&emsp;</ion-label>\n\n                  <ion-input type="text" disabled="disabled" [(ngModel)]="messageDetail.AccessPerson" placeholder="系统管理员"></ion-input>\n\n              </ion-item>\n\n  \n\n              <ion-item>\n\n                  <ion-label>发送时间</ion-label>\n\n                  <ion-input type="test" disabled="disabled" [(ngModel)]="messageDetail.MailDate" placeholder="发送时间未知"></ion-input>\n\n              </ion-item>\n\n  \n\n          </ion-list>\n\n      </div>\n\n  \n\n      <div>\n\n          <ion-scroll scrollY="true" class="message-content">\n\n              <div padding-horizontal [innerHTML]="messageContent"></div>\n\n              <!-- <ion-textarea [(ngModule)]="messageDetail.Title"  placeholder="回复: "></ion-textarea> -->\n\n              <!-- <div class="mydiv">\n\n                {{messageDetail.Title}}\n\n              </div> -->\n\n          </ion-scroll>\n\n      </div>\n\n  </ion-content>\n\n`/*ion-inline-end:"F:\GithubSourceCode\OA_WEBApp\src\pages\message\message-read-out\message-read-out.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
    ], MessageReadOutPage);
    return MessageReadOutPage;
}());

//# sourceMappingURL=message-read-out.js.map

/***/ })

});
//# sourceMappingURL=20.js.map