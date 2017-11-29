webpackJsonp([46],{

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailWriteModule", function() { return MailWriteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mail_write__ = __webpack_require__(760);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mail_write__["a" /* MailWrite */]),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mail_write__["b" /* PopoverPage */]),
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

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PopoverPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailWrite; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_GlobalData__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_FileService__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_Constants__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_chooser__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_transfer__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mailService__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_Utils__ = __webpack_require__(62);
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
    function PopoverPage(navParams, viewCtrl, mailService) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.mailService = mailService;
        this.deptItems = [];
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
        this.mailService.getDept().subscribe(function (resJson) {
            if (resJson.Result) {
                _this.deptItems = resJson.Data;
            }
        });
        this.mailService.getRecipients({}).subscribe(function (result) {
            console.log(result);
            if (result.Result) {
                var idArr_1 = _this.addresseeIds.split(",");
                _this.items = result.Data.map(function (value, index) {
                    for (var i in idArr_1) {
                        if (idArr_1[i] !== value.Uid) {
                            Object.assign(value, { checked: false });
                        }
                        else {
                            return Object.assign(value, { checked: true });
                        }
                    }
                    return value;
                });
            }
        });
    };
    PopoverPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the ev target
        var val = ev.target.value;
        this.name = val;
        // if the value is an empty string don't filter the items
        // if (val && val.trim() != '') {
        //   this.items = this.items.filter((item) => {
        //     return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        //   });
        // }
    };
    PopoverPage.prototype.getRecipientsByDept = function (id) {
        var _this = this;
        this.mailService.getRecipientsByDept({ DeptId: id }).subscribe(function (result) {
            console.log(result);
            if (result.Result) {
                var idArr_2 = _this.addresseeIds.split(",");
                _this.items = result.Data.map(function (value, index) {
                    for (var i in idArr_2) {
                        if (idArr_2[i] !== value.Uid) {
                            Object.assign(value, { checked: false });
                        }
                        else {
                            return Object.assign(value, { checked: true });
                        }
                    }
                    return value;
                });
            }
        });
    };
    PopoverPage.prototype.search = function () {
        var _this = this;
        this.mailService.getRecipients({ name: this.name }).subscribe(function (result) {
            console.log(result);
            if (result.Result) {
                var idArr_3 = _this.addresseeIds.split(",");
                _this.items = result.Data.map(function (value, index) {
                    for (var i in idArr_3) {
                        if (idArr_3[i] !== value.Uid) {
                            Object.assign(value, { checked: false });
                        }
                        else {
                            return Object.assign(value, { checked: true });
                        }
                    }
                    return value;
                });
            }
        });
    };
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
                this.addressee += value.Name + ",";
                this.addresseeIds += value.Uid + ",";
            }
        }
        this.viewCtrl.dismiss({ addressee: this.addressee, addresseeIds: this.addresseeIds });
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n        <ion-list class=\"checkpeople-popover\">\n        <ion-item>\n            <ion-label>\u90E8\u95E8\u9009\u62E9</ion-label>\n            <ion-select [(ngModel)]=\"dept\" submitText=\"\u786E\u5B9A\" (ngModelChange)=\"getRecipientsByDept(dept)\"\n                cancelText=\"\u53D6\u6D88\" okText=\"\u786E\u5B9A\">\n                <ion-option  *ngFor=\"let item of deptItems;let i = index\" [value]=\"item.Id\">\n                    {{item.BmName}}\n                </ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-searchbar color=\"danger\" [(ngModel)]=\"name\"  placeholder=\"\u8BF7\u8F93\u5165\u7F16\u7801\u6216\u59D3\u540D\">\n        </ion-searchbar>\n\n        <div text-center>\n            <button (click)=\"search()\" icon-left ion-button small color=\"calm\">\n            <ion-icon name=\"search\"></ion-icon>\u67E5\u8BE2</button>\n\n            <button (click)=\"confirm()\" icon-left ion-button small color=\"calm\">\n            <ion-icon name=\"checkmark\"></ion-icon>\u786E\u5B9A</button>\n        </div>\n\n        <ion-list-header>\n            \u901A\u8BAF\u5F55\n        </ion-list-header>\n\n        <ion-item *ngFor=\"let item of items;let i = index\">\n            <ion-label>\n            {{item.Name}}({{item.Uid}})<br>\n            <span>{{item.Dept}}&emsp;{{item.Duty}}</span>\n            </ion-label>\n            <ion-checkbox [checked]=\"item.checked\" (ionChange)=\"checkPeople(i)\"></ion-checkbox>\n        </ion-item>\n        <ion-list>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_9__mailService__["a" /* MailService */]])
    ], PopoverPage);
    return PopoverPage;
}());

var MailWrite = (function () {
    function MailWrite(navCtrl, navParams, actionSheetCtrl, popoverCtrl, fileService, nativeService, fileChooser, alertCtrl, transfer, viewCtrl, globalData, mailService, formBuilder) {
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
        this.globalData = globalData;
        this.mailService = mailService;
        this.formBuilder = formBuilder;
        this.addressee = "";
        this.addresseeIds = "";
        this.attName = "109.png";
        this.haveAffix = false;
        this.writeForm = this.formBuilder.group({
            addressee: ['', [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["f" /* Validators */].required]],
            Title: ['', []],
            Level: ["普通", []],
            Bcc: [false, []],
            Content: ["", [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["f" /* Validators */].maxLength(180)]],
        });
        // console.log(this.navParams.get("mail"));
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
    MailWrite.prototype.sent = function (data) {
        var _this = this;
        // AccessPresonId= context.Request.Params["AccessPresonId"],
        // AccessPerson= context.Request.Params["AccessPerson"],
        // Title= context.Request.Params["Title"],
        // Content= context.Request.Params["Content"],
        // Level = context.Request.Params["Level"],
        // Bcc= context.Request.Params["Bcc"],
        // AttNo= context.Request.Params["AttNo"],
        // UserId= context.Request.Params["UserId"],
        // UserName = context.Request.Params["UserName"],
        var data1 = {
            "AccessPresonId": this.addresseeIds,
            "AccessPerson": this.addressee,
            "Title": data.Title,
            "Content": data.Content,
            "Level": data.Level,
            "Bcc": data.Bcc,
            "AttNo": this.attName,
            "UserId": this.globalData.Uid,
            "UserName": this.globalData.Name
        };
        this.mailService.write(data).subscribe(function (resJson) {
            resJson.Result ? _this.nativeService.showToast("信息已发送") :
                _this.nativeService.showToast(resJson.Data);
        });
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
                        _this.nativeService.getPictureByPhotoLibrary(options).subscribe(function (imageBase64) {
                            _this.getPictureSuccess(imageBase64);
                        });
                    }
                }, {
                    text: '拍照',
                    handler: function () {
                        _this.nativeService.getPictureByCamera(options).subscribe(function (imageBase64) {
                            _this.getPictureSuccess(imageBase64);
                        });
                    }
                }, {
                    text: '文件',
                    handler: function () {
                        _this.fileChooser.open().then(function (fileURL) {
                            var mimeType = fileURL.toLowerCase().split(".").splice(-1)[0];
                            var pathOption = {
                                "fileKey": "file",
                                "fileName": fileURL.substr(fileURL.lastIndexOf('/') + 1),
                                "mimeType": __WEBPACK_IMPORTED_MODULE_10__providers_Utils__["a" /* Utils */].getFileMimeType(mimeType),
                                "headers": {
                                    "Connection": "close"
                                },
                                "chunkedMode": false,
                                "httpMethod": "POST",
                                "params": { "token": _this.globalData.token }
                            };
                            var url = encodeURI(__WEBPACK_IMPORTED_MODULE_5__providers_Constants__["e" /* FILE_SERVE_URL */] + "ashx/AttachUpload.ashx");
                            console.log(fileURL, url, pathOption, true);
                            return _this.upload(fileURL, url, pathOption, true);
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
                _this.writeForm.patchValue({ 'addressee': data.addressee });
                _this.addresseeIds = data.addresseeIds;
            }
        });
    };
    MailWrite.prototype.getPictureSuccess = function (imageBase64) {
        this.imageBase64 = imageBase64;
        this.affixPath = "data:image/jpg;base64," + imageBase64;
        var fileObj = { "base64": this.imageBase64 };
        this.fileService.uploadByBase64(fileObj).subscribe(function (result) {
            if (result) {
                var origPath = __WEBPACK_IMPORTED_MODULE_5__providers_Constants__["e" /* FILE_SERVE_URL */] + result.origPath;
                console.log(origPath);
            }
        });
    };
    /**
     * 上传
     */
    MailWrite.prototype.upload = function (fileUrl, url, options, trustAllHosts) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '上传进度：0%',
            enableBackdropDismiss: false,
            buttons: ['后台上传']
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
                title && (title.innerHTML = '上传进度：' + url + event.loaded + " " + event.total + '%');
            }
        });
        return fileTransfer.upload(fileUrl, url, options, trustAllHosts).then(function (data) {
            console.log(data);
            _this.haveAffix = true;
        }, function (err) {
            // error
            console.log(err);
        }).catch(function (err) {
            console.log(err);
            alert.dismiss();
            _this.nativeService.showToast(err);
        });
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
            selector: 'page-mail-write',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\mail\mail-write\mail-write.html"*/`<!--\n\n  Generated template for the MailRead page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n\n\n        <button ion-button (click)="dismiss()">取消</button>\n\n\n\n        <ion-title>写信</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-left (click)="sent()">\n\n                <ion-icon name="ios-send"></ion-icon> 发送\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content overflow-scroll="true" style="background: #f4f4f4;overflow: hidden;">\n\n    <div>\n\n        <form [formGroup]="writeForm" (ngSubmit)="sent(writeForm.value)">\n\n            <ion-list style="position:relative;">\n\n\n\n                <ion-item>\n\n                    <ion-label style="align-self:center;">收件人&emsp;</ion-label>\n\n                    <ion-textarea min-rows="1" readonly="true" formControlName="addressee" #popoverContent placeholder="双击选择收件人" (click)="checkPeople($event)"></ion-textarea>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <ion-label>主&emsp;题&emsp;</ion-label>\n\n                    <ion-input type="test" formControlName="Title" placeholder="主题1"></ion-input>\n\n                </ion-item>\n\n                <button ion-button clear class="share-btn" type="button" (click)="addAffix()">\n\n                    <ion-icon name="share"></ion-icon>0\n\n                </button>\n\n                <ion-item>\n\n                    <ion-label>密&emsp;送&emsp;</ion-label>\n\n                    <ion-toggle formControlName="Bcc"></ion-toggle>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label>紧急程度</ion-label>\n\n                    <ion-select formControlName="Level" cancelText="取消" okText="确定" placeholder="请选择">\n\n                        <ion-option value="普通">普通邮件</ion-option>\n\n                        <ion-option value="重要">重要邮件</ion-option>\n\n                    </ion-select>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-textarea formControlName="Content" rows="6" class="write-textarea" placeholder="输入信息"></ion-textarea>\n\n                </ion-item>\n\n\n\n                <div class="affix" *ngIf="haveAffix">\n\n                    <ion-grid>\n\n                        <ion-row align-items-center>\n\n                            <ion-col col-6>\n\n                                <div>\n\n                                    <ion-icon class="affix-icon" name="md-image"></ion-icon>\n\n                                    <p>{{attName}}</p>\n\n                                    <p color="gray">5.00MB</p>\n\n                                    <ion-icon class="affix-dismiss" name="ios-close-circle-outline"></ion-icon>\n\n                                </div>\n\n                            </ion-col>\n\n                            <ion-col col-6 text-center>\n\n                                <div>\n\n                                    <ion-icon name="add" class="affix-add"></ion-icon>\n\n                                </div>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                    </ion-grid>\n\n                </div>\n\n\n\n            </ion-list>\n\n        </form>\n\n    </div>\n\n\n\n\n\n    <!-- <div>\n\n        <ion-scroll scrollY="true" class="mail-content">\n\n            <div class="message-textarea" contenteditable="true" data-text="输入信息"></div>\n\n            <div class="affix" *ngIf="haveAffix">\n\n                <ion-grid>\n\n                    <ion-row align-items-center>\n\n                        <ion-col col-6>\n\n                            <div>\n\n                                <ion-icon class="affix-icon" name="md-image"></ion-icon>\n\n                                <p>{{attName}}</p>\n\n                                <p color="gray">5.00MB</p>\n\n                                <ion-icon class="affix-dismiss" name="ios-close-circle-outline"></ion-icon>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col col-6 text-center>\n\n                            <div>\n\n                                <ion-icon name="add" class="affix-add"></ion-icon>\n\n                            </div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </div>\n\n        </ion-scroll>\n\n    </div> -->\n\n</ion-content>\n\n<!-- <div class="list message-reply">\n\n\n\n    <div class="item">\n\n        <textarea name="" rows="" cols="" placeholder="回复: "></textarea>\n\n        <button ion-button small color="positive">发送</button>\n\n    </div>\n\n\n\n</div> -->`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\mail\mail-write\mail-write.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_FileService__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_GlobalData__["a" /* GlobalData */],
            __WEBPACK_IMPORTED_MODULE_9__mailService__["a" /* MailService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormBuilder */]])
    ], MailWrite);
    return MailWrite;
}());

//# sourceMappingURL=mail-write.js.map

/***/ })

});
//# sourceMappingURL=46.js.map