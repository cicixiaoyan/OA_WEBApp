webpackJsonp([8],{

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePageModule", function() { return MessagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message__ = __webpack_require__(849);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messageService__ = __webpack_require__(777);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MessagePageModule = (function () {
    function MessagePageModule() {
    }
    MessagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__message__["a" /* MessagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__message__["a" /* MessagePage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__messageService__["a" /* MessageService */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__message__["a" /* MessagePage */]
            ]
        })
    ], MessagePageModule);
    return MessagePageModule;
}());

//# sourceMappingURL=message.module.js.map

/***/ }),

/***/ 777:
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

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_GlobalData__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messageService__ = __webpack_require__(777);
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
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessagePage = (function () {
    function MessagePage(navCtrl, navParams, globalData, modalCtrl, messageService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalData = globalData;
        this.modalCtrl = modalCtrl;
        this.messageService = messageService;
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
            "PageIndex": 0,
            "NewsStatus": this.messageService.Message["inbox"],
            "Uid": this.globalData.Uid,
            "Status": this.messageService.messageStatus["unread"],
        };
        this.outboxData = {
            "PageSize": 5,
            "PageIndex": 0,
            "NewsStatus": this.messageService.Message["outbox"],
            "Uid": this.globalData.Uid,
            "Status": this.messageService.messageStatus["all"]
        };
        this.initializeItems();
    }
    MessagePage.prototype.initializeItems = function () {
        var _this = this;
        this._getInboxList(this.inboxData);
        this._getOutboxList(this.outboxData);
        console.log(this);
        this.timer = setInterval(function () {
            console.log(_this);
            _this.getNewInboxList(_this.inboxData);
        }, 50000);
    };
    MessagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Message');
    };
    // 选择已读、未读、全部
    MessagePage.prototype.checkRead = function (name) {
        if (name === void 0) { name = "read"; }
        this.inboxData.PageIndex = 0;
        this.inboxList = [];
        this.checkBtn = { "read": false, "unread": false, "all": false };
        this.checkBtn[name] = true;
        if (name === "unread") {
            // 参数设置
            this.inboxData.Status = this.messageService.messageStatus["unread"];
        }
        else if (name === "read") {
            // 参数设置
            this.inboxData.Status = this.messageService.messageStatus["read"];
        }
        else {
            // 参数设置
            this.inboxData.Status = this.messageService.messageStatus["all"];
        }
        this._getInboxList(this.inboxData);
    };
    MessagePage.prototype.doRead = function (Params) {
        this.navCtrl.push("MessageReadPage", { Params: Params });
    };
    MessagePage.prototype.doReadOutBox = function (Params) {
        console.log(Params);
        this.navCtrl.push("MessageReadOutPage", { Params: Params });
    };
    MessagePage.prototype.doWrite = function () {
        var modal = this.modalCtrl.create("MessageWritePage");
        modal.present();
        modal.onDidDismiss(function (data) {
            data && console.log(data);
        });
        // this.navCtrl.push(MailWrite);
    };
    MessagePage.prototype.doRefresh = function (refresher) {
        console.log("加载更多");
        // this.initializeItems();
        this.change();
        setTimeout(function () {
            console.log('数据加载完成');
            refresher.complete();
        }, 1000);
    };
    MessagePage.prototype.change = function () {
        this.moredata = true;
        if (this.box === "inbox") {
            this.inboxList = [];
            this.inboxData.PageIndex = 0;
            this._getInboxList(this.inboxData);
        }
        else {
            this.outboxList = [];
            this.outboxData.PageIndex = 0;
            this._getOutboxList(this.outboxData);
        }
    };
    MessagePage.prototype.doInfinite = function () {
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
    MessagePage.prototype.getNewInboxList = function (inboxData) {
        var _this = this;
        var data = inboxData;
        data.PageIndex = 1;
        data.PageSize = 2;
        this.messageService.getInboxList(data).subscribe(function (list) {
            if (list.Result == true) {
                var arr = list.Data.filter(function (item) {
                    return item.Id !== _this.inboxList[0].Id;
                });
                if (arr !== []) {
                    _this.inboxList = _this.inboxList.concat(arr);
                }
            }
            else {
                clearInterval(_this.timer);
            }
        });
    };
    MessagePage.prototype._getInboxList = function (inboxData) {
        var _this = this;
        this.messageService.getInboxList(inboxData).subscribe(function (resJson) {
            if (resJson.Result && resJson.Data.length !== 0 && typeof (resJson.Data) !== "string") {
                _this.moredata = false;
                _this.isEmpty = false;
                var list = resJson.Data;
                _this.inboxList = _this.inboxList.concat(list);
            }
            else {
                _this.moredata = false;
                if (_this.inboxData.PageIndex === 0) {
                    _this.messageService.httpService.nativeService.showToast(resJson.Data);
                    _this.isEmpty = true;
                    _this.inboxList = [];
                }
            }
        });
    };
    MessagePage.prototype._getOutboxList = function (outboxData) {
        var _this = this;
        this.messageService.getOutboxList(outboxData).subscribe(function (resJson) {
            if (resJson.Result && resJson.Data.length !== 0 && typeof (resJson.Data) !== "string") {
                _this.moredata = false;
                _this.isEmpty = false;
                var list = resJson.Data;
                _this.outboxList = _this.outboxList.concat(list);
            }
            else {
                _this.moredata = false;
                if (_this.outboxList.PageIndex === 1) {
                    _this.messageService.httpService.nativeService.showToast(resJson.Data);
                    _this.isEmpty = true;
                    _this.outboxList = [];
                }
            }
        });
    };
    MessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\message\message.html"*/`<!--\n\n  Generated template for the MessagePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-toolbar>\n\n        <ion-segment [(ngModel)]="box" (ngModelChange)="change()">\n\n            <ion-segment-button value="inbox">\n\n                收消息\n\n            </ion-segment-button>\n\n            <ion-segment-button value="outbox">\n\n                发消息\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n\n\n    </ion-toolbar>\n\n\n\n    <!--\n\n      <ion-buttons ion-button icon-only end (click)="doWrite()">\n\n          <ion-icon name="ios-add-circle-outline"></ion-icon>\n\n      </ion-buttons>-->\n\n    <div [ngSwitch]="box" class="subbox">\n\n        <div *ngSwitchCase="\'inbox\'">\n\n            <button ion-button small (click)="checkRead(\'unread\')" class="button-ios-light" [ngClass]="{\'button-ios-calm\':checkBtn.unread}">未读</button>\n\n            <button ion-button small (click)="checkRead(\'read\')" class="button-ios-light" [ngClass]="{\'button-ios-calm\':checkBtn.read}">已读</button>\n\n        </div>\n\n\n\n        <div *ngSwitchCase="\'outbox\'">\n\n            <button ion-button small class="button-ios-light button-ios-calm">已发送</button>\n\n            <!-- <button ion-button small (click)="checkDraft(true)" class="button-ios-light" [ngClass]="{\'button-ios-calm\':isDraft}">未读</button> -->\n\n        </div>\n\n    </div>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content style="background: #f4f4f4;overflow: hidden;" overflow-scroll="true" class="has-header">\n\n    <!--<ion-refresher on-refresh="doRefresh()"></ion-refresher>-->\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="正在刷新...">\n\n        </ion-refresher-content>\n\n    </ion-refresher>\n\n    <div [ngSwitch]="box">\n\n        <ion-list *ngSwitchCase="\'inbox\'">\n\n            <ion-item-sliding *ngFor="let message of inboxList;let i = index; trackBy: index" (click)="doRead(message)">\n\n                <ion-item>\n\n                    <ion-avatar item-left>\n\n                        <img src="assets/img/mike.png">\n\n                    </ion-avatar>\n\n                    <span style="color:#2196F3;" *ngIf="message.Status==\'0\'">●&nbsp;</span><span>{{message.Content}}</span>\n\n                    <p class="font-12">来至:{{message.Name}}&emsp;{{message.SendDate}}</p>\n\n                </ion-item>\n\n                <ion-item-options side="right">\n\n                    <button ion-button color="primary">\n\n                          <ion-icon name="md-trash"></ion-icon>删除\n\n                      </button>\n\n                </ion-item-options>\n\n            </ion-item-sliding>\n\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'outbox\'">\n\n            <ion-item-sliding *ngFor="let message of outboxList " (click)="doReadOutBox(message)">\n\n                <ion-item>\n\n                    <ion-avatar item-left>\n\n                        <img src="assets/img/mike.png">\n\n                    </ion-avatar>\n\n                    <span>{{message.Content}}</span>\n\n                    <p class="font-12">发至:{{message.Name}}&emsp;{{message.SendDate}}</p>\n\n                </ion-item>\n\n                <ion-item-options side="right">\n\n                    <button ion-button color="primary">\n\n                          <ion-icon name="md-trash"></ion-icon>删除\n\n                      </button>\n\n                </ion-item-options>\n\n            </ion-item-sliding>\n\n        </ion-list>\n\n    </div>\n\n    <div *ngIf="isEmpty" text-center padding style="font-size:.9em;">\n\n        <div padding>暂无消息数据！！！</div>\n\n        <img src="assets/img/face/face2.png" height="100">\n\n    </div>\n\n    <!--<ion-infinite-scroll ng-if="moredata" on-infinite="loadMore()" distance="10%"></ion-infinite-scroll>-->\n\n    <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())" [enabled]="moredata" threshold="100px">\n\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中..."></ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n    <ion-fab bottom right>\n\n        <button ion-fab color="danger" (click)="doWrite()"><ion-icon name="add"></ion-icon></button>\n\n    </ion-fab>\n\n\n\n</ion-content>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\message\message.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_GlobalData__["a" /* GlobalData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__messageService__["a" /* MessageService */]])
    ], MessagePage);
    return MessagePage;
}());

//# sourceMappingURL=message.js.map

/***/ })

});
//# sourceMappingURL=8.js.map