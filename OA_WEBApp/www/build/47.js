webpackJsonp([47],{

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailReadModule", function() { return MailReadModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mail_read__ = __webpack_require__(759);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mail_read__["a" /* MailRead */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__mail_read__["a" /* MailRead */]
            ]
        })
    ], MailReadModule);
    return MailReadModule;
}());

//# sourceMappingURL=mail-read.module.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(363);
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
        this.Mail = {
            inbox: 0,
            outbox: 1 // 发件箱
        };
        this.mailStatus = {
            read: 1,
            unread: 0,
            all: 2 // 全部
        };
    }
    // getInboxList(param?) {
    //     return this.httpService.get('assets/data/mail-inbox.json').map((res: Response) => res.json());
    // }
    // getOutboxList(param?) {
    //     return this.httpService.get('assets/data/mail-outbox.json').map((res: Response) => res.json());
    // }
    MailService.prototype.getInboxList = function (param) {
        console.log(12, param);
        return this.httpService.postFormData("ashx/MailList.ashx", param).map(function (res) { return res.json(); });
    };
    MailService.prototype.getOutboxList = function (param) {
        return this.httpService.postFormData("ashx/MailList.ashx", param).map(function (res) { return res.json(); });
    };
    MailService.prototype.read = function (id) {
        return this.httpService.postFormData("ashx/MailList.ashx", { "id": id }).map(function (res) { return res.json(); });
    };
    MailService.prototype.write = function (param) {
        // Uid 当前用户账号id
        // AcceptUid 接收账号id
        // Content 发送内容
        // 返回json
        // {"Data":"xxx！","Result":false}
        return this.httpService.postFormData("ashx/NewsAdd.ashx", param).map(function (res) { return res.json(); });
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

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailRead; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_NativeService__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_transfer__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mailService__ = __webpack_require__(735);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { MailWrite } from '../mail-write/mail-write';
 // , FileUploadOptions, TransferObject


/**
 * Generated class for the MailRead page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MailRead = (function () {
    function MailRead(navCtrl, navParams, nativeService, modalCtrl, transfer, mailService, file) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeService = nativeService;
        this.modalCtrl = modalCtrl;
        this.transfer = transfer;
        this.mailService = mailService;
        this.file = file;
        this.mailContent = ""; // 消息内容
        this.mailDetail = [];
        this.initializeItems();
    }
    MailRead.prototype.initializeItems = function () {
        var _this = this;
        this.mailService.read(this.navParams.get('id')).subscribe(function (resJson) {
            if (resJson.Result) {
                _this.mailDetail = resJson.Data;
                _this.mailDetail.Name = _this.mailDetail.Name.split(":")[1];
            }
        });
        this.mailDetail = {
            jsyjid: "2",
            jsbt: "信息主题2",
            fsrName: "系统管理员",
            fsrID: "121",
            fssj: "2012-12-12 12:12:12",
            jssj: "2012-12-12 12:12:12",
            jsrIDs: "123,456,789",
            jsnr: "你该交作业了2",
            attName: "236.png",
            yjfj: "236.png",
            jszt: "未读",
            msbz: "是"
        };
        this.mailContent = this.mailDetail.ggnr;
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
    MailRead.prototype.download = function (Path) {
        var path = "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png";
        var target = path.split("/").pop(); // target为文件名字
        this.nativeService.download(path, target);
        //   this.transfer.create().download(encodeURI(path), this.file.externalDataDirectory + 'file.png')
        // .then((entry) => {
        //   console.log('download complete: ' + entry.toURL());
        // }, (error) => {
        //   // handle error
        // });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], MailRead.prototype, "content", void 0);
    MailRead = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mail-read',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\mail\mail-read\mail-read.html"*/`<!--\n  Generated template for the MailRead page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>信息详情</ion-title>\n        <!-- <ion-buttons end>\n            <button ion-button (click)="read()">转发</button>\n        </ion-buttons> -->\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content overflow-scroll="true" style="background: #f4f4f4;overflow: hidden;">\n    <div>\n        <ion-list>\n\n            <ion-item>\n                <ion-label>发送人&emsp;</ion-label>\n                <ion-input type="text" readonly="disabled" [value]="mailDetail.fsrName" placeholder="系统管理员"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>主题&emsp;&emsp;</ion-label>\n                <ion-input type="test" readonly="disabled" [value]="mailDetail.jsbt" placeholder="主题1"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>发送时间</ion-label>\n                <ion-input type="test" readonly="disabled" [value]="mailDetail.fssj" placeholder="发送时间未知"></ion-input>\n            </ion-item>\n\n        </ion-list>\n    </div>\n\n\n    <div>\n        <ion-scroll scrollY="true" class="mail-content">\n            <!--<div padding-horizontal [innerHTML]="mailContent"></div>-->\n            <div class="mydiv">\n                你该交作业了<br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br>\n            </div>\n            <div class="affix" *ngIf="mailDetail.attName">\n                <ion-grid>\n                    <ion-row align-items-center>\n                        <ion-col col-6 col-lg-4>\n                            <div (click)="download(mailDetail.ggfj)">\n                                <ion-icon class="affix-icon" name="md-image"></ion-icon>\n                                <p>{{mailDetail.attName}}</p>\n                                <p color="gray">大小未知</p>\n                                <ion-icon class="affix-dismiss" name="ios-cloud-download-outline"></ion-icon>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </ion-scroll>\n    </div>\n</ion-content>\n<ion-footer class="message-reply">\n    <div class="item">\n        <textarea name="" rows="" cols="" placeholder="回复: "></textarea>\n        <button ion-button small color="positive">发送</button>\n    </div>\n</ion-footer>\n<!--<div class="list message-reply">\n\n    <div class="item">\n        <textarea name="" rows="" cols="" placeholder="回复: "></textarea>\n        <button ion-button small color="positive">发送</button>\n    </div>\n\n</div>-->`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\mail\mail-read\mail-read.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_5__mailService__["a" /* MailService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */]])
    ], MailRead);
    return MailRead;
}());

//# sourceMappingURL=mail-read.js.map

/***/ })

});
//# sourceMappingURL=47.js.map