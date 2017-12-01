webpackJsonp([34],{

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewworkDetailModule", function() { return NewworkDetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newwork_detail__ = __webpack_require__(767);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewworkDetailModule = (function () {
    function NewworkDetailModule() {
    }
    NewworkDetailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__newwork_detail__["a" /* NewworkDetail */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__newwork_detail__["a" /* NewworkDetail */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__newwork_detail__["a" /* NewworkDetail */]
            ]
        })
    ], NewworkDetailModule);
    return NewworkDetailModule;
}());

//# sourceMappingURL=newwork-detail.module.js.map

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewworkDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
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
 * Generated class for the NewworkDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NewworkDetail = (function () {
    function NewworkDetail(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = "新建工作";
        this.firstStep = true;
        this.phoneNotification = false;
        this.siteNotification = false;
        this.msgNotification = function (obj) {
            if (obj == 'site') {
                this.siteNotification = !this.siteNotification;
            }
            else {
                this.phoneNotification = !this.phoneNotification;
            }
        };
        console.log(this.navParams.get("id"));
    }
    NewworkDetail.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewworkDetail');
    };
    NewworkDetail.prototype.showNextStep = function () {
        this.firstStep = false;
    };
    NewworkDetail.prototype.showfirstStep = function () {
        this.firstStep = true;
    };
    NewworkDetail = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newwork-detail',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\home\newwork\newwork-detail\newwork-detail.html"*/`<!--\n\n  Generated template for the NewworkDetail page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>{{title}}</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-list inset *ngIf="firstStep">\n\n\n\n        <ion-item>\n\n            <ion-label>当前步骤：</ion-label>\n\n            <ion-input type="text" placeholder="当前步骤1"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>&emsp;流水号：<em>&emsp;1&nbsp;—</em></ion-label>\n\n\n\n            <ion-input type="text" placeholder="请输入流水号"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>工作标题：</ion-label>\n\n            <ion-input type="text" placeholder="请输入工作标题"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>紧急情况：</ion-label>\n\n            <ion-select [(ngModel)]="emergencyLevel" placeholder="请选择紧急情况" cancelText="取消" okText="确定">\n\n                <ion-option value="1">高</ion-option>\n\n                <ion-option value="2" selected="true">中</ion-option>\n\n                <ion-option value="3">低</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <!--<div id="strhtm" style="min-height: 100px;overflow-x:auto;"></div>-->\n\n        <iframe id="iframe" class="iframe" onload="this.height=\'100%\'" style="width:100%;overflow-x:auto" sandbox="allow-scripts allow-top-navigation allow-pointer-lock allow-same-origin allow-popups allow-forms" src="https://www.baidu.com">\n\n        </iframe>\n\n\n\n    </ion-list>\n\n    <ion-list inset *ngIf="!firstStep">\n\n        <ion-item>\n\n            <ion-label>审批类型：</ion-label>\n\n            <ion-select [(ngModel)]="emergencyLevel" placeholder="请选择审批类型" cancelText="取消" okText="确定">\n\n                <ion-option value="1" selected="true">上级审批</ion-option>\n\n                <ion-option value="2">领导审批</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>经办人员：</ion-label>\n\n            <ion-select [(ngModel)]="manager" multiple="true" placeholder="请选择经办人员" cancelText="取消" okText="确定">\n\n                <ion-option value="1">系统管理员1</ion-option>\n\n                <ion-option value="2">系统管理员2</ion-option>\n\n                <ion-option value="3">系统管理员3</ion-option>\n\n\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>经办部门：</ion-label>\n\n            <ion-select [(ngModel)]="department" multiple="true" placeholder="请选择经办部门" cancelText="取消" okText="确定">\n\n                <ion-option value="">请选择</ion-option>\n\n                <ion-option value="1">总部</ion-option>\n\n                <ion-option value="2">研究部</ion-option>\n\n                <ion-option value="3">设计部</ion-option>\n\n                <ion-option value="4">测试部部</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>经办角色：</ion-label>\n\n            <ion-select [(ngModel)]="role" multiple="true" placeholder="请选择经办人员" cancelText="取消" okText="确定">\n\n                <ion-option value="1">管理员</ion-option>\n\n                <ion-option value="1">总经理助理</ion-option>\n\n\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>审批人员：</ion-label>\n\n            <ion-select [(ngModel)]="review" multiple="true" placeholder="还未审批" cancelText="取消" okText="确定">\n\n                <ion-option value="1">系统管理员2</ion-option>\n\n                <ion-option value="1">系统管理员3</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n    </ion-list>\n\n    <ion-grid padding-horizontal>\n\n        <ion-row no-padding text-center *ngIf="!firstStep">\n\n            <ion-col col-6>\n\n                <button (click)="msgNotification(\'site\')" ion-button icon-left>\n\n              <ion-icon [name]=\'siteNotification?"md-checkbox-outline":"md-square-outline"\'></ion-icon>\n\n              站内消息提醒\n\n            </button>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <button (click)="msgNotification(\'phone\')" ion-button icon-left>\n\n              <ion-icon [name]=\'phoneNotification?"md-checkbox-outline":"md-square-outline"\'></ion-icon>\n\n              手机短信提醒\n\n            </button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n    <div padding>\n\n        <button *ngIf="firstStep" ion-button block color="calm" (click)="showNextStep()">下一步</button>\n\n        <div *ngIf="!firstStep">\n\n            <button ion-button block color="calm" (click)="showfirstStep()">上一步</button>\n\n            <button ion-button block color="danger" (click)="submit()">提交</button>\n\n        </div>\n\n\n\n    </div>\n\n\n\n</ion-content>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\home\newwork\newwork-detail\newwork-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
    ], NewworkDetail);
    return NewworkDetail;
}());

//# sourceMappingURL=newwork-detail.js.map

/***/ })

});
//# sourceMappingURL=34.js.map