webpackJsonp([42],{

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffFileMaintenanceBasicImfornationPageModule", function() { return StaffFileMaintenanceBasicImfornationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_file_maintenance_basic_imfornation__ = __webpack_require__(787);
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

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffFileMaintenanceBasicImfornation; });
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



var StaffFileMaintenanceBasicImfornation = (function () {
    function StaffFileMaintenanceBasicImfornation(navCtrl, navParams, FormBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.FormBuilder = FormBuilder;
        this.hideOne = true;
        this.hideTwo = true;
        this.hideThree = true;
        this.hideFour = true;
        this.baseForm = this.FormBuilder.group({
            JobNumber: ['', []],
            Name: ['', []],
            Sex: ['', []],
            BirthDate: ['', []],
            NativePlace: ['', []],
            Ethnic: ['', []],
            JoinPartyTime: ['', []],
            PoliticalStatus: ['', []],
            IDC: ['', []],
            StaffStatus: ['', []],
            FirstEdu: ['', []],
            GraduationDate: ['', []],
            GraduatedSchool: ['', []],
            profession: ['', []],
            SecondEdu: ['', []],
            SecondGraduatedSchool: ['', []],
            Degree: ['', []],
            AccountLocation: ['', []],
            FamilyAddress: ['', []],
            Telephone: ['', []],
            Mobile: ['', []],
            Email: ['', []],
            CertificateObtained: ['', []],
            Dept: ['', []],
            Duty: ['', []],
            JobTitle: ['', []],
            ProfessionalQualification: ['', []],
            StaffFileNumber: ['', []],
            Workday: ['', []],
            Indate: ['', []],
            EmployeeNature: ['', []],
            MedicareNumber: ['', []],
            PensionBookNumber: ['', []],
            ProvidentFundAccount: ['', []],
            Remarks: ['', []]
        });
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
            selector: 'page-staff-file-maintenance-basic-imfornation',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\staff-file-maintenance\staff-file-maintenance-basic-imfornation\staff-file-maintenance-basic-imfornation.html"*/`<!--\n  Generated template for the StaffFileMaintenanceBasicImfornationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>基本资料</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background: #f4f4f4;">\n\n    <form [formGroup]="baseForm" (ngSubmit)="sent(baseForm.value)">\n        <div padding text-center class="light-bg">\n          <img class="photo"  src="./assets/img/logo.png" alt="" round>\n          <div>\n             <button ion-button color="energized" small outline>修改</button>\n             <button ion-button color="danger" small outline>删除</button>\n           \n          </div>\n        </div>\n        <ion-list>\n            <ion-list-header (click)="shrink(\'one\')">基本信息</ion-list-header>\n            <div [ngClass]="{\'hide\': hideOne}">\n                <ion-item>\n                    <ion-label style="align-self:center;">工号</ion-label>\n                    <ion-input text-right formControlName="JobNumber" placeholder="输入工号"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label style="align-self:center;">姓名</ion-label>\n                    <ion-input text-right formControlName="Name" placeholder="输入姓名"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>性别</ion-label>\n                    <ion-select formControlName="Sex" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option value="男">男</ion-option>\n                        <ion-option value="女">女</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label>出生日期</ion-label>\n                    <ion-datetime formControlName="BirthDate" placeholder="点击设置" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                </ion-item>\n                <ion-item>\n                    <ion-label>籍贯<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right formControlName="NativePlace" placeholder="输入籍贯"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>民族</ion-label>\n                    <ion-select formControlName="Ethnic" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option value="汉族">汉族</ion-option>\n                        <ion-option value="傣族">傣族</ion-option>\n                        <ion-option value="土家">土家</ion-option>\n                        <ion-option value="苗族">苗族</ion-option>\n                        <ion-option value="其他">其他</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label>入党时间<span class="optional">（选填）</span></ion-label>\n                    <ion-datetime formControlName="JoinPartyTime" placeholder="点击设置" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                </ion-item>\n                <ion-item>\n                    <ion-label>政治面貌<span class="optional">（选填）</span></ion-label>\n                    <ion-select formControlName="PoliticalStatus" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option value="党员">党员</ion-option>\n                        <ion-option value="中共党员">中共党员</ion-option>\n                        <ion-option value="农工党员">农工党员</ion-option>\n                        <ion-option value="致工党员">致工党员</ion-option>\n                        <ion-option value="团员">团员</ion-option>\n                        <ion-option value="预备党员">预备党员</ion-option>\n                        <ion-option value="民主党派">民主党派</ion-option>\n                        <ion-option value="群众">群众</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label>身份证号<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right formControlName="IDC" placeholder="输入身份证号"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>员工状态<span class="optional">（选填）</span></ion-label>\n                    <ion-select formControlName="StaffStatus" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option value="在职">在职</ion-option>\n                        <ion-option value="离职">离职</ion-option>\n                    </ion-select>\n                </ion-item>\n            </div>\n        </ion-list>\n\n        <ion-list>\n            <ion-list-header (click)="shrink(\'two\')">个人情况</ion-list-header>\n            <div [ngClass]="{\'hide\': hideTwo}">\n                <ion-item>\n                    <ion-label>第一学历</ion-label>\n                    <ion-select formControlName="FirstEdu" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option value="小学">小学</ion-option>\n                        <ion-option value="初中">初中</ion-option>\n                        <ion-option value="高中">高中</ion-option>\n                        <ion-option value="中专">中专</ion-option>\n                        <ion-option value="大专">大专</ion-option>\n                        <ion-option value="本科">本科</ion-option>\n                        <ion-option value="硕士研究生">硕士研究生</ion-option>\n                        <ion-option value="博士研究生">博士研究生</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label>毕业日期<span class="optional">（选填）</span></ion-label>\n                    <ion-datetime formControlName="GraduationDate" placeholder="点击设置" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                </ion-item>\n                <ion-item>\n                    <ion-label>毕业学校<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right formControlName="GraduatedSchool" placeholder="输入毕业学校"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>专业<span class="optional">（选填）</span></ion-label>\n                    <ion-select formControlName="profession" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option value="专业1">专业1</ion-option>\n                        <ion-option value="专业2">专业2</ion-option>\n                        <ion-option value="专业3">专业3</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label>第二学历<span class="optional">（选填）</span></ion-label>\n                    <ion-select formControlName="SecondEdu" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option value="小学">小学</ion-option>\n                        <ion-option value="初中">初中</ion-option>\n                        <ion-option value="高中">高中</ion-option>\n                        <ion-option value="中专">中专</ion-option>\n                        <ion-option value="大专">大专</ion-option>\n                        <ion-option value="本科">本科</ion-option>\n                        <ion-option value="硕士研究生">硕士研究生</ion-option>\n                        <ion-option value="博士研究生">博士研究生</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label>毕业学校<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right formControlName="SecondGraduatedSchool" placeholder="输入第二学历毕业学校"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>学位<span class="optional">（选填）</span></ion-label>\n                    <ion-select formControlName="Degree" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option value="学士">学士</ion-option>\n                        <ion-option value="硕士">硕士</ion-option>\n                        <ion-option value="博士">博士</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label>户口所在地<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right formControlName="AccountLocation" placeholder="输入户口所在地"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>家庭地址<span class="optional">（选填）</span></ion-label>\n                    <ion-textarea rows="2" text-right formControlName="FamilyAddress" placeholder="输入家庭地址"></ion-textarea>\n                </ion-item>\n                <ion-item>\n                    <ion-label>联系电话<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right formControlName="Telephone" placeholder="输入联系电话"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>手机<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right formControlName="Mobile" placeholder="输入手机号码"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>电子邮箱<span class="optional">（选填）</span></ion-label>\n                    <ion-input type="email" text-right formControlName="Email" placeholder="输入邮箱"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>所获证书<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right formControlName="CertificateObtained" placeholder="输入所获证书"></ion-input>\n                </ion-item>\n            </div>\n        </ion-list>\n\n        <ion-list>\n            <ion-list-header (click)="shrink(\'three\')">单位信息</ion-list-header>\n            <div [ngClass]="{\'hide\': hideThree}">\n                <ion-item>\n                    <ion-label>所属部门</ion-label>\n                    <ion-select formControlName="Dept" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option value="1">青白江疾病预防控制中心</ion-option>\n                        <ion-option value="2">部门2</ion-option>\n                        <ion-option value="3">部门3</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label>职务</ion-label>\n                    <ion-select formControlName="Duty" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option value="1">职务1</ion-option>\n                        <ion-option value="2">职务2</ion-option>\n                        <ion-option value="3">职务3</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label>职称<span class="optional">（选填）</span></ion-label>\n                    <ion-select formControlName="JobTitle" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option value="1">职务1</ion-option>\n                        <ion-option value="2">职务2</ion-option>\n                        <ion-option value="3">职务3</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label>职业资格<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right formControlName="ProfessionalQualification" placeholder="输入职业资格"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>员工档案号<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right formControlName="StaffFileNumber" placeholder="输入员工档案号"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>参加工作日</ion-label>\n                    <ion-datetime formControlName="Workday" placeholder="点击添加" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                </ion-item>\n                <ion-item>\n                    <ion-label>入职日期<span class="optional">（选填）</span></ion-label>\n                    <ion-datetime formControlName="Indate" placeholder="点击添加" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                </ion-item>\n                <ion-item>\n                    <ion-label>员工性质</ion-label>\n                    <ion-select formControlName="EmployeeNature" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option value="在编">在编</ion-option>\n                        <ion-option value="非在编">非在编</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label>医疗保险号<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right formControlName="MedicareNumber" placeholder="输入医疗保险号"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>养老手册号<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right formControlName="PensionBookNumber" placeholder="输入养老手册号"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>公积金账号<span class="optional">（选填）</span></ion-label>\n                    <ion-input text-right formControlName="ProvidentFundAccount" placeholder="输入公积金账号"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>备注<span class="optional">（选填）</span></ion-label>\n                    <ion-textarea text-right formControlName="Remarks" placeholder="输入备注信息"></ion-textarea>\n                </ion-item>\n            </div>\n        </ion-list>\n\n        <ion-list>\n            <ion-list-header (click)="shrink(\'four\')">附件上传</ion-list-header>\n            <div [ngClass]="{\'hide\': hideFour}">\n                <ion-item>\n                    <h2>毕业证.jpg</h2>\n                    <button ion-button clear item-end>删除</button>\n                </ion-item>\n                <ion-item>\n                    <h2>身份证.jpg</h2>\n                    <button ion-button clear item-end>删除</button>\n                </ion-item>\n                <ion-item text-center>\n                    <button icon-left ion-button color="secondary" small outline round><ion-icon name="home"></ion-icon>添加附件</button>\n                </ion-item>\n            </div>\n        </ion-list>\n\n    </form>\n\n</ion-content>\n<ion-footer>\n    <button ion-button full color="danger" [disabled]="!baseForm.valid" (click)=sent(baseForm.value)>保存</button>\n</ion-footer>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\staff-file-maintenance\staff-file-maintenance-basic-imfornation\staff-file-maintenance-basic-imfornation.html"*/,
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
//# sourceMappingURL=42.js.map