webpackJsonp([59],{

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractSearchSeparatePageModule", function() { return ContractSearchSeparatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contract_search_separate__ = __webpack_require__(811);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContractSearchSeparatePageModule = (function () {
    function ContractSearchSeparatePageModule() {
    }
    ContractSearchSeparatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contract_search_separate__["a" /* ContractSearchSeparatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contract_search_separate__["a" /* ContractSearchSeparatePage */]),
            ],
        })
    ], ContractSearchSeparatePageModule);
    return ContractSearchSeparatePageModule;
}());

//# sourceMappingURL=contract-search-separate.module.js.map

/***/ }),

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractSearchSeparatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_PublicService__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContractSearchSeparatePage = (function () {
    function ContractSearchSeparatePage(navCtrl, navParams, viewCtrl, publicService, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.publicService = publicService;
        this.formBuilder = formBuilder;
        this.DeptLs = [];
        this.name = '签约';
        this.search = this.navParams.get("search");
        this.name = this.navParams.get("name");
        this.searchForm = this.formBuilder.group({
            "DeptId": ["", []],
            "StartDate": ["", []],
            "EndDate": ["", []]
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
            });
        }
    }
    ContractSearchSeparatePage.prototype.sent = function (value) {
        this.viewCtrl.dismiss({ "search": value });
    };
    ContractSearchSeparatePage.prototype.reset = function () {
        this.searchForm.reset();
        this.searchForm.setValidators(null);
        this.searchForm.updateValueAndValidity();
    };
    ContractSearchSeparatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contract-search-separate',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\contract\contract-search-separate\contract-search-separate.html"*/`<ion-header>\n    <ion-navbar>\n        <ion-title>{{name}}筛选</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <form [formGroup]="searchForm" (ngSubmit)="sent(searchForm.value)">\n        <ion-list>\n            <ion-item>\n                <ion-label floating>员工部门</ion-label>\n                <ion-select formControlName="DeptId" cancelText="取消" okText="确定" placeholder="请选择">\n                    <ion-option *ngFor="let Dept of DeptLs;let i = index" [value]="Dept.Id">{{Dept.BmName}}</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>{{name}}开始时间</ion-label>\n                <ion-datetime formControlName="StartDate" cancelText="取消"  placeholder="请选择" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>{{name}}结束时间</ion-label>\n                <ion-datetime formControlName="EndDate" cancelText="取消"  placeholder="请选择" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n            </ion-item>\n        </ion-list>\n        <div text-center>\n            <button ion-button color="energized" (click)="reset()" small outline>重置</button>\n            <button ion-button color="assertive" type="submit" small>搜索</button>\n        </div>\n    </form>\n</ion-content>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\contract\contract-search-separate\contract-search-separate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_PublicService__["a" /* PublicService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ContractSearchSeparatePage);
    return ContractSearchSeparatePage;
}());

//# sourceMappingURL=contract-search-separate.js.map

/***/ })

});
//# sourceMappingURL=59.js.map