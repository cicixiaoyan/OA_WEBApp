webpackJsonp([8],{

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmsWritePageModule", function() { return SmsWritePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sms_write__ = __webpack_require__(863);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__smsService__ = __webpack_require__(783);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SmsWritePageModule = (function () {
    function SmsWritePageModule() {
    }
    SmsWritePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sms_write__["a" /* SmsWritePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sms_write__["a" /* SmsWritePage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__sms_write__["a" /* SmsWritePage */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__smsService__["a" /* SmsService */]]
        })
    ], SmsWritePageModule);
    return SmsWritePageModule;
}());

//# sourceMappingURL=sms-write.module.js.map

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmsService; });
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



var SmsService = (function () {
    function SmsService(httpService) {
        this.httpService = httpService;
        this.smsStatus = {
            "sent": 1,
            "toBeSent": 0,
        };
    }
    SmsService.prototype.getList = function (param) {
        // PageIndex, PageSize, UserId, Status
        return this.httpService.postFormData("ashx/Smsls.ashx", param).map(function (res) { return res.json(); });
    };
    SmsService.prototype.write = function (param) {
        // IsTimer, SendDate, UserId, Content, CellPhone
        return this.httpService.postFormData("ashx/SmsAdd.ashx", param).map(function (res) { return res.json(); });
    };
    SmsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */]])
    ], SmsService);
    return SmsService;
}());

//# sourceMappingURL=smsService.js.map

/***/ }),

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmsWritePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_GlobalData__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__smsService__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_Utils__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { GetmobilePopoverPage } from '../../getmobile-popover/getmobile-popover';
/**
 * Generated class for the SmsWritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SmsWritePage = (function () {
    function SmsWritePage(globalData, smsService, nativeService, popoverCtrl, viewCtrl, formBuilder) {
        this.globalData = globalData;
        this.smsService = smsService;
        this.nativeService = nativeService;
        this.popoverCtrl = popoverCtrl;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.IsTimer = false;
        this.min = __WEBPACK_IMPORTED_MODULE_6__providers_Utils__["a" /* Utils */].dateFormat(new Date(), 'yyyy-MM-ddTHH:mm:ss');
        this.max = __WEBPACK_IMPORTED_MODULE_6__providers_Utils__["a" /* Utils */].dateFormat(new Date(), 'yyyy-MM-ddTHH:mm:ss', 7);
        this.writeForm = this.formBuilder.group({
            CellPhone: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            IsTimer: [false, []],
            SendDate: [new Date().getTime(), []],
            Content: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(180)]],
        });
        this.ionViewDidLoad();
    }
    SmsWritePage.prototype.ionViewDidLoad = function () {
    };
    SmsWritePage.prototype.sent = function (data) {
        var _this = this;
        var data1 = {
            "CellPhone": this.CellPhones,
            "Uid": this.globalData.Uid,
            "IsTimer": data.IsTimer ? 1 : 0,
            "Content": data.Content
        };
        data1['SendDate'] = data.IsTimer ? __WEBPACK_IMPORTED_MODULE_6__providers_Utils__["a" /* Utils */].dateFormat(new Date(data.SendDate), 'yyyy-MM-dd HH:mm:ss') :
            __WEBPACK_IMPORTED_MODULE_6__providers_Utils__["a" /* Utils */].dateFormat(new Date(), 'yyyy-MM-dd HH:mm:ss'),
            this.smsService.write(data1).subscribe(function (resJson) {
                if (resJson.Result) {
                    _this.nativeService.showToast(resJson.Data, 500);
                    _this.viewCtrl.dismiss({ "isRefresh": true });
                }
                else {
                    _this.nativeService.showToast(resJson.Data, 800);
                }
            });
    };
    SmsWritePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SmsWritePage.prototype.checkPeople = function (myEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create("GetmobilePopoverPage", { addressee: this.writeForm.get("CellPhone").value, addresseeIds: this.CellPhones });
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(function (data) {
            if (!!data) {
                console.log(data);
                // {addressee:this.addressee,addresseeIds:this.addresseeIds}
                _this.writeForm.patchValue({ "CellPhone": data.addressee });
                // setValue('CellPhone', data.addressee);
                _this.CellPhones = data.addresseeIds;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("popoverContent", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SmsWritePage.prototype, "content", void 0);
    SmsWritePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sms-write',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\sms\sms-write\sms-write.html"*/`<!--\n  Generated template for the SmsWritePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        \n        <button ion-button (click)="dismiss()">取消</button>\n\n        <ion-title>写短信</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-left [disabled]="!writeForm.valid" (click)="sent(writeForm.value)">\n                <ion-icon name="ios-send"></ion-icon> 发送\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <form [formGroup]="writeForm" (ngSubmit)="sent(writeForm.value)">\n      <ion-list>\n        <ion-item>\n          <ion-label>接收号码&emsp;</ion-label>\n          <ion-input type="text"  formControlName="CellPhone"  placeholder="手机号" #popoverContent placeholder="请选择收件人" (click)="checkPeople($event)"></ion-input>\n        </ion-item>\n\n        <div *ngIf="!writeForm.controls.CellPhone.valid && writeForm.controls.CellPhone.touched" class="validation-failed">请添加收件人</div>\n\n        <ion-item>\n            <ion-label>是否定时</ion-label>\n            <ion-toggle  formControlName="IsTimer"></ion-toggle>\n        </ion-item>\n\n        <ion-item *ngIf="writeForm.get(\'IsTimer\').value">\n            <ion-label>发送时间</ion-label>\n            <ion-datetime displayFormat="YYYY-MM-DD HH:mm" minuteValues="0,15,30,45" [min]="min" [max]="max" formControlName="SendDate" placeholder="点击选择时间"  pickerFormat="YYYY-MM-DD HH:mm" cancelText="取消" doneText="确定" ></ion-datetime>\n        </ion-item>\n        <ion-item >\n            <ion-textarea formControlName="Content" rows="6" class="write-textarea" placeholder="输入信息"></ion-textarea>\n        </ion-item>\n\n      </ion-list>\n    </form> \n</ion-content>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\sms\sms-write\sms-write.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_GlobalData__["a" /* GlobalData */],
            __WEBPACK_IMPORTED_MODULE_3__smsService__["a" /* SmsService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
    ], SmsWritePage);
    return SmsWritePage;
}());

//# sourceMappingURL=sms-write.js.map

/***/ })

});
//# sourceMappingURL=8.js.map