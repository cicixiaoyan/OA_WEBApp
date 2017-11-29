webpackJsonp([52],{

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account__ = __webpack_require__(749);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account__["a" /* Account */]),
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

/***/ 739:
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

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Account; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_UserInfo__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_GlobalData__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_NativeService__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_FileService__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_Constants__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_Utils__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { AccountEdit } from '../account/account-edit/account-edit';
// import { AccountPasswordedit } from '../account/account-passwordedit/account-passwordedit';
// import { AboutusPage } from '../account/aboutus/aboutus';


// import { LoginPage } from "../login/login";




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
        this.userInfo = new __WEBPACK_IMPORTED_MODULE_3__model_UserInfo__["a" /* UserInfo */]();
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
                var modal = _this.modalCtrl.create("LoginPage");
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
        this.navCtrl.push("AccountEdit");
    };
    Account.prototype.getAboutus = function () {
        this.navCtrl.push("AboutusPage");
    };
    Account.prototype.pwdEdit = function () {
        // this.navCtrl.push(AccountPasswordedit);
        var modal = this.modalCtrl.create("AccountPasswordedit");
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
                if (result) {
                    var origPath_1 = __WEBPACK_IMPORTED_MODULE_7__providers_Constants__["e" /* FILE_SERVE_URL */] + result[0].origPath;
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
    Account.prototype.signOut = function () {
        this.storage.clear(); // 清除缓存
        __WEBPACK_IMPORTED_MODULE_8__providers_Utils__["a" /* Utils */].sessionStorageClear(); // 清除数据缓存
        var modal = this.modalCtrl.create("LoginPage");
        modal.present();
        modal.onDidDismiss(function (data) {
            data && console.log(data);
        });
    };
    Account = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\account\account.html"*/`<!--\n  Generated template for the Account page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>个人中心</ion-title>\n        <ion-buttons end *ngIf="isChange">\n            <button ion-button icon-only (click)="save()">\n                保存\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content overflow-scroll="true" style="background: #f4f4f4;overflow: hidden;">\n    <div class="top">\n        <div class="top-bg"></div>\n        <div>\n            <img (click)="changePhoto()" [src]="userInfo.photo" alt="photo" height="60" />\n            <h5><span class="positive">♂</span>&nbsp;<span class="positive">{{userInfo.Name}}</span></h5>\n            <div class="row row-no-padding">\n                <div class="col col-50" style="border-right: 1px solid;">\n                    职位：{{userInfo.Duty || "无"}}\n                </div>\n                <div class="col col-50">\n                    入职时间：{{(userInfo.InDate|date:"yyyy-MM-dd") || "未设置"}}\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="imformation">\n        <ion-scroll scrollY="true" class="tab-content">\n            <ion-list>\n                <ion-item>\n                    <ion-icon name=\'md-map\' color="positive" item-left></ion-icon>\n                    公司\n                    <ion-note item-right>{{userInfo.Company}}</ion-note>\n                </ion-item>\n                <ion-item>\n                    <ion-icon name=\'ios-analytics\' color="energized" item-left></ion-icon>\n                    部门\n                    <ion-note item-right>{{userInfo.Dept || "无"}}</ion-note>\n                </ion-item>\n                <ion-item>\n                    <ion-icon name=\'ios-phone-portrait\' color="calm" item-left></ion-icon>\n                    手机号\n                    <ion-note item-right>{{userInfo.Mobile || "无"}}</ion-note>\n                </ion-item>\n                <!-- <ion-item>\n                    <ion-icon name=\'md-mail\' color="calm" item-left></ion-icon>\n                    邮箱\n                    <ion-note item-right>{{userInfo.ui_mail}}</ion-note>\n                </ion-item> -->\n            </ion-list>\n\n            <ion-list>\n                <ion-item (click)="getAboutus()">\n                    <ion-icon name=\'ios-at-outline\' color="assertive" item-left></ion-icon>\n                    关于我们\n                    <ion-icon name=\'ios-arrow-forward\' item-right></ion-icon>\n                </ion-item>\n            </ion-list>\n\n            <ion-list>\n                <ion-item (click)="pwdEdit()">\n                    <ion-icon name=\'ios-unlock\' color="assertive" item-left></ion-icon>\n                    修改密码\n                    <ion-icon name=\'ios-arrow-forward\' item-right></ion-icon>\n                </ion-item>\n                <ion-item (click)="edit()">\n                    <ion-icon name=\'md-create\' color="balanced" item-left></ion-icon>\n                    修改资料\n                    <ion-icon name=\'ios-arrow-forward\' item-right></ion-icon>\n                </ion-item>\n            </ion-list>\n\n\n\n            <div class="padding">\n                <button ion-button block color="assertive" (click)="signOut()">退出登录</button>\n            </div>\n\n        </ion-scroll>\n    </div>\n</ion-content>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\account\account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_GlobalData__["a" /* GlobalData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_FileService__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_NativeService__["a" /* NativeService */]])
    ], Account);
    return Account;
}());

//# sourceMappingURL=account.js.map

/***/ })

});
//# sourceMappingURL=52.js.map