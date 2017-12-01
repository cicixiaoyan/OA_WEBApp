webpackJsonp([24],{

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarReadPageModule", function() { return CarReadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__car_read__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__car_service__ = __webpack_require__(741);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CarReadPageModule = (function () {
    function CarReadPageModule() {
    }
    CarReadPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__car_read__["a" /* CarReadPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__car_read__["a" /* CarReadPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__car_read__["a" /* CarReadPage */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__car_service__["a" /* CarService */]]
        })
    ], CarReadPageModule);
    return CarReadPageModule;
}());

//# sourceMappingURL=car-read.module.js.map

/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarService = (function () {
    function CarService(httpService) {
        this.httpService = httpService;
    }
    CarService.prototype.getList = function (param) {
        return this.httpService.postFormData("ashx/MeetLs.ashx", param).map(function (res) { return res.json(); });
    };
    CarService.prototype.getDriverList = function (param) {
        return this.httpService.postFormData("", param).map(function (res) { return res.json(); });
    };
    CarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */]])
    ], CarService);
    return CarService;
}());

//# sourceMappingURL=car_service.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarReadPage; });
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



/**
 * Generated class for the CarReadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CarReadPage = (function () {
    function CarReadPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        var today = new Date();
        this.editForm = this.formBuilder.group({
            CarNum: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            Name: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(180), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            Number: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(180), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            StartDate: [today, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(180), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            PurchasePrice: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(5)]],
            ResidualValue: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(5)]],
            BrandModel: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(180)]],
            EngineNumber: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(180)]],
            FrameNumber: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(180)]],
            DrivingLicenseNumber: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(20)]],
            manager: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(20), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4)]],
            VehicleCondition: ["", []],
            AnnualinspectionDate: ["",],
            WarrantyDate: ["", []],
            InsuranceDate: ["", []],
            Remarks: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(180)]],
        });
    }
    CarReadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CarReadPage');
    };
    CarReadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-car-read',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\car\car-read\car-read.html"*/`<!--\n  Generated template for the CarReadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>车辆详情</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <form [formGroup]="editForm" (ngSubmit)="sent(editForm.value)">\n        <div>\n            <ion-list>\n                <ion-item>\n                    <ion-label stacked>车牌号</ion-label>\n                    <ion-input type="text" formControlName="CarNum" placeholder="请输入" ></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>车辆名称</ion-label>\n                    <ion-input type="text" formControlName="Name" placeholder="请输入" ></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>核载人数</ion-label>\n                    <ion-input type="number" formControlName="Number" placeholder="请输入" ></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>启用时间</ion-label>\n                    <ion-datetime formControlName="StartDate" placeholder="点击设置" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>购买价(万)</ion-label>\n                    <ion-input type="number" formControlName="PurchasePrice" placeholder="请输入" ></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>残值(万)</ion-label>\n                    <ion-input type="number" formControlName="ResidualValue" placeholder="请输入" ></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>厂牌型号</ion-label>\n                    <ion-input type="text" formControlName="BrandModel" placeholder="请输入" ></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>发动机号</ion-label>\n                    <ion-input type="text" formControlName="EngineNumber" placeholder="请输入" ></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>车架号</ion-label>\n                    <ion-input type="text" formControlName="FrameNumber" placeholder="请输入" ></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>行驶证号</ion-label>\n                    <ion-input type="text" formControlName="DrivingLicenseNumber" placeholder="请输入" ></ion-input>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label stacked>管理人员</ion-label>\n                    <ion-select formControlName="manager" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option *ngFor="let type of MeetTypeLs;let i = index" [value]="type.Id">{{type.Name}}</ion-option>\n                        <!-- <ion-option value="2">类型2</ion-option> -->\n                    </ion-select>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label stacked>车辆状况</ion-label>\n                    <ion-select formControlName="VehicleCondition" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option *ngFor="let place of MeetPlaceLs;let i = index" [value]="place.Id">{{place.Name}}</ion-option>\n                        <!-- <ion-option value="2">类型2</ion-option> -->\n                    </ion-select>\n                </ion-item>\n     \n                <ion-item>\n                    <ion-label stacked>年检日期</ion-label>\n                    <ion-datetime formControlName="AnnualinspectionDate"  placeholder="点击设置" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>维保日期</ion-label>\n                    <ion-datetime formControlName="WarrantyDate" placeholder="点击设置" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>保险日期</ion-label>\n                    <ion-datetime formControlName="InsuranceDate" placeholder="点击设置" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label stacked>备注</ion-label>\n                    <ion-textarea formControlName="Remarks" type="text" placeholder="请输入"></ion-textarea>\n                </ion-item>\n\n            </ion-list>\n            <div padding text-center>\n                <button ion-button type="submit" color="danger" [disabled]="!editForm.valid">保存</button>\n                <button ion-button clear small navPop>取消</button>\n            </div>\n        </div>\n    </form>\n\n</ion-content>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\car\car-read\car-read.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], CarReadPage);
    return CarReadPage;
}());

//# sourceMappingURL=car-read.js.map

/***/ })

});
//# sourceMappingURL=24.js.map