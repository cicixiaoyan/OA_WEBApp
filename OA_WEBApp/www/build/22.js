webpackJsonp([22],{

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverSetPageModule", function() { return DriverSetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driver_set__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__car_service__ = __webpack_require__(741);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DriverSetPageModule = (function () {
    function DriverSetPageModule() {
    }
    DriverSetPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__driver_set__["a" /* DriverSetPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__driver_set__["a" /* DriverSetPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__driver_set__["a" /* DriverSetPage */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__car_service__["a" /* CarService */]]
        })
    ], DriverSetPageModule);
    return DriverSetPageModule;
}());

//# sourceMappingURL=driver-set.module.js.map

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

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverSetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__car_service__ = __webpack_require__(741);
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
 * Generated class for the DriverSetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DriverSetPage = (function () {
    function DriverSetPage(navCtrl, navParams, carService, nativeService, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.carService = carService;
        this.nativeService = nativeService;
        this.formBuilder = formBuilder;
        this.isWrite = false;
        this.isWrite = this.navParams.get("isWrite");
        var today = new Date();
        this.addForm = this.formBuilder.group({
            Name: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            Sex: ["", []],
            Age: [today, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(3)]],
            InDate: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            Memo: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(180)]]
            // Archives: ["2017/10/9 系统管理员", [Validators.maxLength(180)]],
        });
    }
    DriverSetPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (!this.isWrite) {
            this.carService.getDriverDetails(this.navParams.get("Id")).subscribe(function (resJson) {
                if (resJson.Resule && resJson.Data !== []) {
                    var data = resJson.Data[0];
                    _this.id = data.Id;
                    _this.addForm.setValue({
                        Name: data.Name,
                        Sex: data.Sex,
                        Age: data.Age,
                        InDate: data.InDate,
                        Memo: data.Memo
                    });
                }
                else {
                    _this.nativeService.showToast(resJson.Data, 800);
                    _this.navCtrl.pop();
                }
            });
        }
    };
    DriverSetPage.prototype.save = function (value) {
        var _this = this;
        if (this.isWrite) {
            this.carService.driverAdd(value).subscribe(function (resJson) {
                if (resJson.Resule) {
                    _this.nativeService.showToast("添加成功", 500);
                }
                else {
                    _this.nativeService.showToast(resJson.Data, 800);
                }
            });
        }
        else {
            value.Id = this.id;
            this.carService.driverMod(value).subscribe(function (resJson) {
                if (resJson.Resule) {
                    _this.nativeService.showToast("修改成功", 500);
                }
                else {
                    _this.nativeService.showToast(resJson.Data, 800);
                }
            });
        }
    };
    DriverSetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-driver-set',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\car\driver\driver-set\driver-set.html"*/`<!--\n  Generated template for the DriverSetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{isWrite ? "添加驾驶员" : "驾驶员详情"}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <form [formGroup]="addForm" (ngSubmit)="save(addForm.value)">\n        <div>\n            <ion-list>\n                <ion-item>\n                    <ion-label stacked>姓名</ion-label>\n                    <ion-input type="text" formControlName="Name" placeholder="请输入" ></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>年龄</ion-label>\n                    <ion-input type="number" formControlName="Age" placeholder="请输入" ></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>性别</ion-label>\n                    <ion-select formControlName="Sex" cancelText="取消" okText="确定" placeholder="请选择">\n                        <ion-option  value="男">男</ion-option>\n                        <ion-option  value="女">女</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>入职时间</ion-label>\n                    <ion-datetime formControlName="InDate" placeholder="点击设置" cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD"></ion-datetime>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>备注</ion-label>\n                    <ion-textarea formControlName="Memo" type="text" placeholder="请输入"></ion-textarea>\n                </ion-item>\n                <ion-item  *ngIf="!isWrite">\n                    <ion-label stacked>建档</ion-label>\n                    <ion-input value="2017/10/9 系统管理员"  type="text" placeholder="无"></ion-input>\n                </ion-item>\n\n            </ion-list>\n            <div padding text-center>\n                <button ion-button type="submit" color="danger" [disabled]="!addForm.valid">保存</button>\n                <button *ngIf="!isWrite" ion-button type="submit" color="danger" [disabled]="!addForm.valid">删除</button>\n                <button ion-button clear small navPop>关闭</button>\n            </div>\n        </div>\n    </form>\n</ion-content>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\car\driver\driver-set\driver-set.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__car_service__["a" /* CarService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], DriverSetPage);
    return DriverSetPage;
}());

//# sourceMappingURL=driver-set.js.map

/***/ })

});
//# sourceMappingURL=22.js.map