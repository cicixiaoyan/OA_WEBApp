webpackJsonp([8],{

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingWritePageModule", function() { return MeetingWritePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meeting_write__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__meeting_service__ = __webpack_require__(734);
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
            exports: [__WEBPACK_IMPORTED_MODULE_2__meeting_write__["a" /* MeetingWritePage */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__meeting_service__["a" /* MeetingService */]]
        })
    ], MeetingWritePageModule);
    return MeetingWritePageModule;
}());

//# sourceMappingURL=meeting-write.module.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__ = __webpack_require__(89);
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
            completed: "已退回",
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
    MeetingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_HttpService__["a" /* HttpService */]])
    ], MeetingService);
    return MeetingService;
}());

//# sourceMappingURL=meeting_service.js.map

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetingWritePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_GlobalData__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_FileService__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__meeting_service__ = __webpack_require__(734);
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
    function MeetingWritePage(navCtrl, navParams, fileService, formBuilder, globalData, nativeService, meetingService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fileService = fileService;
        this.formBuilder = formBuilder;
        this.globalData = globalData;
        this.nativeService = nativeService;
        this.meetingService = meetingService;
        this.FileNewName = ""; // 附件名称
        this.MeetPlaceLs = [];
        this.MeetTypeLs = [];
        this.meetingService.MeetPlaceLs().subscribe(function (resJson) {
            if (resJson.Result)
                _this.MeetPlaceLs = resJson.Data;
        });
        this.meetingService.MeetTypeLs().subscribe(function (resJson) {
            if (resJson.Result)
                _this.MeetTypeLs = resJson.Data;
        });
        this.writeForm = this.formBuilder.group({
            Title: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(30)]],
            TypeId: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            PlaceId: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            StartDate: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            EndDate: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            PersonId: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(180), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            DeptId: ["", []],
            HostName: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(8)]],
            Range: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(180)]],
            Detail: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(180)]],
            FileOldName: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(180)]],
        });
    }
    MeetingWritePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MeetingWritePage');
    };
    MeetingWritePage.prototype.sent = function (data) {
        var _this = this;
        data.Uid = this.globalData.Uid;
        data.FileNewName = this.FileNewName;
        this.meetingService.write(data).subscribe(function (resJson) {
            if (resJson.Result) {
                _this.nativeService.showToast("添加成功", 888);
            }
            else {
                _this.nativeService.showToast(resJson.Data, 888);
            }
        });
    };
    MeetingWritePage.prototype.addAffix = function () {
        var _this = this;
        this.fileService.uploadAffix(1).subscribe(function (data) {
            var resJson = JSON.parse(data.response);
            if (data.responseCode === 200) {
                _this.writeForm.patchValue({ 'Affix': resJson.Data[0].OldName });
                _this.FileNewName = resJson.Data[0].NewName;
            }
            else {
                _this.nativeService.showToast(resJson.Data, 800);
            }
        });
    };
    MeetingWritePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-meeting-write',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\meeting\meeting-write\meeting-write.html"*/`<!--\n\n  Generated template for the MeetingWritePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>添加会议</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <form [formGroup]="writeForm" (ngSubmit)="sent(writeForm.value)">\n\n        <div>\n\n            <ion-list>\n\n                <ion-item>\n\n                    <ion-label stacked>会议主题</ion-label>\n\n                    <ion-input min-rows="1" formControlName="Title" placeholder="请输入" ></ion-input>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <ion-label stacked>会议类型</ion-label>\n\n                    <ion-select formControlName="TypeId" cancelText="取消" okText="确定" placeholder="请选择">\n\n                        <ion-option *ngFor="let type of MeetTypeLs;let i = index" [value]="type.Id">{{type.Name}}</ion-option>\n\n                        <!-- <ion-option value="2">类型2</ion-option> -->\n\n                    </ion-select>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label stacked>召开地点</ion-label>\n\n                    <ion-select formControlName="PlaceId" cancelText="取消" okText="确定" placeholder="请选择">\n\n                        <ion-option *ngFor="let place of MeetPlaceLs;let i = index" [value]="place.Id">{{place.Name}}</ion-option>\n\n                        <!-- <ion-option value="2">类型2</ion-option> -->\n\n                    </ion-select>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label stacked>开始时间</ion-label>\n\n                    <ion-datetime placeholder="点击设置" cancelText="取消" doneText="确定" formControlName="StartDate" displayFormat="YYYY-MM-DD hh:mm" pickerFormat="YYYY MM DD hh mm"></ion-datetime>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label stacked>结束时间</ion-label>\n\n                    <ion-datetime placeholder="点击设置" cancelText="取消" doneText="确定" formControlName="EndDate" displayFormat="YYYY-MM-DD hh:mm" pickerFormat="YYYY MM DD hh mm"></ion-datetime>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label stacked>参加人员</ion-label>\n\n                    <ion-input type="text" formControlName="PersonId" placeholder="入职时间"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label stacked>参加部门</ion-label>\n\n                    <ion-select formControlName="DeptId" cancelText="取消" okText="确定" placeholder="请选择">\n\n                        <ion-option value="1">类型1</ion-option>\n\n                        <ion-option value="2">类型2</ion-option>\n\n                    </ion-select>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label stacked>主持人</ion-label>\n\n                    <ion-input type="text" formControlName="HostName" placeholder="请输入"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label stacked>出席范围</ion-label>\n\n                    <ion-input type="text" formControlName="Range" placeholder="请输入"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label stacked>简要说明</ion-label>\n\n                    <ion-input type="text" formControlName="Detail" placeholder="请输入"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label stacked>附件</ion-label>\n\n                    <ion-input type="text" formControlName="FileOldName"  (click)="addAffix()" placeholder="点击添加"></ion-input>\n\n                </ion-item>\n\n            </ion-list>\n\n            <div padding text-center>\n\n                <button ion-button type="submit" color="danger" [disabled]="!writeForm.valid">保存</button>\n\n                <button ion-button clear small navPop>取消修改</button>\n\n            </div>\n\n        </div>\n\n    </form>\n\n</ion-content>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\meeting\meeting-write\meeting-write.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_FileService__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__providers_GlobalData__["a" /* GlobalData */],
            __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_6__meeting_service__["a" /* MeetingService */]])
    ], MeetingWritePage);
    return MeetingWritePage;
}());

//# sourceMappingURL=meeting-write.js.map

/***/ })

});
//# sourceMappingURL=8.js.map