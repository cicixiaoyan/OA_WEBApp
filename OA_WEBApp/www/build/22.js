webpackJsonp([22],{

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingMaintenanceSetPageModule", function() { return TrainingMaintenanceSetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__training_maintenance_set__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__training_maintenance_service__ = __webpack_require__(782);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TrainingMaintenanceSetPageModule = (function () {
    function TrainingMaintenanceSetPageModule() {
    }
    TrainingMaintenanceSetPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__training_maintenance_set__["a" /* TrainingMaintenanceSetPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__training_maintenance_set__["a" /* TrainingMaintenanceSetPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__training_maintenance_set__["a" /* TrainingMaintenanceSetPage */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__training_maintenance_service__["a" /* TrainingMaintenanceService */]]
        })
    ], TrainingMaintenanceSetPageModule);
    return TrainingMaintenanceSetPageModule;
}());

//# sourceMappingURL=training-maintenance-set.module.js.map

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingMaintenanceService; });
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



var TrainingMaintenanceService = (function () {
    function TrainingMaintenanceService(httpService) {
        this.httpService = httpService;
    }
    TrainingMaintenanceService.prototype.getList = function (param) {
        return this.httpService.postFormData("ashx/MeetLs.ashx", param).map(function (res) { return res.json(); });
    };
    TrainingMaintenanceService.prototype.write = function (param) {
        return this.httpService.postFormData("ashx/MeetLs.ashx", param).map(function (res) { return res.json(); });
    };
    TrainingMaintenanceService.prototype.read = function (param) {
        return this.httpService.postFormData("ashx/MeetLs.ashx", param).map(function (res) { return res.json(); });
    };
    TrainingMaintenanceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */]])
    ], TrainingMaintenanceService);
    return TrainingMaintenanceService;
}());

//# sourceMappingURL=training-maintenance_service.js.map

/***/ }),

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingMaintenanceSetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_GlobalData__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__training_maintenance_service__ = __webpack_require__(782);
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
 * Generated class for the TrainingMaintenanceSetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrainingMaintenanceSetPage = (function () {
    function TrainingMaintenanceSetPage(navCtrl, navParams, formBuilder, globalData, nativeService, trainingMaintenanceService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.globalData = globalData;
        this.nativeService = nativeService;
        this.trainingMaintenanceService = trainingMaintenanceService;
        this.isWrite = false;
        this.FileNewName = ""; // 附件名称
        this.MeetPlaceLs = [];
        this.MeetTypeLs = [];
        this.DeptLs = [];
        this.writeForm = this.formBuilder.group({
            Title: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(30)]],
            StartDate: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            EndDate: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            Object: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(180), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            Unit: ["", []],
            Instructor: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(8)]],
            Place: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(100)]],
            Content: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(180)]],
        });
    }
    TrainingMaintenanceSetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MeetingWritePage');
    };
    TrainingMaintenanceSetPage.prototype.sent = function (data) {
        var _this = this;
        data.Uid = this.globalData.Uid;
        data.FileNewName = this.FileNewName;
        this.trainingMaintenanceService.write(data).subscribe(function (resJson) {
            if (resJson.Result) {
                _this.nativeService.showToast("添加成功", 888);
            }
            else {
                _this.nativeService.showToast(resJson.Data, 888);
            }
        });
    };
    TrainingMaintenanceSetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-training-maintenance-set',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\training-maintenance\training-maintenance-set\training-maintenance-set.html"*/`<!--\n  Generated template for the TrainingMaintenanceSetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{isWrite ? "添加培训维护" : "培训维护详情"}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <form [formGroup]="writeForm" (ngSubmit)="sent(writeForm.value)">\n        <div>\n            <ion-list>\n                <ion-item>\n                    <ion-label stacked>课程主题</ion-label>\n                    <ion-input min-rows="1" formControlName="Title" placeholder="请输入" ></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>开始时间</ion-label>\n                    <ion-datetime placeholder="点击设置" formControlName="StartDate"  cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD hh:mm" pickerFormat="YYYY MM DD hh mm"></ion-datetime>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>结束时间</ion-label>\n                    <ion-datetime placeholder="点击设置" formControlName="EndDate" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD hh:mm" pickerFormat="YYYY MM DD hh mm"></ion-datetime>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>培训对象</ion-label>\n                    <ion-input type="text" formControlName="Object" placeholder="培训对象"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>培训单位</ion-label>\n                    <ion-input type="text" formControlName="Unit" placeholder="培训单位"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>培训讲师</ion-label>\n                    <ion-input type="text" formControlName="Instructor" placeholder="培训讲师"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>培训地点</ion-label>\n                    <ion-input type="text" formControlName="Place" placeholder="培训地点"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label stacked>课程内容</ion-label>\n                    <ion-input type="text" formControlName="Content" placeholder="请输入"></ion-input>\n                </ion-item>\n            </ion-list>\n            <div padding text-center>\n                <button ion-button type="submit" color="danger" [disabled]="!writeForm.valid">保存</button>\n                <button ion-button clear small navPop>返回</button>\n            </div>\n        </div>\n    </form>\n</ion-content>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\training-maintenance\training-maintenance-set\training-maintenance-set.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__providers_GlobalData__["a" /* GlobalData */],
            __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_5__training_maintenance_service__["a" /* TrainingMaintenanceService */]])
    ], TrainingMaintenanceSetPage);
    return TrainingMaintenanceSetPage;
}());

//# sourceMappingURL=training-maintenance-set.js.map

/***/ })

});
//# sourceMappingURL=22.js.map