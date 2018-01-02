webpackJsonp([33],{

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractRenewViewPageModule", function() { return ContractRenewViewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contract_renew_view__ = __webpack_require__(819);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contract_service__ = __webpack_require__(777);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContractRenewViewPageModule = /** @class */ (function () {
    function ContractRenewViewPageModule() {
    }
    ContractRenewViewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contract_renew_view__["a" /* ContractRenewViewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contract_renew_view__["a" /* ContractRenewViewPage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__contract_service__["a" /* ContractService */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__contract_renew_view__["a" /* ContractRenewViewPage */]]
        })
    ], ContractRenewViewPageModule);
    return ContractRenewViewPageModule;
}());

//# sourceMappingURL=contract-renew-view.module.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_HttpService__ = __webpack_require__(63);
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
var ContractService = /** @class */ (function () {
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

/***/ 819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractRenewViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contract_service__ = __webpack_require__(777);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContractRenewViewPage = /** @class */ (function () {
    function ContractRenewViewPage(navCtrl, navParams, popoverCtrl, FormBuilder, contractService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.FormBuilder = FormBuilder;
        this.contractService = contractService;
        this.Id = '';
        this.readOnly = false;
        this.hideOne = false;
        this.hideTwo = true;
        this.hideThree = true;
        this.hideFour = true;
        this.Uid = '';
        this.DeptId = '';
        this.ContactId = '';
        this.ContactContent = '';
        this.readOnly = this.navParams.get("readOnly") ? true : false;
        this.Id = this.navParams.get("Id") || '';
        this.baseForm = this.FormBuilder.group({
            "ContractNumber": ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            "ContractName": ['', []],
            "LastValidDate": [],
            "LastExpirationDate": [],
            "SigningDate": ['', []],
            "StaffNumber": ['', []],
            "Name": ['', []],
            "Sex": ['', []],
            "IDC": ['', []],
            "Dept": ['', []],
            "Duty": ['', []],
            "RenewDate": ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            "RenewType": ['', []],
            "RenewValidDate": ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            "RenewExpirationDate": ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
        });
    }
    ContractRenewViewPage.prototype.ionViewDidLoad = function () {
    };
    ContractRenewViewPage.prototype.shrink = function (parma) {
        if (parma === 'one')
            this.hideOne = !this.hideOne;
        if (parma === 'two')
            this.hideTwo = !this.hideTwo;
        if (parma === 'three')
            this.hideThree = !this.hideThree;
        if (parma === 'four')
            this.hideFour = !this.hideFour;
    };
    ContractRenewViewPage.prototype.submit = function (value) {
        value.Uid = this.Uid;
        value.DeptId = this.DeptId;
        value.ContactId = this.ContactId;
        console.log(value);
    };
    ContractRenewViewPage.prototype.chooseContract = function (myEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create("ContractChoosePage", { 'ContactId': this.ContactId }, { cssClass: 'popoverW88' });
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(function (data) {
            if (!!data) {
                console.log(data);
                _this.Uid = data.StaffId;
                _this.DeptId = data.DeptId;
                _this.ContactId = data.ContactId;
                _this.baseForm.patchValue({
                    "ContractNumber": data.ContractNumber,
                    "ContractName": data.ContractName,
                    "LastValidDate": data.LastValidDate,
                    "LastExpirationDate": data.LastExpirationDate,
                    "SigningDate": data.SigningDate,
                    "StaffNumber": data.StaffNumber,
                    "Name": data.Name,
                    "Sex": data.Sex,
                    "IDC": data.IDC,
                    "Dept": data.Dept,
                    "Duty": data.Duty,
                });
            }
        });
    };
    ContractRenewViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contract-renew-view',template:/*ion-inline-start:"/Users/lieon/Desktop/OA_WEBApp/OA_WEBApp/src/pages/hr-management/contract/contract-renew/contract-renew-view/contract-renew-view.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>合同续签详情</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content style="background: #f4f4f4;">\n\n    <form [formGroup]="baseForm" (ngSubmit)="submit(baseForm.value)"  [ngClass]="{\'form-readonly\': readOnly}">\n        <ion-list  [ngClass]="{\'collapsed\': hideOne, \'expanded\': !hideOne}">\n            <ion-list-header (click)="shrink(\'one\')">合同信息<ion-icon  float-right name="arrow-forward"></ion-icon></ion-list-header>\n            <div>\n              <ion-item  #popoverContent  (click)="chooseContract($event)">\n                  <ion-label>合同编号</ion-label>\n                  <ion-note item-end>{{baseForm.value.ContractNumber || \'点击选择合同\'}}</ion-note>\n                  <!-- <ion-input text-right formControlName="ContractCode" placeholder="请输入合同编号"></ion-input> -->\n              </ion-item>\n              <div *ngIf="ContactId != \'\'">\n                <ion-item>\n                    <ion-label>合同名称</ion-label>\n                    <ion-input text-right formControlName="ContractName" placeholder="未填写"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label>上次生效时间</ion-label>\n                    <ion-datetime formControlName="LastValidDate" placeholder="点击设置" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                </ion-item>\n                <ion-item>\n                    <ion-label>上次到期时间</ion-label>\n                    <ion-datetime formControlName="LastExpirationDate" placeholder="点击设置" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                </ion-item>\n                <ion-item>\n                    <ion-label>签约时间</ion-label>\n                    <ion-datetime formControlName="SigningDate" placeholder="点击设置" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                </ion-item>\n              </div>\n            </div>\n        </ion-list>\n\n        <ion-list *ngIf="ContactId != \'\'"   [ngClass]="{\'collapsed\': hideTwo, \'expanded\': !hideTwo}">\n            <ion-list-header (click)="shrink(\'two\')">员工信息<ion-icon float-right name="arrow-forward"></ion-icon></ion-list-header>\n            <div>\n                <ion-item>\n                    <ion-label>工号</ion-label>\n                    <ion-input  text-right readonly=\'true\' formControlName="StaffNumber" ></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>姓名</ion-label>\n                    <ion-input text-right formControlName="Name" readonly="true"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>性别</ion-label>\n                    <ion-input text-right formControlName="Sex" readonly="true"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>身份证号</ion-label>\n                    <ion-input text-right formControlName="IDC" readonly="true"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>所在部门</ion-label>\n                    <ion-input text-right formControlName="Dept" readonly="true"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>职务</ion-label>\n                    <ion-input text-right formControlName="Duty" readonly="true"></ion-input>\n                </ion-item>\n            </div>\n        </ion-list>\n\n        <ion-list [ngClass]="{\'collapsed\': hideThree, \'expanded\': !hideThree}">\n            <ion-list-header (click)="shrink(\'three\')">合同续签信息<ion-icon float-right name="arrow-forward"></ion-icon></ion-list-header>\n            <div >\n                <ion-item>\n                    <ion-label>续签时间</ion-label>\n                    <ion-datetime formControlName="RenewDate" placeholder="点击添加" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                </ion-item>\n                <ion-item>\n                  <ion-label>续签类别<span class="optional">（选填）</span></ion-label>\n                  <ion-input text-right formControlName="RenewType" placeholder="请输入试用期限"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>续签生效日期</ion-label>\n                    <ion-datetime formControlName="RenewValidDate" placeholder="点击添加" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                </ion-item>\n                <ion-item>\n                    <ion-label>续签到期日期</ion-label>\n                    <ion-datetime formControlName="RenewExpirationDate" placeholder="点击添加" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                </ion-item>\n            </div>\n        </ion-list>\n\n        <ion-list  *ngIf="Id != \'\'"  [ngClass]="{\'collapsed\': hideFour, \'expanded\': !hideFour}">\n          <ion-list-header (click)="shrink(\'four\')">续约内容{{ContactContent == \'\' ? \'(未添加)\' : \'\'}}<ion-icon float-right name="arrow-forward"></ion-icon></ion-list-header>\n          <div *ngIf="ContactContent != \'\'">\n            <iframe [srcdoc]=\'ContactContent\' id="iframe" class="iframe" onload="this.height=\'100%\'" style="width:100%;overflow-x:auto" sandbox="allow-scripts allow-top-navigation allow-pointer-lock allow-same-origin allow-popups allow-forms">\n            </iframe>\n          </div>\n        </ion-list>\n        <div class=\'text-ios-danger\'>&emsp;注：续签内容请到PC端添加或修改</div>\n\n    </form>\n\n</ion-content>\n<ion-footer>\n    <button ion-button full color="danger" [disabled]="!baseForm.valid" (click)=submit(baseForm.value)>保存</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/lieon/Desktop/OA_WEBApp/OA_WEBApp/src/pages/hr-management/contract/contract-renew/contract-renew-view/contract-renew-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__contract_service__["a" /* ContractService */]])
    ], ContractRenewViewPage);
    return ContractRenewViewPage;
}());

//# sourceMappingURL=contract-renew-view.js.map

/***/ })

});
//# sourceMappingURL=33.js.map