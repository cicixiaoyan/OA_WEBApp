webpackJsonp([0],{

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_GlobalData__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mail_mail_read_mail_read__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mail_mail_write_mail_write__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mail_mail_read_outbox_mail_read_outbox__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mailService__ = __webpack_require__(165);
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
            "Mail": this.mailService.Mail["inbox"],
            "Uid": this.globalData.Uid,
            "Status": this.mailService.mailStatus["unread"]
        };
        this.outboxData = {
            "PageSize": 5,
            "PageIndex": 1,
            "Mail": this.mailService.Mail["outbox"],
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mail_mail_read_mail_read__["a" /* MailRead */], { id: id });
    };
    Mail.prototype.doReadOutBox = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__mail_mail_read_outbox_mail_read_outbox__["a" /* MailReadOutbox */], { id: id });
    };
    Mail.prototype.doWrite = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__mail_mail_write_mail_write__["a" /* MailWrite */]);
        modal.present();
        modal.onDidDismiss(function (data) {
            data && console.log(data);
        });
        // this.navCtrl.push(MailWrite);
    };
    Mail.prototype.doRefresh = function (refresher) {
        console.log("加载更多");
        // this.initializeItems();
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
        setTimeout(function () {
            console.log('数据加载完成');
            refresher.complete();
        }, 1000);
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
        this.mailService.getInboxList(inboxData).subscribe(function (list) {
            if (list.Result == true) {
                _this.moredata = false;
            }
            else {
                _this.inboxList = _this.inboxList.concat(list);
            }
        });
    };
    Mail.prototype._getOutboxList = function (outboxData) {
        var _this = this;
        this.mailService.getOutboxList(outboxData).subscribe(function (list) {
            if (list.Result == true) {
                _this.moredata = false;
            }
            else {
                _this.outboxList = _this.outboxList.concat(list);
            }
        });
    };
    Mail = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mail',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\mail\mail.html"*/`<!--\n  Generated template for the Mail page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-toolbar>\n        <ion-segment [(ngModel)]="box">\n            <ion-segment-button value="inbox">\n                收件箱\n            </ion-segment-button>\n            <ion-segment-button value="outbox">\n                发件箱\n            </ion-segment-button>\n        </ion-segment>\n\n    </ion-toolbar>\n\n    <!--\n    <ion-buttons ion-button icon-only end (click)="doWrite()">\n        <ion-icon name="ios-add-circle-outline"></ion-icon>\n    </ion-buttons>-->\n    <div [ngSwitch]="box" class="subbox">\n        <div *ngSwitchCase="\'inbox\'">\n            <button ion-button small (click)="checkRead(\'unread\')" class="button-ios-light" [ngClass]="{\'button-ios-calm\':checkBtn.unread}">未读</button>\n            <button ion-button small (click)="checkRead(\'read\')" class="button-ios-light" [ngClass]="{\'button-ios-calm\':checkBtn.read}">已读</button>\n            <button ion-button small (click)="checkRead(\'all\')" class="button-ios-light" [ngClass]="{\'button-ios-calm\':checkBtn.all}">全部</button>\n        </div>\n\n        <div *ngSwitchCase="\'outbox\'">\n            <button ion-button small (click)="checkDraft()" class="button-ios-light" [ngClass]="{\'button-ios-calm\':!isDraft}">已发送</button>\n            <button ion-button small (click)="checkDraft(true)" class="button-ios-light" [ngClass]="{\'button-ios-calm\':isDraft}">草稿箱</button>\n        </div>\n    </div>\n\n</ion-header>\n\n\n<ion-content style="background: #f4f4f4;overflow: hidden;" overflow-scroll="true" class="has-header">\n    <!--<ion-refresher on-refresh="doRefresh()"></ion-refresher>-->\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="正在刷新...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <div [ngSwitch]="box">\n        <ion-list *ngSwitchCase="\'inbox\'">\n            <ion-item-sliding *ngFor="let mail of inboxList " (click)="doRead(mail.Id)">\n                <ion-item>\n                    <ion-avatar item-left>\n                        <img src="assets/img/mike.png">\n                    </ion-avatar>\n                    <span style="color:#2196F3;" *ngIf="mail.jszt==\'未读\'">●&nbsp;</span><span>{{mail.Content}}</span>\n                    <p class="font-12">来至:{{mail.Name}}&emsp;{{mail.SendDate}}</p>\n                </ion-item>\n                <ion-item-options side="right">\n                    <button ion-button color="primary">\n                        <ion-icon name="md-trash"></ion-icon>删除\n                    </button>\n                </ion-item-options>\n            </ion-item-sliding>\n        </ion-list>\n        <ion-list *ngSwitchCase="\'outbox\'">\n            <ion-item-sliding *ngFor="let mail of outboxList " (click)="doReadOutBox(mail.Id)">\n                <ion-item>\n                    <ion-avatar item-left>\n                        <img src="assets/img/mike.png">\n                    </ion-avatar>\n                    <span>{{mail.Content}}</span>\n                    <p class="font-12">发至:{{mail.Name}}&emsp;{{mail.SendDate}}</p>\n                </ion-item>\n                <ion-item-options side="right">\n                    <button ion-button color="primary">\n                        <ion-icon name="md-trash"></ion-icon>删除\n                    </button>\n                </ion-item-options>\n            </ion-item-sliding>\n        </ion-list>\n    </div>\n    <div *ngIf="isEmpty" text-center padding style="background:#ddd;font-size:.9em;">\n        <div padding>暂无消息数据！！！</div>\n        <img src="assets/img/face/face2.png" height="100">\n    </div>\n    <!--<ion-infinite-scroll ng-if="moredata" on-infinite="loadMore()" distance="10%"></ion-infinite-scroll>-->\n    <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())" [enabled]="moredata" threshold="100px">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    <ion-fab bottom right>\n        <button ion-fab color="danger" (click)="doWrite()"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n\n</ion-content>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\mail\mail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_GlobalData__["a" /* GlobalData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__mailService__["a" /* MailService */]])
    ], Mail);
    return Mail;
}());

//# sourceMappingURL=mail.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Utils类存放和业务无关的公共方法
 * @description
 */
var Utils = (function () {
    function Utils() {
    }
    Utils_1 = Utils;
    Utils.isEmpty = function (value) {
        return value == null || typeof value === 'string' && value.length === 0;
    };
    Utils.isNotEmpty = function (value) {
        return !Utils_1.isEmpty(value);
    };
    /**
     * 格式“是”or“否”
     * @param value
     * @returns {string|string}
     */
    Utils.formatYesOrNo = function (value) {
        return value == 1 ? '是' : (value == '0' ? '否' : null);
    };
    /**
     * 日期对象转为日期字符串
     * @param date 需要格式化的日期对象
     * @param sFormat 输出格式,默认为yyyy-MM-dd                        年：y，月：M，日：d，时：h，分：m，秒：s
     * @example  dateFormat(new Date())                               "2017-02-28"
     * @example  dateFormat(new Date(),'yyyy-MM-dd')                  "2017-02-28"
     * @example  dateFormat(new Date(),'yyyy-MM-dd HH:mm:ss')         "2017-02-28 13:24:00"   ps:HH:24小时制
     * @example  dateFormat(new Date(),'yyyy-MM-dd hh:mm:ss')         "2017-02-28 01:24:00"   ps:hh:12小时制
     * @example  dateFormat(new Date(),'hh:mm')                       "09:24"
     * @example  dateFormat(new Date(),'yyyy-MM-ddTHH:mm:ss+08:00')   "2017-02-28T13:24:00+08:00"
     * @example  dateFormat(new Date('2017-02-28 13:24:00'),'yyyy-MM-ddTHH:mm:ss+08:00')   "2017-02-28T13:24:00+08:00"
     * @returns {string}
     */
    Utils.dateFormat = function (date, sFormat) {
        if (sFormat === void 0) { sFormat = 'yyyy-MM-dd'; }
        var time = {
            Year: 0,
            TYear: '0',
            Month: 0,
            TMonth: '0',
            Day: 0,
            TDay: '0',
            Hour: 0,
            THour: '0',
            hour: 0,
            Thour: '0',
            Minute: 0,
            TMinute: '0',
            Second: 0,
            TSecond: '0',
            Millisecond: 0
        };
        time.Year = date.getFullYear();
        time.TYear = String(time.Year).substr(2);
        time.Month = date.getMonth() + 1;
        time.TMonth = time.Month < 10 ? "0" + time.Month : String(time.Month);
        time.Day = date.getDate();
        time.TDay = time.Day < 10 ? "0" + time.Day : String(time.Day);
        time.Hour = date.getHours();
        time.THour = time.Hour < 10 ? "0" + time.Hour : String(time.Hour);
        time.hour = time.Hour < 13 ? time.Hour : time.Hour - 12;
        time.Thour = time.hour < 10 ? "0" + time.hour : String(time.hour);
        time.Minute = date.getMinutes();
        time.TMinute = time.Minute < 10 ? "0" + time.Minute : String(time.Minute);
        time.Second = date.getSeconds();
        time.TSecond = time.Second < 10 ? "0" + time.Second : String(time.Second);
        time.Millisecond = date.getMilliseconds();
        return sFormat.replace(/yyyy/ig, String(time.Year))
            .replace(/yyy/ig, String(time.Year))
            .replace(/yy/ig, time.TYear)
            .replace(/y/ig, time.TYear)
            .replace(/MM/g, time.TMonth)
            .replace(/M/g, String(time.Month))
            .replace(/dd/ig, time.TDay)
            .replace(/d/ig, String(time.Day))
            .replace(/HH/g, time.THour)
            .replace(/H/g, String(time.Hour))
            .replace(/hh/g, time.Thour)
            .replace(/h/g, String(time.hour))
            .replace(/mm/g, time.TMinute)
            .replace(/m/g, String(time.Minute))
            .replace(/ss/ig, time.TSecond)
            .replace(/s/ig, String(time.Second))
            .replace(/fff/ig, String(time.Millisecond));
    };
    /**
     * 返回字符串长度，汉子计数为2
     * @param str
     * @returns {number}
     */
    Utils.strLength = function (str) {
        var len = 0;
        for (var i = 0, length_1 = str.length; i < length_1; i++) {
            str.charCodeAt(i) > 255 ? len += 2 : len++;
        }
        return len;
    };
    /**
     * 把url中的双斜杠替换为单斜杠
     * 如:http://localhost:8080//api//demo.替换后http://localhost:8080/api/demo
     * @param url
     * @returns {string}
     */
    Utils.formatUrl = function (url) {
        if (url === void 0) { url = ''; }
        var index = 0;
        if (url.startsWith('http')) {
            index = 7;
        }
        return url.substring(0, index) + url.substring(index).replace(/\/\/*/g, '/');
    };
    Utils.sessionStorageGetItem = function (key) {
        var jsonString = sessionStorage.getItem(key);
        if (jsonString) {
            return JSON.parse(jsonString);
        }
        return null;
    };
    Utils.sessionStorageSetItem = function (key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    };
    Utils.sessionStorageRemoveItem = function (key) {
        sessionStorage.removeItem(key);
    };
    Utils.sessionStorageClear = function () {
        sessionStorage.clear();
    };
    /**
     * 每次调用sequence加1
     * @type {()=>number}
     */
    Utils.getSequence = (function () {
        var sequence = 1;
        return function () {
            return ++sequence;
        };
    })();
    Utils = Utils_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Utils);
    return Utils;
    var Utils_1;
}());

//# sourceMappingURL=Utils.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(23);
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
            all: 3 // 全部
        };
    }
    // getInboxList(param?) {
    //     return this.httpService.get('assets/data/mail-inbox.json').map((res: Response) => res.json());
    // }
    // getOutboxList(param?) {
    //     return this.httpService.get('assets/data/mail-outbox.json').map((res: Response) => res.json());
    // }
    MailService.prototype.getInboxList = function (param) {
        return this.httpService.postFormData("ashx/MailList.ashx", param).map(function (res) { return res.json(); });
    };
    MailService.prototype.getOutboxList = function (param) {
        return this.httpService.postFormData("ashx/MailList.ashx", param).map(function (res) { return res.json(); });
    };
    MailService.prototype.write = function (param) {
        // Uid 当前用户账号id
        // AcceptUid 接收账号id
        // Content 发送内容
        // 返回json
        // {"Data":"xxx！","Result":false}
        return this.httpService.postFormData("ashx/NewsAdd.ashx", param).map(function (res) { return res.json(); });
    };
    MailService.prototype.getRecipients = function (param) {
        // 输入参数
        // Name 输入查询用户名称
        // 返回json
        return this.httpService.postFormData("ashx/UserSheet.ashx", param).map(function (res) { return res.json(); });
    };
    MailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */]])
    ], MailService);
    return MailService;
}());

//# sourceMappingURL=mailService.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Backlog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backlog_detail_backlog_detail__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__backlogService__ = __webpack_require__(374);
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
 * Generated class for the Backlog page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Backlog = (function () {
    function Backlog(navCtrl, navParams, backlogService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.backlogService = backlogService;
        this.work = "notDone";
        this.nxPage = __WEBPACK_IMPORTED_MODULE_2__backlog_detail_backlog_detail__["a" /* BacklogDetail */];
        this.items = [];
        this.moredata = true;
        this.data = { "page": 1, "size": 10 };
        this.getNotDoneList(this.data);
    }
    Backlog.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Backlog');
    };
    Backlog.prototype.doRefresh = function (refresher) {
        // this.initializeItems();
        this.moredata = true;
        this.items = [];
        if (this.work === "ontDone") {
            // ....
            this.getNotDoneList(this.data);
        }
        else {
            // ...
            this.getDoneList(this.data);
        }
        if (!!refresher) {
            setTimeout(function () {
                console.log('数据加载完成');
                refresher.complete();
            }, 1000);
        }
    };
    Backlog.prototype.doInfinite = function () {
        if (this.moredata) {
            if (this.work === "ontDone") {
                // ....
                this.getNotDoneList(this.data);
            }
            else {
                // ...
                this.getDoneList(this.data);
            }
        }
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve();
            }, 500);
        });
    };
    Backlog.prototype.getNotDoneList = function (data) {
        var _this = this;
        this.backlogService.getNotDoneList(data).subscribe(function (list) {
            if (list === []) {
                _this.moredata = false;
            }
            else {
                _this.items = _this.items.concat(list);
            }
        });
    };
    Backlog.prototype.getDoneList = function (data) {
        var _this = this;
        this.backlogService.getDoneList(data).subscribe(function (list) {
            if (list === []) {
                _this.moredata = false;
            }
            else {
                _this.items = _this.items.concat(list);
            }
        });
    };
    Backlog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-backlog',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\home\backlog\backlog.html"*/`<!--\n  Generated template for the Backlog page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>待办事项</ion-title>\n    </ion-navbar>\n    <ion-toolbar no-border-top>\n        <ion-segment class="content-ios" [(ngModel)]="work">\n            <ion-segment-button value="notDone">\n                未办理\n            </ion-segment-button>\n            <ion-segment-button value="done">\n                已办理\n            </ion-segment-button>\n        </ion-segment>\n    </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div [ngSwitch]="work">\n        <ion-refresher (ionRefresh)="doRefresh($event)">\n            <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="正在刷新...">\n            </ion-refresher-content>\n        </ion-refresher>\n\n        <ion-list *ngSwitchCase="\'notDone\'">\n\n            <button ion-item *ngFor="let work of items" [navPush]="nxPage" [navParams]="{id:work.ggid}">\n                <span>&nbsp;[{{work.wfName}}]{{work.wfNo}}</span>\n                <p>发起人：{{work.fqr}}&emsp;当前步骤：{{work.dqbz}}</p>\n            </button>\n\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'done\'">\n            <button ion-item *ngFor="let work of items" [navPush]="nxPage" [navParams]="{id:work.ggid}">\n                <span>&nbsp;[{{work.wfName}}]{{work.wfNo}}</span>\n                <p>发起人：{{work.fqr}}&emsp;当前步骤：{{work.dqbz}}</p>\n            </button>\n        </ion-list>\n\n        <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())" [enabled]="moredata" threshold="100px">\n            <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中..."></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n\n    </div>\n</ion-content>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\home\backlog\backlog.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__backlogService__["a" /* BacklogService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__backlogService__["a" /* BacklogService */]])
    ], Backlog);
    return Backlog;
}());

//# sourceMappingURL=backlog.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contacts; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contacts_detail_contacts_detail__ = __webpack_require__(375);
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
 * Generated class for the Contacts page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Contacts = (function () {
    function Contacts(navCtrl, navParams, httpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nxPage = __WEBPACK_IMPORTED_MODULE_3__contacts_detail_contacts_detail__["a" /* ContactsDetail */];
        this.params = { id: 42 };
        this.page = 1;
        this.size = 1;
        this.moredata = true;
        this.initializeItems();
    }
    Contacts.prototype.doRefresh = function (refresher) {
        this.page = 1;
        this.size = 1;
        this.initializeItems();
        setTimeout(function () {
            console.log('数据加载完成');
            refresher.complete();
        }, 2000);
    };
    Contacts.prototype.doInfinite = function () {
        var _this = this;
        if (this.moredata) {
            this.size++;
            var data = { page: this.page, size: this.size };
            this.getList(data).subscribe(function (list) {
                if (list === []) {
                    _this.moredata = false;
                }
                else {
                    _this.items = _this.items.concat(list);
                }
            });
        }
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve();
            }, 500);
        });
    };
    Contacts.prototype.initializeItems = function () {
        var _this = this;
        this.getList().subscribe(function (list) {
            if (list.Result == true)
                _this.items = list.Data;
        });
        // let data={action: "Yh_List", page: 1, size: 1};
        // this.httpService.postFormData("ashx/MailList.ashx/Yh_List",data)
        //   .map(Response => Response.json())
        //   .subscribe(list => {
        //     this.items = list;
        //   });
        // 假数据
        // this.items = [
        //        {"ui_id":"admin","ui_desc":"系统管理员","ui_sex":"男","ui_lx":"总部","zwmc":"员工"},
        //        {"ui_id":"admin1","ui_desc":"系统管理员1","ui_sex":"男","ui_lx":"总部","zwmc":"员工1"},
        //        {"ui_id":"admin2","ui_desc":"系统管理员2","ui_sex":"男","ui_lx":"总部","zwmc":"员工2"},
        //        {"ui_id":"admin3","ui_desc":"系统管理员3","ui_sex":"男","ui_lx":"总部","zwmc":"员工3"},
        //     ];
    };
    Contacts.prototype.getList = function (data) {
        data = !!data ? data : { page: 1, size: 1 };
        return this.httpService.postFormData("ashx/UserSheet.ashx", data).map(function (Response) { return Response.json(); });
    };
    Contacts.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Contacts');
    };
    Contacts.prototype.search = function (refresher) {
        var _this = this;
        console.log(this.searchKey);
        this.initializeItems();
        return this.httpService.postFormData("ashx/UserSheet.ashx", { "Name": this.searchKey })
            .map(function (Response) { return Response.json(); })
            .subscribe(function (list) {
            if (list.Result == true)
                _this.items = list.Data;
            else
                _this.items = [];
        });
        // let data={action: "noticeBykeyWords", page: 1, size: 1,title: "系统管理员"};
        // this.httpService.postFormData("ashx/MailList.ashx/noticeBykeyWords",data)
        //   .map(Response => Response.json())
        //   .subscribe(list => {
        //     this.items = list;
        //   });
        // setTimeout(() => {
        //   console.log('数据加载完成');
        //   refresher.complete();
        // }, 2000);
    };
    Contacts = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contacts',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\home\contacts\contacts.html"*/`<!--\n\n  Generated template for the Contacts page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>通讯录</ion-title>\n\n    </ion-navbar>\n\n    <ion-searchbar color="dark" type="text" placeholder="请输入部门或姓名" [(ngModel)]="searchKey" [showCancelButton]="true" cancelButtonText="搜索" (ionCancel)="search($event)">\n\n    </ion-searchbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="正在刷新...">\n\n        </ion-refresher-content>\n\n    </ion-refresher>\n\n    <!--<ion-refresher on-refresh="doRefresh()"></ion-refresher>-->\n\n    <ion-list inset style="margin:16px 0;">\n\n        <button ion-item *ngFor="let contact of items" [navPush]="nxPage" [navParams]="{id:contact.Uid}">\n\n            <span>{{contact.Name}}({{contact.Uid}})</span>\n\n            <p>{{contact.Dept}}&emsp;{{contact.Duty}}</p>\n\n        </button>\n\n    </ion-list>\n\n    <!--<ion-infinite-scroll ng-if="moredata" on-infinite="loadMore()" distance="10%"></ion-infinite-scroll>-->\n\n    <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())" [enabled]="moredata" threshold="100px">\n\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中..."></ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n</ion-content>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\home\contacts\contacts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */]])
    ], Contacts);
    return Contacts;
}());

//# sourceMappingURL=contacts.js.map

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 180;

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 225;

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Utils__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__GlobalData__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__NativeService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Constants__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Logger__ = __webpack_require__(371);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HttpService = (function () {
    function HttpService(http, globalData, logger, nativeService) {
        this.http = http;
        this.globalData = globalData;
        this.logger = logger;
        this.nativeService = nativeService;
    }
    HttpService_1 = HttpService;
    HttpService.prototype.request = function (url, options) {
        var _this = this;
        url = __WEBPACK_IMPORTED_MODULE_4__Utils__["a" /* Utils */].formatUrl(url.startsWith('http') ? url : __WEBPACK_IMPORTED_MODULE_7__Constants__["c" /* APP_SERVE_URL */] + url);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].create(function (observer) {
            _this.nativeService.showLoading();
            __WEBPACK_IMPORTED_MODULE_7__Constants__["g" /* IS_DEBUG */] && console.log('%c 请求前 %c', 'color:blue', '', 'url', url, 'options', options);
            _this.http.request(url, options).timeout(__WEBPACK_IMPORTED_MODULE_7__Constants__["h" /* REQUEST_TIMEOUT */]).subscribe(function (res) {
                _this.nativeService.hideLoading();
                __WEBPACK_IMPORTED_MODULE_7__Constants__["g" /* IS_DEBUG */] && console.log('%c 请求成功 %c', 'color:green', '', 'url', url, 'options', options, 'res', res);
                if (res['_body'] == '') {
                    res['_body'] = null;
                }
                observer.next(res);
            }, function (err) {
                _this.requestFailed(url, options, err); // 处理请求失败
                observer.error(err);
            });
        });
    };
    HttpService.prototype.get = function (url, paramMap) {
        if (paramMap === void 0) { paramMap = null; }
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            search: HttpService_1.buildURLSearchParams(paramMap)
        }));
    };
    HttpService.prototype.noTokenPostFormData = function (url, paramMap) {
        if (paramMap === void 0) { paramMap = null; }
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            search: HttpService_1.buildURLSearchParams(paramMap).toString(),
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            })
        }));
    };
    HttpService.prototype.post = function (url, body) {
        if (body === void 0) { body = {}; }
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            body: body,
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
                'Content-Type': 'application/json; charset=UTF-8'
            })
        }));
    };
    HttpService.prototype.postFormData = function (url, paramMap) {
        if (paramMap === void 0) { paramMap = null; }
        paramMap.Token = this.globalData.token;
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            search: HttpService_1.buildURLSearchParams(paramMap).toString(),
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            })
        }));
    };
    HttpService.prototype.put = function (url, body) {
        if (body === void 0) { body = {}; }
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Put,
            body: body
        }));
    };
    HttpService.prototype.delete = function (url, paramMap) {
        if (paramMap === void 0) { paramMap = null; }
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Delete,
            search: HttpService_1.buildURLSearchParams(paramMap).toString()
        }));
    };
    HttpService.prototype.patch = function (url, body) {
        if (body === void 0) { body = {}; }
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Patch,
            body: body
        }));
    };
    HttpService.prototype.head = function (url, paramMap) {
        if (paramMap === void 0) { paramMap = null; }
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Head,
            search: HttpService_1.buildURLSearchParams(paramMap).toString()
        }));
    };
    HttpService.prototype.options = function (url, paramMap) {
        if (paramMap === void 0) { paramMap = null; }
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Options,
            search: HttpService_1.buildURLSearchParams(paramMap).toString()
        }));
    };
    /**
     * 将对象转为查询参数
     * @param paramMap
     * @returns {URLSearchParams}
     */
    HttpService.buildURLSearchParams = function (paramMap) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        if (!paramMap) {
            return params;
        }
        for (var key in paramMap) {
            var val = paramMap[key];
            if (val instanceof Date) {
                val = __WEBPACK_IMPORTED_MODULE_4__Utils__["a" /* Utils */].dateFormat(val, 'yyyy-MM-dd hh:mm:ss');
            }
            params.set(key, val);
        }
        return params;
    };
    /**
     * 处理请求失败事件
     * @param url
     * @param options
     * @param err
     */
    HttpService.prototype.requestFailed = function (url, options, err) {
        this.nativeService.hideLoading();
        __WEBPACK_IMPORTED_MODULE_7__Constants__["g" /* IS_DEBUG */] && console.log('%c 请求失败 %c', 'color:red', '', 'url', url, 'options', options, 'err', err);
        if (err instanceof __WEBPACK_IMPORTED_MODULE_3_rxjs__["TimeoutError"]) {
            this.nativeService.showToast('请求超时,请稍后再试!');
            return;
        }
        // err数据类型不确定,判断消息体是否有message字段,如果有说明是后台返回的json数据
        var index = JSON.stringify(err['_body']).indexOf('message');
        if (index != -1) {
            this.nativeService.showToast(err.json().message || '请求发生异常');
            return;
        }
        if (!this.nativeService.isConnecting()) {
            this.nativeService.showToast('请连接网络');
            return;
        }
        var status = err.status;
        var msg = '请求发生异常';
        if (status === 0) {
            msg = '请求失败，请求响应出错';
        }
        else if (status === 404) {
            msg = '请求失败，未找到请求地址';
        }
        else if (status === 500) {
            msg = '请求失败，服务器出错，请稍后再试';
        }
        this.nativeService.showToast(msg);
        this.logger.httpLog(err, msg, {
            url: url,
            status: status
        });
    };
    HttpService.prototype.optionsAddToken = function (options) {
        var token = this.globalData.token;
        if (options.headers) {
            options.headers.append('Token', token);
        }
        else {
            options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
                'Token': token
            });
        }
    };
    HttpService = HttpService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__GlobalData__["a" /* GlobalData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__GlobalData__["a" /* GlobalData */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__Logger__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__Logger__["a" /* Logger */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__NativeService__["a" /* NativeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__NativeService__["a" /* NativeService */]) === "function" && _d || Object])
    ], HttpService);
    return HttpService;
    var HttpService_1, _a, _b, _c, _d;
}());

//# sourceMappingURL=HttpService.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Welcome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(83);
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
 * Generated class for the Welcome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Welcome = (function () {
    function Welcome(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Welcome.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Welcome');
    };
    Welcome.prototype.goToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */], { index: 0 });
    };
    Welcome = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\welcome\welcome.html"*/`<!--\n  Generated template for the Welcome page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="nav-decor">\n\n    <ion-navbar>\n        <ion-title>welcome</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-slides pager>\n\n        <ion-slide>\n            <img src="assets/img/welcome/slide1.jpg" />\n        </ion-slide>\n\n        <ion-slide>\n            <img src="assets/img/welcome/slide2.png" />\n        </ion-slide>\n\n        <ion-slide>\n            <img src="assets/img/welcome/slide3.png" />\n        </ion-slide>\n\n        <ion-slide>\n            <ion-row>\n                <ion-col>\n                    <img src="assets/img/welcome/slide4.png" />\n                </ion-col>\n            </ion-row>\n            <ion-row class="start-button">\n                <ion-col>\n                    <button ion-button clear color="light" (click)="goToHome()">立即启动</button>\n                </ion-col>\n            </ion-row>\n        </ion-slide>\n\n    </ion-slides>\n\n</ion-content>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], Welcome);
    return Welcome;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mail_mail__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_backlog_backlog__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_contacts_contacts__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { LoginPage } from '../login/login';




var Home = (function () {
    function Home(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        // set our app's pages
        this.appPages = [
            { title: '邮件', component: __WEBPACK_IMPORTED_MODULE_4__mail_mail__["a" /* Mail */], index: 1, icon: 'ios-mail', color: "positive" },
            { title: '公告管理', component: __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */], index: 2, icon: 'ios-notifications', color: "royal" },
            { title: '通讯录', component: __WEBPACK_IMPORTED_MODULE_6__home_contacts_contacts__["a" /* Contacts */], icon: 'md-call', color: "energized" },
            { title: '待办事项', component: __WEBPACK_IMPORTED_MODULE_5__home_backlog_backlog__["a" /* Backlog */], icon: 'ios-calendar', color: "assertive" },
            // { title: '新建工作', component: Newwork, icon: 'md-exit', color: "balanced" },
            { title: '设置', component: __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */], index: 3, icon: 'ios-cog', color: "calm" },
        ];
    }
    Home.prototype.ionViewDidLoad = function () {
        console.log(this.storage.get("UserInfo"));
        console.log('ionViewDidLoad Home');
    };
    Home.prototype.openPage = function (page) {
        // the nav component was found using @ViewChild(Nav)
        // reset the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            this.navCtrl.parent.select(page.index);
            // this.navCtrl.setRoot(page.component, { tabIndex: page.index });
        }
        else {
            this.navCtrl.push(page.component);
            // this.nav.parent.setRoot(page.component).catch(() => {
            //   console.log("Didn't set nav root");
            // });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */])
    ], Home.prototype, "nav", void 0);
    Home = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\home\home.html"*/`<!--\n  Generated template for the Home page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>首页</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row class="index-row">\n            <ion-col col-4 *ngFor="let p of appPages" (click)="openPage(p)">\n                <div [class]="p.color">\n                    <ion-icon [name]="p.icon"></ion-icon>{{p.title}}\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], Home);
    return Home;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailRead; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_NativeService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mail_write_mail_write__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





 // , FileUploadOptions, TransferObject

/**
 * Generated class for the MailRead page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MailRead = (function () {
    function MailRead(navCtrl, navParams, nativeService, modalCtrl, transfer, file) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeService = nativeService;
        this.modalCtrl = modalCtrl;
        this.transfer = transfer;
        this.file = file;
        this.mailContent = ""; // 消息内容
        this.mailDetail = [];
        this.initializeItems();
    }
    MailRead.prototype.initializeItems = function () {
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
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__mail_write_mail_write__["a" /* MailWrite */], { mail: this.mailDetail });
        modal.present();
        modal.onDidDismiss(function (data) {
            data && console.log(data);
        });
    };
    MailRead.prototype.download = function (Path) {
        var path = "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png";
        var target = path.split("/").pop(); // target为文件名字
        this.nativeService.download(path, target);
        //   this.transfer.create().download(encodeURI(path), this.file.externalDataDirectory + 'file.png').then((entry) => {
        //   console.log('download complete: ' + entry.toURL());
        // }, (error) => {
        //   // handle error
        // });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */])
    ], MailRead.prototype, "content", void 0);
    MailRead = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mail-read',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\mail\mail-read\mail-read.html"*/`<!--\n  Generated template for the MailRead page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>信息详情</ion-title>\n        <ion-buttons end>\n            <button ion-button (click)="read()">转发</button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content overflow-scroll="true" style="background: #f4f4f4;overflow: hidden;">\n    <div>\n\n        <ion-list>\n\n            <ion-item>\n                <ion-label>发送人&emsp;</ion-label>\n                <ion-input type="text" disabled="disabled" [(ngModel)]="mailDetail.fsrName" placeholder="系统管理员"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>主题&emsp;&emsp;</ion-label>\n                <ion-input type="test" disabled="disabled" [(ngModel)]="mailDetail.jsbt" placeholder="主题1"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>发送时间</ion-label>\n                <ion-input type="test" disabled="disabled" [(ngModel)]="mailDetail.fssj" placeholder="发送时间未知"></ion-input>\n            </ion-item>\n\n        </ion-list>\n    </div>\n\n\n    <div>\n        <ion-scroll scrollY="true" class="mail-content">\n            <!--<div padding-horizontal [innerHTML]="mailContent"></div>-->\n            <div class="mydiv">\n                你该交作业了<br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br>\n            </div>\n            <div class="affix" *ngIf="mailDetail.attName">\n                <ion-grid>\n                    <ion-row align-items-center>\n                        <ion-col col-6 col-lg-4>\n                            <div (click)="download(mailDetail.ggfj)">\n                                <ion-icon class="affix-icon" name="md-image"></ion-icon>\n                                <p>{{mailDetail.attName}}</p>\n                                <p color="gray">大小未知</p>\n                                <ion-icon class="affix-dismiss" name="ios-cloud-download-outline"></ion-icon>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </ion-scroll>\n    </div>\n</ion-content>\n<ion-footer class="message-reply">\n    <div class="item">\n        <textarea name="" rows="" cols="" placeholder="回复: "></textarea>\n        <button ion-button small color="positive">发送</button>\n    </div>\n</ion-footer>\n<!--<div class="list message-reply">\n\n    <div class="item">\n        <textarea name="" rows="" cols="" placeholder="回复: "></textarea>\n        <button ion-button small color="positive">发送</button>\n    </div>\n\n</div>-->`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\mail\mail-read\mail-read.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */]])
    ], MailRead);
    return MailRead;
}());

//# sourceMappingURL=mail-read.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_chooser__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Constants__ = __webpack_require__(49);
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
 * Created by yanxiaojun617@163.com on 12-27.
 */






 // FileUploadOptions





var NativeService = (function () {
    function NativeService(platform, toastCtrl, alertCtrl, appVersion, camera, toast, transfer, file, fileChooser, inAppBrowser, imagePicker, network, loadingCtrl) {
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.appVersion = appVersion;
        this.camera = camera;
        this.toast = toast;
        this.transfer = transfer;
        this.file = file;
        this.fileChooser = fileChooser;
        this.inAppBrowser = inAppBrowser;
        this.imagePicker = imagePicker;
        this.network = network;
        this.loadingCtrl = loadingCtrl;
        this.loadingIsOpen = false;
    }
    // const fileTransfer: TransferObject = this.transfer.create();
    NativeService.prototype.warn = function (info) {
        console.log('%cNativeService/' + info, 'color:#e8c406');
    };
    // FileChoose( url:string, options, trustAllHosts?:boolean){
    //   this.fileChooser.open().then(uri => {
    //     return this.upload(uri,url,options,trustAllHosts);
    //   }).catch(err => {
    //     console.log(err)
    //   })
    // }
    // /**
    //  * 上传
    //  */
    // upload(fileUrl, url, options, trustAllHosts?:boolean) {
    //   let alert = this.alertCtrl.create({
    //     title: '上传进度：0%',
    //     enableBackdropDismiss: false,
    //     buttons: ['后台下载']
    //   });
    //   alert.present();
    //   const fileTransfer: TransferObject = this.transfer.create();
    //   fileTransfer.onProgress((event: ProgressEvent) => {
    //       let num = Math.floor(event.loaded / event.total * 100);
    //       if (num === 100) {
    //         alert.dismiss();
    //       } else {
    //         let title = document.getElementsByClassName('alert-title')[0];
    //         title && (title.innerHTML = '上传进度：' + num + '%');
    //       }
    //   });
    //   return fileTransfer.upload(fileUrl,url, options);
    // }
    /**
     * 下载
     */
    NativeService.prototype.download = function (source, target, trustAllHosts, Optional) {
        var alert = this.alertCtrl.create({
            title: '下载进度：0%',
            enableBackdropDismiss: false,
            buttons: ['后台下载']
        });
        alert.present();
        var fileTransfer = this.transfer.create();
        target = this.file.externalRootDirectory + target; // 文件保存的目录
        fileTransfer.download(encodeURI(source), target).then(function (entry) {
            console.log('download complete: ' + entry.toURL());
            // window['install'].install(target.replace('file://', ''));
        });
        fileTransfer.onProgress(function (event) {
            var num = Math.floor(event.loaded / event.total * 100);
            if (num === 100) {
                alert.dismiss();
            }
            else {
                var title = document.getElementsByClassName('alert-title')[0];
                title && (title.innerHTML = '下载进度：' + num + '%');
            }
        });
    };
    /**
     * 通过浏览器打开url
     */
    NativeService.prototype.openUrlByBrowser = function (url) {
        this.inAppBrowser.create(url, '_system');
    };
    /**
     * 检查app是否需要升级
     */
    NativeService.prototype.detectionUpgrade = function () {
        var _this = this;
        // 这里连接后台判断是否需要升级,不需要升级就return
        this.alertCtrl.create({
            title: '升级',
            subTitle: '发现新版本,是否立即升级？',
            buttons: [{ text: '取消' },
                {
                    text: '确定',
                    handler: function () {
                        _this.downloadApp();
                    }
                }
            ]
        }).present();
    };
    /**
     * 下载安装app
     */
    NativeService.prototype.downloadApp = function () {
        if (this.isAndroid()) {
            var alert_1 = this.alertCtrl.create({
                title: '下载进度：0%',
                enableBackdropDismiss: false,
                buttons: ['后台下载']
            });
            alert_1.present();
            var fileTransfer = this.transfer.create();
            var apk_1 = this.file.externalRootDirectory + 'android.apk'; // apk保存的目录
            fileTransfer.download(__WEBPACK_IMPORTED_MODULE_11__Constants__["a" /* APK_DOWNLOAD */], apk_1).then(function () {
                window['install'].install(apk_1.replace('file://', ''));
            });
            fileTransfer.onProgress(function (event) {
                var num = Math.floor(event.loaded / event.total * 100);
                if (num === 100) {
                    alert_1.dismiss();
                }
                else {
                    var title = document.getElementsByClassName('alert-title')[0];
                    title && (title.innerHTML = '下载进度：' + num + '%');
                }
            });
        }
        if (this.isIos()) {
            this.openUrlByBrowser(__WEBPACK_IMPORTED_MODULE_11__Constants__["b" /* APP_DOWNLOAD */]);
        }
    };
    /**
     * 是否真机环境
     * @return {boolean}
     */
    NativeService.prototype.isMobile = function () {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    };
    /**
     * 是否android真机环境
     * @return {boolean}
     */
    NativeService.prototype.isAndroid = function () {
        return this.isMobile() && this.platform.is('android');
    };
    /**
     * 是否ios真机环境
     * @return {boolean}
     */
    NativeService.prototype.isIos = function () {
        return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
    };
    /**
     * 统一调用此方法显示提示信息
     * @param message 信息内容
     * @param duration 显示时长
     */
    NativeService.prototype.showToast = function (message, duration) {
        if (message === void 0) { message = '操作完成'; }
        if (duration === void 0) { duration = 2000; }
        if (this.isMobile()) {
            this.toast.show(message, String(duration), 'center').subscribe();
        }
        else {
            this.toastCtrl.create({
                message: message,
                duration: duration,
                position: 'middle',
                showCloseButton: false
            }).present();
        }
    };
    /**
     * 统一调用此方法显示loading
     * @param content 显示的内容
     */
    NativeService.prototype.showLoading = function (content) {
        var _this = this;
        if (content === void 0) { content = ''; }
        if (!this.loadingIsOpen) {
            this.loadingIsOpen = true;
            this.loading = this.loadingCtrl.create({
                content: content
            });
            this.loading.present();
            setTimeout(function () {
                _this.loadingIsOpen && _this.loading.dismiss();
                _this.loadingIsOpen = false;
            }, 10000);
        }
    };
    /**
     * 关闭loading
     */
    NativeService.prototype.hideLoading = function () {
        this.loadingIsOpen && this.loading.dismiss();
        this.loadingIsOpen = false;
    };
    /**
     * 使用cordova-plugin-camera获取照片
     * @param options
     * @returns {Promise<string>}
     */
    NativeService.prototype.getPicture = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var ops = Object.assign({
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 100,
            allowEdit: true,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 1000,
            targetHeight: 1000,
            saveToPhotoAlbum: true,
            correctOrientation: true // 设置摄像机拍摄的图像是否为正确的方向
        }, options);
        return new Promise(function (resolve) {
            _this.camera.getPicture(ops).then(function (imgData) {
                resolve(imgData);
            }, function (err) {
                err == 20 && _this.showToast('没有权限,请在设置中开启权限');
                _this.warn('getPicture:' + err);
            });
        });
    };
    /**
     * 通过拍照获取照片
     * @param options
     * @return {Promise<string>}
     */
    NativeService.prototype.getPictureByCamera = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return new Promise(function (resolve) {
            _this.getPicture(Object.assign({
                sourceType: _this.camera.PictureSourceType.CAMERA,
                destinationType: _this.camera.DestinationType.DATA_URL // DATA_URL: 0 base64字符串, FILE_URI: 1图片路径
            }, options)).then(function (imgData) {
                resolve(imgData);
            }).catch(function (err) {
                String(err).indexOf('cancel') != -1 ? _this.showToast('取消拍照', 1500) : _this.showToast('获取照片失败');
            });
        });
    };
    /**
     * 通过图库获取照片
     * @param options
     * @return {Promise<string>}
     */
    NativeService.prototype.getPictureByPhotoLibrary = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return new Promise(function (resolve) {
            _this.getPicture(Object.assign({
                sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                destinationType: _this.camera.DestinationType.DATA_URL // DATA_URL: 0 base64字符串, FILE_URI: 1图片路径
            }, options)).then(function (imgData) {
                resolve(imgData);
            }).catch(function (err) {
                String(err).indexOf('cancel') != -1 ? _this.showToast('取消选择图片', 1500) : _this.showToast('获取照片失败');
            });
        });
    };
    /**
     * 通过图库选择多图
     * @param options
     * @return {Promise<T>}
     */
    NativeService.prototype.getMultiplePicture = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var that = this;
        var destinationType = options['destinationType'] || 0; // 0:base64字符串,1:图片url
        return new Promise(function (resolve) {
            _this.imagePicker.getPictures(Object.assign({
                maximumImagesCount: 6,
                width: 1000,
                height: 1000,
                quality: 100 // 图像质量，范围为0 - 100
            }, options)).then(function (files) {
                if (destinationType === 1) {
                    resolve(files);
                }
                else {
                    var imgBase64s_1 = []; // base64字符串数组
                    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                        var fileUrl = files_1[_i];
                        that.convertImgToBase64(fileUrl, function (base64) {
                            imgBase64s_1.push(base64);
                            if (imgBase64s_1.length === files.length) {
                                resolve(imgBase64s_1);
                            }
                        });
                    }
                }
            }).catch(function (err) {
                _this.warn('getMultiplePicture:' + err);
                _this.showToast('获取照片失败');
            });
        });
    };
    /**
     * 根据图片绝对路径转化为base64字符串
     * @param url 绝对路径
     * @param callback 回调函数
     */
    NativeService.prototype.convertImgToBase64 = function (url, callback) {
        this.getFileContentAsBase64(url, function (base64Image) {
            callback.call(this, base64Image.substring(base64Image.indexOf(';base64,') + 8));
        });
    };
    NativeService.prototype.getFileContentAsBase64 = function (path, callback) {
        function fail(err) {
            console.log('Cannot found requested file' + err);
        }
        function gotFile(fileEntry) {
            fileEntry.file(function (file) {
                var reader = new FileReader();
                reader.onloadend = function (e) {
                    var content = this.result;
                    callback(content);
                };
                reader.readAsDataURL(file);
            });
        }
        this.file.resolveLocalFilesystemUrl(path).then(function (fileEnter) { return gotFile(fileEnter); }).catch(function (err) { return fail(err); });
        // window['resolveLocalFileSystemURL'](path, gotFile, fail);
    };
    /**
     * 获取网络类型 如`unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
     */
    NativeService.prototype.getNetworkType = function () {
        if (!this.isMobile()) {
            return 'wifi';
        }
        return this.network.type;
    };
    /**
     * 判断是否有网络
     * @returns {boolean}
     */
    NativeService.prototype.isConnecting = function () {
        return this.getNetworkType() != 'none';
    };
    /**
     * 获得app版本号,如0.01
     * @description  对应/config.xml中version的值
     * @returns {Promise<string>}
     */
    NativeService.prototype.getVersionNumber = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.appVersion.getVersionNumber().then(function (value) {
                resolve(value);
            }).catch(function (err) {
                _this.warn('getVersionNumber:' + err);
            });
        });
    };
    /**
     * 获得app name,如ionic2_tabs
     * @description  对应/config.xml中name的值
     * @returns {Promise<string>}
     */
    NativeService.prototype.getAppName = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.appVersion.getAppName().then(function (value) {
                resolve(value);
            }).catch(function (err) {
                _this.warn('getAppName:' + err);
            });
        });
    };
    /**
     * 获得app包名/id,如com.kit.ionic2tabs
     * @description  对应/config.xml中id的值
     * @returns {Promise<string>}
     */
    NativeService.prototype.getPackageName = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.appVersion.getPackageName().then(function (value) {
                resolve(value);
            }).catch(function (err) {
                _this.warn('getPackageName:' + err);
            });
        });
    };
    NativeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */]])
    ], NativeService);
    return NativeService;
}());

//# sourceMappingURL=NativeService.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GlobalData__ = __webpack_require__(41);
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
 * Utils类存放和业务无关的公共方法
 * @description
 */
var Logger = (function () {
    function Logger(globalData) {
        this.globalData = globalData;
    }
    Logger.prototype.log = function (err, action, other) {
        if (other === void 0) { other = null; }
        console.log('Logger.log：action-' + action);
        other && console.log(other);
        console.log(err);
        fundebug.notifyError(err, {
            metaData: {
                action: action,
                other: other,
                user: { id: this.globalData.Uid, name: this.globalData.Name }
            }
        });
    };
    Logger.prototype.httpLog = function (err, msg, other) {
        if (other === void 0) { other = {}; }
        console.log('Logger.httpLog：msg-' + msg);
        fundebug.notifyHttpError(err, {
            metaData: {
                action: msg,
                other: other,
                user: { id: this.globalData.Uid, name: this.globalData.Name }
            }
        });
    };
    Logger = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__GlobalData__["a" /* GlobalData */]])
    ], Logger);
    return Logger;
}());

//# sourceMappingURL=Logger.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailReadOutbox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_NativeService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mail_write_mail_write__ = __webpack_require__(84);
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
        this.mailContent = ""; //消息内容
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
            msbz: "是" //密送标志
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
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__mail_write_mail_write__["a" /* MailWrite */]);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */])
    ], MailReadOutbox.prototype, "content", void 0);
    MailReadOutbox = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mail-read-outbox',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\mail\mail-read-outbox\mail-read-outbox.html"*/`<!--\n  Generated template for the MailReadOutbox page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>信息详情</ion-title>\n        <ion-buttons end>\n            <button ion-button (click)="read()">转发</button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content overflow-scroll="true" style="background: #f4f4f4;overflow: hidden;">\n    <div>\n\n        <ion-list>\n\n            <ion-item>\n                <ion-label style="align-self:center;">收件人&emsp;</ion-label>\n                <ion-textarea disabled="disabled" [(ngModel)]="mailDetail.fsrName" #popoverContent placeholder="收件人"></ion-textarea>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>主题&emsp;&emsp;</ion-label>\n                <ion-input type="test" disabled="disabled" [(ngModel)]="mailDetail.jsbt" placeholder="主题1"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>发送时间</ion-label>\n                <ion-input type="test" disabled="disabled" [(ngModel)]="mailDetail.fssj" placeholder="发送时间未知"></ion-input>\n            </ion-item>\n\n        </ion-list>\n    </div>\n\n\n    <div>\n        <ion-scroll scrollY="true" class="mail-content">\n            <!--<div padding-horizontal [innerHTML]="mailContent"></div>-->\n            <div class="mydiv">\n                你该交作业了<br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br> 你该交作业了\n                <br>你该交作业了<br>你该交作业了<br>你该交作业了<br>\n            </div>\n            <div class="affix" *ngIf="mailDetail.attName">\n                <ion-grid>\n                    <ion-row align-items-center>\n                        <ion-col col-6 col-lg-4>\n                            <div (click)="download(mailDetail.ggfj)">\n                                <ion-icon class="affix-icon" name="md-image"></ion-icon>\n                                <p>{{mailDetail.attName}}</p>\n                                <p color="gray">大小未知</p>\n                                <ion-icon class="affix-dismiss" name="ios-cloud-download-outline"></ion-icon>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </ion-scroll>\n    </div>\n</ion-content>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\mail\mail-read-outbox\mail-read-outbox.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */]])
    ], MailReadOutbox);
    return MailReadOutbox;
}());

//# sourceMappingURL=mail-read-outbox.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BacklogDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(23);
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
 * Generated class for the BacklogDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BacklogDetail = (function () {
    function BacklogDetail(navCtrl, navParams, httpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.item = [];
        this.isComplete = false;
        console.log(this.navParams.get("id"));
        this.initializeItems();
    }
    BacklogDetail.prototype.initializeItems = function () {
        var _this = this;
        this.httpService.get('assets/data/backlog-done.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (item) {
            _this.item = item[0];
        });
    };
    BacklogDetail.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BacklogDetail');
    };
    BacklogDetail.prototype.approved = function () {
        console.log("审批通过");
    };
    BacklogDetail.prototype.overrule = function () {
        console.log("审批驳回");
    };
    BacklogDetail.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    BacklogDetail = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-backlog-detail',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\home\backlog\backlog-detail\backlog-detail.html"*/`<!--\n  Generated template for the BacklogDetail page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>事项详情</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-card>\n        <ion-card-header>\n            33ee\n        </ion-card-header>\n        <ion-card-content>\n            <ion-list>\n                <ion-item>\n                    <ion-label>当前步骤：</ion-label>\n                    <ion-input type="text" placeholder="当前步骤1"></ion-input>\n                </ion-item>\n\n                <ion-item *ngIf="isComplete">\n                    <ion-label>审批模式：</ion-label>\n                    <ion-input type="text" placeholder="无"></ion-input>\n                </ion-item>\n\n                <div *ngIf="!isComplete">\n                    <ion-item>\n                        <ion-label>&emsp;流水号：<em>&emsp;1&nbsp;—</em></ion-label>\n\n                        <ion-input type="text" placeholder="请输入流水号"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-label>审批状态：</ion-label>\n                        <ion-input type="text" placeholder="无"></ion-input>\n                    </ion-item>\n                </div>\n\n\n                <div id="strhtm" style="min-height: 100px;overflow-x:auto;"></div>\n\n            </ion-list>\n            <ion-row>\n                <ion-col col-auto style="padding-left:12px;padding-top:5px;text-align:right;">\n                    &nbsp;相关附件：\n                </ion-col>\n                <ion-col col-lg-8 col-xl-6 style="position: relative;padding-left: 40px;background-color: #d7eaf9;">\n                    <ion-icon name="md-image" color="energized" style="position:absolute;left:.4rem;display:inline-block;font-size:3.6rem;"></ion-icon>\n                    <div>\n                        <span>text.png</span>\n                        <span ng-click="" style="position:absolute;right:10px;font-size:1.2rem">下载</span>\n                        <p style="font-size:1.2rem;">2.5M</p>\n                    </div>\n                </ion-col>\n            </ion-row>\n\n            <ion-list *ngIf="!isComplete">\n                <ion-item>\n                    <ion-label>审批记录：</ion-label>\n                    <ion-textarea type="text" placeholder="无"></ion-textarea>\n                </ion-item>\n                <ion-item>\n                    <ion-textarea placeholder="请输入本次审批意见" rows="2"></ion-textarea>\n                </ion-item>\n            </ion-list>\n\n\n        </ion-card-content>\n        <ion-row text-center>\n            <ion-col col-4>\n                <button ion-button icon-left clear small>\n                    <ion-icon name="md-checkmark"></ion-icon>\n                    <div>审批通过</div>\n                </button>\n            </ion-col>\n            <ion-col col-4>\n                <button ion-button icon-left clear small>\n                    <ion-icon name="md-close"></ion-icon>\n                    <div>审批驳回</div>\n                </button>\n            </ion-col>\n            <ion-col col-4>\n                <button ion-button icon-left clear small>\n                    <ion-icon name="md-return-left"></ion-icon>\n                    <div>返回</div>\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n\n</ion-content>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\home\backlog\backlog-detail\backlog-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */]])
    ], BacklogDetail);
    return BacklogDetail;
}());

//# sourceMappingURL=backlog-detail.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BacklogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {Observable} from "rxjs";

var BacklogService = (function () {
    function BacklogService(httpService) {
        this.httpService = httpService;
    }
    BacklogService.prototype.getNotDoneList = function (param) {
        return this.httpService.get('../../assets/data/backlog-done.json').map(function (res) { return res.json(); });
    };
    BacklogService.prototype.getDoneList = function (param) {
        return this.httpService.get('../../assets/data/backlog-done.json').map(function (res) { return res.json(); });
    };
    BacklogService.prototype.getDone = function () {
        return this.httpService.get('../../assets/data/backlog-done.json').map(function (res) { return res.json(); });
    };
    BacklogService.prototype.getNotDone = function () {
        return this.httpService.get('../../assets/data/backlog-done.json').map(function (res) { return res.json(); });
    };
    BacklogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */]])
    ], BacklogService);
    return BacklogService;
}());

//# sourceMappingURL=backlogService.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(23);
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
        this.initializeItems();
    }
    ContactsDetail.prototype.initializeItems = function () {
        // let data={action: "YH_ById", id: this.navParams.get("id")};
        // this.httpService.postFormData("ashx/MailList.ashx/YH_ById",data)
        //   .map(Response => Response.json())
        //   .subscribe(list => {
        //     this.items = list;
        //   });
        this.checkman = {
            // ui_bgdh: '123456', // 办公电话
            // ui_czdh: '123456', // --内线电话
            Name: '系統管理員',
            Uid: 'admin',
            // type: 'string', // --
            // ui_mail: '123@qq.com', // 邮箱
            Role: '員工',
            InDate: '2012-12-12T12:12:12',
            Sex: '男',
            Dept: '总部',
            Company: '成都永朔科技有限公司',
            Mobile: '123456',
            Duty: '无',
            photo: '无' // 照片暂无
        };
    };
    ContactsDetail.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactsDetail');
    };
    ContactsDetail.prototype.call = function (num) {
        window.location.href = "tel:" + num;
    };
    ContactsDetail = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contacts-detail',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\home\contacts\contacts-detail\contacts-detail.html"*/`<!--\n  Generated template for the ContactsDetail page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>详细信息</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-grid>\n        <ion-row style="border-bottom: 2px solid #ddd;padding-bottom: 0;">\n            <ion-col col-4 text-center style="border-right:1px solid #ddd;">\n                <img src="../assets/img/ben.png" alt="photo" style="height: 70px;width: 70px;border-radius: 50%;">\n                <div>{{checkman.ui_desc}}&nbsp;·<span class="royal">&nbsp;♂</span></div>\n            </ion-col>\n            <ion-col col-8>\n                <p>账号：{{checkman.ui_id}}</p>\n                <p>职位：{{checkman.ui_zw}}</p>\n                <p>公司：{{checkman.ui_ssgs}}</p>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-list>\n        <ion-item>\n            <ion-icon color="energized" name="ios-analytics" item-left></ion-icon>\n            部门\n            <ion-note item-right>{{checkman.ui_ssbm}}</ion-note>\n\n        </ion-item>\n        <ion-item (click)="call(checkman.tel)">\n            <ion-icon color="danger" name="md-call" item-left></ion-icon>\n            电话\n            <ion-note item-right>{{checkman.ui_czdh}}</ion-note>\n        </ion-item>\n        <ion-item (click)="call(checkman.mobile)">\n            <ion-icon color="calm" name="md-phone-portrait" item-left></ion-icon>\n            手机\n            <ion-note item-right>{{checkman.ui_yndx}}</ion-note>\n        </ion-item>\n        <ion-item>\n            <ion-icon color="balanced" name="md-send" item-left></ion-icon>\n            传真\n            <ion-note item-right>{{checkman.fax}}</ion-note>\n        </ion-item>\n        <ion-item>\n            <ion-icon color="royal" name="md-mail" item-left></ion-icon>\n            邮件\n            <ion-note item-right>{{checkman.ui_mail}}</ion-note>\n        </ion-item>\n\n\n    </ion-list>\n\n</ion-content>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\home\contacts\contacts-detail\contacts-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */]])
    ], ContactsDetail);
    return ContactsDetail;
}());

//# sourceMappingURL=contacts-detail.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notice; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notice_detail_notice_detail__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__ = __webpack_require__(23);
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
 * Generated class for the Notice page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Notice = (function () {
    function Notice(navCtrl, navParams, httpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nxPage = __WEBPACK_IMPORTED_MODULE_2__notice_detail_notice_detail__["a" /* NoticeDetail */];
        this.params = { id: 42 };
        this.page = 1;
        this.size = 1;
        this.moredata = true; // 是否能加载更多
        this.isEmpty = false; // 是否无数据
        this.initializeItems();
    }
    Notice.prototype.initializeItems = function () {
        var _this = this;
        var data = { page: 1, size: 1, action: "noticeall" };
        this.getList(data).subscribe(function (list) {
            if (!!list && list.length == 0) {
                _this.isEmpty = true;
            }
            _this.items = list;
        });
        // this.items = [
        //     {"ggid":"1","gglb":"公告类型","ggzt":"公告主题","lrr":"发布者","lrsj":"2012-12-12 12:12"},
        //     {"ggid":"2","gglb":"公告类型2","ggzt":"公告主题2","lrr":"发布者2","lrsj":"2012-12-12 12:12"},
        //     {"ggid":"3","gglb":"公告类型3","ggzt":"公告主题3","lrr":"发布者3","lrsj":"2012-12-12 12:12"},
        //     {"ggid":"4","gglb":"公告类型4","ggzt":"公告主题4","lrr":"发布者4","lrsj":"2012-12-12 12:12"}
        // ];
    };
    Notice.prototype.doRefresh = function (refresher) {
        this.initializeItems();
        setTimeout(function () {
            console.log('数据加载完成');
            refresher.complete();
        }, 1000);
    };
    Notice.prototype.doInfinite = function () {
        var _this = this;
        if (this.moredata) {
            this.size++; // 应该是this.page++,后台未设置好
            var data = { page: this.page, size: this.size };
            this.getList(data).subscribe(function (list) {
                if (list === []) {
                    _this.moredata = false;
                }
                else {
                    _this.items = _this.items.concat(list);
                }
            });
        }
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve();
            }, 500);
        });
    };
    Notice.prototype.getList = function (data) {
        if (!data.page) {
            data.page = 1;
            data.size = 1;
        }
        data.action = "noticeall";
        return this.httpService.postFormData("ashx/Notice.ashx/noticeall", data).map(function (Response) { return Response.json(); });
    };
    Notice.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Notice');
    };
    Notice.prototype.itemSelected = function () {
    };
    Notice.prototype.search = function (key) {
        // let data={action: "noticeBykeyWords", page: 1, title: "" + key + ""};
        // this.httpService.postFormData("ashx/Notice.ashx/noticeBykeyWords",data)
        //   .map(Response => Response.json())
        //   .subscribe(list => {
        //     this.items = list;
        //   });
    };
    Notice = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notice',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\notice\notice.html"*/`<!--\n  Generated template for the Notice page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>公告管理</ion-title>\n    </ion-navbar>\n    <ion-searchbar color="dark" type="text" placeholder="请输入关键字" [(ngModel)]="searchKey" [showCancelButton]="true" cancelButtonText="搜索" (ionCancel)="search($event)">\n    </ion-searchbar>\n</ion-header>\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="正在刷新...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ion-list inset style="margin:16px 0;">\n        <button ion-item *ngFor="let notice of items" [navPush]="nxPage" [navParams]="{id:notice.ggid}">\n            <span>[{{notice.gglb}}]{{notice.ggzt}}</span>\n            <p>{{notice.lrr}}&emsp;{{notice.lrsj|date:"yyyy年MM月dd日 HH时mm分"}}</p>\n        </button>\n    </ion-list>\n    <div *ngIf="isEmpty" text-center padding style="background:#ddd;font-size:.9em;">\n        <div padding>暂无公告！！！</div>\n        <img src="assets/img/face/face2.png" height="100">\n    </div>\n    <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())" [enabled]="moredata" threshold="100px">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\notice\notice.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__["a" /* HttpService */]])
    ], Notice);
    return Notice;
}());

//# sourceMappingURL=notice.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__ = __webpack_require__(29);
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
 * Generated class for the NoticeDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NoticeDetail = (function () {
    function NoticeDetail(navCtrl, navParams, httpService, toastCtrl, nativeService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.toastCtrl = toastCtrl;
        this.nativeService = nativeService;
        this.detailNotice = [];
        this.myDiv = '';
        this.initializeItems();
    }
    NoticeDetail.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NoticeDetail');
    };
    NoticeDetail.prototype.initializeItems = function () {
        var _this = this;
        var data = { id: this.navParams.get('id'), action: "noticeById" };
        this.httpService.postFormData("ashx/Notice.ashx/noticeById", data)
            .map(function (Response) { return Response.json(); })
            .subscribe(function (list) {
            if (!!list && list.length != 0) {
                _this.detailNotice = list[0];
                _this.myDiv = _this.detailNotice.ggnr;
            }
            else {
                _this.toastCtrl.create({
                    message: '服务器出错，请稍后再试！！！',
                    position: 'middle',
                    duration: 2000
                }).present();
                _this.navCtrl.pop();
            }
        });
        // this.detailNotice = {
        //     "gglb": "活动安排",
        //     "ggzt": "公告标题公告标题公告标题公告标题公告标题公告标题",
        //     "lrsj": "2017-12-12T12:12:12",
        //     "kssj": '2017-12-12T12:12:12',
        //     "jssj": "2017-12-12T12:12:12",
        //     "ggnr": "<p>公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容</p><div>hahah</div>",
        //     "lrr": "系统管理员",
        //     "attName": "123.png",
        //     "ggfj": "http:wwwwfrfge.html"
        // };
        // this.myDiv = this.detailNotice.ggnr;
    };
    NoticeDetail.prototype.download = function (path) {
        var target = path.split("/").pop();
        this.nativeService.download(path, target);
    };
    NoticeDetail = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notice-detail',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\notice\notice-detail\notice-detail.html"*/`<!--\n  Generated template for the NoticeDetail page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>公告详情</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <div class="detail-header">\n        <div class="detail-title"><span color="calm">[{{detailNotice.gglb}}]</span>{{detailNotice.ggzt}}</div>\n        <p>\n            {{detailNotice.lrr}}\n            <span class="right">{{detailNotice.lrsj|date : "yyyy年MM月dd日 hh时mm分"}}</span>\n        </p>\n    </div>\n    <div class="content">\n        <ion-scroll class="detail-content" scrollY="true" id="noticeContent">\n            <div padding>开始时间：{{detailNotice.kssj|date : "yyyy年MM月dd日 hh时mm分"}}\n                <br/>结束时间：{{detailNotice.jssj|date : "yyyy年MM月dd日 hh时mm分"}}</div>\n            <div padding-horizontal [innerHTML]="myDiv"></div>\n            <div class="affix" *ngIf="detailNotice.attName">\n                <ion-grid>\n                    <ion-row align-items-center>\n                        <ion-col col-6 col-lg-4>\n                            <div (click)="download(detailNotice.ggfj)">\n                                <ion-icon class="affix-icon" name="md-image"></ion-icon>\n                                <p>{{detailNotice.attName}}</p>\n                                <p color="gray">大小未知</p>\n                                <ion-icon class="affix-dismiss" name="ios-cloud-download-outline"></ion-icon>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </ion-scroll>\n    </div>\n\n\n</ion-content>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\notice\notice-detail\notice-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */]])
    ], NoticeDetail);
    return NoticeDetail;
}());

//# sourceMappingURL=notice-detail.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Account; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_account_edit_account_edit__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_account_passwordedit_account_passwordedit__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_aboutus_aboutus__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_UserInfo__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_GlobalData__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_NativeService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_FileService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_Constants__ = __webpack_require__(49);
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
 * Generated class for the Account page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Account = (function () {
    function Account(navCtrl, navParams, storage, globalData, events, modalCtrl, actionSheetCtrl, fileService, nativeService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.globalData = globalData;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.fileService = fileService;
        this.nativeService = nativeService;
        this.userInfo = new __WEBPACK_IMPORTED_MODULE_6__model_UserInfo__["a" /* UserInfo */]();
        this.isChange = false; // 头像是否改变标识
        this.userInfo.photo = "assets/img/ionic.png";
        this.storage.get('UserInfo').then(function (userInfo) {
            if (userInfo) {
                userInfo.photo = userInfo.photo ? userInfo.photo : _this.userInfo.photo;
                _this.userInfo = userInfo;
                _this.events.publish('user:login', userInfo);
                _this.globalData.Uid = userInfo.Uid;
                _this.globalData.Name = userInfo.Name;
                // this.globalData.token = userInfo.token;
            }
            else {
                var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
                modal.present();
                modal.onDidDismiss(function (data) {
                    data && console.log(data);
                });
            }
        });
    }
    Account.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Account');
    };
    Account.prototype.edit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__account_account_edit_account_edit__["a" /* AccountEdit */]);
    };
    Account.prototype.getAboutus = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__account_aboutus_aboutus__["a" /* AboutusPage */]);
    };
    Account.prototype.pwdEdit = function () {
        // this.navCtrl.push(AccountPasswordedit);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__account_account_passwordedit_account_passwordedit__["a" /* AccountPasswordedit */]);
        modal.present();
    };
    Account.prototype.changePhoto = function () {
        var _this = this;
        var options = {
            targetWidth: 400,
            targetHeight: 400
        };
        var actionSheet = this.actionSheetCtrl.create({
            title: '修改头像',
            buttons: [
                {
                    text: '从相册选择图片',
                    handler: function () {
                        _this.nativeService.getPictureByPhotoLibrary(options).then(function (imageBase64) {
                            _this.getPictureSuccess(imageBase64);
                        });
                    }
                }, {
                    text: '拍照',
                    handler: function () {
                        _this.nativeService.getPictureByCamera(options).then(function (imageBase64) {
                            _this.getPictureSuccess(imageBase64);
                        });
                    }
                }, {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('取消修改');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    Account.prototype.getPictureSuccess = function (imageBase64) {
        this.isChange = true;
        this.imageBase64 = imageBase64;
        this.userInfo.photo = 'data:image/jpg;base64,' + imageBase64;
    };
    Account.prototype.save = function () {
        var _this = this;
        if (this.isChange) {
            var fileObj = { 'base64': this.imageBase64 };
            this.fileService.uploadByBase64(fileObj).subscribe(function (result) {
                if (result.success) {
                    var origPath_1 = __WEBPACK_IMPORTED_MODULE_11__providers_Constants__["e" /* FILE_SERVE_URL */] + result.data[0].origPath;
                    _this.storage.get('UserInfo').then(function (userInfo) {
                        userInfo.photo = origPath_1;
                        _this.storage.set('UserInfo', userInfo);
                    });
                    // this.viewCtrl.dismiss({avatarPath: origPath});
                    // 这里需要保存avatar字段到用户表
                }
            });
        }
        else {
            this.userInfo.photo = this.storage.get('UserInfo')["photo"];
        }
    };
    Account = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\account\account.html"*/`<!--\n  Generated template for the Account page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>个人中心</ion-title>\n        <ion-buttons end *ngIf="isChange">\n            <button ion-button icon-only (click)="save()">\n                保存\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content overflow-scroll="true" style="background: #f4f4f4;overflow: hidden;">\n    <div class="top">\n        <div class="top-bg"></div>\n        <div>\n            <img (click)="changePhoto()" [src]="userInfo.photo" alt="photo" height="60" />\n            <h5><span class="positive">♂</span>&nbsp;<span class="positive">{{userInfo.Name}}</span></h5>\n            <div class="row row-no-padding">\n                <div class="col col-50" style="border-right: 1px solid;">\n                    职位：{{userInfo.Duty}}\n                </div>\n                <div class="col col-50">\n                    入职时间：{{userInfo.InDate|date:"yyyy-MM-dd"}}\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="imformation">\n        <ion-scroll scrollY="true" class="tab-content">\n            <ion-list>\n                <ion-item>\n                    <ion-icon name=\'md-map\' color="positive" item-left></ion-icon>\n                    公司\n                    <ion-note item-right>{{userInfo.Company}}</ion-note>\n                </ion-item>\n                <ion-item>\n                    <ion-icon name=\'ios-analytics\' color="energized" item-left></ion-icon>\n                    部门\n                    <ion-note item-right>{{userInfo.Dept}}</ion-note>\n                </ion-item>\n                <ion-item>\n                    <ion-icon name=\'ios-phone-portrait\' color="calm" item-left></ion-icon>\n                    手机号\n                    <ion-note item-right>{{userInfo.Mobile}}</ion-note>\n                </ion-item>\n                <!-- <ion-item>\n                    <ion-icon name=\'md-mail\' color="calm" item-left></ion-icon>\n                    邮箱\n                    <ion-note item-right>{{userInfo.ui_mail}}</ion-note>\n                </ion-item> -->\n            </ion-list>\n\n            <ion-list>\n                <ion-item (click)="getAboutus()">\n                    <ion-icon name=\'ios-at-outline\' color="assertive" item-left></ion-icon>\n                    关于我们\n                    <ion-icon name=\'ios-arrow-forward\' item-right></ion-icon>\n                </ion-item>\n            </ion-list>\n\n            <ion-list>\n                <ion-item (click)="pwdEdit()">\n                    <ion-icon name=\'ios-unlock\' color="assertive" item-left></ion-icon>\n                    修改密码\n                    <ion-icon name=\'ios-arrow-forward\' item-right></ion-icon>\n                </ion-item>\n                <ion-item (click)="edit()">\n                    <ion-icon name=\'md-create\' color="balanced" item-left></ion-icon>\n                    修改资料\n                    <ion-icon name=\'ios-arrow-forward\' item-right></ion-icon>\n                </ion-item>\n            </ion-list>\n\n\n\n            <div class="padding">\n                <button ion-button block color="assertive">退出登录</button>\n            </div>\n\n        </ion-scroll>\n    </div>\n</ion-content>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\account\account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__providers_GlobalData__["a" /* GlobalData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_10__providers_FileService__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_9__providers_NativeService__["a" /* NativeService */]])
    ], Account);
    return Account;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountEdit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_UserInfo__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
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
 * Generated class for the AccountEdit page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AccountEdit = (function () {
    function AccountEdit(navCtrl, navParams, actionSheetCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.formBuilder = formBuilder;
        this.userInfo = new __WEBPACK_IMPORTED_MODULE_2__model_UserInfo__["a" /* UserInfo */]();
        this.submitted = false;
        this.editForm = this.formBuilder.group({
            InDate: ['1990-02-19', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(4)]],
            Sex: ['男', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(2)]],
            BirthDate: [],
            Mobile: [],
            ui_mail: [],
            ui_bgdh: [],
            ui_czdh: []
        });
        this.initialize();
    }
    AccountEdit.prototype.initialize = function () {
        this.userInfo.BirthDate = "1990-02-19";
        this.userInfo.InDate = "1990-02-19";
    };
    AccountEdit.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountEdit');
    };
    // 性别选择
    AccountEdit.prototype.checkSex = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '选择性别',
            buttons: [
                {
                    text: '男',
                    role: 'destructive',
                    handler: function () {
                        _this.userInfo.Sex = "男";
                    }
                }, {
                    text: '女',
                    handler: function () {
                        _this.userInfo.Sex = "女";
                    }
                }, {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('已取消');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    AccountEdit.prototype.edit = function (value) {
        this.submitted = true;
        console.log(value);
    };
    AccountEdit.prototype.return = function () {
        this.navCtrl.pop();
    };
    AccountEdit = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account-edit',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\account\account-edit\account-edit.html"*/`<!--\n  Generated template for the AccountEdit page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>修改资料</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <form [formGroup]="editForm" (ngSubmit)="edit(editForm.value)">\n        <ion-list>\n            <ion-item>\n                <ion-label stacked>编码</ion-label>\n                <ion-input type="text" [(ngModel)]="userInfo.Uid" [ngModelOptions]="{standalone: true}" placeholder="请输入编码" disabled></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked>姓名</ion-label>\n                <ion-input type="text" [(ngModel)]="userInfo.Name" [ngModelOptions]="{standalone: true}" placeholder="请输入姓名" disabled></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked>公司</ion-label>\n                <ion-input type="text" [(ngModel)]="userInfo.Company" [ngModelOptions]="{standalone: true}" placeholder="公司名称" disabled></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked>部门</ion-label>\n                <ion-input type="text" [(ngModel)]="userInfo.Dept" [ngModelOptions]="{standalone: true}" placeholder="部门名称" disabled></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked>职位</ion-label>\n                <ion-input type="text" [(ngModel)]="userInfo.Duty" [ngModelOptions]="{standalone: true}" placeholder="职位" disabled></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked>入职时间</ion-label>\n                <ion-input type="text" [(ngModel)]="userInfo.InDate" formControlName="ui_rzrq" placeholder="入职时间" disabled></ion-input>\n            </ion-item>\n            <ion-item (click)="checkSex()">\n                <ion-label stacked>性别</ion-label>\n                <ion-input type="text" [(ngModel)]="userInfo.Sex" formControlName="ui_sex" placeholder="性别"></ion-input>\n            </ion-item>\n            <ion-item (click)="checkBirth">\n                <ion-label stacked>出生日期</ion-label>\n                <ion-datetime [(ngModel)]="userInfo.BirthDate" formControlName="ui_csrq" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked>移动电话</ion-label>\n                <ion-input type="text" [(ngModel)]="userInfo.Mobile" formControlName="ui_yddx" placeholder="移动电话"></ion-input>\n            </ion-item>\n            <div *ngIf="!editForm.controls.ui_yddx.valid && editForm.controls.ui_yddx.touched" class="validation-failed">请输入合法的电话号码</div>\n\n            <ion-item>\n                <ion-label stacked>电子邮箱</ion-label>\n                <ion-input type="text" [(ngModel)]="userInfo.ui_mail" formControlName="ui_mail" placeholder="电子邮箱"></ion-input>\n            </ion-item>\n            <div *ngIf="!editForm.controls.ui_yddx.valid && editForm.controls.ui_yddx.touched" class="validation-failed">请输入正确的电子邮箱</div>\n\n            <ion-item>\n                <ion-label stacked>办公电话</ion-label>\n                <ion-input type="text" [(ngModel)]="userInfo.ui_bgdh" formControlName="ui_bgdh" placeholder="办公电话"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label stacked>内线电话</ion-label>\n                <ion-input type="text" [(ngModel)]="userInfo.ui_czdh" formControlName="ui_czdh" placeholder="内线电话"></ion-input>\n            </ion-item>\n\n        </ion-list>\n        <div padding text-center>\n            <button ion-button type="submit" color="danger" [disabled]="!editForm.valid||submitted">保存</button>\n            <button ion-button clear small navPop>取消修改</button>\n        </div>\n\n\n    </form>\n</ion-content>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\account\account-edit\account-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], AccountEdit);
    return AccountEdit;
}());

//# sourceMappingURL=account-edit.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfo; });
var UserInfo = (function () {
    function UserInfo() {
    }
    return UserInfo;
}());

//# sourceMappingURL=UserInfo.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPasswordedit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__ = __webpack_require__(23);
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
 * Generated class for the AccountPasswordedit page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AccountPasswordedit = (function () {
    function AccountPasswordedit(navCtrl, viewCtrl, modalCtrl, httpService, formBuilder) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.httpService = httpService;
        this.formBuilder = formBuilder;
        this.editPasswordForm = this.formBuilder.group({
            oldPwd: [, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3)]],
            newPwd: [, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3)]],
            confirmPassword: [, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3)]]
        });
    }
    AccountPasswordedit.prototype.confirm = function () {
        var _this = this;
        var param = { oldPwd: this.oldPwd, newPwd: this.newPwd };
        this.httpService.postFormData("ashx/PwdMod.ashx", param)
            .map(function (responce) { return responce.json(); })
            .subscribe(function (Resjson) {
            if (Resjson.result) {
                var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                modal.present();
                modal.onDidDismiss(function (data) {
                    data && console.log(data);
                });
            }
            else {
            }
        });
    };
    AccountPasswordedit.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AccountPasswordedit = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account-passwordedit',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\account\account-passwordedit\account-passwordedit.html"*/`<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            修改\n        </ion-title>\n        <ion-buttons>\n            <button ion-button (click)="dismiss()">关闭</button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form [formGroup]="editPasswordForm" (ngSubmit)="confirm()">\n        <ion-list>\n            <ion-item>\n                <ion-label>&emsp;原密码：</ion-label>\n                <ion-input placeholder="请输入原密码" [(ngModel)]="oldPwd" type="password" formControlName="oldPwd"></ion-input>\n            </ion-item>\n            <span padding-left *ngIf="!editPasswordForm.controls.oldPwd.valid&& editPasswordForm.controls.oldPwd.touched" color="danger">请输入原密码</span>\n            <ion-item>\n                <ion-label>&emsp;新密码：</ion-label>\n                <ion-input placeholder="请输入新密码" [(ngModel)]="newPwd"  type="password" formControlName="newPwd"></ion-input>\n            </ion-item>\n            <span padding-left *ngIf="!editPasswordForm.controls.newPwd.valid&& editPasswordForm.controls.newPwd.touched" color="danger">请输入新密码</span>\n            <ion-item>\n                <ion-label>确认密码：</ion-label>\n                <ion-input placeholder="请再次输入新密码" type="password" formControlName="confirmPassword"></ion-input>\n            </ion-item>\n            <span padding-left *ngIf="!editPasswordForm.controls.confirmPassword.valid&& editPasswordForm.controls.confirmPassword.touched" color="danger">请确认新密码</span>\n        </ion-list>\n        <div padding-horizontal>\n            <button color="danger" ion-button block type="submit" [disabled]="!editPasswordForm.valid">确　认</button>\n        </div>\n    </form>\n</ion-content>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\account\account-passwordedit\account-passwordedit.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ViewController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__["a" /* HttpService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object])
    ], AccountPasswordedit);
    return AccountPasswordedit;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=account-passwordedit.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindPassword; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FindPassword = (function () {
    function FindPassword(navCtrl, viewCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.findPasswordForm = this.formBuilder.group({
            phone: [, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(11), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('1[0-9]{10}')]],
            verificationCode: [, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]{6}')]],
            newPassword: [, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)]]
        });
    }
    ;
    FindPassword.prototype.confirm = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]);
    };
    FindPassword.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FindPassword = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-find-password',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\login\find-password\find-password.html"*/`<!--\n  Generated template for the FindPassword page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            找回密码\n        </ion-title>\n        <ion-buttons>\n            <button ion-button (click)="dismiss()">关闭</button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form [formGroup]="findPasswordForm" (ngSubmit)="confirm()">\n        <ion-list>\n            <ion-item>\n                <ion-label>手机号</ion-label>\n                <ion-input type="number" formControlName="phone"></ion-input>\n            </ion-item>\n            <span padding-left *ngIf="!findPasswordForm.controls.phone.valid&& findPasswordForm.controls.phone.touched" color="danger">请输入手机号码</span>\n            <ion-item>\n                <ion-label>验证码</ion-label>\n                <ion-input type="number" formControlName="verificationCode"></ion-input>\n            </ion-item>\n            <span padding-left *ngIf="!findPasswordForm.controls.verificationCode.valid&& findPasswordForm.controls.verificationCode.touched" color="danger">请输入验证码</span>\n            <ion-item>\n                <ion-label>新密码</ion-label>\n                <ion-input type="password" formControlName="newPassword"></ion-input>\n            </ion-item>\n            <span padding-left *ngIf="!findPasswordForm.controls.newPassword.valid&& findPasswordForm.controls.newPassword.touched" color="danger">请输入新密码</span>\n        </ion-list>\n        <div padding-horizontal>\n            <button ion-button block type="submit" [disabled]="!findPasswordForm.valid">确　认</button>\n        </div>\n        <button class="verification" ion-button small color="secondary" *ngIf="findPasswordForm.controls.phone.valid">获取验证码</button>\n    </form>\n</ion-content>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\login\find-password\find-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], FindPassword);
    return FindPassword;
}());

//# sourceMappingURL=find-password.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_NativeService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__ = __webpack_require__(23);
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
 * Generated class for the AboutusPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AboutusPage = (function () {
    function AboutusPage(navCtrl, navParams, nativeService, httpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeService = nativeService;
        this.httpService = httpService;
        this.period = "2017";
        this.updateStr = "检查更新";
        this.data = {
            "version": "V0.0.1",
            "appName": "成都永朔科技有限公司",
            "logo": "assets/img/logo.png",
            "copyright": "成都永朔科技有限公司所有"
        };
        var thisYear = new Date().getFullYear();
        this.period = (thisYear === 2017) ? "2017" : "2017 - " + thisYear;
    }
    AboutusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutusPage');
    };
    AboutusPage.prototype.detectionUpgrade = function () {
        var _this = this;
        var version = this.nativeService.getVersionNumber();
        // 从服务器获取最新版本号
        this.httpService.get("url").map(function (res) { return res.json; })
            .subscribe(function (item) {
            if (item[0].version == version) {
                return _this.updateStr = "已是最新版";
            }
            else {
                _this.nativeService.detectionUpgrade();
            }
        });
    };
    AboutusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aboutus',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\account\aboutus\aboutus.html"*/`<!--\n  Generated template for the AboutusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>关于我们</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding text-center>\n    <img [src]="data.logo" alt="公司logo" />\n    <h2>{{data.appName}}</h2>\n    <p>{{data.version}}</p>\n    <button ion-button (click)="detectionUpgrade()">{{updateStr}}</button>\n\n</ion-content>\n<ion-footer text-center>{{data.copyright}}&copy;{{period}}</ion-footer>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\account\aboutus\aboutus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__["a" /* HttpService */]])
    ], AboutusPage);
    return AboutusPage;
}());

//# sourceMappingURL=aboutus.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpInterceptHandle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NativeService__ = __webpack_require__(29);
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
 * Created by yanxiaojun617@163.com on 2-25.
 */



var HttpInterceptHandle = (function () {
    function HttpInterceptHandle(events, nativeService) {
        this.events = events;
        this.nativeService = nativeService;
        events.subscribe('request:before', function (url, options) {
            nativeService.showLoading();
            console.log('%c 请求前 %c', 'color:blue', '', 'url', url, 'options', options);
        });
        events.subscribe('request:success', function (url, options, res) {
            nativeService.hideLoading();
            console.log('%c 请求成功 %c', 'color:green', '', 'url', url, 'options', options, 'res', res);
        });
        events.subscribe('request:error', function (url, options, error) {
            nativeService.hideLoading();
            console.log('%c 请求失败 %c', 'color:red', '', 'url', url, 'options', options, 'error', error);
            var status = error.status;
            if (status === 0) {
                nativeService.showToast('请求响应错误，请检查网络');
            }
            else if (status === 404) {
                nativeService.showToast('请求链接不存在，请联系管理员');
            }
            else if (status === 500) {
                nativeService.showToast('服务器出错，请稍后再试');
            }
            else {
                nativeService.showToast('未知错误，请检查网络');
            }
        });
    }
    HttpInterceptHandle = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* Events */], __WEBPACK_IMPORTED_MODULE_2__NativeService__["a" /* NativeService */]])
    ], HttpInterceptHandle);
    return HttpInterceptHandle;
}());

//# sourceMappingURL=HttpInterceptHandle.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(390);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FunDebugErrorHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home_module__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_mail_mail_module__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mail_mail_read_mail_read_module__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_mail_mail_write_mail_write_module__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_notice_notice_module__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_notice_notice_detail_notice_detail_module__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_account_account_module__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_account_aboutus_aboutus_module__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_account_account_edit_account_edit_module__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_account_account_passwordedit_account_passwordedit_module__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login_module__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_welcome_welcome_module__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_app_version__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_toast__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_file__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_file_chooser__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_transfer__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_in_app_browser__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_network__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_camera__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_image_picker__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_photo_viewer__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_NativeService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_HttpIntercept__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_HttpService__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_FileService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_Helper__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_Utils__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_http__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_HttpInterceptHandle__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_GlobalData__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_Logger__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__itransitions__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_Constants__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









































// 安装依赖:cnpm i fundebug-javascript --save
// https://docs.fundebug.com/notifier/javascript/framework/ionic2.html

var fundebug = __webpack_require__(737);
fundebug.apikey = __WEBPACK_IMPORTED_MODULE_41__providers_Constants__["f" /* FUNDEBUG_API_KEY */];
fundebug.releasestage = __WEBPACK_IMPORTED_MODULE_41__providers_Constants__["g" /* IS_DEBUG */] ? 'development' : 'production'; // 应用开发阶段，development:开发;production:生产
fundebug.silent = !__WEBPACK_IMPORTED_MODULE_41__providers_Constants__["d" /* ENABLE_FUNDEBUG */]; // 如果暂时不需要使用Fundebug，将silent属性设为true
var FunDebugErrorHandler = (function () {
    function FunDebugErrorHandler() {
    }
    FunDebugErrorHandler.prototype.handleError = function (err) {
        fundebug.notifyError(err);
        console.error(err);
    };
    return FunDebugErrorHandler;
}());

var AppModule = (function () {
    function AppModule(config) {
        this.config = config;
        this.setCustomTransitions();
    }
    AppModule.prototype.setCustomTransitions = function () {
        this.config.setTransition('modal-from-right-enter', __WEBPACK_IMPORTED_MODULE_40__itransitions__["a" /* ModalFromRightEnter */]);
        this.config.setTransition('modal-from-right-leave', __WEBPACK_IMPORTED_MODULE_40__itransitions__["b" /* ModalFromRightLeave */]);
        this.config.setTransition('modal-scale-enter', __WEBPACK_IMPORTED_MODULE_40__itransitions__["c" /* ModalScaleEnter */]);
        this.config.setTransition('modal-scale-leave', __WEBPACK_IMPORTED_MODULE_40__itransitions__["d" /* ModalScaleLeave */]);
    };
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_36__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    iconMode: 'ios',
                    mode: 'ios',
                    tabsHideOnSubPages: true
                }, {
                    links: [
                        { loadChildren: '../pages/account/aboutus/aboutus.module#AboutusPageModule', name: 'AboutusPage', segment: 'aboutus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/account-edit/account-edit.module#AccountEditModule', name: 'AccountEdit', segment: 'account-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/account-passwordedit/account-passwordedit.module#AccountPasswordeditModule', name: 'AccountPasswordedit', segment: 'account-passwordedit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/account.module#AccountModule', name: 'Account', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/backlog/backlog-detail/backlog-detail.module#BacklogDetailModule', name: 'BacklogDetail', segment: 'backlog-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/backlog/backlog.module#BacklogModule', name: 'Backlog', segment: 'backlog', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/contacts/contacts-detail/contacts-detail.module#ContactsDetailModule', name: 'ContactsDetail', segment: 'contacts-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/contacts/contacts.module#ContactsModule', name: 'Contacts', segment: 'contacts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomeModule', name: 'Home', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/newwork/newwork-detail/newwork-detail.module#NewworkDetailModule', name: 'NewworkDetail', segment: 'newwork-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/newwork/newwork.module#NewworkModule', name: 'Newwork', segment: 'newwork', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mail/mail-read-outbox/mail-read-outbox.module#MailReadOutboxModule', name: 'MailReadOutbox', segment: 'mail-read-outbox', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mail/mail-read/mail-read.module#MailReadModule', name: 'MailRead', segment: 'mail-read', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mail/mail-write/mail-write.module#MailWriteModule', name: 'MailWrite', segment: 'mail-write', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mail/mail.module#MailModule', name: 'Mail', segment: 'mail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notice/notice-detail/notice-detail.module#NoticeDetailModule', name: 'NoticeDetail', segment: 'notice-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notice/notice.module#NoticeModule', name: 'Notice', segment: 'notice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomeModule', name: 'Welcome', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_7__pages_mail_mail_module__["a" /* MailModule */],
                __WEBPACK_IMPORTED_MODULE_8__pages_mail_mail_read_mail_read_module__["a" /* MailReadModule */],
                __WEBPACK_IMPORTED_MODULE_9__pages_mail_mail_write_mail_write_module__["a" /* MailWriteModule */],
                __WEBPACK_IMPORTED_MODULE_10__pages_notice_notice_module__["a" /* NoticeModule */],
                __WEBPACK_IMPORTED_MODULE_11__pages_notice_notice_detail_notice_detail_module__["a" /* NoticeDetailModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_account_module__["a" /* AccountModule */],
                __WEBPACK_IMPORTED_MODULE_13__pages_account_aboutus_aboutus_module__["a" /* AboutusPageModule */],
                __WEBPACK_IMPORTED_MODULE_14__pages_account_account_edit_account_edit_module__["a" /* AccountEditModule */],
                __WEBPACK_IMPORTED_MODULE_15__pages_account_account_passwordedit_account_passwordedit_module__["a" /* AccountPasswordeditModule */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_17__pages_welcome_welcome_module__["a" /* WelcomeModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_transfer__["a" /* Transfer */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Content */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: FunDebugErrorHandler },
                __WEBPACK_IMPORTED_MODULE_30__providers_NativeService__["a" /* NativeService */],
                __WEBPACK_IMPORTED_MODULE_31__providers_HttpIntercept__["a" /* HttpIntercept */],
                __WEBPACK_IMPORTED_MODULE_32__providers_HttpService__["a" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_33__providers_FileService__["a" /* FileService */],
                __WEBPACK_IMPORTED_MODULE_34__providers_Helper__["a" /* Helper */],
                __WEBPACK_IMPORTED_MODULE_35__providers_Utils__["a" /* Utils */],
                __WEBPACK_IMPORTED_MODULE_37__providers_HttpInterceptHandle__["a" /* HttpInterceptHandle */],
                __WEBPACK_IMPORTED_MODULE_38__providers_GlobalData__["a" /* GlobalData */],
                __WEBPACK_IMPORTED_MODULE_39__providers_Logger__["a" /* Logger */]
                // ,HTTP
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Config */]])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by yanxiaojun on 2017/4/13.
 */

var GlobalData = (function () {
    function GlobalData() {
    }
    Object.defineProperty(GlobalData.prototype, "Uid", {
        get: function () {
            return this._Uid;
        },
        set: function (value) {
            this._Uid = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalData.prototype, "Name", {
        get: function () {
            return this._Name;
        },
        set: function (value) {
            this._Name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalData.prototype, "token", {
        get: function () {
            return this._token;
        },
        set: function (value) {
            this._token = value;
        },
        enumerable: true,
        configurable: true
    });
    GlobalData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], GlobalData);
    return GlobalData;
}());

//# sourceMappingURL=GlobalData.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_NativeService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_GlobalData__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_backlog_backlog__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_contacts_contacts__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_Utils__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = (function () {
    function MyApp(menu, platform, statusBar, splashScreen, keyboard, ionicApp, storage, globalData, toastCtrl, modalCtrl, events, nativeService) {
        var _this = this;
        this.menu = menu;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.keyboard = keyboard;
        this.ionicApp = ionicApp;
        this.storage = storage;
        this.globalData = globalData;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.nativeService = nativeService;
        this.photo = "assets/img/ben.png";
        // set our app's pages
        this.appPages = [
            { title: '首页', component: __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */], index: 0, icon: 'calendar' },
            { title: '邮件', component: __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */], index: 1, icon: 'ios-mail' },
            { title: '通讯录', component: __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */], index: 4, icon: 'md-call', tab1Component: __WEBPACK_IMPORTED_MODULE_11__pages_home_contacts_contacts__["a" /* Contacts */] },
            { title: '公告管理', component: __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */], index: 2, icon: 'ios-notifications' },
            // { title: '新建工作', component: TabsPage, index: 5, icon: 'md-exit', tab1Component: Newwork },
            { title: '待办事项', component: __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */], index: 6, icon: 'ios-calendar', tab1Component: __WEBPACK_IMPORTED_MODULE_10__pages_home_backlog_backlog__["a" /* Backlog */] }
            // ,{ title: '设置', component: TabsPage, index: 3, icon: 'ios-cog'},
            // { title: '登陆', component: LoginPage, index: 7, icon: 'contacts' }
        ];
        this.backButtonPressed = false;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.   
            _this.storage.get('firstIn').then(function (result) {
                // this.nativeService.showToast("不是第一次进入");
                if (result) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */];
                    _this.storage.get('UserInfo').then(function (userInfo) {
                        if (userInfo) {
                            _this.events.publish('user:login', userInfo);
                            _this.globalData.Uid = userInfo.Uid;
                            _this.globalData.Name = userInfo.Name;
                            _this.globalData.token = userInfo.RoleAuthority;
                        }
                        else {
                            var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */]);
                            modal.present();
                            modal.onDidDismiss(function (data) {
                                data && console.log(data);
                            });
                        }
                    });
                }
                else {
                    _this.storage.set('firstIn', true);
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* Welcome */];
                }
            });
            statusBar.styleDefault();
            splashScreen.hide();
            _this.registerBackButtonAction(); // 注册返回按键事件
            _this.assertNetwork(); // 检测网络
            // this.nativeService.detectionUpgrade(); // 检测app是否升级
        });
    }
    MyApp.prototype.openPage = function (page) {
        // the nav component was found using @ViewChild(Nav)
        // reset the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        this.menu.close();
        if (page.index) {
            if (page.tab1Component) {
                this.nav.setRoot(page.component, { tab1Component: page.tab1Component, tabIndex: page.index });
            }
            else {
                this.nav.setRoot(page.component, { tabIndex: page.index });
            }
        }
        else {
            this.nav.setRoot(page.component).catch(function () {
                console.log("Didn't set nav root");
            });
        }
    };
    MyApp.prototype.goTo = function (name) {
        this.menu.close();
        if (name == "edit") {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */], { tabIndex: 3 });
        }
        else {
            this.storage.clear(); // 清除缓存
            __WEBPACK_IMPORTED_MODULE_12__providers_Utils__["a" /* Utils */].sessionStorageClear(); // 清除数据缓存
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */]);
            modal.present();
            modal.onDidDismiss(function (data) {
                data && console.log(data);
            });
        }
    };
    MyApp.prototype.assertNetwork = function () {
        if (!this.nativeService.isConnecting()) {
            this.toastCtrl.create({
                message: '未检测到网络,请连接网络',
                showCloseButton: true,
                closeButtonText: '确定'
            }).present();
        }
    };
    MyApp.prototype.registerBackButtonAction = function () {
        var _this = this;
        // if (!this.nativeService.isAndroid()) {
        //     return;
        // }
        this.platform.registerBackButtonAction(function () {
            if (_this.keyboard.isOpen()) {
                _this.keyboard.close();
                return;
            }
            // 如果想点击返回按钮隐藏toast或loading或Overlay就把下面加上
            // this.ionicApp._toastPortal.getActive() || this.ionicApp._loadingPortal.getActive() || 
            // this.ionicApp._overlayPortal.getActive();
            var activePortal = _this.ionicApp._modalPortal.getActive();
            if (activePortal) {
                activePortal.dismiss().catch(function () { });
                activePortal.onDidDismiss(function () { });
                return;
            }
            var activeVC = _this.nav.getActive();
            var page = activeVC.instance;
            // 当前页面非tab栏
            if (!(page instanceof __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */])) {
                if (!_this.nav.canGoBack()) {
                    return AppMinimize.minimize();
                }
                return _this.nav.pop();
            }
            var tabs = page.tabs;
            var activeNav = tabs.getSelected();
            if (!activeNav.canGoBack()) {
                // 当前页面为tab栏，退出APP
                return AppMinimize.minimize();
            }
            // 当前页面为tab栏的子页面，正常返回
            return activeNav.pop();
        }, 101);
    };
    // 双击退出提示框
    MyApp.prototype.showExit = function () {
        var _this = this;
        if (this.backButtonPressed) {
            this.platform.exitApp();
        }
        else {
            this.nativeService.showToast('再按一次退出应用');
            this.backButtonPressed = true;
            setTimeout(function () {
                _this.backButtonPressed = false;
            }, 2000);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\app\app.html"*/`<ion-menu [content]="content">\n\n    <ion-header class="menu-header" padding-bottom>\n        <ion-row text-center>\n            <ion-col>\n                <a (click)="goTo(\'edit\')">\n                    <img [src]="photo" title="头像" />\n                </a>\n                <span>系统管理员</span>\n            </ion-col>\n        </ion-row>\n    </ion-header>\n\n    <ion-content>\n        <ion-list>\n            <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n                <ion-icon color="positive" item-left [name]="p.icon"></ion-icon>\n                {{p.title}}\n            </button>\n        </ion-list>\n        <ion-row>\n            <ion-col col-6>\n                <button (click)="goTo()" ion-button icon-left clear>\n                    <ion-icon name=\'contacts\'></ion-icon>注销登录\n                </button>\n            </ion-col>\n            <ion-col col-6>\n                <button (click)="goTo(\'edit\')" ion-button icon-left clear>\n                    <ion-icon name=\'ios-cog\'></ion-icon>设置\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-content>\n\n</ion-menu>\n<ion-nav #content [root]="rootPage"></ion-nav>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicApp */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_8__providers_GlobalData__["a" /* GlobalData */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__providers_NativeService__["a" /* NativeService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return APP_SERVE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FILE_SERVE_URL; });
/* unused harmony export APP_VERSION_SERVE_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return IS_DEBUG; });
/* unused harmony export DEFAULT_AVATAR */
/* unused harmony export PAGE_SIZE */
/* unused harmony export IMAGE_SIZE */
/* unused harmony export QUALITY_SIZE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return REQUEST_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ENABLE_FUNDEBUG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FUNDEBUG_API_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APK_DOWNLOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return APP_DOWNLOAD; });
/* unused harmony export CODE_PUSH_DEPLOYMENT_KEY */
// export const APP_SERVE_URL = 'http://88.128.18.193:8080/';
// export const FILE_SERVE_URL = 'http://88.128.18.144:3333/';
/*----------------------------------------后台Api地址----------------------------------------*/
var APP_SERVE_URL = 'http://192.168.0.49:8100/';
/*----------------------------------------文件服务器地址----------------------------------------*/
var FILE_SERVE_URL = 'http://192.168.0.49:8100/'; // 文件服务:测试环境
/*----------------------------------------app版本升级服务地址----------------------------------------*/
var APP_VERSION_SERVE_URL = 'http://192.168.0.49:8100/'; // app版本升级服务;测试环境,查询app最新版本号,更新日志等信息.
var IS_DEBUG = true; // 是否开发(调试)模式
var DEFAULT_AVATAR = './assets/img/avatar.png'; // 用户默认头像
var PAGE_SIZE = 5; // 默认分页大小
var IMAGE_SIZE = 1024; // 拍照/从相册选择照片压缩大小
var QUALITY_SIZE = 94; // 图像压缩质量，范围为0 - 100
var REQUEST_TIMEOUT = 20000; // 请求超时时间,单位为毫秒
var ENABLE_FUNDEBUG = false; // 是否启用fundebug日志监控
var FUNDEBUG_API_KEY = 'ec3cba8712b00e9db075ee9debf73fdfb2233c748b737d71f69ed7fe04b9ead4'; // 去https://fundebug.com/申请key
var APK_DOWNLOAD = 'http://omzo595hi.bkt.clouddn.com/ionic2_tabs.apk'; // android apk下载完整地址,用于android本地升级
var APP_DOWNLOAD = 'http://omzo595hi.bkt.clouddn.com/download.html'; // app网页下载地址,用于ios升级或android本地升级失败
// code push 部署key
var CODE_PUSH_DEPLOYMENT_KEY = {
    'android': {
        'Production': 'i0LgJRugiIfjVYTgmXs9go45Xc7g26690215-d954-4697-a879-90e0c4612b59',
        'Staging': 'WY29_Zyq_hg0eB3TSTGaKRSKPE6k26690215-d954-4697-a879-90e0c4612b59'
    },
    'ios': {
        'Production': 'kn3VJ28z0hB_zQYnW-KnblldnBzN26690215-d954-4697-a879-90e0c4612b59',
        'Staging': 'SRoxClVMoed8SgwIRxeVCPWx26Fk26690215-d954-4697-a879-90e0c4612b59'
    }
};
//# sourceMappingURL=Constants.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__LoginService__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__find_password_find_password__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_GlobalData__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_HttpService__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import {UserInfo} from "../../model/UserInfo";


var LoginPage = (function () {
    function LoginPage(viewCtrl, events, formBuilder, storage, modalCtrl, platform, alertCtrl, globalData, loginService, httpService) {
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.globalData = globalData;
        this.loginService = loginService;
        this.httpService = httpService;
        this.submitted = false;
        this.canLeave = false;
        this.loginForm = this.formBuilder.group({
            UserName: ['admin', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(4)]],
            UserPass: ['123', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(2)]]
        });
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.canLeave = false;
        this.storage.get('UserInfo').then(function (userInfo) {
            _this.userInfo = userInfo && userInfo.user ? userInfo.user : null;
        });
    };
    LoginPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        var bool = !!this.userInfo;
        var elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map(function (key) {
                elements[key].style.display = 'flex';
            });
        }
        if (this.canLeave || bool) {
            return true;
        }
        else {
            this.alertCtrl.create({
                title: '确认退出软件？',
                buttons: [{ text: '取消' },
                    {
                        text: '确定',
                        handler: function () {
                            _this.platform.exitApp();
                        }
                    }
                ]
            }).present();
            return false;
        }
    };
    LoginPage.prototype.login = function (user) {
        var _this = this;
        this.submitted = true;
        // this.httpService.postFormData("ashx/Login.ashx/LoginInfo",user)
        //  .map(responce => responce.json())
        this.loginService.login(user).subscribe(function (userInfo) {
            console.log(userInfo);
            _this.submitted = false;
            // userInfo.token = 'xx122a9Wf';//从后台获取token,暂时写死
            _this.userInfo = userInfo.Data;
            _this.globalData.Uid = userInfo.Data.Uid;
            _this.globalData.Name = userInfo.Data.Name;
            _this.globalData.token = userInfo.Data.Token;
            _this.storage.set('UserInfo', userInfo.Data);
            // alert(this.storage.get('UserInfo'));
            _this.events.publish('user:login', userInfo);
            _this.viewCtrl.dismiss(userInfo.Data);
        });
    };
    LoginPage.prototype.findPassword = function () {
        this.canLeave = true;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__find_password_find_password__["a" /* FindPassword */]);
        modal.present();
        this.canLeave = false;
    };
    LoginPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\login\login.html"*/`<!--\n  Generated template for the Login page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--.nav-decor隐藏头部-->\n<ion-header class="nav-decor">\n\n    <ion-navbar>\n        <ion-title>登录</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="login-header">登录</div>\n    <div class="login-top">\n        <img src="assets/img/logo.png" alt="公司logo" />\n    </div>\n    <form padding [formGroup]="loginForm" (ngSubmit)="login(loginForm.value)">\n        <ion-list>\n            <ion-item>\n                <ion-label color="primary">用户名</ion-label>\n                <ion-input type="text" formControlName="UserName" clearInput></ion-input>\n            </ion-item>\n            <div *ngIf="!loginForm.controls.UserName.valid && loginForm.controls.UserName.touched" class="validation-failed"> 请输入正确用户名</div>\n\n            <ion-item>\n                <ion-label color="primary">密　码</ion-label>\n                <ion-input type="password" formControlName="UserPass" clearInput></ion-input>\n            </ion-item>\n            <div *ngIf="!loginForm.controls.UserPass.valid" class="validation-failed">请输入密码</div>\n\n        </ion-list>\n        <div padding-horizontal>\n            <button ion-button block type="submit" [disabled]="!loginForm.valid||submitted">登　录</button>\n        </div>\n    </form>\n    <ion-grid>\n        <ion-row>\n            <ion-col text-center (click)="findPassword()">\n                <button ion-button small clear color="primary">找回密码</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\login\login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__LoginService__["a" /* LoginService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_GlobalData__["a" /* GlobalData */],
            __WEBPACK_IMPORTED_MODULE_4__LoginService__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_HttpService__["a" /* HttpService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_HttpService__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { UserInfo } from "../../model/UserInfo";
var LoginService = (function () {
    function LoginService(httpService) {
        this.httpService = httpService;
    }
    LoginService.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login');
    };
    LoginService.prototype.login = function (user) {
        return this.httpService.noTokenPostFormData("ashx/Login.ashx", user).map(function (responce) { return responce.json(); });
        // return Observable.create((observer) => {
        //   observer.next(userInfo);
        // });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_HttpService__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_HttpService__["a" /* HttpService */]) === "function" && _a || Object])
    ], LoginService);
    return LoginService;
    var _a;
}());

//# sourceMappingURL=LoginService.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__backlog_backlog_module__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__backlog_backlog_detail_backlog_detail_module__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contacts_contacts_module__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contacts_contacts_detail_contacts_detail_module__ = __webpack_require__(719);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { NewworkModule } from './newwork/newwork.module';
// import { NewworkDetailModule } from './newwork/newwork-detail/newwork-detail.module';
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* Home */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* Home */]),
                __WEBPACK_IMPORTED_MODULE_3__backlog_backlog_module__["a" /* BacklogModule */],
                __WEBPACK_IMPORTED_MODULE_4__backlog_backlog_detail_backlog_detail_module__["a" /* BacklogDetailModule */],
                __WEBPACK_IMPORTED_MODULE_5__contacts_contacts_module__["a" /* ContactsModule */],
                __WEBPACK_IMPORTED_MODULE_6__contacts_contacts_detail_contacts_detail_module__["a" /* ContactsDetailModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* Home */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BacklogModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backlog__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__backlogService__ = __webpack_require__(374);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BacklogModule = (function () {
    function BacklogModule() {
    }
    BacklogModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__backlog__["a" /* Backlog */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__backlog__["a" /* Backlog */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__backlog__["a" /* Backlog */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__backlogService__["a" /* BacklogService */]]
        })
    ], BacklogModule);
    return BacklogModule;
}());

//# sourceMappingURL=backlog.module.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BacklogDetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backlog_detail__ = __webpack_require__(373);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BacklogDetailModule = (function () {
    function BacklogDetailModule() {
    }
    BacklogDetailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__backlog_detail__["a" /* BacklogDetail */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__backlog_detail__["a" /* BacklogDetail */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__backlog_detail__["a" /* BacklogDetail */]
            ]
        })
    ], BacklogDetailModule);
    return BacklogDetailModule;
}());

//# sourceMappingURL=backlog-detail.module.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactsModule = (function () {
    function ContactsModule() {
    }
    ContactsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contacts__["a" /* Contacts */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contacts__["a" /* Contacts */]),
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

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsDetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts_detail__ = __webpack_require__(375);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contacts_detail__["a" /* ContactsDetail */]),
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

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mail__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mail_read_outbox_mail_read_outbox_module__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mailService__ = __webpack_require__(165);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mail__["a" /* Mail */]),
                __WEBPACK_IMPORTED_MODULE_3__mail_read_outbox_mail_read_outbox_module__["a" /* MailReadOutboxModule */]
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

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailReadOutboxModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mail_read_outbox__ = __webpack_require__(372);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mail_read_outbox__["a" /* MailReadOutbox */]),
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

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailReadModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mail_read__ = __webpack_require__(279);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mail_read__["a" /* MailRead */])
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

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailWriteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mail_write__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MailWriteModule = (function () {
    function MailWriteModule() {
    }
    MailWriteModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mail_write__["a" /* MailWrite */],
                __WEBPACK_IMPORTED_MODULE_2__mail_write__["b" /* PopoverPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mail_write__["a" /* MailWrite */]),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mail_write__["b" /* PopoverPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__mail_write__["a" /* MailWrite */],
                __WEBPACK_IMPORTED_MODULE_2__mail_write__["b" /* PopoverPage */]
            ]
        })
    ], MailWriteModule);
    return MailWriteModule;
}());

//# sourceMappingURL=mail-write.module.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notice__ = __webpack_require__(376);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NoticeModule = (function () {
    function NoticeModule() {
    }
    NoticeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notice__["a" /* Notice */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notice__["a" /* Notice */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__notice__["a" /* Notice */]
            ]
        })
    ], NoticeModule);
    return NoticeModule;
}());

//# sourceMappingURL=notice.module.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeDetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notice_detail__ = __webpack_require__(377);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NoticeDetailModule = (function () {
    function NoticeDetailModule() {
    }
    NoticeDetailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notice_detail__["a" /* NoticeDetail */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notice_detail__["a" /* NoticeDetail */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__notice_detail__["a" /* NoticeDetail */]
            ]
        })
    ], NoticeDetailModule);
    return NoticeDetailModule;
}());

//# sourceMappingURL=notice-detail.module.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account__ = __webpack_require__(378);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccountModule = (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__account__["a" /* Account */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account__["a" /* Account */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__account__["a" /* Account */],
            ]
        })
    ], AccountModule);
    return AccountModule;
}());

//# sourceMappingURL=account.module.js.map

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aboutus__ = __webpack_require__(383);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutusPageModule = (function () {
    function AboutusPageModule() {
    }
    AboutusPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aboutus__["a" /* AboutusPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aboutus__["a" /* AboutusPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__aboutus__["a" /* AboutusPage */]
            ]
        })
    ], AboutusPageModule);
    return AboutusPageModule;
}());

//# sourceMappingURL=aboutus.module.js.map

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountEditModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_edit__ = __webpack_require__(379);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccountEditModule = (function () {
    function AccountEditModule() {
    }
    AccountEditModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__account_edit__["a" /* AccountEdit */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account_edit__["a" /* AccountEdit */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__account_edit__["a" /* AccountEdit */]
            ]
        })
    ], AccountEditModule);
    return AccountEditModule;
}());

//# sourceMappingURL=account-edit.module.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPasswordeditModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_passwordedit__ = __webpack_require__(381);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccountPasswordeditModule = (function () {
    function AccountPasswordeditModule() {
    }
    AccountPasswordeditModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__account_passwordedit__["a" /* AccountPasswordedit */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account_passwordedit__["a" /* AccountPasswordedit */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__account_passwordedit__["a" /* AccountPasswordedit */]
            ]
        })
    ], AccountPasswordeditModule);
    return AccountPasswordeditModule;
}());

//# sourceMappingURL=account-passwordedit.module.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__find_password_find_password_module__ = __webpack_require__(731);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_3__find_password_find_password_module__["a" /* FindPasswordModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindPasswordModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__find_password__ = __webpack_require__(382);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FindPasswordModule = (function () {
    function FindPasswordModule() {
    }
    FindPasswordModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__find_password__["a" /* FindPassword */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__find_password__["a" /* FindPassword */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__find_password__["a" /* FindPassword */]
            ]
        })
    ], FindPasswordModule);
    return FindPasswordModule;
}());

//# sourceMappingURL=find-password.module.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WelcomeModule = (function () {
    function WelcomeModule() {
    }
    WelcomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* Welcome */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* Welcome */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* Welcome */]
            ]
        })
    ], WelcomeModule);
    return WelcomeModule;
}());

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpIntercept; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HttpInterceptHandle__ = __webpack_require__(384);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * Created by yanxiaojun617@163.com on 12-27.
 */




var HttpIntercept = (function (_super) {
    __extends(HttpIntercept, _super);
    function HttpIntercept(backend, defaultOptions, _) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this._ = _;
        return _this;
    }
    HttpIntercept.prototype.get = function (url, options) {
        var _this = this;
        this._.events.publish("request:before", url, options);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            _super.prototype.get.call(_this, url, options).subscribe(function (res) {
                _this._.events.publish("request:success", url, options, res);
                observer.next(res);
            }, function (err) {
                _this._.events.publish("request:error", url, options, err);
                observer.error(err);
            });
        });
    };
    HttpIntercept.prototype.post = function (url, body, options) {
        var _this = this;
        this._.events.publish("request:before", url, options);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            _super.prototype.post.call(_this, url, body, options).subscribe(function (res) {
                _this._.events.publish("request:success", url, options, res);
                observer.next(res);
            }, function (err) {
                _this._.events.publish("request:error", url, options, err);
                observer.error(err);
            });
        });
    };
    HttpIntercept.prototype.put = function (url, body, options) {
        var _this = this;
        this._.events.publish("request:before", url, options);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            _super.prototype.put.call(_this, url, body, options).subscribe(function (res) {
                _this._.events.publish("request:success", url, options, res);
                observer.next(res);
            }, function (err) {
                _this._.events.publish("request:error", url, options, err);
                observer.error(err);
            });
        });
    };
    HttpIntercept.prototype.delete = function (url, options) {
        var _this = this;
        this._.events.publish("request:before", url, options);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            _super.prototype.delete.call(_this, url, options).subscribe(function (res) {
                _this._.events.publish("request:success", url, options, res);
                observer.next(res);
            }, function (err) {
                _this._.events.publish("request:error", url, options, err);
                observer.error(err);
            });
        });
    };
    HttpIntercept.prototype.patch = function (url, body, options) {
        var _this = this;
        this._.events.publish("request:before", url, options);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            _super.prototype.patch.call(_this, url, body, options).subscribe(function (res) {
                _this._.events.publish("request:success", url, options, res);
                observer.next(res);
            }, function (err) {
                _this._.events.publish("request:error", url, options, err);
                observer.error(err);
            });
        });
    };
    HttpIntercept.prototype.head = function (url, options) {
        var _this = this;
        this._.events.publish("request:before", url, options);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            _super.prototype.head.call(_this, url, options).subscribe(function (res) {
                _this._.events.publish("request:success", url, options, res);
                observer.next(res);
            }, function (err) {
                _this._.events.publish("request:error", url, options, err);
                observer.error(err);
            });
        });
    };
    HttpIntercept.prototype.options = function (url, options) {
        var _this = this;
        this._.events.publish("request:before", url, options);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            _super.prototype.options.call(_this, url, options).subscribe(function (res) {
                _this._.events.publish("request:success", url, options, res);
                observer.next(res);
            }, function (err) {
                _this._.events.publish("request:error", url, options, err);
                observer.error(err);
            });
        });
    };
    HttpIntercept = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* ConnectionBackend */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_3__HttpInterceptHandle__["a" /* HttpInterceptHandle */]])
    ], HttpIntercept);
    return HttpIntercept;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]));

//# sourceMappingURL=HttpIntercept.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FileService__ = __webpack_require__(85);
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
 * Created by yanxiaojun617@163.com on 12-27.
 */




/**
 * Helper类存放和业务有关的公共方法
 * @description
 */
var Helper = (function () {
    function Helper(modalCtrl, storage, fileService) {
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.fileService = fileService;
    }
    Helper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__FileService__["a" /* FileService */]])
    ], Helper);
    return Helper;
}());

//# sourceMappingURL=Helper.js.map

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalFromRightEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalFromRightLeave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ModalScaleEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ModalScaleLeave; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(5);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ModalFromRightEnter = (function (_super) {
    __extends(ModalFromRightEnter, _super);
    function ModalFromRightEnter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalFromRightEnter.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.enteringView.pageRef().nativeElement;
        var backdrop = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-backdrop'));
        backdrop.beforeStyles({ 'z-index': 0, 'opacity': 0.3, 'visibility': 'visible' });
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.beforeStyles({ 'opacity': 1 });
        wrapper.fromTo('transform', 'translateX(100%)', 'translateX(20%)');
        var contentWrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-content.content'));
        contentWrapper.beforeStyles({ 'width': '80%' });
        this
            .element(this.enteringView.pageRef())
            .duration(300)
            .easing('cubic-bezier(.25, .1, .25, 1)')
            .add(backdrop)
            .add(wrapper)
            .add(contentWrapper);
    };
    return ModalFromRightEnter;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* PageTransition */]));

var ModalFromRightLeave = (function (_super) {
    __extends(ModalFromRightLeave, _super);
    function ModalFromRightLeave() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalFromRightLeave.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.leavingView.pageRef().nativeElement;
        var backdrop = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-backdrop'));
        backdrop.beforeStyles({ 'visibility': 'hidden' });
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.fromTo('transform', 'translateX(20%)', 'translateX(100%)');
        this
            .element(this.leavingView.pageRef())
            .duration(300)
            .easing('cubic-bezier(.25, .1, .25, 1)')
            .add(backdrop)
            .add(wrapper);
    };
    return ModalFromRightLeave;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* PageTransition */]));

var ModalScaleEnter = (function (_super) {
    __extends(ModalScaleEnter, _super);
    function ModalScaleEnter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalScaleEnter.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.enteringView.pageRef().nativeElement;
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.beforeStyles({ 'opacity': 1 });
        wrapper.fromTo('transform', 'scale(0)', 'scale(1)');
        this
            .element(this.enteringView.pageRef())
            .duration(400)
            .easing('cubic-bezier(.1, .7, .1, 1)')
            .add(wrapper);
    };
    return ModalScaleEnter;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* PageTransition */]));

var ModalScaleLeave = (function (_super) {
    __extends(ModalScaleLeave, _super);
    function ModalScaleLeave() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalScaleLeave.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.leavingView.pageRef().nativeElement;
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.fromTo('transform', 'scale(1)', 'scale(0)');
        this
            .element(this.leavingView.pageRef())
            .duration(400)
            .easing('cubic-bezier(.1, .7, .1, 1)')
            .add(wrapper);
    };
    return ModalScaleLeave;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* PageTransition */]));

//# sourceMappingURL=itransitions.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mail_mail__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notice_notice__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_account__ = __webpack_require__(378);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = (function () {
    function TabsPage(navParams) {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* Home */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__mail_mail__["a" /* Mail */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__notice_notice__["a" /* Notice */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__account_account__["a" /* Account */];
        this.mySelectedIndex = navParams.data.tabIndex || 0;
        this.tab1Root = navParams.data.tab1Component || __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* Home */];
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mainTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Tabs */])
    ], TabsPage.prototype, "tabs", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\tabs\tabs.html"*/`<ion-tabs #mainTabs [selectedIndex]="mySelectedIndex">\n    <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="ios-home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="信息" tabIcon="ios-mail"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="公告" tabIcon="ios-notifications"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="设置" tabIcon="ios-settings"></ion-tab>\n</ion-tabs>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

// WEBPACK FOOTER //
// ./src/pages/tabs/tabs.ts 
//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PopoverPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailWrite; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_GlobalData__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_FileService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_Constants__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_chooser__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_transfer__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_HttpService__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mailService__ = __webpack_require__(165);
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
 * Generated class for the MailWrite page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PopoverPage = (function () {
    function PopoverPage(navParams, fileService, nativeService, viewCtrl, storage, mailService) {
        this.navParams = navParams;
        this.fileService = fileService;
        this.nativeService = nativeService;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.mailService = mailService;
        this.items = [];
        this.haveAffix = false;
        this.addressee = this.navParams.get("addressee");
        this.addresseeIds = this.navParams.get("addresseeIds");
        console.log(this.addressee, this.addresseeIds);
        this.initializeItems();
    }
    PopoverPage.prototype.initializeItems = function () {
        // const testArray = [
        //     { ui_id: "1", ui_desc: "admin1", bianhao: "dewr1", ui_ssbm: "本部1", ui_zw: "职员" },
        //     { ui_id: "2", ui_desc: "admin2", bianhao: "dewr2", ui_ssbm: "本部2", ui_zw: "职员" },
        //     { ui_id: "3", ui_desc: "admin3", bianhao: "dewr3", ui_ssbm: "本部3", ui_zw: "职员" },
        //     { ui_id: "4", ui_desc: "admin4", bianhao: "dewr4", ui_ssbm: "本部4", ui_zw: "职员" },
        //     { ui_id: "5", ui_desc: "admin5", bianhao: "dewr5", ui_ssbm: "本部5", ui_zw: "职员" },
        //     { ui_id: "6", ui_desc: "admin6", bianhao: "dewr6", ui_ssbm: "本部6", ui_zw: "职员" },
        //     { ui_id: "7", ui_desc: "admin7", bianhao: "dewr7", ui_ssbm: "本部7", ui_zw: "职员" }
        // ];
        var _this = this;
        this.mailService.getRecipients().subscribe(function (result) {
            console.log(result);
            var idArr = _this.addresseeIds.split(",");
            _this.items = result.map(function (value, index) {
                for (var i in idArr) {
                    if (idArr[i] !== value.ui_id) {
                        Object.assign(value, { checked: false });
                    }
                    else {
                        return Object.assign(value, { checked: true });
                    }
                }
                return value;
            });
        });
    };
    PopoverPage.prototype.getItems = function (ev) {
        // // Reset items back to all of the items
        // this.initializeItems();
        // // set val to the value of the ev target
        // var val = ev.target.value;
        // // if the value is an empty string don't filter the items
        // if (val && val.trim() != '') {
        //   this.items = this.items.filter((item) => {
        //     return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        //   })
        // }
    };
    PopoverPage.prototype.serach = function () { };
    PopoverPage.prototype.checkPeople = function (index) {
        this.items[index].checked = !this.items[index].checked;
    };
    PopoverPage.prototype.confirm = function () {
        console.log(confirm);
        this.addressee = "";
        this.addresseeIds = "";
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.checked) {
                this.addressee += value.ui_desc + ",";
                this.addresseeIds += value.ui_id + ",";
            }
        }
        this.viewCtrl.dismiss({ addressee: this.addressee, addresseeIds: this.addresseeIds });
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n        <ion-list class=\"checkpeople-popover\">\n        <ion-item>\n            <ion-label>\u90E8\u95E8\u9009\u62E9</ion-label>\n            <ion-select [(ngModel)]=\"os\" submitText=\"\u786E\u5B9A\" cancelText=\"\u53D6\u6D88\">\n                <ion-option value=\"dos\">\u672C\u90E8</ion-option>\n                <ion-option value=\"lunix\">\u7814\u53D1\u90E8</ion-option>\n                <ion-option value=\"mac7\">\u6D4B\u8BD5\u90E8</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-searchbar color=\"danger\" (ionInput)=\"getItems($event)\" placeholder=\"\u8BF7\u8F93\u5165\u7F16\u7801\u6216\u59D3\u540D\"></ion-searchbar>\n                \n        <div text-center>\n            <button (click)=\"search()\" icon-left ion-button small color=\"calm\">\n            <ion-icon name=\"search\"></ion-icon>\u67E5\u8BE2</button>\n            \n            <button (click)=\"confirm()\" icon-left ion-button small color=\"calm\">\n            <ion-icon name=\"checkmark\"></ion-icon>\u786E\u5B9A</button>\n        </div>\n\n        <ion-list-header>\n            \u901A\u8BAF\u5F55\n        </ion-list-header>\n\n        <ion-item *ngFor=\"let item of items;let i = index\">\n            <ion-label>\n            {{item.ui_desc}}({{item.ui_id}})<br>\n            <span>{{item.ui_ssbm}}&emsp;{{item.ui_zw}}</span>\n            </ion-label>\n            <ion-checkbox [checked]=\"item.checked\" (ionChange)=\"checkPeople(i)\"></ion-checkbox>\n        </ion-item>\n        <ion-list>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_FileService__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_10__mailService__["a" /* MailService */]])
    ], PopoverPage);
    return PopoverPage;
}());

var MailWrite = (function () {
    function MailWrite(navCtrl, navParams, actionSheetCtrl, popoverCtrl, fileService, nativeService, fileChooser, alertCtrl, transfer, viewCtrl, httpService, globaldata) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.popoverCtrl = popoverCtrl;
        this.fileService = fileService;
        this.nativeService = nativeService;
        this.fileChooser = fileChooser;
        this.alertCtrl = alertCtrl;
        this.transfer = transfer;
        this.viewCtrl = viewCtrl;
        this.httpService = httpService;
        this.globaldata = globaldata;
        this.addressee = "";
        this.addresseeIds = "";
        this.attName = "109.png";
        this.msbz = false; // 密送标志
        console.log(this.navParams.get("mail"));
        var mail = this.navParams.get("mail");
        if (typeof (mail) !== "undefined") {
            this.affixPath = mail.yjfj;
            this.fsbt = mail.jsbt;
            // Object.assign(this.mailObj,{
            //   "fsrName":this.globaldata.ui_desc,
            //   "fsrID":this.globaldata.ui_id,
            //   "attName":mail.attName,
            //   "fsbt":mail.jsbt,
            //   "yjfj":mail.yjfj       
            // })
        }
    }
    MailWrite.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad MailWrite");
    };
    MailWrite.prototype.send = function () {
        console.log(this.msbz);
        var data = {
            "Uid": "admin",
            "AcceptUid": "046",
            "Content": "123456"
        };
        this.httpService.postFormData("ashx/UserSheet.ashx", data).map(function (Response) { return Response.json(); });
        this.nativeService.showToast("信息已发送");
    };
    MailWrite.prototype.addAffix = function () {
        var _this = this;
        var options = {
            targetWidth: 400,
            targetHeight: 400
        };
        var actionSheet = this.actionSheetCtrl.create({
            title: '添加附件选择',
            buttons: [
                {
                    text: '相册',
                    handler: function () {
                        _this.nativeService.getPictureByCamera(options).then(function (imageBase64) {
                            _this.getPictureSuccess(imageBase64);
                        });
                    }
                }, {
                    text: '拍照',
                    handler: function () {
                        _this.nativeService.getPictureByPhotoLibrary(options).then(function (imageBase64) {
                            _this.getPictureSuccess(imageBase64);
                        });
                    }
                }, {
                    text: '文件',
                    handler: function () {
                        _this.fileChooser.open().then(function (fileURL) {
                            var pathOption = {
                                fileKey: "file",
                                fileName: fileURL.substr(fileURL.lastIndexOf('/') + 1),
                                mimeType: "text/plain"
                            };
                            var url = encodeURI("http://some.server.com/upload.php");
                            return _this.upload(fileURL, url, pathOption);
                        }).catch(function (err) {
                            console.log(err);
                        });
                    }
                }, {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    MailWrite.prototype.checkPeople = function (myEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create(PopoverPage, { addressee: this.addressee, addresseeIds: this.addresseeIds });
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(function (data) {
            if (!!data) {
                console.log(data);
                // {addressee:this.addressee,addresseeIds:this.addresseeIds}
                _this.addressee = data.addressee;
                _this.addresseeIds = data.addresseeIds;
            }
        });
    };
    MailWrite.prototype.getPictureSuccess = function (imageBase64) {
        this.imageBase64 = imageBase64;
        this.affixPath = "data:image/jpg;base64," + imageBase64;
        var fileObj = { "base64": this.imageBase64 };
        this.fileService.uploadByBase64(fileObj).subscribe(function (result) {
            if (result.success) {
                var origPath = __WEBPACK_IMPORTED_MODULE_5__providers_Constants__["e" /* FILE_SERVE_URL */] + result.data[0].origPath;
                console.log(origPath);
            }
        });
    };
    /**
     * 上传
     */
    MailWrite.prototype.upload = function (fileUrl, url, options, trustAllHosts) {
        var alert = this.alertCtrl.create({
            title: '上传进度：0%',
            enableBackdropDismiss: false,
            buttons: ['后台下载']
        });
        alert.present();
        var fileTransfer = this.transfer.create();
        fileTransfer.onProgress(function (event) {
            var num = Math.floor(event.loaded / event.total * 100);
            if (num === 100) {
                alert.dismiss();
            }
            else {
                var title = document.getElementsByClassName('alert-title')[0];
                title && (title.innerHTML = '上传进度：' + num + '%');
            }
        });
        return fileTransfer.upload(fileUrl, url, options);
    };
    MailWrite.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("popoverContent", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MailWrite.prototype, "content", void 0);
    MailWrite = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mail-write',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\mail\mail-write\mail-write.html"*/`<!--\n  Generated template for the MailRead page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button (click)="dismiss()">取消</button>\n\n        <ion-title>写信</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-left (click)="send()">\n                <ion-icon name="ios-send"></ion-icon> 发送\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content overflow-scroll="true" style="background: #f4f4f4;overflow: hidden;">\n    <div>\n\n        <ion-list style="position:relative;">\n\n            <ion-item>\n                <ion-label style="align-self:center;">收件人&emsp;</ion-label>\n                <ion-textarea min-rows="1" [(ngModel)]="addressee" #popoverContent placeholder="请选择收件人" (click)="checkPeople($event)"></ion-textarea>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>主&emsp;题&emsp;</ion-label>\n                <ion-input type="test" [(ngModel)]="fsbt" placeholder="主题1"></ion-input>\n            </ion-item>\n            <button ion-button clear class="share-btn" (click)="addAffix()">\n              <ion-icon name="share"></ion-icon>1\n            </button>\n\n            <ion-item>\n                <ion-label>密&emsp;送&emsp;</ion-label>\n                <ion-toggle [(ngModel)]="msbz"></ion-toggle>\n            </ion-item>\n        </ion-list>\n    </div>\n\n\n    <div>\n        <ion-scroll scrollY="true" class="mail-content">\n            <!--<textarea class="mydiv">\n\n            </textarea>-->\n            <div class="message-textarea" contenteditable="true" data-text="输入信息"></div>\n            <div class="affix" *ngIf="haveAffix">\n                <ion-grid>\n                    <ion-row align-items-center>\n                        <ion-col col-6>\n                            <div>\n                                <ion-icon class="affix-icon" name="md-image"></ion-icon>\n                                <p>{{attName}}</p>\n                                <p color="gray">5.00MB</p>\n                                <ion-icon class="affix-dismiss" name="ios-close-circle-outline"></ion-icon>\n                            </div>\n                        </ion-col>\n                        <ion-col col-6 text-center>\n                            <div>\n                                <ion-icon name="add" class="affix-add"></ion-icon>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </ion-scroll>\n    </div>\n</ion-content>\n<div class="list message-reply">\n\n    <div class="item">\n        <textarea name="" rows="" cols="" placeholder="回复: "></textarea>\n        <button ion-button small color="positive">发送</button>\n    </div>\n\n</div>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\mail\mail-write\mail-write.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_FileService__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_HttpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_GlobalData__["a" /* GlobalData */]])
    ], MailWrite);
    return MailWrite;
}());

//# sourceMappingURL=mail-write.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HttpService__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Constants__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NativeService__ = __webpack_require__(29);
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
 * Created by yanxiaojun617@163.com on 12-23.
 */





/**
 * 上传图片到文件服务器
 */
var FileService = (function () {
    function FileService(httpService, nativeService) {
        this.httpService = httpService;
        this.nativeService = nativeService;
    }
    FileService_1 = FileService;
    /**
     * 根据文件id获取文件信息
     * @param id 文件id
     * @return {Promise<TResult|T>}
     */
    FileService.prototype.getFileInfoById = function (id) {
        if (!id) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].create(function (observer) {
                observer.next({ 'data': [], 'success': true });
            });
        }
        return this.httpService.get(__WEBPACK_IMPORTED_MODULE_2__Constants__["e" /* FILE_SERVE_URL */] + '/getById', { id: id }).map(function (res) { return res.json(); });
    };
    /**
     * 根据文件id数组获取文件信息
     * @param ids id数组
     * @returns {Observable<R>}
     */
    FileService.prototype.getFileInfoByIds = function (ids) {
        if (!ids || ids.length == 0) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].create(function (observer) {
                observer.next({ 'data': [], 'success': true });
            });
        }
        return this.httpService.get(__WEBPACK_IMPORTED_MODULE_2__Constants__["e" /* FILE_SERVE_URL */] + '/getByIds', { ids: ids }).map(function (res) { return res.json(); });
    };
    /**
     * 批量上传图片,只支持上传base64字符串
     * @param fileObjList,数组中的对象必须包含bse64属性
     * @return {Promise<TResult|T>}
     */
    FileService.prototype.uploadMultiByBase64 = function (fileObjList) {
        if (!fileObjList || fileObjList.length == 0) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].create(function (observer) {
                observer.next({ 'data': [], 'success': true });
            });
        }
        return this.httpService.post(__WEBPACK_IMPORTED_MODULE_2__Constants__["e" /* FILE_SERVE_URL */] + '/appUpload?directory=ionic2_tabs', fileObjList)
            .map(function (res) { return res.json(); });
    };
    /**
     * 上传单张图片,只支持上传base64字符串
     * @param FileObj,对象必须包含origPath属性
     * @return {Promise<TResult|T>}
     */
    FileService.prototype.uploadByBase64 = function (fileObj) {
        if (!fileObj.base64) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].create(function (observer) {
                observer.next({ 'data': [], 'success': true });
            });
        }
        return this.httpService.post(__WEBPACK_IMPORTED_MODULE_2__Constants__["e" /* FILE_SERVE_URL */] + '/appUpload?directory=ionic2_tabs', [fileObj])
            .map(function (res) { return res.json(); });
    };
    /**
     * 批量上传图片
     * @param fileObjList 数组中的对象必须包含origPath属性
     * @returns {any}
     */
    FileService.prototype.uploadMultiByFilePath = function (fileObjList) {
        var _this = this;
        if (fileObjList.length == 0) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].create(function (observer) {
                observer.next({ 'data': [], 'success': true });
            });
        }
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].create(function (observer) {
            _this.nativeService.showLoading();
            var fileObjs = [];
            var _loop_1 = function (fileObj) {
                _this.nativeService.convertImgToBase64(fileObj.origPath, function (base64) {
                    fileObjs.push({ 'base64': base64, 'type': FileService_1.getFileType(fileObj.origPath) });
                    if (fileObjs.length === fileObjList.length) {
                        _this.uploadMultiByBase64(fileObjs).subscribe(function (res) {
                            observer.next(res);
                            _this.nativeService.hideLoading();
                        });
                    }
                });
            };
            for (var _i = 0, fileObjList_1 = fileObjList; _i < fileObjList_1.length; _i++) {
                var fileObj = fileObjList_1[_i];
                _loop_1(fileObj);
            }
        });
    };
    /**
     * app上传单张图片
     * @param fileObj 对象必须包含origPath属性
     * @returns {any}
     */
    FileService.prototype.uploadByFilePath = function (fileObj) {
        var _this = this;
        if (!fileObj.origPath) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].create(function (observer) {
                observer.next({ 'data': [], 'success': true });
            });
        }
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].create(function (observer) {
            _this.nativeService.showLoading();
            _this.nativeService.convertImgToBase64(fileObj.origPath, function (base64) {
                var file = ({ 'base64': base64, 'type': FileService_1.getFileType(fileObj.origPath) });
                _this.uploadByBase64(file).subscribe(function (res) {
                    observer.next(res);
                    _this.nativeService.hideLoading();
                });
            });
        });
    };
    FileService.getFileType = function (path) {
        return path.substring(path.lastIndexOf('.') + 1);
    };
    FileService = FileService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_4__NativeService__["a" /* NativeService */]])
    ], FileService);
    return FileService;
    var FileService_1;
}());

//# sourceMappingURL=FileService.js.map

/***/ })

},[385]);
//# sourceMappingURL=main.js.map