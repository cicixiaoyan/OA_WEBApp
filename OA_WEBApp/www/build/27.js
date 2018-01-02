webpackJsonp([27],{

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffFileMaintenanceBasicImfornationPageModule", function() { return StaffFileMaintenanceBasicImfornationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_basic_imfornation__ = __webpack_require__(832);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StaffFileMaintenanceBasicImfornationPageModule = (function () {
    function StaffFileMaintenanceBasicImfornationPageModule() {
    }
    StaffFileMaintenanceBasicImfornationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_basic_imfornation__["a" /* StaffFileMaintenanceBasicImfornation */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_basic_imfornation__["a" /* StaffFileMaintenanceBasicImfornation */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_basic_imfornation__["a" /* StaffFileMaintenanceBasicImfornation */]]
        })
    ], StaffFileMaintenanceBasicImfornationPageModule);
    return StaffFileMaintenanceBasicImfornationPageModule;
}());

//# sourceMappingURL=staff-file-maintenance-basic-imfornation.module.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Validators; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(26);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Validators = (function (_super) {
    __extends(Validators, _super);
    function Validators() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Validators_1 = Validators;
    /*E-mail*/
    Validators.email = function (control) {
        return Validators_1.validatorsByPattern('email', control, '[a-z]([a-z0-9]*[-_]?[a-z0-9]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+[\.][a-z]{2,3}([\.][a-z]{2})?');
    };
    /*手机号码*/
    Validators.phone = function (control) {
        return Validators_1.validatorsByPattern('phone', control, '1[0-9]{10,10}');
    };
    /*中文*/
    Validators.chinese = function (control) {
        return Validators_1.validatorsByPattern('chinese', control, '[(\u4e00-\u9fa5)]+');
    };
    /*英文、数字包括下划线*/
    Validators.legallyNamed = function (control) {
        return Validators_1.validatorsByPattern('legallyNamed', control, '[A-Za-z0-9_]+');
    };
    Validators.validatorsByPattern = function (name, control, pattern) {
        var validatorFn = Validators_1.pattern(pattern)(control);
        if (validatorFn != null) {
            validatorFn[name] = validatorFn['pattern'];
        }
        return validatorFn;
    };
    /*身份证验证*/
    Validators.idcValid = function (control) {
        var vcity = {
            11: "北京",
            12: "天津",
            13: "河北",
            14: "山西",
            15: "内蒙古",
            21: "辽宁",
            22: "吉林",
            23: "黑龙江",
            31: "上海",
            32: "江苏",
            33: "浙江",
            34: "安徽",
            35: "福建",
            36: "江西",
            37: "山东",
            41: "河南",
            42: "湖北",
            43: "湖南",
            44: "广东",
            45: "广西",
            46: "海南",
            50: "重庆",
            51: "四川",
            52: "贵州",
            53: "云南",
            54: "西藏",
            61: "陕西",
            62: "甘肃",
            63: "青海",
            64: "宁夏",
            65: "新疆",
            71: "台湾",
            81: "香港",
            82: "澳门",
            91: "国外"
        };
        /* 检查号码是否符合规范，包括长度，类型 */
        var isCardNo = function (card) {
            // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
            var reg = /(^\d{15}$)|(^\d{17}(\d|X)$)/;
            if (reg.test(card) === false) {
                return false;
            }
            return true;
        };
        /* 取身份证前两位,校验省份  */
        var checkProvince = function (card) {
            var province = card.substr(0, 2);
            if (vcity[province] == undefined) {
                return false;
            }
            return true;
        };
        /* 检查生日是否正确  */
        var checkBirthday = function (card) {
            var len = card.length;
            // 身份证15位时，次序为省（3位）市（3位）年（2位）月（2位）日（2位）校验位（3位），皆为数字
            if (len == '15') {
                var re_fifteen = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/;
                var arr_data = card.match(re_fifteen);
                var year = arr_data[2];
                var month = arr_data[3];
                var day = arr_data[4];
                var birthday = new Date('19' + year + '/' + month + '/' + day);
                return verifyBirthday('19' + year, month, day, birthday);
            }
            // 身份证18位时，次序为省（3位）市（3位）年（4位）月（2位）日（2位）校验位（4位），校验位末尾可能为X
            if (len == '18') {
                var re_eighteen = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
                var arr_data = card.match(re_eighteen);
                var year = arr_data[2];
                var month = arr_data[3];
                var day = arr_data[4];
                var birthday = new Date(year + '/' + month + '/' + day);
                return verifyBirthday(year, month, day, birthday);
            }
            return false;
        };
        /* 校验日期 */
        var verifyBirthday = function (year, month, day, birthday) {
            var now = new Date();
            var now_year = now.getFullYear();
            // 年月日是否合理
            if (birthday.getFullYear() == year && (birthday.getMonth() + 1) == month && birthday.getDate() == day) {
                // 判断年份的范围（3岁到100岁之间)
                var time = now_year - year;
                if (time >= 3 && time <= 100) {
                    return true;
                }
                return false;
            }
            return false;
        };
        /* 校验位的检测  */
        var checkParity = function (card) {
            // 15位转18位
            card = changeFivteenToEighteen(card);
            var len = card.length;
            if (len == '18') {
                var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
                var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
                var cardTemp = 0, i = void 0, valnum = void 0;
                for (i = 0; i < 17; i++) {
                    cardTemp += card.substr(i, 1) * arrInt[i];
                }
                valnum = arrCh[cardTemp % 11];
                if (valnum == card.substr(17, 1)) {
                    return true;
                }
                return false;
            }
            return false;
        };
        /* 15位转18位身份证号  */
        var changeFivteenToEighteen = function (card) {
            if (card.length == '15') {
                var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
                var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
                var cardTemp = 0, i = void 0;
                card = card.substr(0, 6) + '19' + card.substr(6, card.length - 6);
                for (i = 0; i < 17; i++) {
                    cardTemp += card.substr(i, 1) * arrInt[i];
                }
                card += arrCh[cardTemp % 11];
                return card;
            }
            return card;
        };
        var card = control.value; // 表单值
        if (card === '' || !isCardNo(card) || !checkProvince(card) ||
            !checkBirthday(card) || !checkParity(card)) {
            return { "idcinvalid": true };
            // return control.setErrors({ idcinvalid: true, message: '请输入合法的身份证号码' });
        }
        return null;
    };
    Validators = Validators_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], Validators);
    return Validators;
    var Validators_1;
}(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */]));

//# sourceMappingURL=Validators.js.map

/***/ }),

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffFileMaintenanceBasicImfornation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_Validators__ = __webpack_require__(788);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StaffFileMaintenanceBasicImfornation = (function () {
    function StaffFileMaintenanceBasicImfornation(navCtrl, navParams, FormBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.FormBuilder = FormBuilder;
        this.hideOne = true;
        this.hideTwo = true;
        this.hideThree = true;
        this.hideFour = true;
        this.readOnly = false;
        this.readOnly = this.navParams.get("readOnly") ? true : false;
        this.baseForm = this.FormBuilder.group({
            StaffNumber: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(20)]],
            Name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10)]],
            Sex: ['男', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            BirthDate: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            NativePlace: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(12)]],
            Ethnic: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            JoinPartyTime: ['', []],
            PoliticalStatus: ['', []],
            IDC: ['', [__WEBPACK_IMPORTED_MODULE_3__providers_Validators__["a" /* Validators */].idcValid]],
            StaffStatus: ['在职', []],
            FirstEdu: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            GraduationDate: ['', []],
            GraduatedSchool: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30)]],
            profession: ['', []],
            SecondEdu: ['', []],
            SecondGraduatedSchool: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30)]],
            Degree: ['', []],
            AccountLocation: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(40)]],
            FamilyAddress: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(40)]],
            Telephone: ['', [__WEBPACK_IMPORTED_MODULE_3__providers_Validators__["a" /* Validators */].phone]],
            Mobile: ['', [__WEBPACK_IMPORTED_MODULE_3__providers_Validators__["a" /* Validators */].phone]],
            Email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email]],
            CertificateObtained: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(180)]],
            DeptId: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            Duty: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            JobTitle: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30)]],
            ProfessionalQualification: ['', []],
            StaffFileNumber: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30)]],
            Workday: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            Indate: ['', []],
            EmployeeNature: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            MedicareNumber: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(16)]],
            PensionBookNumber: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(20)]],
            ProvidentFundAccount: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(20)]],
            Remarks: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(180)]] // 备注
        });
        this.formCtrls = this.baseForm.controls;
    }
    StaffFileMaintenanceBasicImfornation.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StaffFileMaintenanceBasicImfornationPage');
    };
    StaffFileMaintenanceBasicImfornation.prototype.shrink = function (parma) {
        if (parma === 'one')
            this.hideOne = !this.hideOne;
        if (parma === 'two')
            this.hideTwo = !this.hideTwo;
        if (parma === 'three')
            this.hideThree = !this.hideThree;
        if (parma === 'four')
            this.hideFour = !this.hideFour;
    };
    StaffFileMaintenanceBasicImfornation.prototype.sent = function (value) {
        console.log(value);
    };
    StaffFileMaintenanceBasicImfornation = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-staff-file-maintenance-basic-imfornation',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\staff-file-maintenance\staff-file-maintenance-basic-imfornation\staff-file-maintenance-basic-imfornation.html"*/`<ion-header>\n\n    <ion-navbar>\n        <ion-title>基本资料</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background: #f4f4f4;">\n\n    <form [formGroup]="baseForm" (ngSubmit)="sent(baseForm.value)"  [ngClass]="{\'form-readonly\': readOnly}">\n        <div padding text-center class="light-bg">\n          <img class="photo"  src="./assets/img/logo.png" alt="" round>\n          <div>\n             <button ion-button color="energized" small outline>修改</button>\n             <button ion-button color="danger" small outline>删除</button>\n          </div>\n        </div>\n        <ion-list  [ngClass]="{\'collapsed\': hideOne, \'expanded\': !hideOne}">\n            <ion-list-header (click)="shrink(\'one\')">基本信息<ion-icon  float-right name="arrow-forward"></ion-icon></ion-list-header>\n            <div>\n                <ion-item>\n                    <ion-label>工号</ion-label>\n                    <ion-input text-right formControlName="StaffNumber" placeholder="请输入工号"></ion-input>\n                </ion-item>\n                <div class="validation-failed" *ngIf="formCtrls.StaffNumber.invalid && (formCtrls.StaffNumber.touched || formCtrls.StaffNumber.dirty )">\n                  <div *ngIf="baseForm.get(\'StaffNumber\').errors.required">员工工号必填</div>\n                  <div *ngIf="baseForm.get(\'StaffNumber\').errors.maxlength">最多输入20个字</div>\n                </div>\n                <ion-item>\n                    <ion-label>姓名</ion-label>\n                    <ion-input text-right formControlName="Name" placeholder="请输入姓名"></ion-input>\n                </ion-item>\n                <div class="validation-failed" *ngIf="formCtrls.Name.invalid && (formCtrls.Name.touched || formCtrls.Name.dirty )">\n                  <div *ngIf="baseForm.get(\'Name\').errors.required">姓名必填</div>\n                  <div *ngIf="baseForm.get(\'Name\').errors.maxlength">最多输入10个字</div>\n                </div>\n                <ion-item>\n                    <ion-label>性别</ion-label>\n                    <ion-select formControlName="Sex" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option value="男">男</ion-option>\n                        <ion-option value="女">女</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label>出生日期</ion-label>\n                    <ion-datetime formControlName="BirthDate" placeholder="点击设置" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                </ion-item>\n                <div class="validation-failed" *ngIf="formCtrls.BirthDate.invalid && formCtrls.BirthDate.touched">出生日期必选</div>\n                <ion-item>\n                    <ion-label>籍贯<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right formControlName="NativePlace" placeholder="输入籍贯"></ion-input>\n                </ion-item>\n                <div class="validation-failed" *ngIf="formCtrls.NativePlace.invalid && (formCtrls.NativePlace.touched || formCtrls.NativePlace.dirty )">\n                  最多可输入12个字\n                </div>\n                <ion-item>\n                    <ion-label>民族</ion-label>\n                    <ion-select formControlName="Ethnic" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option value="汉族">汉族</ion-option>\n                        <ion-option value="傣族">傣族</ion-option>\n                        <ion-option value="土家">土家</ion-option>\n                        <ion-option value="苗族">苗族</ion-option>\n                        <ion-option value="其他">其他</ion-option>\n                    </ion-select>\n                </ion-item>\n                <div class="validation-failed" *ngIf="formCtrls.Ethnic.invalid && formCtrls.Ethnic.touched">民族必选</div>\n                <ion-item>\n                    <ion-label>入党时间<span class="optional">（选填）</span></ion-label>\n                    <ion-datetime formControlName="JoinPartyTime" placeholder="点击设置" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                </ion-item>\n                <ion-item>\n                    <ion-label>政治面貌<span class="optional">（选填）</span></ion-label>\n                    <ion-select formControlName="PoliticalStatus" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option value="党员">党员</ion-option>\n                        <ion-option value="中共党员">中共党员</ion-option>\n                        <ion-option value="农工党员">农工党员</ion-option>\n                        <ion-option value="致工党员">致工党员</ion-option>\n                        <ion-option value="团员">团员</ion-option>\n                        <ion-option value="预备党员">预备党员</ion-option>\n                        <ion-option value="民主党派">民主党派</ion-option>\n                        <ion-option value="群众">群众</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label>身份证号<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right formControlName="IDC" placeholder="输入身份证号"></ion-input>\n                </ion-item>\n                <div class="validation-failed" *ngIf="baseForm.controls.IDC.invalid && (baseForm.controls.IDC.touched || baseForm.controls.IDC.dirty )">\n                  请输入合法的身份证号\n                </div>\n                <ion-item>\n                    <ion-label>员工状态<span class="optional">（选填）</span></ion-label>\n                    <ion-select formControlName="StaffStatus" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option value="在职">在职</ion-option>\n                        <ion-option value="离职">离职</ion-option>\n                    </ion-select>\n                </ion-item>\n            </div>\n        </ion-list>\n\n        <ion-list  [ngClass]="{\'collapsed\': hideTwo, \'expanded\': !hideTwo}">\n            <ion-list-header (click)="shrink(\'two\')">个人情况<ion-icon float-right name="arrow-forward"></ion-icon></ion-list-header>\n            <div>\n                <ion-item>\n                    <ion-label>第一学历</ion-label>\n                    <ion-select formControlName="FirstEdu" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option value="小学">小学</ion-option>\n                        <ion-option value="初中">初中</ion-option>\n                        <ion-option value="高中">高中</ion-option>\n                        <ion-option value="中专">中专</ion-option>\n                        <ion-option value="大专">大专</ion-option>\n                        <ion-option value="本科">本科</ion-option>\n                        <ion-option value="硕士研究生">硕士研究生</ion-option>\n                        <ion-option value="博士研究生">博士研究生</ion-option>\n                    </ion-select>\n                </ion-item>\n                <div class="validation-failed" *ngIf="formCtrls.FirstEdu.invalid && formCtrls.Name.touched">第一学历必填</div>\n                <ion-item>\n                    <ion-label>毕业日期<span class="optional">（选填）</span></ion-label>\n                    <ion-datetime formControlName="GraduationDate" placeholder="点击设置" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                </ion-item>\n                <ion-item>\n                    <ion-label>毕业学校<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right formControlName="GraduatedSchool" placeholder="输入毕业学校"></ion-input>\n                </ion-item>\n                <div class="validation-failed" *ngIf="formCtrls.GraduatedSchool.invalid && (formCtrls.GraduatedSchool.touched || formCtrls.GraduatedSchool.dirty )">最多可输入30个字</div>\n                <ion-item>\n                    <ion-label>专业<span class="optional">（选填）</span></ion-label>\n                    <ion-select formControlName="profession" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option value="专业1">专业1</ion-option>\n                        <ion-option value="专业2">专业2</ion-option>\n                        <ion-option value="专业3">专业3</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label>第二学历<span class="optional">（选填）</span></ion-label>\n                    <ion-select formControlName="SecondEdu" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option value="小学">小学</ion-option>\n                        <ion-option value="初中">初中</ion-option>\n                        <ion-option value="高中">高中</ion-option>\n                        <ion-option value="中专">中专</ion-option>\n                        <ion-option value="大专">大专</ion-option>\n                        <ion-option value="本科">本科</ion-option>\n                        <ion-option value="硕士研究生">硕士研究生</ion-option>\n                        <ion-option value="博士研究生">博士研究生</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label>毕业学校<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right formControlName="SecondGraduatedSchool" placeholder="输入第二学历毕业学校"></ion-input>\n                </ion-item>\n                <div class="validation-failed" *ngIf="formCtrls.SecondGraduatedSchool.invalid && (formCtrls.SecondGraduatedSchool.touched || formCtrls.SecondGraduatedSchool.dirty )">最多可输入30个字</div>\n                <ion-item>\n                    <ion-label>学位<span class="optional">（选填）</span></ion-label>\n                    <ion-select formControlName="Degree" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option value="学士">学士</ion-option>\n                        <ion-option value="硕士">硕士</ion-option>\n                        <ion-option value="博士">博士</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label>户口所在地<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right formControlName="AccountLocation" placeholder="输入户口所在地"></ion-input>\n                </ion-item>\n                <div class="validation-failed" *ngIf="formCtrls.AccountLocation.invalid && (formCtrls.AccountLocation.touched || formCtrls.AccountLocation.dirty )">\n                  最多输入40个字\n                </div>\n                <ion-item>\n                    <ion-label>家庭地址<span class="optional">（选填）</span></ion-label>\n                    <ion-textarea rows="2" text-right formControlName="FamilyAddress" placeholder="输入家庭地址"></ion-textarea>\n                </ion-item>\n                <div class="validation-failed" *ngIf="formCtrls.FamilyAddress.invalid && (formCtrls.FamilyAddress.touched || formCtrls.FamilyAddress.dirty )">\n                  最多输入40个字\n                </div>\n                <ion-item>\n                    <ion-label>联系电话<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right formControlName="Telephone" placeholder="输入联系电话"></ion-input>\n                </ion-item>\n                <div class="validation-failed" *ngIf="formCtrls.Telephone.invalid && (formCtrls.Telephone.touched || formCtrls.Telephone.dirty )">\n                  请输入合法的电话号码\n                </div>\n                <ion-item>\n                    <ion-label>手机<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right formControlName="Mobile" placeholder="输入手机号码"></ion-input>\n                </ion-item>\n                <div class="validation-failed" *ngIf="formCtrls.Mobile.invalid && (formCtrls.Mobile.touched || formCtrls.Mobile.dirty )">\n                  请输入合法的手机号\n                </div>\n                <ion-item>\n                    <ion-label>电子邮箱<span class="optional">（选填）</span></ion-label>\n                    <ion-input type="email" text-right formControlName="Email" placeholder="输入邮箱"></ion-input>\n                </ion-item>\n                <div class="validation-failed" *ngIf="baseForm.controls.Email.invalid && (baseForm.controls.Email.touched || baseForm.controls.Email.dirty )">\n                  请输入合法的邮件\n                </div>\n                <ion-item>\n                    <ion-label>所获证书<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right formControlName="CertificateObtained" placeholder="输入所获证书"></ion-input>\n                </ion-item>\n                <div class="validation-failed" *ngIf="formCtrls.CertificateObtained.invalid && (formCtrls.CertificateObtained.touched || formCtrls.CertificateObtained.dirty )">\n                  最多输入180个字\n                </div>\n            </div>\n        </ion-list>\n\n        <ion-list [ngClass]="{\'collapsed\': hideThree, \'expanded\': !hideThree}">\n            <ion-list-header (click)="shrink(\'three\')">单位信息<ion-icon float-right name="arrow-forward"></ion-icon></ion-list-header>\n            <div >\n                <ion-item>\n                    <ion-label>所属部门</ion-label>\n                    <ion-select formControlName="DeptId" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option value="1">青白江疾病预防控制中心</ion-option>\n                        <ion-option value="2">部门2</ion-option>\n                        <ion-option value="3">部门3</ion-option>\n                    </ion-select>\n                </ion-item>\n                <div class="validation-failed" *ngIf="formCtrls.DeptId.invalid && (formCtrls.DeptId.touched || formCtrls.DeptId.dirty )">\n                  部门必选\n                </div>\n                <ion-item>\n                    <ion-label>职务</ion-label>\n                    <ion-select formControlName="Duty" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option value="1">职务1</ion-option>\n                        <ion-option value="2">职务2</ion-option>\n                        <ion-option value="3">职务3</ion-option>\n                    </ion-select>\n                </ion-item>\n                <div class="validation-failed" *ngIf="formCtrls.Duty.invalid && (formCtrls.Duty.touched || formCtrls.Duty.dirty )">\n                  职务必选\n                </div>\n                <ion-item>\n                    <ion-label>职称<span class="optional">（选填）</span></ion-label>\n                    <ion-select formControlName="JobTitle" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option value="1">职务1</ion-option>\n                        <ion-option value="2">职务2</ion-option>\n                        <ion-option value="3">职务3</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label>职业资格<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right formControlName="ProfessionalQualification" placeholder="输入职业资格"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>员工档案号<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right formControlName="StaffFileNumber" placeholder="输入员工档案号"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>参加工作日</ion-label>\n                    <ion-datetime formControlName="Workday" placeholder="点击添加" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                </ion-item>\n                <div class="validation-failed" *ngIf="formCtrls.Workday.invalid && formCtrls.Workday.touched">\n                  参加工作时间必填\n                </div>\n                <ion-item>\n                    <ion-label>入职日期<span class="optional">（选填）</span></ion-label>\n                    <ion-datetime formControlName="Indate" placeholder="点击添加" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                </ion-item>\n                <div class="validation-failed" *ngIf="formCtrls.Indate.invalid && formCtrls.Indate.touched">\n                  入职时间必填\n                </div>\n                <ion-item>\n                    <ion-label>员工性质</ion-label>\n                    <ion-select formControlName="EmployeeNature" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option value="在编">在编</ion-option>\n                        <ion-option value="非在编">非在编</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label>医疗保险号<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right formControlName="MedicareNumber" placeholder="输入医疗保险号"></ion-input>\n                </ion-item>\n                <div class="validation-failed" *ngIf="formCtrls.MedicareNumber.invalid && (formCtrls.MedicareNumber.touched || formCtrls.MedicareNumber.dirty )">\n                  最多可输入16位\n                </div>\n                <ion-item>\n                    <ion-label>养老手册号<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right formControlName="PensionBookNumber" placeholder="输入养老手册号"></ion-input>\n                </ion-item>\n                <div class="validation-failed" *ngIf="formCtrls.PensionBookNumber.invalid && (formCtrls.PensionBookNumber.touched || formCtrls.PensionBookNumber.dirty )">\n                  最多可输入20位\n                </div>\n                <ion-item>\n                    <ion-label>公积金账号<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right formControlName="ProvidentFundAccount" placeholder="输入公积金账号"></ion-input>\n                </ion-item>\n                <div class="validation-failed" *ngIf="formCtrls.ProvidentFundAccount.invalid && (formCtrls.ProvidentFundAccount.touched || formCtrls.ProvidentFundAccount.dirty )">\n                  最多可输入20位\n                </div>\n                <ion-item>\n                    <ion-label stacked text-left>备注<span class="optional">（选填）</span></ion-label>\n                    <ion-textarea  formControlName="Remarks" placeholder="输入备注信息"></ion-textarea>\n                </ion-item>\n                <div class="validation-failed" *ngIf="formCtrls.Remarks.invalid && (formCtrls.Remarks.touched || formCtrls.Remarks.dirty )">\n                  最多可输入180位\n                </div>\n            </div>\n        </ion-list>\n\n        <ion-list  [ngClass]="{\'collapsed\': hideFour, \'expanded\': !hideFour}">\n            <ion-list-header (click)="shrink(\'four\')">附件上传<ion-icon float-right name="arrow-forward"></ion-icon></ion-list-header>\n            <div>\n                <ion-item>\n                    <h2>毕业证.jpg</h2>\n                    <button ion-button clear item-end>删除</button>\n                </ion-item>\n                <ion-item>\n                    <h2>身份证.jpg</h2>\n                    <button ion-button clear item-end>删除</button>\n                </ion-item>\n                <ion-item text-center>\n                    <button icon-left ion-button color="secondary" small outline round><ion-icon name="home"></ion-icon>添加附件</button>\n                </ion-item>\n            </div>\n        </ion-list>\n\n    </form>\n\n</ion-content>\n<ion-footer>\n    <button ion-button full color="danger" [disabled]="baseForm.invalid" (click)=sent(baseForm.value)>保存</button>\n</ion-footer>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\staff-file-maintenance\staff-file-maintenance-basic-imfornation\staff-file-maintenance-basic-imfornation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], StaffFileMaintenanceBasicImfornation);
    return StaffFileMaintenanceBasicImfornation;
}());

//# sourceMappingURL=staff-file-maintenance-basic-imfornation.js.map

/***/ })

});
//# sourceMappingURL=27.js.map