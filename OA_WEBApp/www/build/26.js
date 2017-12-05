webpackJsonp([26],{

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarAddPageModule", function() { return CarAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__car_add__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__car_service__ = __webpack_require__(746);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CarAddPageModule = (function () {
    function CarAddPageModule() {
    }
    CarAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__car_add__["a" /* CarAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__car_add__["a" /* CarAddPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__car_add__["a" /* CarAddPage */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__car_service__["a" /* CarService */]]
        })
    ], CarAddPageModule);
    return CarAddPageModule;
}());

//# sourceMappingURL=car-add.module.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(364);
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
        return this.httpService.postFormData("ashx/BusVehicleLs.ashx", param).map(function (res) { return res.json(); });
    };
    CarService.prototype.geDetail = function (id) {
        return this.httpService.postFormData("ashx/BusVehicleDetail.ashx", { "Id": id })
            .map(function (res) { return res.json(); });
    };
    CarService.prototype.add = function (param) {
        return this.httpService.postFormData("ashx/BusVehicleLsAdd.ashx", param).map(function (res) { return res.json(); });
    };
    CarService.prototype.mod = function (param) {
        return this.httpService.postFormData("ashx/BusVehicleLsMod.ashx", param).map(function (res) { return res.json(); });
    };
    CarService.prototype.geStatus = function (status) {
        return this.httpService.postFormData("ashx/BusQuery.ashx", { "Status": status })
            .map(function (res) { return res.json(); });
    };
    CarService.prototype.getDriverList = function (param) {
        return this.httpService.postFormData("ashx/DriverLs.ashx", param).map(function (res) { return res.json(); });
    };
    CarService.prototype.getDriverDetails = function (id) {
        return this.httpService.postFormData("ashx/DriverDetails.ashx", { "Id": id })
            .map(function (res) { return res.json(); });
    };
    CarService.prototype.driverAdd = function (param) {
        return this.httpService.postFormData("ashx/DriverAdd.ashx", param).map(function (res) { return res.json(); });
    };
    CarService.prototype.driverMod = function (param) {
        return this.httpService.postFormData("ashx/DriverMod.ashx", param).map(function (res) { return res.json(); });
    };
    CarService.prototype.driverDel = function (id) {
        return this.httpService.postFormData("ashx/DriverDel.ashx", { "Id": id })
            .map(function (res) { return res.json(); });
    };
    CarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */]])
    ], CarService);
    return CarService;
}());

//# sourceMappingURL=car_service.js.map

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__car_service__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__ = __webpack_require__(45);
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
 * Generated class for the CarAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CarAddPage = (function () {
    function CarAddPage(navCtrl, navParams, formBuilder, nativeService, carService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.nativeService = nativeService;
        this.carService = carService;
        var today = new Date();
        this.addForm = this.formBuilder.group({
            BusNumber: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            BusName: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(180), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            BusPassenger: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(180), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            StartDate: [today, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(180), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            BusBuyPrice: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(5)]],
            Salvage: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(5)]],
            BusLicensePlate: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(180)]],
            BusEngineNumber: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(180)]],
            BusFrameNumber: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(180)]],
            BusDrivingLicenseNumber: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(20)]],
            BusManger: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(20), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4)]],
            BusStatus: ["", []],
            BusAnnualInspection: ["",],
            BusMaintenanceDate: ["", []],
            BusDated: ["", []],
            BusMemo: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(180)]],
        });
    }
    CarAddPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.carService.geStatus().subscribe(function (resJson) {
            if (resJson.Result) {
                _this.BusStatusLs = resJson.Data;
            }
        });
        console.log('ionViewDidLoad CarAddPage');
    };
    CarAddPage.prototype.save = function (value) {
        var _this = this;
        value.Uid = this.carService.httpService.globalData.Uid;
        this.carService.add(value).subscribe(function (resJson) {
            if (resJson.Result) {
                _this.nativeService.showToast("添加成功", 500);
            }
            else {
                _this.nativeService.showToast(resJson.Data, 500);
            }
        });
    };
    CarAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-car-add',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\car\car-add\car-add.html"*/`<!--\n  Generated template for the CarAddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>新增车辆</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n    <form [formGroup]="addForm" (ngSubmit)="save(addForm.value)">\n        <div>\n            <ion-list>\n                <ion-item>\n                    <ion-label stacked>车牌号</ion-label>\n                    <ion-input type="text" formControlName="BusNumber" placeholder="请输入" ></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>车辆名称</ion-label>\n                    <ion-input type="text" formControlName="BusName" placeholder="请输入" ></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>核载人数</ion-label>\n                    <ion-input type="number" formControlName="BusPassenger" placeholder="请输入" ></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>启用时间</ion-label>\n                    <ion-datetime formControlName="StartDate" placeholder="点击设置" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>购买价(万)</ion-label>\n                    <ion-input type="number" formControlName="BusBuyPrice" placeholder="请输入" ></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>残值(万)</ion-label>\n                    <ion-input type="number" formControlName="Salvage" placeholder="请输入" ></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>厂牌型号</ion-label>\n                    <ion-input type="text" formControlName="BusLicensePlate" placeholder="请输入" ></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>发动机号</ion-label>\n                    <ion-input type="text" formControlName="BusEngineNumber" placeholder="请输入" ></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>车架号</ion-label>\n                    <ion-input type="text" formControlName="BusFrameNumber" placeholder="请输入" ></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>行驶证号</ion-label>\n                    <ion-input type="text" formControlName="BusDrivingLicenseNumber" placeholder="请输入" ></ion-input>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label stacked>管理人员</ion-label>\n                    <ion-select formControlName="BusManger" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option *ngFor="let type of MeetTypeLs;let i = index" [value]="type.Id">{{type.Name}}</ion-option>\n                        <!-- <ion-option value="2">类型2</ion-option> -->\n                    </ion-select>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label stacked>车辆状况</ion-label>\n                    <ion-select formControlName="BusStatus" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option *ngFor="let status of BusStatusLs;let i = index" [value]="status.Status">{{status.Status}}</ion-option>\n                    </ion-select>\n                </ion-item>\n     \n                <ion-item>\n                    <ion-label stacked>年检日期</ion-label>\n                    <ion-datetime formControlName="BusAnnualInspection"  placeholder="点击设置" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>维保日期</ion-label>\n                    <ion-datetime formControlName="BusMaintenanceDate" placeholder="点击设置" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>保险日期</ion-label>\n                    <ion-datetime formControlName="BusDated" placeholder="点击设置" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label stacked>备注</ion-label>\n                    <ion-textarea formControlName="BusMemo" type="text" placeholder="请输入"></ion-textarea>\n                </ion-item>\n\n            </ion-list>\n            <div padding text-center>\n                <button ion-button type="submit" color="danger"  [disabled]="!addForm.valid">保存</button>\n                <button ion-button clear small navPop>取消</button>\n            </div>\n        </div>\n    </form>\n</ion-content>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\car\car-add\car-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_3__car_service__["a" /* CarService */]])
    ], CarAddPage);
    return CarAddPage;
}());

//# sourceMappingURL=car-add.js.map

/***/ })

});
//# sourceMappingURL=26.js.map