webpackJsonp([58],{

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobTypesSetAddPageModule", function() { return JobTypesSetAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_types_set_add__ = __webpack_require__(817);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JobTypesSetAddPageModule = (function () {
    function JobTypesSetAddPageModule() {
    }
    JobTypesSetAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__job_types_set_add__["a" /* JobTypesSetAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__job_types_set_add__["a" /* JobTypesSetAddPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__job_types_set_add__["a" /* JobTypesSetAddPage */]]
        })
    ], JobTypesSetAddPageModule);
    return JobTypesSetAddPageModule;
}());

//# sourceMappingURL=job-types-set-add.module.js.map

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobTypesSetAddPage; });
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
/**
 * Generated class for the JobTypesSetAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JobTypesSetAddPage = (function () {
    function JobTypesSetAddPage(navCtrl, navParams, 
        // private httpService: HttpService,
        formBuilder, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.viewCtrl = viewCtrl;
        this.typeForm = this.formBuilder.group({
            Category: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            Name: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            Remarks: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(180)]],
        });
    }
    JobTypesSetAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JobTypesSetAddPage');
    };
    JobTypesSetAddPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    JobTypesSetAddPage.prototype.sent = function (value) {
        // 提交
        // this.httpService.postFormData("", value)
        // .map((res: Response) => res.json())
        // .subscribe((resJson) => {
        // });
    };
    JobTypesSetAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-job-types-set-add',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\job-types-set\job-types-set-add\job-types-set-add.html"*/`<!--\n  Generated template for the JobTypesSetAddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-buttons start>\n            <button ion-button  (click)="dismiss()">返回</button>\n        </ion-buttons>\n        <ion-title>工种设置添加</ion-title>\n        <ion-buttons end>\n            <button ion-button  (click)="sent(typeForm.value)">保存</button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <form [formGroup]="typeForm" (ngSubmit)="sent(typeForm.value)">\n        <ion-list style="position:relative;">\n            <ion-item>\n                <ion-label>所属分类</ion-label>\n                <ion-select formControlName="Category" cancelText="取消" okText="确定" placeholder="请选择">\n                    <ion-option value="管理人员">管理人员</ion-option>\n                    <ion-option value="服务人员">服务人员</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>工种名称</ion-label>\n                <ion-input text-right type="text" formControlName="Name" placeholder="请输入工种名称"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>备注</ion-label>\n                <ion-textarea text-right formControlName="Remarks" placeholder="请输入备注"></ion-textarea>\n            </ion-item>\n        </ion-list>\n    </form>\n</ion-content>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\job-types-set\job-types-set-add\job-types-set-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */]])
    ], JobTypesSetAddPage);
    return JobTypesSetAddPage;
}());

//# sourceMappingURL=job-types-set-add.js.map

/***/ })

});
//# sourceMappingURL=58.js.map