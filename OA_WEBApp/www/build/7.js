webpackJsonp([7],{

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageReadPageModule", function() { return MessageReadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_read__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messageService__ = __webpack_require__(758);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__message_read__["a" /* MessageReadPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__message_read__["a" /* MessageReadPage */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__messageService__["a" /* MessageService */]]
        })
    ], MessageReadPageModule);
    return MessageReadPageModule;
}());

//# sourceMappingURL=message-read.module.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
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



var MessageService = (function () {
    function MessageService(httpService) {
        this.httpService = httpService;
        this.Message = {
            inbox: 0,
            outbox: 1 // 发件箱
        };
        this.messageStatus = {
            read: 0,
            unread: 1,
            all: 3 // 全部
        };
    }
    MessageService.prototype.getInboxList = function (param) {
        console.log(12, param);
        return this.httpService.postFormData("ashx/NewsLs.ashx", param).map(function (res) { return res.json(); });
    };
    MessageService.prototype.getOutboxList = function (param) {
        return this.httpService.postFormData("ashx/NewsLs.ashx", param).map(function (res) { return res.json(); });
    };
    // read(id): Observable<any>{
    //     return this.httpService.postFormData("ashx/MailList.ashx", {"id": id}).map((res: Response) => res.json());
    // }
    MessageService.prototype.write = function (param) {
        // Uid 当前用户账号id
        // AcceptUid 接收账号id
        // Content 发送内容
        // 返回json
        // {"Data":"xxx！","Result":false}
        return this.httpService.postFormData("ashx/NewsAdd.ashx", param).map(function (res) { return res.json(); });
    };
    MessageService.prototype.markup = function (param) {
        return this.httpService.postFormData("ashx/NewsMarkup.ashx", param).map(function (res) { return res.json(); });
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */]])
    ], MessageService);
    return MessageService;
}());

//# sourceMappingURL=messageService.js.map

/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageReadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messageService__ = __webpack_require__(758);
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
 * Generated class for the MessageReadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessageReadPage = (function () {
    function MessageReadPage(navCtrl, nativeService, navParams, messageService) {
        this.navCtrl = navCtrl;
        this.nativeService = nativeService;
        this.navParams = navParams;
        this.messageService = messageService;
        this.messageDetail = [];
        this.initializeItems();
    }
    MessageReadPage.prototype.initializeItems = function () {
        var _this = this;
        this.messageDetail = this.navParams.get("Params");
        var data = {
            "uid": this.messageService.httpService.globalData.Uid,
            "id": this.messageDetail.Id
        };
        this.messageService.markup(data).subscribe(function (resJson) {
            console.log(resJson.Data);
            if (resJson.Result)
                _this.nativeService.showToast(resJson.Data, 800);
        });
        // this.messageDetail.Name = this.messageDetail.Name.split(":")[1];
    };
    MessageReadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message-read',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\message\message-read\message-read.html"*/`<!--\n\n  Generated template for the MessageReadPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>消息详情</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n        \n\n<ion-content>\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label>发送人&emsp;</ion-label>\n\n                <ion-input type="text" readonly="true"  [(ngModel)]="messageDetail.Name" [ngModelOptions]="{standalone: true}" placeholder="发送人"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label>发送时间</ion-label>\n\n                <ion-input type="text" readonly="true" [(ngModel)]="messageDetail.SendDate" [ngModelOptions]="{standalone: true}"  placeholder="发送时间未知"></ion-input>\n\n            </ion-item>\n\n            \n\n            <ion-item>\n\n                <ion-textarea type="text" rows="4" readonly="true" [(ngModel)]="messageDetail.Content" [ngModelOptions]="{standalone: true}"  placeholder="信息内容"></ion-textarea>\n\n            </ion-item>\n\n\n\n        </ion-list>\n\n        <!-- <div class="message-reply">\n\n            <ion-textarea  type="text" formControlName="writeContent"  placeholder="回复: "></ion-textarea>\n\n            <button ion-button small color="positive" type="submit">发送</button>\n\n        </div> -->\n\n</ion-content>\n\n<!-- <ion-footer >\n\n\n\n</ion-footer> -->\n\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\message\message-read\message-read.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__messageService__["a" /* MessageService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__messageService__["a" /* MessageService */]])
    ], MessageReadPage);
    return MessageReadPage;
}());

//# sourceMappingURL=message-read.js.map

/***/ })

});
//# sourceMappingURL=7.js.map