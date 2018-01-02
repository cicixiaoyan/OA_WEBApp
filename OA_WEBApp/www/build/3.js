webpackJsonp([3],{

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidayGroupSettingsViewPageModule", function() { return HolidayGroupSettingsViewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__holiday_group_settings_view__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__holiday_group_settings_service__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(786);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HolidayGroupSettingsViewPageModule = /** @class */ (function () {
    function HolidayGroupSettingsViewPageModule() {
    }
    HolidayGroupSettingsViewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__holiday_group_settings_view__["a" /* HolidayGroupSettingsViewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__holiday_group_settings_view__["a" /* HolidayGroupSettingsViewPage */]),
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* DirectivesModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__holiday_group_settings_service__["a" /* HolidayGroupSettingsService */]]
        })
    ], HolidayGroupSettingsViewPageModule);
    return HolidayGroupSettingsViewPageModule;
}());

//# sourceMappingURL=holiday-group-settings-view.module.js.map

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HolidayGroupSettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HolidayGroupSettingsService = /** @class */ (function () {
    function HolidayGroupSettingsService(httpService) {
        this.httpService = httpService;
    }
    HolidayGroupSettingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */]])
    ], HolidayGroupSettingsService);
    return HolidayGroupSettingsService;
}());

//# sourceMappingURL=holiday-group-settings-service.js.map

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__autotextarea_autotextarea__ = __webpack_require__(787);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__autotextarea_autotextarea__["a" /* AutotextareaDirective */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__autotextarea_autotextarea__["a" /* AutotextareaDirective */]]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutotextareaDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutotextareaDirective = /** @class */ (function () {
    function AutotextareaDirective(element) {
        this.element = element;
        console.log('Hello AutosizeDirective Directive');
    }
    AutotextareaDirective.prototype.onInput = function (textArea) {
        this.adjust();
    };
    // @HostListener('change', ['$event.target']) onChange(textArea: HTMLTextAreaElement): void {
    //   console.log(1234);
    //   this.adjust();
    // }
    AutotextareaDirective.prototype.ngOnChanges = function (changes) {
        console.log(1234);
        this.adjust();
    };
    AutotextareaDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.adjust(); }, 0);
    };
    AutotextareaDirective.prototype.adjust = function () {
        var textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
        textArea.style.overflow = 'hidden';
        textArea.style.height = 'auto';
        textArea.style.height = textArea.scrollHeight + 'px';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('input', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [HTMLTextAreaElement]),
        __metadata("design:returntype", void 0)
    ], AutotextareaDirective.prototype, "onInput", null);
    AutotextareaDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[autotextarea]' // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], AutotextareaDirective);
    return AutotextareaDirective;
}());

//# sourceMappingURL=autotextarea.js.map

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HolidayGroupSettingsViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__holiday_group_settings_service__ = __webpack_require__(785);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HolidayGroupSettingsViewPage = /** @class */ (function () {
    function HolidayGroupSettingsViewPage(navCtrl, navParams, formBuilder, popoverCtrl, holidayGroupSettingsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.popoverCtrl = popoverCtrl;
        this.holidayGroupSettingsService = holidayGroupSettingsService;
        this.FileNewName = ""; // 附件名称
        this.PersonId = "";
        this.readOnly = false;
        this.readOnly = this.navParams.get("readOnly") ? true : false;
        this.writeForm = this.formBuilder.group({
            "Years": ['', []],
            "GroupName": ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(12)]],
            "LeaveDays": ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].max(365)]],
            "TuneOffDays": ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].max(365)]],
            "SickLeaveDays": ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].max(365)]],
            "Person": ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(180), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            "Description": ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(180)]],
        });
    }
    HolidayGroupSettingsViewPage.prototype.sent = function (data) {
    };
    HolidayGroupSettingsViewPage.prototype.checkPeople = function (myEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create("ContactsPopoverPage", { addressee: this.writeForm.get("Person").value, addresseeIds: this.PersonId });
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(function (data) {
            if (!!data) {
                _this.PersonId = data.addresseeIds;
                _this.writeForm.patchValue({ 'Person': data.addressee });
            }
        });
    };
    HolidayGroupSettingsViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-holiday-group-settings-view',template:/*ion-inline-start:"/Users/lieon/Desktop/OA_WEBApp/OA_WEBApp/src/pages/attendance-management/holiday-group-settings/holiday-group-settings-view/holiday-group-settings-view.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>假期分组信息</ion-title>\n    <ion-buttons end>\n       <button ion-button end (click)="doWrite()">保存</button>\n   </ion-buttons>\n </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <form [formGroup]="writeForm" (ngSubmit)="sent(writeForm.value)"   [ngClass]="{\'form-readonly\': readOnly}">\n        <ion-list>\n            <ion-item>\n                <ion-label>分组年份</ion-label>\n                <ion-input text-right *ngIf="readonly" type="text" formControlName="Years" placeholder="未设置" disabled></ion-input>\n                <ion-datetime *ngIf="!readonly" placeholder="点击设置" min=\'2018\' cancelText="取消" doneText="确定" formControlName="Years" displayFormat="YYYY" pickerFormat="YYYY"></ion-datetime>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>分组名称</ion-label>\n                <ion-input text-right  type="text" formControlName="GroupName" placeholder="未设置"></ion-input>\n            </ion-item>\n            <div *ngIf="!writeForm.controls.GroupName.valid && (writeForm.controls.GroupName.touched || writeForm.controls.GroupName.dirty )" class="validation-failed">\n                <div *ngIf="writeForm.get(\'GroupName\').errors.required">会议主题必填</div>\n                <div *ngIf="writeForm.get(\'GroupName\').errors.maxlength">最多输入12个字</div>\n            </div>\n            <ion-item>\n                <ion-label>事假天数(天)</ion-label>\n                <ion-input text-right  type="number" formControlName="LeaveDays" placeholder="未设置"></ion-input>\n            </ion-item>\n            <div *ngIf="!writeForm.controls.LeaveDays.valid && (writeForm.controls.LeaveDays.touched || writeForm.controls.SickLeaveDays.dirty )" class="validation-failed">\n                <div *ngIf="writeForm.get(\'LeaveDays\').errors.required">事假天数必填</div>\n                <div *ngIf="writeForm.get(\'LeaveDays\').errors.maxlength">最大请假天数365</div>\n            </div>\n            <ion-item>\n                <ion-label>调休天数(天)</ion-label>\n                <ion-input text-right  type="number" formControlName="TuneOffDays" placeholder="未设置"></ion-input>\n            </ion-item>\n            <div *ngIf="!writeForm.controls.TuneOffDays.valid && (writeForm.controls.TuneOffDays.touched || writeForm.controls.TuneOffDays.dirty )" class="validation-failed">\n                <div *ngIf="writeForm.get(\'TuneOffDays\').errors.required">调休天数必填</div>\n                <div *ngIf="writeForm.get(\'TuneOffDays\').errors.maxlength">最大请假天数365</div>\n            </div>\n            <ion-item>\n                <ion-label>病假天数(天)</ion-label>\n                <ion-input text-right  type="number" formControlName="SickLeaveDays" placeholder="未设置"></ion-input>\n            </ion-item>\n            <div *ngIf="!writeForm.controls.SickLeaveDays.valid && (writeForm.controls.SickLeaveDays.touched || writeForm.controls.SickLeaveDays.dirty )" class="validation-failed">\n                <div *ngIf="writeForm.get(\'SickLeaveDays\').errors.required">病假天数必填</div>\n                <div *ngIf="writeForm.get(\'SickLeaveDays\').errors.maxlength">最大请假天数365</div>\n            </div>\n            <ion-item #popoverContent (click)="checkPeople($event)">\n                <ion-label col-1 stacked>参加人员</ion-label>\n                <ion-note item-end>{{writeForm.value.Person || \'点击选择员工\'}}</ion-note>\n                <!-- <p text-right>{{writeForm.value.Person || \'点击选择\'}}</p> -->\n                <!-- <ion-textarea autotextarea type="text"  formControlName="Person" readonly="true" placeholder="点击添加"></ion-textarea> -->\n            </ion-item>\n            <div *ngIf="!writeForm.controls.Person.valid && (writeForm.controls.Person.touched || writeForm.controls.Person.dirty )" class="validation-failed">\n                <div *ngIf="writeForm.get(\'Person\').errors.required">参加人员必填</div>\n                <div *ngIf="writeForm.get(\'Person\').errors.maxlength">最多输入180个字</div>\n            </div>\n            <ion-item>\n                <ion-label stacked style="flex: 1">分组说明</ion-label>\n                <ion-textarea   autotextarea type="text"  formControlName="Description"placeholder="请输入"></ion-textarea>\n            </ion-item>\n            <div *ngIf="!writeForm.controls.Description.valid && (writeForm.controls.Description.touched || writeForm.controls.Description.dirty )" class="validation-failed">\n                最多输入180个字\n            </div>\n        </ion-list>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/lieon/Desktop/OA_WEBApp/OA_WEBApp/src/pages/attendance-management/holiday-group-settings/holiday-group-settings-view/holiday-group-settings-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_3__holiday_group_settings_service__["a" /* HolidayGroupSettingsService */]])
    ], HolidayGroupSettingsViewPage);
    return HolidayGroupSettingsViewPage;
}());

//# sourceMappingURL=holiday-group-settings-view.js.map

/***/ })

});
//# sourceMappingURL=3.js.map