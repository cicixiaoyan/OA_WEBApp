webpackJsonp([67],{

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPasswordeditModule", function() { return AccountPasswordeditModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_passwordedit__ = __webpack_require__(791);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account_passwordedit__["a" /* AccountPasswordedit */]),
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

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPasswordedit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { LoginPage } from '../../login/login';

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
            "oldPwd": [, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3)]],
            "newPwd": [, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3)]],
            "confirmPassword": [, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3)]]
        });
    }
    AccountPasswordedit.prototype.confirm = function () {
        var _this = this;
        var param = { oldPwd: this.oldPwd, newPwd: this.newPwd, Uid: this.httpService.globalData.Uid };
        this.httpService.postFormData("ashx/PwdMod.ashx", param)
            .map(function (responce) { return responce.json(); })
            .subscribe(function (Resjson) {
            if (Resjson.Result) {
                _this.httpService.nativeService.showToast("修改密码成功", 800);
                var modal = _this.modalCtrl.create("LoginPage");
                modal.present();
                modal.onDidDismiss(function (data) {
                    data && console.log(data);
                });
            }
            else {
                _this.httpService.nativeService.showToast("修改密码失败： " + Resjson.Data, 800);
            }
        });
    };
    AccountPasswordedit.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AccountPasswordedit = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account-passwordedit',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\account\account-passwordedit\account-passwordedit.html"*/`<ion-header>\n\n    <ion-toolbar>\n\n        <ion-title>\n\n            修改\n\n        </ion-title>\n\n        <ion-buttons>\n\n            <button ion-button (click)="dismiss()">关闭</button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <form [formGroup]="editPasswordForm" (ngSubmit)="confirm()">\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label>&emsp;原密码：</ion-label>\n\n                <ion-input placeholder="请输入原密码" [(ngModel)]="oldPwd" type="password" formControlName="oldPwd"></ion-input>\n\n            </ion-item>\n\n            <div padding-left *ngIf="!editPasswordForm.controls.oldPwd.valid && editPasswordForm.controls.oldPwd.touched" class="validation-failed">请输入原密码</div>\n\n            <ion-item>\n\n                <ion-label>&emsp;新密码：</ion-label>\n\n                <ion-input placeholder="请输入新密码" [(ngModel)]="newPwd" type="password" formControlName="newPwd"></ion-input>\n\n            </ion-item>\n\n            <div padding-left *ngIf="!editPasswordForm.controls.newPwd.valid && editPasswordForm.controls.newPwd.touched" class="validation-failed">请输入新密码</div>\n\n            <ion-item>\n\n                <ion-label>确认密码：</ion-label>\n\n                <ion-input placeholder="请再次输入新密码" type="password" formControlName="confirmPassword"></ion-input>\n\n            </ion-item>\n\n            <div padding-left *ngIf="!editPasswordForm.controls.confirmPassword.valid && editPasswordForm.controls.confirmPassword.touched" class="validation-failed">请确认新密码</div>\n\n        </ion-list>\n\n        <div padding-horizontal>\n\n            <button color="danger" ion-button block type="submit" [disabled]="!editPasswordForm.valid">确　认</button>\n\n        </div>\n\n    </form>\n\n</ion-content>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\account\account-passwordedit\account-passwordedit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], AccountPasswordedit);
    return AccountPasswordedit;
}());

//# sourceMappingURL=account-passwordedit.js.map

/***/ })

});
//# sourceMappingURL=67.js.map