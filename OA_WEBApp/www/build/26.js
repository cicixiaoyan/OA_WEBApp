webpackJsonp([26],{

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffFileMaintenanceEducationAddPageModule", function() { return StaffFileMaintenanceEducationAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_education_add__ = __webpack_require__(833);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StaffFileMaintenanceEducationAddPageModule = /** @class */ (function () {
    function StaffFileMaintenanceEducationAddPageModule() {
    }
    StaffFileMaintenanceEducationAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_education_add__["a" /* StaffFileMaintenanceEducationAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_education_add__["a" /* StaffFileMaintenanceEducationAddPage */]),
            ],
        })
    ], StaffFileMaintenanceEducationAddPageModule);
    return StaffFileMaintenanceEducationAddPageModule;
}());

//# sourceMappingURL=staff-file-maintenance-education-add.module.js.map

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


var Validators = /** @class */ (function (_super) {
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

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffFileMaintenanceEducationAddPage; });
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




// import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Observable';
// import { HttpService } from "../../../providers/HttpService";
var StaffFileMaintenanceEducationAddPage = /** @class */ (function () {
    function StaffFileMaintenanceEducationAddPage(navCtrl, navParams, 
        // private httpService: HttpService,
        formBuilder, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.viewCtrl = viewCtrl;
        this.readOnly = false;
        this.readOnly = this.navParams.get("readOnly") ? true : false;
        this.addForm = this.formBuilder.group({
            StartDate: ['', [__WEBPACK_IMPORTED_MODULE_3__providers_Validators__["a" /* Validators */].required]],
            EndDate: ['', [__WEBPACK_IMPORTED_MODULE_3__providers_Validators__["a" /* Validators */].required]],
            School: ['', [__WEBPACK_IMPORTED_MODULE_3__providers_Validators__["a" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__providers_Validators__["a" /* Validators */].maxLength(30)]],
            Major: ['', [__WEBPACK_IMPORTED_MODULE_3__providers_Validators__["a" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__providers_Validators__["a" /* Validators */].maxLength(30)]],
            Remarks: ["", [__WEBPACK_IMPORTED_MODULE_3__providers_Validators__["a" /* Validators */].maxLength(100)]],
        });
        this.formCtrls = this.addForm.controls;
    }
    StaffFileMaintenanceEducationAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StaffFileMaintenanceWorkExperienceAddPage');
    };
    StaffFileMaintenanceEducationAddPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    StaffFileMaintenanceEducationAddPage.prototype.save = function (value) {
        // 提交
        // this.httpService.postFormData("", value)
        // .map((res: Response) => res.json())
        // .subscribe((resJson) => {
        // });
    };
    StaffFileMaintenanceEducationAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-staff-file-maintenance-education-add',template:/*ion-inline-start:"/Users/lieon/Desktop/OA_WEBApp/OA_WEBApp/src/pages/hr-management/staff-file-maintenance/staff-file-maintenance-education/staff-file-maintenance-education-add/staff-file-maintenance-education-add.html"*/'<ion-header>\n\n      <ion-navbar>\n          <ion-buttons start>\n              <button ion-button  (click)="dismiss()">返回</button>\n          </ion-buttons>\n        <ion-title>教育经历</ion-title>\n        <ion-buttons end>\n            <button ion-button [disabled]=\'addForm.invalid\'  (click)="save(addForm.value)">保存</button>\n        </ion-buttons>\n      </ion-navbar>\n\n    </ion-header>\n\n\n    <ion-content>\n        <form [formGroup]="addForm" (ngSubmit)="save(addForm.value)" [ngClass]="{\'form-readonly\': readOnly}">\n            <ion-list style="position:relative;">\n                <ion-item>\n                    <ion-label>开始时间</ion-label>\n                    <ion-datetime formControlName="StartDate" placeholder="点击设置" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                </ion-item>\n                <div class="validation-failed" *ngIf="formCtrls.StartDate.invalid && formCtrls.StartDate.touched">\n                  开始时间必填\n                </div>\n                <ion-item>\n                    <ion-label>结束时间</ion-label>\n                    <ion-datetime formControlName="EndDate" placeholder="点击设置" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                </ion-item>\n                <div class="validation-failed" *ngIf="formCtrls.EndDate.invalid && formCtrls.EndDate.touched">\n                    结束时间必填\n                </div>\n                <ion-item>\n                    <ion-label>学校/教育机构</ion-label>\n                    <ion-input text-right type="text" formControlName="School" placeholder="输入学校名称"></ion-input>\n                </ion-item>\n                <div class="validation-failed" *ngIf="formCtrls.School.invalid && (formCtrls.School.touched || formCtrls.School.dirty )">\n                  <div *ngIf="addForm.get(\'School\').errors.required">学校必填</div>\n                  <div *ngIf="addForm.get(\'School\').errors.maxlength">最多输入30个字</div>\n                </div>\n                <ion-item>\n                    <ion-label>专业</ion-label>\n                    <ion-input text-right type="text" formControlName="Major" placeholder="输入专业名称"></ion-input>\n                </ion-item>\n                <div class="validation-failed" *ngIf="formCtrls.Major.invalid && (formCtrls.Major.touched || formCtrls.Major.dirty )">\n                  <div *ngIf="addForm.get(\'Major\').errors.required">专业必填</div>\n                  <div *ngIf="addForm.get(\'Major\').errors.maxlength">最多输入30个字</div>\n                </div>\n                <ion-item>\n                    <ion-label>备注<span class="optional">（选填）</span></ion-label>\n                    <ion-textarea text-right formControlName="Remarks" placeholder="请输入备注"></ion-textarea>\n                </ion-item>\n                <div class="validation-failed" *ngIf="formCtrls.Remarks.invalid && (formCtrls.Remarks.touched || formCtrls.Remarks.dirty )">\n                  最多输入100个字\n                </div>\n            </ion-list>\n        </form>\n    </ion-content>\n'/*ion-inline-end:"/Users/lieon/Desktop/OA_WEBApp/OA_WEBApp/src/pages/hr-management/staff-file-maintenance/staff-file-maintenance-education/staff-file-maintenance-education-add/staff-file-maintenance-education-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */]])
    ], StaffFileMaintenanceEducationAddPage);
    return StaffFileMaintenanceEducationAddPage;
}());

//# sourceMappingURL=staff-file-maintenance-education-add.js.map

/***/ })

});
//# sourceMappingURL=26.js.map