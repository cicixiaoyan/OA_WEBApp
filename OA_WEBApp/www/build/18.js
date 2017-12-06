webpackJsonp([18],{

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailReadModule", function() { return MailReadModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mail_read__ = __webpack_require__(798);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mailService__ = __webpack_require__(759);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MailReadModule = (function () {
    function MailReadModule() {
    }
    MailReadModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mail_read__["a" /* MailRead */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mail_read__["a" /* MailRead */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__mail_read__["a" /* MailRead */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__mailService__["a" /* MailService */]]
        })
    ], MailReadModule);
    return MailReadModule;
}());

//# sourceMappingURL=mail-read.module.js.map

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailService; });
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



var MailService = (function () {
    function MailService(httpService) {
        this.httpService = httpService;
        this.mailStatus = {
            inbox: 0,
            outbox: 1 // 发件箱
        };
        this.status = {
            read: 1,
            unread: 0,
            all: 2 // 全部
        };
    }
    MailService.prototype.getInboxList = function (param) {
        console.log(12, param);
        return this.httpService.postFormData("ashx/MailList.ashx", param).map(function (res) { return res.json(); });
    };
    MailService.prototype.getOutboxList = function (param) {
        return this.httpService.postFormData("ashx/MailList.ashx", param).map(function (res) { return res.json(); });
    };
    MailService.prototype.read = function (param) {
        return this.httpService.postFormData("ashx/MailGetDetail.ashx", param).map(function (res) { return res.json(); });
    };
    MailService.prototype.write = function (param) {
        // Uid 当前用户账号id
        // AcceptUid 接收账号id
        // Content 发送内容
        // 返回json
        // {"Data":"xxx！","Result":false}
        return this.httpService.postFormData("ashx/MailAdd.ashx", param).map(function (res) { return res.json(); });
    };
    MailService.prototype.AttachUpload = function (param) {
        return this.httpService.postFormData("ashx/AttachUpload.ashx", param).map(function (res) { return res.json(); });
    };
    MailService.prototype.getRecipients = function (param) {
        // 输入参数
        // Name 输入查询用户名称
        // 返回json
        return this.httpService.postFormData("ashx/UserSheet.ashx", param).map(function (res) { return res.json(); });
    };
    MailService.prototype.getRecipientsByDept = function (id) {
        // 输入参数
        // Name 输入查询用户名称
        // 返回json
        return this.httpService.postFormData("ashx/UserSheet.ashx", { DeptId: id }).map(function (res) { return res.json(); });
    };
    MailService.prototype.getDept = function () {
        return this.httpService.postFormData("ashx/BmLs.ashx", {}).map(function (res) { return res.json(); });
    };
    MailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */]])
    ], MailService);
    return MailService;
}());

//# sourceMappingURL=mailService.js.map

/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailRead; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_NativeService__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mailService__ = __webpack_require__(759);
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
 * Generated class for the MailRead page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MailRead = (function () {
    function MailRead(navCtrl, navParams, nativeService, modalCtrl, mailService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeService = nativeService;
        this.modalCtrl = modalCtrl;
        this.mailService = mailService;
        this.mailContent = ""; // 消息内容
        this.mailDetail = {};
        this.IsInbox = true; // 默认为收件箱详情
        this.initializeItems();
    }
    MailRead.prototype.initializeItems = function () {
        var _this = this;
        var data = {
            "id": this.navParams.get('id'),
            "MailStatus": this.navParams.get("MailStatus")
        };
        if (data.MailStatus == this.mailService.mailStatus["outbox"])
            this.IsInbox = false;
        this.mailService.read(data).subscribe(function (resJson) {
            if (resJson.Result) {
                _this.mailDetail = resJson.Data;
                console.log(resJson);
                _this.mailDetail.Name = _this.mailDetail.Name.split(":")[1];
            }
        });
    };
    MailRead.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MailRead');
        this.content.resize();
    };
    MailRead.prototype.ionViewWillLeave = function () {
    };
    MailRead.prototype.read = function () {
        var modal = this.modalCtrl.create("MailWrite", { mail: this.mailDetail });
        modal.present();
        modal.onDidDismiss(function (data) {
            data && console.log(data);
        });
    };
    MailRead.prototype.download = function (Path, name) {
        this.nativeService.download(Path, name);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], MailRead.prototype, "content", void 0);
    MailRead = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mail-read',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\mail\mail-read\mail-read.html"*/`<!--\n  Generated template for the MailRead page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>信息详情</ion-title>\n        <!-- <ion-buttons end>\n            <button ion-button (click)="read()">转发</button>\n        </ion-buttons> -->\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content overflow-scroll="true" style="background: #f4f4f4;overflow: hidden;">\n    <div>\n        <ion-list>\n\n            <ion-item *ngIf="isInbox">\n                <ion-label>接收人&emsp;</ion-label>\n                <ion-input type="text" readonly="disabled" [value]="mailDetail.AccessPerson" placeholder="系统管理员"></ion-input>\n            </ion-item>\n\n            <ion-item *ngIf="!inbox">\n                <ion-label>发送人&emsp;</ion-label>\n                <ion-input type="text" readonly="disabled" [value]="mailDetail.AccessPerson" placeholder="系统管理员"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>主题&emsp;&emsp;</ion-label>\n                <ion-input type="test" readonly="disabled" [value]="mailDetail.Title" placeholder="主题1"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>发送时间</ion-label>\n                <ion-input type="test" readonly="disabled" [value]="mailDetail.MailDate" placeholder="发送时间未知"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-textarea  placeholder="内容: " rows="3">{{mailContent}}</ion-textarea>\n            </ion-item>\n        </ion-list>\n    </div>\n\n\n    <div>\n        <ion-scroll scrollY="true" class="mail-content">\n            <!--<div padding-horizontal [innerHTML]="mailContent"></div>-->\n            <div class="mydiv">\n                {{mailDetail.MailDate}}\n            </div>\n            <div class="affix" *ngIf="mailDetail.attName">\n                <ion-grid>\n                    <ion-row align-items-center>\n                        <ion-col col-6 col-lg-4>\n                            <div (click)="download(mailDetail.attNewName, mailDetail.attName)">\n                                <ion-icon class="affix-icon" name="md-image"></ion-icon>\n                                <p>{{mailDetail.attName}}</p>\n                                <p color="gray">大小未知</p>\n                                <ion-icon class="affix-dismiss" name="ios-cloud-download-outline"></ion-icon>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </ion-scroll>\n    </div>\n</ion-content>\n<!--<div class="list message-reply">\n\n    <div class="item">\n        <textarea name="" rows="" cols="" placeholder="回复: "></textarea>\n        <button ion-button small color="positive">发送</button>\n    </div>\n\n</div>-->`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\mail\mail-read\mail-read.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__mailService__["a" /* MailService */]])
    ], MailRead);
    return MailRead;
}());

//# sourceMappingURL=mail-read.js.map

/***/ })

});
//# sourceMappingURL=18.js.map