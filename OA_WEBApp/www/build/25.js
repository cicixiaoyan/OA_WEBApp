webpackJsonp([25],{

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileApplicationAddPageModule", function() { return FileApplicationAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_application_add__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fileApplicationService__ = __webpack_require__(775);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FileApplicationAddPageModule = (function () {
    function FileApplicationAddPageModule() {
    }
    FileApplicationAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__file_application_add__["a" /* FileApplicationAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__file_application_add__["a" /* FileApplicationAddPage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__fileApplicationService__["a" /* FileApplicationService */]]
        })
    ], FileApplicationAddPageModule);
    return FileApplicationAddPageModule;
}());

//# sourceMappingURL=file-application-add.module.js.map

/***/ }),

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileApplicationService; });
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



var FileApplicationService = (function () {
    function FileApplicationService(httpService) {
        this.httpService = httpService;
        this.status = {
            "审批中": '审批中',
            "已同意": '已同意',
            "已拒绝": '已拒绝',
        };
    }
    FileApplicationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */]])
    ], FileApplicationService);
    return FileApplicationService;
}());

//# sourceMappingURL=fileApplicationService.js.map

/***/ }),

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileApplicationAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fileApplicationService__ = __webpack_require__(775);
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
 * Generated class for the FileApplicationAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FileApplicationAddPage = (function () {
    function FileApplicationAddPage(navCtrl, navParams, popoverCtrl, FormBuilder, fileApplicationService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.FormBuilder = FormBuilder;
        this.fileApplicationService = fileApplicationService;
        this.baseForm = this.FormBuilder.group({
            "ApplicationDate": ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            "Approver": ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(180)]],
            "Remarks": ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            "InforMemethod": ['1', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]] // 消息通知方式
        });
    }
    FileApplicationAddPage.prototype.ionViewDidLoad = function () {
    };
    FileApplicationAddPage.prototype.submit = function (value) {
        value.Uid = this.fileApplicationService.httpService.globalData.Uid;
        console.log(value);
    };
    FileApplicationAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-file-application-add',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\file-application\file-application-list\file-application-add\file-application-add.html"*/`<ion-header>\n    <ion-navbar>\n        <ion-title>个人档案申请</ion-title>\n        <ion-buttons end>\n            <button ion-button [disabled]="!baseForm.valid" (click)="submit(baseForm.value)">提交</button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <form [formGroup]="baseForm" (ngSubmit)="submit(baseForm.value)">\n        <ion-list>\n            <ion-item>\n                <ion-label>申请日期</ion-label>\n                <ion-datetime formControlName="ApplicationDate" placeholder="点击设置" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n            </ion-item>\n            <ion-item>\n                <ion-label>申请理由</ion-label>\n                <ion-textarea text-right rows=\'3\' formControlName="Remarks" placeholder="请输入申请理由"></ion-textarea>\n            </ion-item>\n            <ion-item>\n                <ion-label>审批人员选择</ion-label>\n                <ion-select formControlName="Approver" cancelText="取消" okText="确定" placeholder="请选择">\n                    <ion-option value="008">温春梅</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>通知审批人员方式</ion-label>\n                <ion-select formControlName="InforMemethod" cancelText="取消" okText="确定" placeholder="请选择">\n                    <ion-option value="1">站内消息通知</ion-option>\n                    <ion-option value="2">手机短信通知</ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-list>\n    </form>\n</ion-content>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\file-application\file-application-list\file-application-add\file-application-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__fileApplicationService__["a" /* FileApplicationService */]])
    ], FileApplicationAddPage);
    return FileApplicationAddPage;
}());

//# sourceMappingURL=file-application-add.js.map

/***/ })

});
//# sourceMappingURL=25.js.map