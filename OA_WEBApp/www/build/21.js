webpackJsonp([21],{

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingWritePageModule", function() { return MeetingWritePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meeting_write__ = __webpack_require__(759);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MeetingWritePageModule = (function () {
    function MeetingWritePageModule() {
    }
    MeetingWritePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__meeting_write__["a" /* MeetingWritePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__meeting_write__["a" /* MeetingWritePage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__meeting_write__["a" /* MeetingWritePage */]]
        })
    ], MeetingWritePageModule);
    return MeetingWritePageModule;
}());

//# sourceMappingURL=meeting-write.module.js.map

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetingWritePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
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
 * Generated class for the MeetingWritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MeetingWritePage = (function () {
    function MeetingWritePage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.writeForm = this.formBuilder.group({
            Theme: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30)]],
            Type: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            Location: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            StartTime: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            EndTime: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            Participants: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(180), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            Dept: ["", []],
            Host: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(8)]],
            Attendance: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(180)]],
            Description: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(180)]],
            Affix: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(180)]],
        });
    }
    MeetingWritePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MeetingWritePage');
    };
    MeetingWritePage.prototype.sent = function (data) {
    };
    MeetingWritePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-meeting-write',template:/*ion-inline-start:"F:\GithubSourceCode\OA_WEBApp\src\pages\meeting\meeting-write\meeting-write.html"*/`<!--\n  Generated template for the MeetingWritePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>添加会议</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <form [formGroup]="writeForm" (ngSubmit)="sent(writeForm.value)">\n        <div>\n            <ion-list style="position:relative;">\n                <ion-item>\n                    <ion-label style="align-self:center;">会议主题</ion-label>\n                    <ion-input min-rows="1" formControlName="Theme"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label style="align-self:center;">会议类型</ion-label>\n                    <ion-select formControlName="Type" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option value="1">类型1</ion-option>\n                        <ion-option value="2">类型2</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>召开地点</ion-label>\n                    <ion-input type="text" formControlName="Location" placeholder="入职时间" disabled></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>开始时间</ion-label>\n                    <ion-datetime placeholder="点击设置" cancelText="取消" doneText="确定" formControlName="StartTime" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>结束时间</ion-label>\n                    <ion-datetime placeholder="点击设置" cancelText="取消" doneText="确定" formControlName="EndTime" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>参加人员</ion-label>\n                    <ion-input type="text" formControlName="Participants" placeholder="入职时间" disabled></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>参加部门</ion-label>\n                    <ion-input type="text" formControlName="Dept" placeholder="入职时间" disabled></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>主持人</ion-label>\n                    <ion-input type="text" formControlName="Host" placeholder="入职时间" disabled></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>出席范围</ion-label>\n                    <ion-input type="text" formControlName="Attendance" placeholder="入职时间" disabled></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>简要说明</ion-label>\n                    <ion-input type="text" formControlName="Description" placeholder="入职时间" disabled></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>附件</ion-label>\n                    <ion-input type="text" formControlName="Affix" placeholder="入职时间" disabled></ion-input>\n                </ion-item>\n            </ion-list>\n            <div padding text-center>\n                <button ion-button type="submit" color="danger" [disabled]="!writeForm.valid">保存</button>\n                <button ion-button clear small navPop>取消修改</button>\n            </div>\n        </div>\n    </form>\n</ion-content>`/*ion-inline-end:"F:\GithubSourceCode\OA_WEBApp\src\pages\meeting\meeting-write\meeting-write.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], MeetingWritePage);
    return MeetingWritePage;
}());

//# sourceMappingURL=meeting-write.js.map

/***/ })

});
//# sourceMappingURL=21.js.map