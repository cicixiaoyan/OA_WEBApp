webpackJsonp([30],{

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractSettingPageModule", function() { return ContractSettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contract_setting__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contract_service__ = __webpack_require__(777);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContractSettingPageModule = /** @class */ (function () {
    function ContractSettingPageModule() {
    }
    ContractSettingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contract_setting__["a" /* ContractSettingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contract_setting__["a" /* ContractSettingPage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__contract_service__["a" /* ContractService */]],
        })
    ], ContractSettingPageModule);
    return ContractSettingPageModule;
}());

//# sourceMappingURL=contract-setting.module.js.map

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

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractSettingPage; });
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




var ContractSettingPage = /** @class */ (function () {
    function ContractSettingPage(navCtrl, navParams, popoverCtrl, FormBuilder, contractService) {
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
        this.ContactContent = '';
        this.readOnly = this.navParams.get("readOnly") ? true : false;
        this.Id = this.navParams.get("Id") || '';
        this.baseForm = this.FormBuilder.group({
            "StaffNumber": ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(20), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            "Name": ['', []],
            "Sex": ['', []],
            "IDC": ['', []],
            "Dept": ['', []],
            "Duty": ['', []],
            "ContractNumber": ['', []],
            "ContractName": ['', []],
            "ContractType": ['', []],
            "HavePeriod": ['有', []],
            "IsPositive": ['已转正', []],
            "SigningDate": ['', []],
            "ContractYear": ['', []],
            "ContractStatus": ['', []],
            "TrialPeriod": ['', []],
            "TrialBasicSalary": ['', []],
            "TrialEffectiveDate": ['', []],
            "TrialExpirationDate": ['', []],
            "Remarks": ['', []] // 备注
        });
    }
    ContractSettingPage.prototype.ionViewDidLoad = function () {
        if (!this.navParams.get('Id')) {
        }
    };
    ContractSettingPage.prototype.shrink = function (parma) {
        if (parma === 'one')
            this.hideOne = !this.hideOne;
        if (parma === 'two')
            this.hideTwo = !this.hideTwo;
        if (parma === 'three')
            this.hideThree = !this.hideThree;
        if (parma === 'four')
            this.hideFour = !this.hideFour;
    };
    ContractSettingPage.prototype.submit = function (value) {
        console.log(value);
    };
    ContractSettingPage.prototype.checkPeople = function (myEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create("StaffPopoverPage", { 'Uid': this.Uid }, { cssClass: 'popoverW88' });
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(function (data) {
            if (!!data) {
                console.log(data);
                // {addressee:this.addressee,addresseeIds:this.addresseeIds}
                _this.Uid = data.Uid;
                _this.DeptId = data.DeptId;
                _this.baseForm.patchValue({
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
    ContractSettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contract-setting',template:/*ion-inline-start:"/Users/lieon/Desktop/OA_WEBApp/OA_WEBApp/src/pages/hr-management/contract/contract-setting/contract-setting.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>合同详情</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content style="background: #f4f4f4;">\n\n    <form [formGroup]="baseForm" (ngSubmit)="submit(baseForm.value)"  [ngClass]="{\'form-readonly\': readOnly}">\n        <ion-list  [ngClass]="{\'collapsed\': hideOne, \'expanded\': !hideOne}">\n            <ion-list-header (click)="shrink(\'one\')">员工信息<ion-icon  float-right name="arrow-forward"></ion-icon></ion-list-header>\n            <div>\n                <ion-item #popoverContent  (click)="checkPeople($event)">\n                    <ion-label>工号</ion-label>\n                    <ion-note item-end>{{baseForm.value.StaffNumber || \'点击选择员工\'}}</ion-note>\n                    <!-- <ion-input styel=\'display:none\' text-right readonly=\'true\' formControlName="StaffNumber" ></ion-input> -->\n                </ion-item>\n\n                <div class="" *ngIf=\'baseForm.value.StaffNumber != ""\'>\n\n                    <ion-item>\n                        <ion-label>姓名</ion-label>\n                        <ion-input text-right formControlName="Name" readonly="true"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>性别</ion-label>\n                        <ion-input text-right formControlName="Sex" readonly="true"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>身份证号</ion-label>\n                        <ion-input text-right formControlName="IDC" readonly="true"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>所在部门</ion-label>\n                        <ion-input text-right formControlName="Dept" readonly="true"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>职务</ion-label>\n                        <ion-input text-right formControlName="Duty" readonly="true"></ion-input>\n                    </ion-item>\n                </div>\n            </div>\n        </ion-list>\n\n        <ion-list  [ngClass]="{\'collapsed\': hideTwo, \'expanded\': !hideTwo}">\n            <ion-list-header (click)="shrink(\'two\')">合同信息<ion-icon float-right name="arrow-forward"></ion-icon></ion-list-header>\n            <div>\n              <ion-item>\n                  <ion-label>合同编号</ion-label>\n                  <ion-input text-right formControlName="ContractNumber" placeholder="请输入合同编号"></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label>合同名称<span class="optional">（选填）</span></ion-label>\n                  <ion-input text-right formControlName="ContractName" placeholder="请输入合同名称"></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label>合同类型</ion-label>\n                  <ion-select formControlName="ContractType" cancelText="取消" okText="确定" placeholder="请选择">\n                      <ion-option value="1">类型1</ion-option>\n                      <ion-option value="2">类型2</ion-option>\n                      <ion-option value="3">类型3</ion-option>\n                  </ion-select>\n              </ion-item>\n              <ion-item>\n                  <ion-label>有无期限</ion-label>\n                  <ion-select formControlName="HavePeriod" cancelText="取消" okText="确定" placeholder="请选择">\n                      <ion-option value="有">有</ion-option>\n                      <ion-option value="无">无</ion-option>\n                  </ion-select>\n              </ion-item>\n              <ion-item>\n                  <ion-label>是否转正</ion-label>\n                  <ion-select formControlName="IsPositive" cancelText="取消" okText="确定" placeholder="请选择">\n                      <ion-option value="已转正">已转正</ion-option>\n                      <ion-option value="未转正">未转正</ion-option>\n                  </ion-select>\n              </ion-item>\n\n              <ion-item>\n                  <ion-label>签约时间</ion-label>\n                  <ion-datetime formControlName="SigningDate" placeholder="点击设置" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n              </ion-item>\n              <ion-item>\n                  <ion-label>合同年份<span class="optional">（选填）</span></ion-label>\n                  <ion-select formControlName="ContractYear" cancelText="取消" okText="确定" placeholder="请选择">\n                      <ion-option value="2013">2013</ion-option>\n                      <ion-option value="2014">2014</ion-option>\n                  </ion-select>\n              </ion-item>\n              <ion-item>\n                  <ion-label>合同状态</ion-label>\n                  <ion-select formControlName="ContractStatus" cancelText="取消" okText="确定" placeholder="请选择">\n                      <ion-option value="试用中">试用中</ion-option>\n                      <ion-option value="试用到期">试用到期</ion-option>\n                      <ion-option value="生效中">生效中</ion-option>\n                      <ion-option value="已到期">已到期</ion-option>\n                      <ion-option value="已解除">已解除</ion-option>\n                  </ion-select>\n              </ion-item>\n            </div>\n        </ion-list>\n\n        <ion-list [ngClass]="{\'collapsed\': hideThree, \'expanded\': !hideThree}">\n            <ion-list-header (click)="shrink(\'three\')">试用期信息<ion-icon float-right name="arrow-forward"></ion-icon></ion-list-header>\n            <div >\n                <ion-item>\n                    <ion-label>试用期限<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right formControlName="TrialPeriod" placeholder="请输入试用期限"></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label>试用基本工资<span class="optional">（选填）</span></ion-label>\n                  <ion-input text-right formControlName="TrialBasicSalary" placeholder="请输入试用期限"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>试用生效日期</ion-label>\n                    <ion-datetime formControlName="TrialEffectiveDate" placeholder="点击添加" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                </ion-item>\n                <ion-item>\n                    <ion-label>试用到期日期</ion-label>\n                    <ion-datetime formControlName="TrialExpirationDate" placeholder="点击添加" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                </ion-item>\n            </div>\n        </ion-list>\n\n        <ion-list  [ngClass]="{\'collapsed\': hideFour, \'expanded\': !hideFour}">\n            <ion-list-header (click)="shrink(\'four\')">{{Id !=\'\' ?\'合同内容及\':\'\'}}附件<ion-icon float-right name="arrow-forward"></ion-icon></ion-list-header>\n            <div>\n                <div *ngIf="Id !=\'\'">\n                  <div *ngIf="ContactContent != \'\';else elseBlock">\n                    <iframe   [srcdoc]=\'ContactContent\' id="iframe" class="iframe" onload="this.height=\'100%\'" style="width:100%;overflow-x:auto" sandbox="allow-scripts allow-top-navigation allow-pointer-lock allow-same-origin allow-popups allow-forms">\n                    </iframe>\n                  </div>\n                  <ng-template #elseBlock><div style=\'background: #fff;color: red;padding: 1em;}\'>合同内容未添加</div></ng-template>\n                </div>\n\n                <ion-item>\n                    <h2>毕业证.jpg</h2>\n                    <button ion-button clear item-end *ngIf="!readOnly">删除</button>\n                    <button ion-button clear item-end>下载</button>\n                </ion-item>\n                <ion-item text-center *ngIf="!readOnly">\n                    <button icon-left ion-button color="secondary" small outline round><ion-icon name="home"></ion-icon>添加附件</button>\n                </ion-item>\n            </div>\n        </ion-list>\n        <ion-list>\n          <ion-item>\n              <ion-label stacked text-left>备注<span class="optional">（选填）</span></ion-label>\n              <ion-textarea  formControlName="Remarks" placeholder="输入备注信息"></ion-textarea>\n          </ion-item>\n        </ion-list>\n        <div class=\'text-ios-danger\' *ngIf="!readOnly">&emsp;注：合同内容请到PC端进行添加或修改</div>\n    </form>\n\n</ion-content>\n<ion-footer *ngIf="!readOnly">\n    <button ion-button full color="danger" [disabled]="!baseForm.valid" (click)=submit(baseForm.value)>保存</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/lieon/Desktop/OA_WEBApp/OA_WEBApp/src/pages/hr-management/contract/contract-setting/contract-setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__contract_service__["a" /* ContractService */]])
    ], ContractSettingPage);
    return ContractSettingPage;
}());

//# sourceMappingURL=contract-setting.js.map

/***/ })

});
//# sourceMappingURL=30.js.map