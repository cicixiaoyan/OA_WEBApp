webpackJsonp([1],{

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailWriteModule", function() { return MailWriteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mail_write__ = __webpack_require__(846);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mailService__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(786);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MailWriteModule = /** @class */ (function () {
    function MailWriteModule() {
    }
    MailWriteModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mail_write__["a" /* MailWrite */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mail_write__["a" /* MailWrite */]),
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* DirectivesModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__mail_write__["a" /* MailWrite */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__mailService__["a" /* MailService */]]
        })
    ], MailWriteModule);
    return MailWriteModule;
}());

//# sourceMappingURL=mail-write.module.js.map

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MailService = /** @class */ (function () {
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

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__autotextarea_autotextarea__ = __webpack_require__(787);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__autotextarea_autotextarea__["a" /* AutotextareaDirective */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__autotextarea_autotextarea__["a" /* AutotextareaDirective */]]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutotextareaDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutotextareaDirective = /** @class */ (function () {
    function AutotextareaDirective(element) {
        this.element = element;
        console.log('Hello AutosizeDirective Directive');
    }
    AutotextareaDirective.prototype.onInput = function (textArea) {
        this.adjust();
    };
    // @HostListener('change', ['$event.target']) onChange(textArea: HTMLTextAreaElement): void {
    //   console.log(1234);
    //   this.adjust();
    // }
    AutotextareaDirective.prototype.ngOnChanges = function (changes) {
        console.log(1234);
        this.adjust();
    };
    AutotextareaDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.adjust(); }, 0);
    };
    AutotextareaDirective.prototype.adjust = function () {
        var textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
        textArea.style.overflow = 'hidden';
        textArea.style.height = 'auto';
        textArea.style.height = textArea.scrollHeight + 'px';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('input', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [HTMLTextAreaElement]),
        __metadata("design:returntype", void 0)
    ], AutotextareaDirective.prototype, "onInput", null);
    AutotextareaDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[autotextarea]' // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], AutotextareaDirective);
    return AutotextareaDirective;
}());

//# sourceMappingURL=autotextarea.js.map

/***/ }),

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailWrite; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_GlobalData__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_FileService__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_Constants__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_chooser__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mailService__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_Utils__ = __webpack_require__(65);
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
var MailWrite = /** @class */ (function () {
    function MailWrite(navCtrl, navParams, actionSheetCtrl, popoverCtrl, fileService, nativeService, fileChooser, alertCtrl, fileTransfer, viewCtrl, globalData, mailService, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.popoverCtrl = popoverCtrl;
        this.fileService = fileService;
        this.nativeService = nativeService;
        this.fileChooser = fileChooser;
        this.alertCtrl = alertCtrl;
        this.fileTransfer = fileTransfer;
        this.viewCtrl = viewCtrl;
        this.globalData = globalData;
        this.mailService = mailService;
        this.formBuilder = formBuilder;
        this.addressee = "";
        this.addresseeIds = "";
        this.attName = "";
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
        }
    }
    MailWrite.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad MailWrite");
    };
    MailWrite.prototype.sent = function (data) {
        var _this = this;
        console.log(data);
        var data1 = {
            "AccessPresonId": this.addresseeIds,
            "AccessPerson": data.addressee,
            "Title": data.Title,
            "Content": data.Content,
            "Level": data.Level,
            "Bcc": data.Bcc,
            "AttNo": this.attName,
            "UserId": this.globalData.Uid,
            "UserName": this.globalData.Name
        };
        this.mailService.write(data1).subscribe(function (resJson) {
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
                                "params": { "token": _this.globalData.token, "type": 1 }
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
        var popover = this.popoverCtrl.create("ContactsPopoverPage", { addressee: this.addressee, addresseeIds: this.addresseeIds });
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(function (data) {
            if (!!data) {
                console.log(data);
                // {addressee:this.addressee,addresseeIds:this.addresseeIds}
                _this.addresseeIds = data.addresseeIds;
                _this.writeForm.patchValue({ 'addressee': data.addressee });
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
        var fileTransfer = this.fileTransfer.create();
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
            selector: 'page-mail-write',template:/*ion-inline-start:"/Users/lieon/Desktop/OA_WEBApp/OA_WEBApp/src/pages/mail/mail-write/mail-write.html"*/'<!--\n  Generated template for the MailRead page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button (click)="dismiss()">取消</button>\n\n        <ion-title>写信</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-left (click)="sent(writeForm.value)">\n                <ion-icon name="ios-send"></ion-icon> 发送\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content overflow-scroll="true" style="background: #f4f4f4;overflow: hidden;">\n    <div>\n        <form [formGroup]="writeForm" (ngSubmit)="sent(writeForm.value)">\n            <ion-list style="position:relative;">\n\n                <ion-item>\n                    <ion-label style="align-self:center;">收件人&emsp;</ion-label>\n                    <ion-textarea min-rows="1" readonly="true" formControlName="addressee" #popoverContent placeholder="双击选择收件人" (click)="checkPeople($event)"></ion-textarea>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label>主&emsp;题&emsp;</ion-label>\n                    <ion-input type="test" formControlName="Title" placeholder="主题1"></ion-input>\n                </ion-item>\n                <button ion-button clear class="share-btn" type="button" (click)="addAffix()">\n                    <ion-icon name="share"></ion-icon>0\n                </button>\n                <ion-item>\n                    <ion-label>密&emsp;送&emsp;</ion-label>\n                    <ion-toggle formControlName="Bcc"></ion-toggle>\n                </ion-item>\n                <ion-item>\n                    <ion-label>紧急程度</ion-label>\n                    <ion-select formControlName="Level" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option value="普通">普通邮件</ion-option>\n                        <ion-option value="重要">重要邮件</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-textarea autotextarea formControlName="Content" rows="3" class="write-textarea" placeholder="输入信息"></ion-textarea>\n                </ion-item>\n\n                <div class="affix" *ngIf="haveAffix">\n                    <ion-grid>\n                        <ion-row align-items-center>\n                            <ion-col col-6>\n                                <div>\n                                    <ion-icon class="affix-icon" name="md-image"></ion-icon>\n                                    <p>{{attName}}</p>\n                                    <p color="gray">5.00MB</p>\n                                    <ion-icon class="affix-dismiss" name="ios-close-circle-outline"></ion-icon>\n                                </div>\n                            </ion-col>\n                            <ion-col col-6 text-center>\n                                <div>\n                                    <ion-icon name="add" class="affix-add"></ion-icon>\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </div>\n\n            </ion-list>\n        </form>\n    </div>\n\n\n    <!-- <div>\n        <ion-scroll scrollY="true" class="mail-content">\n            <div class="message-textarea" contenteditable="true" data-text="输入信息"></div>\n            <div class="affix" *ngIf="haveAffix">\n                <ion-grid>\n                    <ion-row align-items-center>\n                        <ion-col col-6>\n                            <div>\n                                <ion-icon class="affix-icon" name="md-image"></ion-icon>\n                                <p>{{attName}}</p>\n                                <p color="gray">5.00MB</p>\n                                <ion-icon class="affix-dismiss" name="ios-close-circle-outline"></ion-icon>\n                            </div>\n                        </ion-col>\n                        <ion-col col-6 text-center>\n                            <div>\n                                <ion-icon name="add" class="affix-add"></ion-icon>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </ion-scroll>\n    </div> -->\n</ion-content>\n<!-- <div class="list message-reply">\n\n    <div class="item">\n        <textarea name="" rows="" cols="" placeholder="回复: "></textarea>\n        <button ion-button small color="positive">发送</button>\n    </div>\n\n</div> -->\n'/*ion-inline-end:"/Users/lieon/Desktop/OA_WEBApp/OA_WEBApp/src/pages/mail/mail-write/mail-write.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_FileService__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_GlobalData__["a" /* GlobalData */],
            __WEBPACK_IMPORTED_MODULE_9__mailService__["a" /* MailService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormBuilder */]])
    ], MailWrite);
    return MailWrite;
}());

//# sourceMappingURL=mail-write.js.map

/***/ })

});
//# sourceMappingURL=1.js.map