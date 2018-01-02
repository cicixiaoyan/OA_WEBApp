webpackJsonp([20],{

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingEditPageModule", function() { return MeetingEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meeting_edit__ = __webpack_require__(848);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__meeting_service__ = __webpack_require__(776);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MeetingEditPageModule = (function () {
    function MeetingEditPageModule() {
    }
    MeetingEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__meeting_edit__["a" /* MeetingEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__meeting_edit__["a" /* MeetingEditPage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__meeting_service__["a" /* MeetingService */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__meeting_edit__["a" /* MeetingEditPage */]]
        })
    ], MeetingEditPageModule);
    return MeetingEditPageModule;
}());

//# sourceMappingURL=meeting-edit.module.js.map

/***/ }),

/***/ 776:
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

/***/ 848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetingEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_GlobalData__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_FileService__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_Utils__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__meeting_service__ = __webpack_require__(776);
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
 * Generated class for the MeetingEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MeetingEditPage = (function () {
    function MeetingEditPage(navCtrl, navParams, fileService, formBuilder, globalData, nativeService, meetingService) {
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
        this.DeptLs = [];
        this.detail = {};
        this.readOnly = false;
        this.writeForm = this.formBuilder.group({
            Title: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(2)]],
            TypeId: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            PlaceId: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            StartDate: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            EndDate: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            PersonId: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(180), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            DeptId: ["", []],
            HostName: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(20)]],
            Range: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(180)]],
            Detail: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(180)]],
            FileOldName: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(180)]],
        });
        var id = { "id": this.navParams.get("Id") };
        this.readOnly = this.navParams.get("readOnly") ? true : false;
        this.meetingService.MeetPlaceLs().subscribe(function (resJson) {
            if (resJson.Result)
                _this.MeetPlaceLs = resJson.Data;
        });
        this.meetingService.MeetTypeLs().subscribe(function (resJson) {
            if (resJson.Result)
                _this.MeetTypeLs = resJson.Data;
        });
        this.meetingService.GetDeptLs().subscribe(function (resJson) {
            if (resJson.Result)
                _this.DeptLs = resJson.Data;
        });
        this.meetingService.read(id).subscribe(function (resJson) {
            if (resJson.Result) {
                _this.detail = resJson.Data;
                _this.FileNewName = resJson.Data.FileNewName;
                _this.writeForm.setValue({
                    Title: _this.detail["Title"],
                    TypeId: _this.detail["TypeId"],
                    PlaceId: _this.detail["PlaceId"],
                    StartDate: __WEBPACK_IMPORTED_MODULE_6__providers_Utils__["a" /* Utils */].dateFormat(new Date(_this.detail["StartDate"]), 'yyyy-MM-ddTHH:mm+08:00'),
                    EndDate: __WEBPACK_IMPORTED_MODULE_6__providers_Utils__["a" /* Utils */].dateFormat(new Date(_this.detail["EndDate"]), 'yyyy-MM-ddTHH:mm+08:00'),
                    PersonId: _this.detail["PersonId"],
                    DeptId: _this.detail["DeptId"],
                    HostName: _this.detail["HostName"],
                    Range: _this.detail["Range"],
                    Detail: _this.detail["Detail"],
                    FileOldName: _this.detail["FileOldName"],
                });
            }
            else {
                _this.nativeService.showToast(resJson.Data, 800);
                _this.navCtrl.pop();
            }
        });
    }
    MeetingEditPage.prototype.ionViewWillEnter = function () {
        // this.writeForm.disable();
    };
    MeetingEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MeetingWritePage');
    };
    MeetingEditPage.prototype.save = function (data) {
        var _this = this;
        data.Uid = this.globalData.Uid;
        data.FileNewName = this.FileNewName;
        data.Id = this.detail["Id"];
        data.StartDate = __WEBPACK_IMPORTED_MODULE_6__providers_Utils__["a" /* Utils */].dateFormat(new Date(data.StartDate), 'yyyy-MM-dd HH:mm:ss');
        data.EndDate = __WEBPACK_IMPORTED_MODULE_6__providers_Utils__["a" /* Utils */].dateFormat(new Date(data.EndDate), 'yyyy-MM-dd HH:mm:ss');
        this.meetingService.write(data).subscribe(function (resJson) {
            if (resJson.Result) {
                _this.nativeService.showToast("添加成功", 888);
            }
            else {
                _this.nativeService.showToast(resJson.Data, 888);
            }
        });
    };
    MeetingEditPage.prototype.addAffix = function () {
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
    MeetingEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-meeting-edit',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\meeting\meeting-edit\meeting-edit.html"*/`<!--\n  Generated template for the MeetingEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>会议详情</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <form [formGroup]="writeForm" (ngSubmit)="save(writeForm.value)" [ngClass]="{\'form-readonly\': readOnly}">\n        <div>\n            <ion-list>\n                <ion-item>\n                    <ion-label>会议主题</ion-label>\n                    <ion-input text-right formControlName="Title" placeholder="请输入"></ion-input>\n                </ion-item>\n                <div *ngIf="!writeForm.controls.Title.valid && (writeForm.controls.Title.touched || writeForm.controls.Title.dirty )" class="validation-failed">\n                    <div *ngIf="writeForm.get(\'Title\').errors.required">会议主题必填</div>\n                    <div *ngIf="writeForm.get(\'Title\').errors.minlength">最少输入2个字</div>\n                    <div *ngIf="writeForm.get(\'Title\').errors.maxlength">最多输入30个字</div>\n                </div>\n\n                <ion-item>\n                    <ion-label>会议类型</ion-label>\n                    <ion-select formControlName="TypeId" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option *ngFor="let type of MeetTypeLs;let i = index" [value]="type.Id">{{type.Name}}</ion-option>\n                        <!-- <ion-option value="2">类型2</ion-option> -->\n                    </ion-select>\n                </ion-item>\n                <div *ngIf="!writeForm.controls.TypeId.valid && (writeForm.controls.TypeId.touched || writeForm.controls.TypeId.dirty )"\n                    class="validation-failed">\n                    会议类型必选\n                </div>\n\n                <ion-item>\n                    <ion-label>召开地点</ion-label>\n                    <ion-select formControlName="PlaceId" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option *ngFor="let place of MeetPlaceLs;let i = index" [value]="place.Id">{{place.Name}}</ion-option>\n                        <!-- <ion-option value="2">类型2</ion-option> -->\n                    </ion-select>\n                </ion-item>\n                <div *ngIf="!writeForm.controls.PlaceId.valid && (writeForm.controls.PlaceId.touched || writeForm.controls.PlaceId.dirty )"\n                    class="validation-failed">\n                    召开地点必选\n                </div>\n                <ion-item>\n                    <ion-label>主持人\n                        <span class="optional">（选填）</span>\n                    </ion-label>\n                    <ion-input text-right type="text" formControlName="HostName" placeholder="请输入"></ion-input>\n                </ion-item>\n                <div *ngIf="!writeForm.controls.HostName.valid && (writeForm.controls.HostName.touched || writeForm.controls.HostName.dirty )"\n                    class="validation-failed">\n                    最多输入20个字\n                </div>\n\n                <ion-item>\n                    <ion-label>参加部门\n                        <span class="optional">（选填）</span>\n                    </ion-label>\n                    <ion-select formControlName="DeptId" multiple="true" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option *ngFor="let dept of DeptLs;let i = index" [value]="dept.Id">{{dept.BmName}}</ion-option>\n                    </ion-select>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label>开始时间</ion-label>\n                    <ion-datetime placeholder="点击设置" cancelText="取消" doneText="确定" formControlName="StartDate" displayFormat="YYYY年MM月DD日 HH:mm"\n                        pickerFormat="YYYY MM DD HH mm"></ion-datetime>\n                </ion-item>\n                <div *ngIf="!writeForm.controls.StartDate.valid && (writeForm.controls.StartDate.touched || writeForm.controls.StartDate.dirty )"\n                    class="validation-failed">\n                    开始时间必填\n                </div>\n\n                <ion-item>\n                    <ion-label>结束时间</ion-label>\n                    <ion-datetime placeholder="点击设置" cancelText="取消" doneText="确定" formControlName="EndDate" displayFormat="YYYY年MM月DD日 HH:mm"\n                        pickerFormat="YYYY MM DD HH mm"></ion-datetime>\n                </ion-item>\n                <div *ngIf="!writeForm.controls.EndDate.valid && (writeForm.controls.EndDate.touched || writeForm.controls.EndDate.dirty )"\n                    class="validation-failed">\n                    结束时间必填\n                </div>\n\n                <ion-item>\n                    <ion-label>参加人员</ion-label>\n                    <ion-input text-right type="text" formControlName="PersonId" placeholder="点击添加"></ion-input>\n                </ion-item>\n                <div *ngIf="!writeForm.controls.PersonId.valid && (writeForm.controls.PersonId.touched || writeForm.controls.PersonId.dirty )"\n                    class="validation-failed">\n                    <div *ngIf="writeForm.get(\'PersonId\').errors.required">参加人员必填</div>\n                    <div *ngIf="writeForm.get(\'PersonId\').errors.maxlength">最多输入180个字</div>\n                </div>\n\n                <ion-item>\n                    <ion-label>出席范围\n                        <span class="optional">（选填）</span>\n                    </ion-label>\n                    <ion-input text-right type="text" formControlName="Range" placeholder="请输入"></ion-input>\n                </ion-item>\n                <div *ngIf="!writeForm.controls.Range.valid && (writeForm.controls.Range.touched || writeForm.controls.Range.dirty )" class="validation-failed">\n                    最多输入180个字\n                </div>\n\n                <ion-item>\n                    <ion-label>简要说明\n                        <span class="optional">（选填）</span>\n                    </ion-label>\n                    <ion-input text-right type="text" formControlName="Detail" placeholder="请输入"></ion-input>\n                </ion-item>\n                <div *ngIf="!writeForm.controls.Detail.valid && (writeForm.controls.Detail.touched || writeForm.controls.Detail.dirty )"\n                    class="validation-failed">\n                    最多输入180个字\n                </div>\n\n                <ion-item>\n                    <ion-label>附件\n                        <span class="optional">（选填）</span>\n                    </ion-label>\n                    <ion-input type="text" formControlName="FileOldName" (click)="addAffix()" placeholder="点击添加"></ion-input>\n                </ion-item>\n            </ion-list>\n            <div padding text-center>\n                <button *ngIf="!readOnly" ion-button type="submit" color="danger" [disabled]="!writeForm.valid">保存</button>\n                <button ion-button clear small navPop>返回</button>\n            </div>\n        </div>\n    </form>\n</ion-content>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\meeting\meeting-edit\meeting-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_FileService__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__providers_GlobalData__["a" /* GlobalData */],
            __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_7__meeting_service__["a" /* MeetingService */]])
    ], MeetingEditPage);
    return MeetingEditPage;
}());

//# sourceMappingURL=meeting-edit.js.map

/***/ })

});
//# sourceMappingURL=20.js.map