webpackJsonp([14],{

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingRoomSetPageModule", function() { return MeetingRoomSetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meeting_room_set__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__meeting_service__ = __webpack_require__(763);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MeetingRoomSetPageModule = (function () {
    function MeetingRoomSetPageModule() {
    }
    MeetingRoomSetPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__meeting_room_set__["a" /* MeetingRoomSetPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__meeting_room_set__["a" /* MeetingRoomSetPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__meeting_room_set__["a" /* MeetingRoomSetPage */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__meeting_service__["a" /* MeetingService */]]
        })
    ], MeetingRoomSetPageModule);
    return MeetingRoomSetPageModule;
}());

//# sourceMappingURL=meeting-room-set.module.js.map

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
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




var MeetingService = (function () {
    function MeetingService(httpService) {
        this.httpService = httpService;
        this.meetingStatus = {
            Drafting: "起草中",
            Delivered: "送审中",
            Approved: "已审批",
            HasBeenReturned: "已退回",
            completed: "已完成",
        };
    }
    MeetingService.prototype.getList = function (param) {
        return this.httpService.postFormData("ashx/MeetLs.ashx", param).map(function (res) { return res.json(); });
    };
    MeetingService.prototype.write = function (param) {
        return this.httpService.postFormData("ashx/MeetAdd.ashx", param).map(function (res) { return res.json(); });
    };
    MeetingService.prototype.read = function (param) {
        return this.httpService.postFormData("ashx/MeetDetail.ashx", param).map(function (res) { return res.json(); });
    };
    MeetingService.prototype.mod = function (param) {
        return this.httpService.postFormData("ashx/MeetMod.ashx", param).map(function (res) { return res.json(); });
    };
    MeetingService.prototype.MeetPlaceLs = function () {
        return this.httpService.postFormData("ashx/MeetPlaceLs.ashx", {}).map(function (res) { return res.json(); });
    };
    MeetingService.prototype.MeetTypeLs = function () {
        return this.httpService.postFormData("ashx/MeetTypeLs.ashx", {}).map(function (res) { return res.json(); });
    };
    MeetingService.prototype.GetMeetingPlaceAndType = function () {
        var MeetPlaceLs = this.httpService.postFormData("ashx/MeetPlaceLs.ashx", {}).map(function (res) { return res.json(); });
        var MeetTypeLs = this.httpService.postFormData("ashx/MeetTypeLs.ashx", {}).map(function (res) { return res.json(); });
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].forkJoin([MeetPlaceLs, MeetTypeLs]);
    };
    MeetingService.prototype.GetDeptLs = function () {
        return this.httpService.postFormData("ashx/BmLs.ashx", {}).map(function (res) { return res.json(); });
    };
    MeetingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_HttpService__["a" /* HttpService */]])
    ], MeetingService);
    return MeetingService;
}());

//# sourceMappingURL=meeting_service.js.map

/***/ }),

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetingRoomSetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meeting_service__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(26);
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
 * Generated class for the MeetingRoomSetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MeetingRoomSetPage = (function () {
    function MeetingRoomSetPage(navCtrl, navParams, formBuilder, meetingService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.meetingService = meetingService;
        this.isWrite = false;
        this.DeptLs = [];
        this.isWrite = !!this.navParams.get("Id") ? false : true;
        this.setForm = this.formBuilder.group({
            Name: ["", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(20), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(2)]],
            Manager: ["", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(20), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(2)]],
            Number: ["", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].max(10000)]],
            Mobile: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(7), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(11)]],
            HaveAttendant: [false, []],
            DeptId: ["", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(180)]],
            Introduction: ["", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(180)]]
        });
        this.meetingService.GetDeptLs().subscribe(function (resJson) {
            if (resJson.Result)
                _this.DeptLs = resJson.Data;
        });
    }
    MeetingRoomSetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MeetingRoomSetPage');
    };
    MeetingRoomSetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-meeting-room-set',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\meeting\meeting-room\meeting-room-set\meeting-room-set.html"*/`<!--\n  Generated template for the MeetingRoomSetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{isWrite ? "添加会议室" : "会议室详情"}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <form [formGroup]="setForm" (ngSubmit)="save(setForm.value)">\n        <div>\n            <ion-list>\n                <ion-item>\n                    <ion-label>名称</ion-label>\n                    <ion-input text-right formControlName="Name" placeholder="请输入" ></ion-input>\n                </ion-item>\n                <div *ngIf="!setForm.controls.Name.valid && (setForm.controls.Name.touched || setForm.controls.Name.dirty )" class="validation-failed">\n                    <div *ngIf="setForm.get(\'Name\').errors.required">名称必填</div>\n                    <div *ngIf="setForm.get(\'Name\').errors.minlength">最少输入2个字</div>\n                    <div *ngIf="setForm.get(\'Name\').errors.maxlength">最多输入20个字</div>\n                </div> \n\n                <ion-item>\n                    <ion-label>管理人员</ion-label>\n                    <ion-input text-right  formControlName="Manager" placeholder="请输入" ></ion-input>\n                </ion-item>\n                <div *ngIf="!setForm.controls.Manager.valid && (setForm.controls.Manager.touched || setForm.controls.Manager.dirty )" class="validation-failed">\n                    <div *ngIf="setForm.get(\'Manager\').errors.required">管理人员必填</div>\n                    <div *ngIf="setForm.get(\'Manager\').errors.minlength">最少输入2个字</div>\n                    <div *ngIf="setForm.get(\'Manager\').errors.maxlength">最多输入20个字</div>\n                </div> \n\n\n                <ion-item>\n                    <ion-label>规模容量</ion-label>\n                    <ion-input text-right type="number" formControlName="Number" placeholder="请输入" ></ion-input>\n                </ion-item>\n                <div *ngIf="!setForm.controls.Number.valid && (setForm.controls.Number.touched || setForm.controls.Number.dirty)" class="validation-failed">\n                    <div *ngIf="setForm.get(\'Number\').errors.required">必填项</div>\n                    <div *ngIf="setForm.get(\'Number\').errors.max">最大容量10000</div>\n                </div> \n\n                <ion-item>\n                    <ion-label>联系电话<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right type="number"  formControlName="Mobile" placeholder="请输入" ></ion-input>\n                </ion-item>\n                <div *ngIf="!setForm.controls.Mobile.valid && (setForm.controls.Mobile.touched || setForm.controls.Mobile.dirty)" class="validation-failed">\n                    请输入合法的联系电话\n                </div> \n\n                <ion-item>\n                    <ion-label>是否有服务人员<span class="optional">（选填）</span></ion-label>\n                    <ion-toggle formControlName="HaveAttendant"></ion-toggle>\n                </ion-item>\n                <ion-item>\n                    <ion-label>所属部门<span class="optional">（选填）</span></ion-label>\n                    <ion-select formControlName="DeptId" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option *ngFor="let Dept of DeptLs;let i = index" [value]="Dept.Id">{{Dept.BmName}}</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>简介<span class="optional">（选填）</span></ion-label>\n                    <ion-textarea  formControlName="Introduction"  placeholder="请输入"></ion-textarea>\n                </ion-item>\n                <div *ngIf="!setForm.controls.Introduction.valid && (setForm.controls.Introduction.touched || setForm.controls.Introduction.dirty)" class="validation-failed">\n                    最多可输入180个字\n                </div> \n              \n            </ion-list>\n            <div padding text-center>\n                <button ion-button type="submit" color="danger" [disabled]="!setForm.valid">保存</button>\n                <button ion-button clear small navPop>取消修改</button>\n            </div>\n        </div>\n    </form>\n</ion-content>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\meeting\meeting-room\meeting-room-set\meeting-room-set.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__meeting_service__["a" /* MeetingService */]])
    ], MeetingRoomSetPage);
    return MeetingRoomSetPage;
}());

//# sourceMappingURL=meeting-room-set.js.map

/***/ })

});
//# sourceMappingURL=14.js.map