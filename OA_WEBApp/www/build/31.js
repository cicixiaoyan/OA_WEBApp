webpackJsonp([31],{

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractSearchPageModule", function() { return ContractSearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contract_search__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contract_service__ = __webpack_require__(777);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContractSearchPageModule = (function () {
    function ContractSearchPageModule() {
    }
    ContractSearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contract_search__["a" /* ContractSearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contract_search__["a" /* ContractSearchPage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__contract_service__["a" /* ContractService */]]
        })
    ], ContractSearchPageModule);
    return ContractSearchPageModule;
}());

//# sourceMappingURL=contract-search.module.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_HttpService__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { UserInfo } from "../../model/UserInfo";
var ContractService = (function () {
    function ContractService(httpService) {
        this.httpService = httpService;
    }
    ContractService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_HttpService__["a" /* HttpService */]])
    ], ContractService);
    return ContractService;
}());

//# sourceMappingURL=contract-service.js.map

/***/ }),

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractSearchPage; });
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




/**
 * Generated class for the ContractSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContractSearchPage = (function () {
    function ContractSearchPage(navCtrl, navParams, viewCtrl, publicService, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.publicService = publicService;
        this.formBuilder = formBuilder;
        this.DeptLs = [];
        this.search = this.navParams.get("search");
        this.searchForm = this.formBuilder.group({
            "DeptId": ["", []],
            "StartDate": ["", []],
            "EndDate": ["", []],
            "ContractYear": ["", []],
            "ContractType": ["", []],
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
    ContractSearchPage.prototype.sent = function (value) {
        this.viewCtrl.dismiss({ "search": value });
    };
    ContractSearchPage.prototype.reset = function () {
        this.searchForm.reset();
        this.searchForm.setValidators(null);
        this.searchForm.updateValueAndValidity();
    };
    ContractSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contract-search',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\contract\contract-search\contract-search.html"*/`<ion-header>\n    <ion-navbar>\n        <ion-title>筛选</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <form [formGroup]="searchForm" (ngSubmit)="sent(searchForm.value)">\n        <ion-list>\n            <ion-item>\n                <ion-label>员工部门</ion-label>\n                <ion-select text-right formControlName="DeptId" cancelText="取消" okText="确定" placeholder="请选择">\n                    <ion-option *ngFor="let Dept of DeptLs;let i = index" [value]="Dept.Id">{{Dept.BmName}}</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>合同年份</ion-label>\n                <ion-select text-right formControlName="ContractYear" cancelText="取消" okText="确定" placeholder="请选择">\n                  <ion-option value="2014">2014</ion-option>\n                  <ion-option value="2015">2015</ion-option>\n                  <ion-option value="2016">2016</ion-option>\n                  <ion-option value="2017">2017</ion-option>\n                </ion-select>\n              </ion-item>\n            <ion-item>\n                <ion-label>合同类型</ion-label>\n                <ion-select formControlName="ContractType" cancelText="取消" okText="确定" placeholder="请选择">\n                    <ion-option value="701">保密协议</ion-option>\n                    <ion-option value="700">劳动合同</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item class="search-dattime">\n                <ion-label>签约时间</ion-label>\n                <ion-datetime formControlName="StartDate" cancelText="取消" [max]="searchForm.value.EndDate==\'\'?null:searchForm.value.EndDate"  placeholder="开始时间" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                <ion-datetime formControlName="EndDate" cancelText="取消" [min]="searchForm.value.StartDate==\'\'?null:searchForm.value.StartDate"  placeholder="结束时间" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n            </ion-item>\n            <!-- <ion-item>\n                <ion-label>签约结束时间</ion-label>\n                <ion-datetime formControlName="EndDate" cancelText="取消"  placeholder="请选择" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n            </ion-item> -->\n\n        </ion-list>\n        <div text-center>\n            <button ion-button color="energized" (click)="reset()" small outline>重置</button>\n            <button ion-button color="assertive" type="submit" small>搜索</button>\n        </div>\n    </form>\n</ion-content>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\contract\contract-search\contract-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_PublicService__["a" /* PublicService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ContractSearchPage);
    return ContractSearchPage;
}());

//# sourceMappingURL=contract-search.js.map

/***/ })

});
//# sourceMappingURL=31.js.map