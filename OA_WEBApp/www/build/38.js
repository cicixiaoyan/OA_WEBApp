webpackJsonp([38],{

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountEditModule", function() { return AccountEditModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_edit__ = __webpack_require__(789);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account_edit__["a" /* AccountEdit */]),
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

/***/ 776:
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

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountEdit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_UserInfo__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_HttpService__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { LoginPage } from "../../login/login";

/**
 * Generated class for the AccountEdit page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AccountEdit = (function () {
    function AccountEdit(navCtrl, navParams, actionSheetCtrl, storage, httpService, modalCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.storage = storage;
        this.httpService = httpService;
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.userInfo = new __WEBPACK_IMPORTED_MODULE_2__model_UserInfo__["a" /* UserInfo */]();
        this.submitted = false;
        this.editForm = this.formBuilder.group({
            InDate: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(4)]],
            Sex: ['男', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(2)]],
            BirthDate: ['', []],
            Mobile: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(11), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(11)]],
            Mail: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email]],
            WorkPhone: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(11)]],
            InlinePhone: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(11)]]
        });
        this.initialize();
    }
    AccountEdit.prototype.initialize = function () {
        var _this = this;
        this.storage.get("UserInfo").then(function (UserInfo) {
            if (UserInfo) {
                _this.userInfo = UserInfo;
            }
            else {
                var modal = _this.modalCtrl.create("LoginPage");
                modal.present();
                modal.onDidDismiss(function (data) {
                    data && console.log(data);
                });
            }
        });
        // this.userInfo.BirthDate = "1990-02-19";
        // this.userInfo.InDate = "1990-02-19";
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
        var _this = this;
        // this.submitted = true;
        // console.log(value);
        value.Uid = this.httpService.globalData.Uid;
        this.httpService.postFormData("ashx/UserPersonMod.ashx", value)
            .map(function (responce) { return responce.json(); })
            .subscribe(function (Resjson) {
            if (Resjson.Result) {
                _this.httpService.nativeService.showToast("修改资料成功", 800);
                _this.httpService.postFormData("ashx/UserInfo.ashx", { id: _this.httpService.globalData.Uid })
                    .map(function (responce) { return responce.json(); }).subscribe(function (res) {
                    if (res.Result) {
                        _this.storage.set("UserInfo", res.Date);
                        _this.userInfo = res.Data;
                    }
                });
            }
            else {
                _this.httpService.nativeService.showToast("修改资料失败： " + Resjson.Data, 800);
            }
        });
    };
    AccountEdit.prototype.return = function () {
        this.navCtrl.pop();
    };
    AccountEdit = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account-edit',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\account\account-edit\account-edit.html"*/`<!--\n\n  Generated template for the AccountEdit page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>修改资料</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <form [formGroup]="editForm" (ngSubmit)="edit(editForm.value)">\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label stacked>编码</ion-label>\n\n                <ion-input type="text" [(ngModel)]="userInfo.Uid" [ngModelOptions]="{standalone: true}" placeholder="请输入编码" disabled></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label stacked>姓名</ion-label>\n\n                <ion-input type="text" [(ngModel)]="userInfo.Name" [ngModelOptions]="{standalone: true}" placeholder="请输入姓名" disabled></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label stacked>公司</ion-label>\n\n                <ion-input type="text" [(ngModel)]="userInfo.Company" [ngModelOptions]="{standalone: true}" placeholder="公司名称" disabled></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label stacked>部门</ion-label>\n\n                <ion-input type="text" [(ngModel)]="userInfo.Dept" [ngModelOptions]="{standalone: true}" placeholder="部门名称" disabled></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label stacked>职位</ion-label>\n\n                <ion-input type="text" [(ngModel)]="userInfo.Duty" [ngModelOptions]="{standalone: true}" placeholder="职位" disabled></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label stacked>入职时间</ion-label>\n\n                <ion-input type="text" [(ngModel)]="userInfo.InDate" formControlName="InDate" placeholder="入职时间" disabled></ion-input>\n\n            </ion-item>\n\n            <ion-item (click)="checkSex()">\n\n                <ion-label stacked>性别</ion-label>\n\n                <ion-input type="text" [(ngModel)]="userInfo.Sex" formControlName="Sex" placeholder="性别"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label stacked>出生日期</ion-label>\n\n                <ion-datetime [(ngModel)]="userInfo.BirthDate" placeholder="点击设置" cancelText="取消" doneText="确定" formControlName="BirthDate" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>移动电话</ion-label>\n\n                <ion-input type="number" [(ngModel)]="userInfo.Mobile" formControlName="Mobile" placeholder="移动电话"></ion-input>\n\n            </ion-item>\n\n            <div *ngIf="!editForm.controls.Mobile.valid && editForm.controls.Mobile.touched" class="validation-failed">请输入合法的电话号码</div>\n\n\n\n            <ion-item>\n\n                <ion-label>电子邮箱</ion-label>\n\n                <ion-input type="text" [(ngModel)]="userInfo.Mail" formControlName="Mail" placeholder="电子邮箱"></ion-input>\n\n            </ion-item>\n\n            <div *ngIf="!editForm.controls.Mail.valid && editForm.controls.Mail.touched" class="validation-failed">请输入正确的电子邮箱</div>\n\n\n\n            <ion-item>\n\n                <ion-label>办公电话</ion-label>\n\n                <ion-input type="number" [(ngModel)]="userInfo.WorkPhone" formControlName="WorkPhone" placeholder="办公电话"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label>内线电话</ion-label>\n\n                <ion-input type="number" [(ngModel)]="userInfo.InlinePhone" formControlName="InlinePhone" placeholder="内线电话"></ion-input>\n\n            </ion-item>\n\n\n\n        </ion-list>\n\n        <div padding text-center>\n\n            <button ion-button type="submit" color="danger" [disabled]="editForm.valid">保存</button>\n\n            <button ion-button clear small navPop>取消修改</button>\n\n        </div>\n\n\n\n\n\n    </form>\n\n</ion-content>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\account\account-edit\account-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__providers_HttpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], AccountEdit);
    return AccountEdit;
}());

//# sourceMappingURL=account-edit.js.map

/***/ })

});
//# sourceMappingURL=38.js.map