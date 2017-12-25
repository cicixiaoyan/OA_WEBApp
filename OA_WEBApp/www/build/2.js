webpackJsonp([2,42],{

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffFileMaintenanceWorkExperienceAddModule", function() { return StaffFileMaintenanceWorkExperienceAddModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_work_experience_add__ = __webpack_require__(776);
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

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffFileMaintenanceWorkExperiencePageModule", function() { return StaffFileMaintenanceWorkExperiencePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_work_experience__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__staff_file_maintenance_work_experience_add_staff_file_maintenance_work_experience_add_module__ = __webpack_require__(707);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StaffFileMaintenanceWorkExperiencePageModule = (function () {
    function StaffFileMaintenanceWorkExperiencePageModule() {
    }
    StaffFileMaintenanceWorkExperiencePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_work_experience__["a" /* StaffFileMaintenanceWorkExperience */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_work_experience__["a" /* StaffFileMaintenanceWorkExperience */]),
                __WEBPACK_IMPORTED_MODULE_3__staff_file_maintenance_work_experience_add_staff_file_maintenance_work_experience_add_module__["StaffFileMaintenanceWorkExperienceAddModule"]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_work_experience__["a" /* StaffFileMaintenanceWorkExperience */]]
        })
    ], StaffFileMaintenanceWorkExperiencePageModule);
    return StaffFileMaintenanceWorkExperiencePageModule;
}());

//# sourceMappingURL=staff-file-maintenance-work-experience.module.js.map

/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffFileMaintenanceWorkExperienceAdd; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
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
/**
 * Generated class for the StaffFileMaintenanceWorkExperienceAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
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
            Dept: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            Duty: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            Company: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(80)]],
            Remarks: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(100)]],
        });
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
            selector: 'page-staff-file-maintenance-work-experience-add',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\staff-file-maintenance\staff-file-maintenance-work-experience\staff-file-maintenance-work-experience-add\staff-file-maintenance-work-experience-add.html"*/`<!--\n  Generated template for the StaffFileMaintenanceWorkExperienceAddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons start>\n          <button ion-button  (click)="dismiss()">返回</button>\n      </ion-buttons>\n    <ion-title>工作经历</ion-title>\n    <ion-buttons end>\n        <button ion-button  (click)="save(addForm.value)">保存</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <form [formGroup]="addForm" (ngSubmit)="save(addForm.value)"   [ngClass]="{\'form-readonly\': readOnly}">\n        <ion-list style="position:relative;">\n            <ion-item>\n                <ion-label>开始时间</ion-label>\n                <ion-datetime formControlName="StartDate" placeholder="点击设置" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n            </ion-item>\n            <ion-item>\n                <ion-label>结束时间</ion-label>\n                <ion-datetime formControlName="EndDate" placeholder="点击设置" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n              </ion-item>\n            <ion-item>\n                <ion-label>部门</ion-label>\n                <ion-input text-right type="text" formControlName="Dept" placeholder="输入部门名称"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>职务</ion-label>\n                <ion-input text-right type="text" formControlName="Duty" placeholder="输入职务名称"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>工作单位</ion-label>\n                <ion-input text-right type="text" formControlName="Company" placeholder="输入工作单位"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>备注<span class="optional">（选填）</span></ion-label>\n                <ion-textarea text-right formControlName="Remarks" placeholder="请输入备注"></ion-textarea>\n            </ion-item>\n        </ion-list>\n    </form>\n</ion-content>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\staff-file-maintenance\staff-file-maintenance-work-experience\staff-file-maintenance-work-experience-add\staff-file-maintenance-work-experience-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */]])
    ], StaffFileMaintenanceWorkExperienceAdd);
    return StaffFileMaintenanceWorkExperienceAdd;
}());

//# sourceMappingURL=staff-file-maintenance-work-experience-add.js.map

/***/ }),

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffFileMaintenanceWorkExperience; });
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
 * Generated class for the StaffFileMaintenanceWorkExperiencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StaffFileMaintenanceWorkExperience = (function () {
    function StaffFileMaintenanceWorkExperience(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.list = [];
        this.isShowAdd = true;
        this.getList();
    }
    StaffFileMaintenanceWorkExperience.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StaffFileMaintenanceWorkExperiencePage');
    };
    StaffFileMaintenanceWorkExperience.prototype.add = function () {
        var modal = this.modalCtrl.create("StaffFileMaintenanceWorkExperienceAdd");
        modal.present();
        modal.onDidDismiss(function (data) {
            data && console.log(data);
        });
    };
    StaffFileMaintenanceWorkExperience.prototype.doRead = function (id) {
        var parma = {
            "Id": id,
            "readOnly": (this.navParams.get("readOnly") ? true : null)
        };
        var modal = this.modalCtrl.create("StaffFileMaintenanceWorkExperienceAdd", parma);
        modal.present();
        modal.onDidDismiss(function (data) {
            data && console.log(data);
        });
    };
    StaffFileMaintenanceWorkExperience.prototype.getList = function () {
        this.list = [
            {
                "Id": '1',
                'StartDate': '2017-08-08',
                'EndDate': '2017-08-08',
                'Company': '青白江疾控预防',
                'Dept': '部门1',
                'Duty': '我是职务',
                'Remarks': '我是备注'
            },
            {
                "Id": '2',
                'StartDate': '2017-08-08',
                'EndDate': '2017-08-08',
                'Company': '青白江疾控预防',
                'Dept': '部门1',
                'Duty': '我是职务',
                'Remarks': ''
            },
            {
                "Id": '9',
                'StartDate': '2017-08-08',
                'EndDate': '2017-08-08',
                'Company': '青白江疾控预防',
                'Dept': '部门2',
                'Duty': '我是职务',
                'Remarks': ''
            },
            {
                "Id": '12',
                'StartDate': '2017-08-08',
                'EndDate': '2017-08-08',
                'Company': '青白江疾控预防',
                'Dept': '部门1',
                'Duty': '我是职务',
                'Remarks': '我是备注'
            },
        ];
    };
    StaffFileMaintenanceWorkExperience = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-staff-file-maintenance-work-experience',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\staff-file-maintenance\staff-file-maintenance-work-experience\staff-file-maintenance-work-experience.html"*/`<!--\n  Generated template for the StaffFileMaintenanceWorkExperiencePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>工作经历</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n        <ion-item-sliding   *ngFor="let item of list"  (click)="doRead(item.Id)">\n          <ion-item>\n            <h3>{{item.StartDate}}~{{item.EndDate}}</h3>\n            <h2>{{item.Duty}}</h2>\n            <p>{{item.Dept}}<span *ngIf="item.Company !== \'\'">|{{item.Company}}</span></p>\n            <p *ngIf="item.Remarks !== \'\'">备注：{{item.Remarks}}</p>\n            <ion-icon name="arrow-forward" item-end color="stable"></ion-icon>\n          </ion-item>\n          <ion-item-options side="right">\n            <button ion-button color="primary"><ion-icon name="md-trash"></ion-icon>删除</button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n      <div text-center>\n          <button (click)="add()" icon-left ion-button color="secondary" small outline round><ion-icon name="add"></ion-icon>添加</button>\n      </div>\n</ion-content>\n\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\staff-file-maintenance\staff-file-maintenance-work-experience\staff-file-maintenance-work-experience.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */]])
    ], StaffFileMaintenanceWorkExperience);
    return StaffFileMaintenanceWorkExperience;
}());

//# sourceMappingURL=staff-file-maintenance-work-experience.js.map

/***/ })

});
//# sourceMappingURL=2.js.map