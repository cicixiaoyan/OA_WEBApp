webpackJsonp([57],{

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffFileMaintenanceWorkExperienceAddModule", function() { return StaffFileMaintenanceWorkExperienceAddModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_work_experience_add__ = __webpack_require__(795);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StaffFileMaintenanceWorkExperienceAddModule = (function () {
    function StaffFileMaintenanceWorkExperienceAddModule() {
    }
    StaffFileMaintenanceWorkExperienceAddModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_work_experience_add__["a" /* StaffFileMaintenanceWorkExperienceAdd */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_work_experience_add__["a" /* StaffFileMaintenanceWorkExperienceAdd */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_work_experience_add__["a" /* StaffFileMaintenanceWorkExperienceAdd */]
            ]
        })
    ], StaffFileMaintenanceWorkExperienceAddModule);
    return StaffFileMaintenanceWorkExperienceAddModule;
}());

//# sourceMappingURL=staff-file-maintenance-work-experience-add.module.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffFileMaintenanceWorkExperienceAdd; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
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



// import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Observable';
// import { HttpService } from "../../../providers/HttpService";
var StaffFileMaintenanceWorkExperienceAdd = (function () {
    function StaffFileMaintenanceWorkExperienceAdd(navCtrl, navParams, 
        // private httpService: HttpService,
        formBuilder, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.viewCtrl = viewCtrl;
        this.isShow = true;
        this.readOnly = false;
        this.readOnly = this.navParams.get("readOnly") ? true : false;
        this.addForm = this.formBuilder.group({
            StartDate: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            EndDate: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            Dept: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(20)]],
            Duty: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30)]],
            Company: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(20)]],
            Remarks: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(180)]],
        });
        this.formCtrls = this.addForm.controls;
    }
    StaffFileMaintenanceWorkExperienceAdd.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StaffFileMaintenanceWorkExperienceAddPage');
    };
    StaffFileMaintenanceWorkExperienceAdd.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    StaffFileMaintenanceWorkExperienceAdd.prototype.save = function (value) {
        // 提交
        // this.httpService.postFormData("", value)
        // .map((res: Response) => res.json())
        // .subscribe((resJson) => {
        // });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], StaffFileMaintenanceWorkExperienceAdd.prototype, "isShow", void 0);
    StaffFileMaintenanceWorkExperienceAdd = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-staff-file-maintenance-work-experience-add',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\staff-file-maintenance\staff-file-maintenance-work-experience\staff-file-maintenance-work-experience-add\staff-file-maintenance-work-experience-add.html"*/`<ion-header>\n\n  <ion-navbar>\n      <ion-buttons start>\n          <button ion-button  (click)="dismiss()">返回</button>\n      </ion-buttons>\n    <ion-title>工作经历</ion-title>\n    <ion-buttons end>\n        <button ion-button [disabled]=\'addForm.invalid\'  (click)="save(addForm.value)">保存</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <form [formGroup]="addForm" (ngSubmit)="save(addForm.value)"   [ngClass]="{\'form-readonly\': readOnly}">\n        <ion-list style="position:relative;">\n            <ion-item>\n                <ion-label>开始时间</ion-label>\n                <ion-datetime formControlName="StartDate" placeholder="点击设置" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n            </ion-item>\n            <div class="validation-failed" *ngIf="formCtrls.StartDate.invalid && formCtrls.StartDate.touched">\n              开始时间必填\n            </div>\n            <ion-item>\n                <ion-label>结束时间</ion-label>\n                <ion-datetime formControlName="EndDate" placeholder="点击设置" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n            </ion-item>\n            <div class="validation-failed" *ngIf="formCtrls.EndDate.invalid && formCtrls.EndDate.touched">\n              结束时间必填\n            </div>\n            <ion-item>\n                <ion-label>部门</ion-label>\n                <ion-input text-right type="text" formControlName="Dept" placeholder="输入部门名称"></ion-input>\n            </ion-item>\n            <div class="validation-failed" *ngIf="formCtrls.Dept.invalid && (formCtrls.Dept.touched || formCtrls.Dept.dirty )">\n              <div *ngIf="addForm.get(\'Dept\').errors.required">部门必填</div>\n              <div *ngIf="addForm.get(\'Dept\').errors.maxlength">最多输入20个字</div>\n            </div>\n            <ion-item>\n                <ion-label>职务</ion-label>\n                <ion-input text-right type="text" formControlName="Duty" placeholder="输入职务名称"></ion-input>\n            </ion-item>\n            <div class="validation-failed" *ngIf="formCtrls.Duty.invalid && (formCtrls.Duty.touched || formCtrls.Duty.dirty )">\n              <div *ngIf="addForm.get(\'Duty\').errors.required">职务必填</div>\n              <div *ngIf="addForm.get(\'Duty\').errors.maxlength">最多输入30个字</div>\n            </div>\n            <ion-item>\n                <ion-label>工作单位</ion-label>\n                <ion-input text-right type="text" formControlName="Company" placeholder="输入工作单位"></ion-input>\n            </ion-item>\n            <div class="validation-failed" *ngIf="formCtrls.Company.invalid && (formCtrls.Company.touched || formCtrls.Company.dirty )">\n              <div *ngIf="addForm.get(\'Company\').errors.required">工作单位必填</div>\n              <div *ngIf="addForm.get(\'Company\').errors.maxlength">最多输入20个字</div>\n            </div>\n            <ion-item>\n                <ion-label stacked>备注<span class="optional">（选填）</span></ion-label>\n                <ion-textarea  formControlName="Remarks" placeholder="请输入备注"></ion-textarea>\n            </ion-item>\n            <div class="validation-failed" *ngIf="formCtrls.Remarks.invalid && (formCtrls.Remarks.touched || formCtrls.Remarks.dirty )">\n              最多输入180个字\n            </div>\n        </ion-list>\n    </form>\n</ion-content>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\staff-file-maintenance\staff-file-maintenance-work-experience\staff-file-maintenance-work-experience-add\staff-file-maintenance-work-experience-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */]])
    ], StaffFileMaintenanceWorkExperienceAdd);
    return StaffFileMaintenanceWorkExperienceAdd;
}());

//# sourceMappingURL=staff-file-maintenance-work-experience-add.js.map

/***/ })

});
//# sourceMappingURL=57.js.map