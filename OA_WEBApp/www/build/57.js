webpackJsonp([57],{

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageReadPageModule", function() { return MessageReadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_read__ = __webpack_require__(766);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessageReadPageModule = (function () {
    function MessageReadPageModule() {
    }
    MessageReadPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__message_read__["a" /* MessageReadPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__message_read__["a" /* MessageReadPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__message_read__["a" /* MessageReadPage */]
            ]
        })
    ], MessageReadPageModule);
    return MessageReadPageModule;
}());

//# sourceMappingURL=message-read.module.js.map

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageReadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
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
 * Generated class for the MessageReadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessageReadPage = (function () {
    function MessageReadPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.messageDetail = [];
        this.initializeItems();
    }
    MessageReadPage.prototype.initializeItems = function () {
        this.messageDetail = this.navParams.get("Params");
        this.messageDetail.Name = this.messageDetail.Name.split(":")[1];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], MessageReadPage.prototype, "content", void 0);
    MessageReadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message-read',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\message\message-read\message-read.html"*/`<!--\n\n  Generated template for the MessageReadPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>消息详情</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content overflow-scroll="true" style="background: #f4f4f4;overflow: hidden;">\n\n    <div>\n\n        <ion-list>\n\n\n\n            <ion-item>\n\n                <ion-label>发送人&emsp;</ion-label>\n\n                <ion-input type="text" readonly="true" [value]="messageDetail.Name" placeholder="发送人"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label>发送时间</ion-label>\n\n                <ion-input type="test" readonly="true" [value]="messageDetail.SendDate" placeholder="发送时间未知"></ion-input>\n\n            </ion-item>\n\n            \n\n            <ion-item>\n\n                <ion-textarea type="test" readonly="true" [value]="messageDetail.Content" placeholder="信息内容"></ion-textarea>\n\n            </ion-item>\n\n        </ion-list>\n\n    </div>\n\n\n\n    <!-- <div>\n\n        <ion-scroll scrollY="true" class="message-content">\n\n            <div padding-horizontal [innerHTML]="messageContent"></div>\n\n        </ion-scroll>\n\n    </div> -->\n\n</ion-content>\n\n<!-- <ion-footer class="message-reply">\n\n      <div class="item">\n\n          <ion-textarea [(ngModule)]="writeContent"  placeholder="回复: "></ion-textarea>\n\n          <button ion-button small color="positive" (click)="reply()">发送</button>\n\n      </div>\n\n  </ion-footer> -->`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\message\message-read\message-read.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]])
    ], MessageReadPage);
    return MessageReadPage;
}());

//# sourceMappingURL=message-read.js.map

/***/ })

});
//# sourceMappingURL=57.js.map