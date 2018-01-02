webpackJsonp([11],{

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageWritePageModule", function() { return MessageWritePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_write__ = __webpack_require__(857);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messageService__ = __webpack_require__(781);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MessageWritePageModule = (function () {
    function MessageWritePageModule() {
    }
    MessageWritePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__message_write__["a" /* MessageWritePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__message_write__["a" /* MessageWritePage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__messageService__["a" /* MessageService */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__message_write__["a" /* MessageWritePage */]
            ]
        })
    ], MessageWritePageModule);
    return MessageWritePageModule;
}());

//# sourceMappingURL=message-write.module.js.map

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
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

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageWritePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_NativeService__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messageService__ = __webpack_require__(781);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { ContactsPopoverPage } from '../../contacts-popover/contacts-popover';
/**
 * Generated class for the MessageWritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessageWritePage = (function () {
    function MessageWritePage(navParams, nativeService, popoverCtrl, viewCtrl, messageService, formBuilder) {
        this.navParams = navParams;
        this.nativeService = nativeService;
        this.popoverCtrl = popoverCtrl;
        this.viewCtrl = viewCtrl;
        this.messageService = messageService;
        this.formBuilder = formBuilder;
        this.addressee = "";
        this.addresseeIds = "";
        this.attName = "109.png";
        this.writeForm = this.formBuilder.group({
            addressee: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            Content: ["", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(180), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
        });
    }
    MessageWritePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad MailWrite");
    };
    MessageWritePage.prototype.sent = function (data) {
        var _this = this;
        var data1 = {
            "Uid": this.messageService.httpService.globalData.Uid,
            "AcceptUid": this.addresseeIds,
            "Content": data.Content
        };
        this.messageService.write(data1).subscribe(function (resJson) {
            resJson.Result ? _this.nativeService.showToast("信息已发送") :
                _this.nativeService.showToast(resJson.Data);
        });
    };
    MessageWritePage.prototype.checkPeople = function (myEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create("ContactsPopoverPage", { addressee: this.addressee, addresseeIds: this.addresseeIds });
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(function (data) {
            if (!!data) {
                _this.writeForm.patchValue({ 'addressee': data.addressee });
                _this.addresseeIds = data.addresseeIds;
            }
        });
    };
    MessageWritePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("popoverContent", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MessageWritePage.prototype, "content", void 0);
    MessageWritePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message-write',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\message\message-write\message-write.html"*/`<!--\n\n  Generated template for the MessageWritePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    \n\n        <ion-navbar>\n\n    \n\n            <button ion-button (click)="dismiss()">取消</button>\n\n    \n\n            <ion-title>写信</ion-title>\n\n            <ion-buttons end>\n\n                <button ion-button icon-left [disabled]="!writeForm.valid" (click)="sent(writeForm.value)">\n\n                    <ion-icon name="ios-send"></ion-icon> 发送\n\n                </button>\n\n            </ion-buttons>\n\n        </ion-navbar>\n\n    </ion-header>\n\n    \n\n    \n\n    <ion-content>\n\n        <form [formGroup]="writeForm" (ngSubmit)="sent(writeForm.value)">\n\n            <div>\n\n                <ion-list style="position:relative;">\n\n                    <ion-item>\n\n                        <ion-label style="align-self:center;">收件人&emsp;</ion-label>\n\n                        <ion-input min-rows="1" formControlName="addressee"  #popoverContent placeholder="请选择收件人" (click)="checkPeople($event)"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item >\n\n                        <ion-textarea formControlName="Content" rows="6" class="write-textarea" placeholder="输入消息..."></ion-textarea>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </div>\n\n        </form>\n\n    </ion-content>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\message\message-write\message-write.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__messageService__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], MessageWritePage);
    return MessageWritePage;
}());

//# sourceMappingURL=message-write.js.map

/***/ })

});
//# sourceMappingURL=11.js.map