webpackJsonp([37,59],{

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailReadOutboxModule", function() { return MailReadOutboxModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mail_read_outbox__ = __webpack_require__(745);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MailReadOutboxModule = (function () {
    function MailReadOutboxModule() {
    }
    MailReadOutboxModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mail_read_outbox__["a" /* MailReadOutbox */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mail_read_outbox__["a" /* MailReadOutbox */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__mail_read_outbox__["a" /* MailReadOutbox */]
            ]
        })
    ], MailReadOutboxModule);
    return MailReadOutboxModule;
}());

//# sourceMappingURL=mail-read-outbox.module.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailModule", function() { return MailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mail__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mail_read_outbox_mail_read_outbox_module__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mailService__ = __webpack_require__(735);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MailModule = (function () {
    function MailModule() {
    }
    MailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mail__["a" /* Mail */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mail__["a" /* Mail */]),
                __WEBPACK_IMPORTED_MODULE_3__mail_read_outbox_mail_read_outbox_module__["MailReadOutboxModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__mail__["a" /* Mail */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__mailService__["a" /* MailService */]]
        })
    ], MailModule);
    return MailModule;
}());

//# sourceMappingURL=mail.module.js.map

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

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailReadOutbox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_NativeService__ = __webpack_require__(45);
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
/**
 * Generated class for the MailReadOutbox page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MailReadOutbox = (function () {
    function MailReadOutbox(navCtrl, navParams, nativeService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeService = nativeService;
        this.modalCtrl = modalCtrl;
        this.mailContent = ""; // 消息内容
        this.mailDetail = [];
        this.initializeItems();
    }
    MailReadOutbox.prototype.initializeItems = function () {
        // let data={id: this.navParams.get('id'),action:"noticeById"};
        // this.httpService.postFormData("ashx/Notice.ashx/noticeById",data)
        //   .map(Response => Response.json())
        //   .subscribe(list => {
        //       if(!!list && list.length != 0 ){
        //         this.detailNotice = list[0];
        //         this.myDiv = this.detailNotice.ggnr;
        //       }else{
        //          this.toastCtrl.create({
        //           message: '服务器出错，请稍后再试！！！',
        //           position: 'middle',
        //           duration: 2000
        //         }).present();
        //         this.navCtrl.pop();
        //       }
        //   });
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
            msbz: "是" // 密送标志
        };
        this.mailContent = this.mailDetail.ggnr;
    };
    MailReadOutbox.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MailRead');
        this.content.resize();
    };
    MailReadOutbox.prototype.ionViewWillLeave = function () {
    };
    MailReadOutbox.prototype.read = function () {
        var modal = this.modalCtrl.create("MailWrite");
        modal.present();
        modal.onDidDismiss(function (data) {
            data && console.log(data);
        });
    };
    MailReadOutbox.prototype.download = function (path) {
        var target = path.split("/").pop();
        this.nativeService.download(path, target);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], MailReadOutbox.prototype, "content", void 0);
    MailReadOutbox = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mail-read-outbox',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\mail\mail-read-outbox\mail-read-outbox.html"*/`<!--\n  Generated template for the MailReadOutbox page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>信息详情</ion-title>\n        <ion-buttons end>\n            <button ion-button (click)="read()">转发</button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content overflow-scroll="true" style="background: #f4f4f4;overflow: hidden;">\n    <div>\n\n        <ion-list>\n\n            <ion-item>\n                <ion-label style="align-self:center;">收件人&emsp;</ion-label>\n                <ion-textarea disabled="disabled" [(ngModel)]="mailDetail.fsrName" #popoverContent placeholder="收件人"></ion-textarea>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>主题&emsp;&emsp;</ion-label>\n                <ion-input type="test" disabled="disabled" [(ngModel)]="mailDetail.jsbt" placeholder="主题1"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>发送时间</ion-label>\n                <ion-input type="test" disabled="disabled" [(ngModel)]="mailDetail.fssj" placeholder="发送时间未知"></ion-input>\n            </ion-item>\n\n        </ion-list>\n    </div>\n\n\n    <div>\n        <ion-scroll scrollY="true" class="mail-content">\n            <!--<div padding-horizontal [innerHTML]="mailContent"></div>-->\n            <div class="mydiv">\n                你该交作业了<br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br>\n            </div>\n            <div class="affix" *ngIf="mailDetail.attName">\n                <ion-grid>\n                    <ion-row align-items-center>\n                        <ion-col col-6 col-lg-4>\n                            <div (click)="download(mailDetail.ggfj)">\n                                <ion-icon class="affix-icon" name="md-image"></ion-icon>\n                                <p>{{mailDetail.attName}}</p>\n                                <p color="gray">大小未知</p>\n                                <ion-icon class="affix-dismiss" name="ios-cloud-download-outline"></ion-icon>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </ion-scroll>\n    </div>\n</ion-content>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\mail\mail-read-outbox\mail-read-outbox.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ModalController */]])
    ], MailReadOutbox);
    return MailReadOutbox;
}());

//# sourceMappingURL=mail-read-outbox.js.map

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_GlobalData__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mailService__ = __webpack_require__(735);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { MailRead } from '../mail/mail-read/mail-read';
// import { MailWrite } from '../mail/mail-write/mail-write';
// import { MailReadOutbox } from '../mail/mail-read-outbox/mail-read-outbox';

/**
 * Generated class for the Mail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Mail = (function () {
    function Mail(navCtrl, navParams, globalData, modalCtrl, mailService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalData = globalData;
        this.modalCtrl = modalCtrl;
        this.mailService = mailService;
        this.box = "inbox";
        this.inbox = true; // 默认为收件箱
        this.isDraft = false; // 默认为发件箱
        this.isEmpty = false;
        this.checkBtn = { "read": false, "unread": true, "all": false };
        this.inboxList = [];
        this.outboxList = [];
        this.moredata = true;
        this.inboxData = {
            "PageSize": 5,
            "PageIndex": 1,
            "MailStatus": this.mailService.Mail["inbox"],
            "Uid": this.globalData.Uid,
            "Status": this.mailService.mailStatus["unread"],
        };
        this.outboxData = {
            "PageSize": 5,
            "PageIndex": 1,
            "MailStatus": this.mailService.Mail["outbox"],
            "Uid": this.globalData.Uid,
            "Status": this.mailService.mailStatus["unread"]
        };
        this.initializeItems();
    }
    Mail.prototype.initializeItems = function () {
        var _this = this;
        this._getInboxList(this.inboxData);
        this._getOutboxList(this.outboxData);
        console.log(this);
        setInterval(function () {
            console.log(_this);
            _this.getNewInboxList(_this.inboxData);
        }, 50000);
    };
    Mail.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Mail');
    };
    // 选择已读、未读、全部
    Mail.prototype.checkRead = function (name) {
        if (name === void 0) { name = "read"; }
        this.inboxData.PageIndex = 1;
        this.inboxList = [];
        this.checkBtn = { "read": false, "unread": false, "all": false };
        this.checkBtn[name] = true;
        if (name === "unread") {
            // 参数设置
            this.inboxData.Status = this.mailService.mailStatus["unread"];
        }
        else if (name === "read") {
            // 参数设置
            this.inboxData.Status = this.mailService.mailStatus["read"];
        }
        else {
            // 参数设置
            this.inboxData.Status = this.mailService.mailStatus["all"];
        }
        this._getInboxList(this.inboxData);
    };
    // 选择草稿箱、发件箱
    Mail.prototype.checkDraft = function (bol) {
        if (bol === void 0) { bol = false; }
        this.outboxData.PageIndex = 1;
        this.outboxList = [];
        if (bol) {
            this.isDraft = true;
            // 参数设置
        }
        else {
            this.isDraft = false;
            // 参数设置
        }
        this._getOutboxList(this.outboxData);
    };
    Mail.prototype.doRead = function (id) {
        this.navCtrl.push("MailRead", { id: id });
    };
    Mail.prototype.doReadOutBox = function (id) {
        this.navCtrl.push("MailReadOutbox", { id: id });
    };
    Mail.prototype.doWrite = function () {
        var modal = this.modalCtrl.create("MailWrite");
        modal.present();
        modal.onDidDismiss(function (data) {
            data && console.log(data);
        });
        // this.navCtrl.push(MailWrite);
    };
    Mail.prototype.doRefresh = function (refresher) {
        console.log("加载更多");
        // this.initializeItems();
        this.change();
        setTimeout(function () {
            console.log('数据加载完成');
            refresher.complete();
        }, 1000);
    };
    Mail.prototype.change = function () {
        this.moredata = true;
        if (this.box === "inbox") {
            this.inboxList = [];
            this.inboxData.PageIndex = 1;
            this._getInboxList(this.inboxData);
        }
        else {
            this.outboxList = [];
            this.outboxData.PageIndex = 1;
            this._getOutboxList(this.outboxData);
        }
    };
    Mail.prototype.doInfinite = function () {
        if (this.moredata) {
            if (this.box === "inbox") {
                this.inboxData.PageIndex++;
                this._getInboxList(this.inboxData);
            }
            else {
                this.outboxData.PageIndex++;
                this._getOutboxList(this.outboxData);
            }
        }
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve();
            }, 500);
        });
    };
    Mail.prototype.getNewInboxList = function (inboxData) {
        var _this = this;
        inboxData.PageIndex = 1;
        this.mailService.getInboxList(inboxData).subscribe(function (list) {
            if (list.Result == true) {
                var arr = list.Data.filter(function (item) {
                    return item.Id !== _this.inboxList[0].Id;
                });
                if (arr !== []) {
                    _this.inboxList = _this.inboxList.concat(arr);
                }
            }
        });
    };
    Mail.prototype._getInboxList = function (inboxData) {
        var _this = this;
        this.mailService.getInboxList(inboxData).subscribe(function (resJson) {
            if (resJson.Result && resJson.Data !== []) {
                _this.isEmpty = false;
                var list = resJson.Data;
                _this.inboxList = _this.inboxList.concat(list);
            }
            else {
                _this.moredata = false;
                if (_this.inboxData.PageIndex === 1) {
                    _this.isEmpty = true;
                    _this.inboxList = [];
                }
            }
        });
    };
    Mail.prototype._getOutboxList = function (outboxData) {
        var _this = this;
        this.mailService.getOutboxList(outboxData).subscribe(function (resJson) {
            if (resJson.Result && resJson.Data !== []) {
                _this.isEmpty = false;
                var list = resJson.Data;
                _this.outboxList = _this.outboxList.concat(list);
            }
            else {
                _this.moredata = false;
                if (_this.outboxData.PageIndex === 1) {
                    _this.isEmpty = true;
                    _this.outboxList = [];
                }
            }
        });
    };
    Mail = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mail',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\mail\mail.html"*/`<!--\n  Generated template for the Mail page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-toolbar>\n        <ion-segment [(ngModel)]="box"  (ngModelChange)="change()">\n            <ion-segment-button value="inbox">\n                收件箱\n            </ion-segment-button>\n            <ion-segment-button value="outbox">\n                发件箱\n            </ion-segment-button>\n        </ion-segment>\n\n    </ion-toolbar>\n\n    <!--\n    <ion-buttons ion-button icon-only end (click)="doWrite()">\n        <ion-icon name="ios-add-circle-outline"></ion-icon>\n    </ion-buttons>-->\n    <div [ngSwitch]="box" class="subbox">\n        <div *ngSwitchCase="\'inbox\'">\n            <button ion-button small (click)="checkRead(\'unread\')" class="button-ios-light" [ngClass]="{\'button-ios-calm\':checkBtn.unread}">未读</button>\n            <button ion-button small (click)="checkRead(\'read\')" class="button-ios-light" [ngClass]="{\'button-ios-calm\':checkBtn.read}">已读</button>\n            <!-- <button ion-button small (click)="checkRead(\'all\')" class="button-ios-light" [ngClass]="{\'button-ios-calm\':checkBtn.all}">全部</button> -->\n        </div>\n\n        <div *ngSwitchCase="\'outbox\'">\n            <button ion-button small (click)="checkDraft()" class="button-ios-light" [ngClass]="{\'button-ios-calm\':!isDraft}">已发送</button>\n            <button ion-button small (click)="checkDraft(true)" class="button-ios-light" [ngClass]="{\'button-ios-calm\':isDraft}">草稿箱</button>\n        </div>\n    </div>\n\n</ion-header>\n\n\n<ion-content style="background: #f4f4f4;overflow: hidden;" overflow-scroll="true" class="has-header">\n    <!--<ion-refresher on-refresh="doRefresh()"></ion-refresher>-->\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="正在刷新...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <div [ngSwitch]="box">\n        <ion-list *ngSwitchCase="\'inbox\'">\n            <ion-item-sliding *ngFor="let mail of inboxList " (click)="doRead(mail.Id)">\n                <ion-item>\n                    <ion-avatar item-left>\n                        <img src="assets/img/mike.png">\n                    </ion-avatar>\n                    <span style="color:#2196F3;" *ngIf="mail.Status==0">●&nbsp;</span><span>{{mail.Title}}</span>\n                    <p class="font-12">来至:{{mail.SendPerson}}&emsp;{{mail.MailDate|date:"yyyy年MM月dd日 HH时mm分"}}</p>\n                </ion-item>\n                <ion-item-options side="right">\n                    <button ion-button color="primary">\n                        <ion-icon name="md-trash"></ion-icon>删除\n                    </button>\n                </ion-item-options>\n            </ion-item-sliding>\n        </ion-list>\n        <ion-list *ngSwitchCase="\'outbox\'">\n            <ion-item-sliding *ngFor="let mail of outboxList " (click)="doReadOutBox(mail.Id)">\n                <ion-item>\n                    <ion-avatar item-left>\n                        <img src="assets/img/mike.png">\n                    </ion-avatar>\n                    <span>{{mail.Title}}</span>\n                    <p class="font-12">发至:{{mail.AccessPerson}}&emsp;{{mail.MailDate|date:"yyyy年MM月dd日 HH时mm分"}}</p>\n                </ion-item>\n                <ion-item-options side="right">\n                    <button ion-button color="primary">\n                        <ion-icon name="md-trash"></ion-icon>删除\n                    </button>\n                </ion-item-options>\n            </ion-item-sliding>\n        </ion-list>\n    </div>\n    <div *ngIf="isEmpty" text-center padding style="font-size:.9em;">\n        <div padding>暂无消息数据！！！</div>\n        <img src="assets/img/face/face2.png" height="100">\n    </div>\n    <!--<ion-infinite-scroll ng-if="moredata" on-infinite="loadMore()" distance="10%"></ion-infinite-scroll>-->\n    <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())" [enabled]="moredata" threshold="100px">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    <ion-fab bottom right>\n        <button ion-fab color="danger" (click)="doWrite()"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n\n</ion-content>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\mail\mail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_GlobalData__["a" /* GlobalData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__mailService__["a" /* MailService */]])
    ], Mail);
    return Mail;
}());

//# sourceMappingURL=mail.js.map

/***/ })

});
//# sourceMappingURL=37.js.map