webpackJsonp([47],{

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffFileMaintenanceSocialRelationshipAddPageModule", function() { return StaffFileMaintenanceSocialRelationshipAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_social_relationship_add__ = __webpack_require__(813);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StaffFileMaintenanceSocialRelationshipAddPageModule = (function () {
    function StaffFileMaintenanceSocialRelationshipAddPageModule() {
    }
    StaffFileMaintenanceSocialRelationshipAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_social_relationship_add__["a" /* StaffFileMaintenanceSocialRelationshipAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_social_relationship_add__["a" /* StaffFileMaintenanceSocialRelationshipAddPage */]),
            ],
        })
    ], StaffFileMaintenanceSocialRelationshipAddPageModule);
    return StaffFileMaintenanceSocialRelationshipAddPageModule;
}());

//# sourceMappingURL=staff-file-maintenance-social-relationship-add.module.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffFileMaintenanceSocialRelationshipAddPage; });
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
 * Generated class for the StaffFileMaintenanceSocialRelationshipAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StaffFileMaintenanceSocialRelationshipAddPage = (function () {
    function StaffFileMaintenanceSocialRelationshipAddPage(navCtrl, navParams, 
        // private httpService: HttpService,
        formBuilder, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.viewCtrl = viewCtrl;
        this.readOnly = false;
        this.readOnly = this.navParams.get("readOnly") ? true : false;
        this.addForm = this.formBuilder.group({
            Name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(14)]],
            Age: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].max(150)]],
            Dept: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(20)]],
            Duty: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(20)]],
            PoliticalStatus: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(80)]],
            Relationship: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10)]],
            Company: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(80)]],
            Mobile: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(11)]],
            IsEmergencyContact: [false, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(80)]],
            Remarks: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(100)]],
        });
    }
    StaffFileMaintenanceSocialRelationshipAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StaffFileMaintenanceWorkExperienceAddPage');
    };
    StaffFileMaintenanceSocialRelationshipAddPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    StaffFileMaintenanceSocialRelationshipAddPage.prototype.save = function (value) {
        // 提交
        // this.httpService.postFormData("", value)
        // .map((res: Response) => res.json())
        // .subscribe((resJson) => {
        // });
    };
    StaffFileMaintenanceSocialRelationshipAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-staff-file-maintenance-social-relationship-add',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\staff-file-maintenance\staff-file-maintenance-social-relationship\staff-file-maintenance-social-relationship-add\staff-file-maintenance-social-relationship-add.html"*/`<!--\n  Generated template for the StaffFileMaintenanceSocialRelationshipAddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    \n      <ion-navbar>\n          <ion-buttons start>\n              <button ion-button  (click)="dismiss()">返回</button>\n          </ion-buttons>\n        <ion-title>社会关系</ion-title>\n        <ion-buttons end>\n            <button ion-button  (click)="save(addForm.value)">保存</button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n    \n    \n    <ion-content>\n        <form [formGroup]="addForm" (ngSubmit)="save(addForm.value)"   [ngClass]="{\'form-readonly\': readOnly}">\n            <ion-list style="position:relative;">\n                <ion-item>\n                    <ion-label>姓名</ion-label>\n                    <ion-input text-right type="text" formControlName="Name" placeholder="输入姓名"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>年龄<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right type="number" formControlName="Age" placeholder="输入年龄"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>部门<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right type="text" formControlName="Dept" placeholder="输入部门名称"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>职务<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right type="text" formControlName="Duty" placeholder="输入职务名称"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>政治面貌<span class="optional">（选填）</span></ion-label>\n                    <ion-select formControlName="PoliticalStatus" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option value="党员">党员</ion-option>\n                        <ion-option value="中共党员">中共党员</ion-option>\n                        <ion-option value="农工党员">农工党员</ion-option>\n                        <ion-option value="致工党员">致工党员</ion-option>\n                        <ion-option value="团员">团员</ion-option>\n                        <ion-option value="预备党员">预备党员</ion-option>\n                        <ion-option value="民主党派">民主党派</ion-option>\n                        <ion-option value="群众">群众</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label>与本人关系</ion-label>\n                    <ion-input text-right type="text" formControlName="Relationship" placeholder="请输入关系"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label>工作单位<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right type="text" formControlName="Company" placeholder="输入工作单位"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>联系电话</ion-label>\n                    <ion-input text-right type="text" formControlName="Mobile" placeholder="输入联系电话"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>紧急联系人<span class="optional">（选填）</span></ion-label>\n                    <ion-select formControlName="IsEmergencyContact" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option value="是">是</ion-option>\n                        <ion-option value="否">否</ion-option>\n                    </ion-select>                \n                </ion-item>\n                <ion-item>\n                    <ion-label>备注<span class="optional">（选填）</span></ion-label>\n                    <ion-textarea text-right formControlName="Remarks" placeholder="请输入备注"></ion-textarea>\n                </ion-item>\n            </ion-list>\n        </form>\n    </ion-content>\n    \n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\staff-file-maintenance\staff-file-maintenance-social-relationship\staff-file-maintenance-social-relationship-add\staff-file-maintenance-social-relationship-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */]])
    ], StaffFileMaintenanceSocialRelationshipAddPage);
    return StaffFileMaintenanceSocialRelationshipAddPage;
}());

//# sourceMappingURL=staff-file-maintenance-social-relationship-add.js.map

/***/ })

});
//# sourceMappingURL=47.js.map