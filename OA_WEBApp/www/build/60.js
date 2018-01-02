webpackJsonp([60],{

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffFileMaintenanceSearchPageModule", function() { return StaffFileMaintenanceSearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_search__ = __webpack_require__(835);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StaffFileMaintenanceSearchPageModule = /** @class */ (function () {
    function StaffFileMaintenanceSearchPageModule() {
    }
    StaffFileMaintenanceSearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_search__["a" /* StaffFileMaintenanceSearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_search__["a" /* StaffFileMaintenanceSearchPage */]),
            ],
        })
    ], StaffFileMaintenanceSearchPageModule);
    return StaffFileMaintenanceSearchPageModule;
}());

//# sourceMappingURL=staff-file-maintenance-search.module.js.map

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffFileMaintenanceSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_PublicService__ = __webpack_require__(365);
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
 * Generated class for the StaffFileMaintenanceSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StaffFileMaintenanceSearchPage = /** @class */ (function () {
    function StaffFileMaintenanceSearchPage(navCtrl, navParams, viewCtrl, publicService, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.publicService = publicService;
        this.formBuilder = formBuilder;
        this.DeptLs = [];
        this.search = this.navParams.get("search");
        this.searchForm = this.formBuilder.group({
            "StaffNumber": ["", []],
            "Name": ["", []],
            "IDC": ["", []],
            "DeptId": ["", []],
            "FirstEdu": ["", []],
            "StaffStatus": ["", []],
            "Indate": ["", []] // 入职时间
        });
        this.publicService.GetDeptLs().subscribe(function (resJson) {
            if (resJson.Result)
                _this.DeptLs = resJson.Data;
        });
        if (this.search) {
            this.searchForm.setValue({
                "DeptId": this.search.DeptId,
                "StartDate": this.search.StartDate,
                "EndDate": this.search.EndDate,
                "ContractYear": this.search.ContractYear,
                "ContractType": this.search.ContractType
            });
        }
    }
    StaffFileMaintenanceSearchPage.prototype.sent = function (value) {
        this.viewCtrl.dismiss({ "search": value });
    };
    StaffFileMaintenanceSearchPage.prototype.reset = function () {
        this.searchForm.reset();
        this.searchForm.setValidators(null);
        this.searchForm.updateValueAndValidity();
    };
    StaffFileMaintenanceSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-staff-file-maintenance-search',template:/*ion-inline-start:"/Users/lieon/Desktop/OA_WEBApp/OA_WEBApp/src/pages/hr-management/staff-file-maintenance/staff-file-maintenance-search/staff-file-maintenance-search.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>筛选</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <form [formGroup]="searchForm" (ngSubmit)="sent(searchForm.value)">\n        <ion-list>\n            <ion-item>\n                <ion-label>工号</ion-label>\n                <ion-input text-right formControlName="StaffNumber" placeholder="输入工号"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>姓名</ion-label>\n                <ion-input text-right formControlName="Name" placeholder="输入姓名"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>证件号</ion-label>\n                <ion-select text-right formControlName="IDC" cancelText="取消" okText="确定" placeholder="请选择">\n                    <ion-option *ngFor="let Dept of DeptLs;let i = index" [value]="Dept.Id">{{Dept.BmName}}</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>员工部门</ion-label>\n                <ion-select text-right formControlName="DeptId" cancelText="取消" okText="确定" placeholder="请选择">\n                    <ion-option *ngFor="let Dept of DeptLs;let i = index" [value]="Dept.Id">{{Dept.BmName}}</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>学历</ion-label>\n                <ion-select text-right formControlName="FirstEdu" cancelText="取消" okText="确定" placeholder="请选择">\n                  <ion-option value="高中">高中</ion-option>\n                  <ion-option value="大学">大学</ion-option>\n                </ion-select>\n              </ion-item>\n            <ion-item>\n                <ion-label>是否在职</ion-label>\n                <ion-toggle formControlName="StaffStatus"></ion-toggle>\n            </ion-item>\n            <ion-item>\n                <ion-label>入职时间</ion-label>\n                <ion-datetime formControlName="StartDate" cancelText="取消" [max]="searchForm.value.EndDate==\'\'?null:searchForm.value.EndDate"  placeholder="开始时间" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n            </ion-item>\n\n        </ion-list>\n        <div text-center>\n            <button ion-button color="energized" (click)="reset()" small outline>重置</button>\n            <button ion-button color="assertive" type="submit" small>搜索</button>\n        </div>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/lieon/Desktop/OA_WEBApp/OA_WEBApp/src/pages/hr-management/staff-file-maintenance/staff-file-maintenance-search/staff-file-maintenance-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_PublicService__["a" /* PublicService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], StaffFileMaintenanceSearchPage);
    return StaffFileMaintenanceSearchPage;
}());

//# sourceMappingURL=staff-file-maintenance-search.js.map

/***/ })

});
//# sourceMappingURL=60.js.map