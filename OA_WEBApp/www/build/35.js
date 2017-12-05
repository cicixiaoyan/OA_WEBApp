webpackJsonp([35],{

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewworkModule", function() { return NewworkModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newwork__ = __webpack_require__(774);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewworkModule = (function () {
    function NewworkModule() {
    }
    NewworkModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__newwork__["a" /* Newwork */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__newwork__["a" /* Newwork */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__newwork__["a" /* Newwork */]
            ]
        })
    ], NewworkModule);
    return NewworkModule;
}());

//# sourceMappingURL=newwork.module.js.map

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Newwork; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { NewworkDetail } from './newwork-detail/newwork-detail';
/**
 * Generated class for the Newwork page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Newwork = (function () {
    function Newwork(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [{
                wfName: "测试工作流1",
                wfNo: "2",
                FK_fid: "1234" // 表单id
            },
            {
                wfName: "测试工作流2",
                wfNo: "2",
                FK_fid: "1234" // 表单id
            },
            {
                wfName: "测试工作流3",
                wfNo: "2",
                FK_fid: "1234" // 表单id
            }
        ];
    }
    Newwork.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Newwork');
    };
    Newwork.prototype.addNew = function (id) {
        this.navCtrl.push("NewworkDetail", { id: id });
    };
    Newwork = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newwork',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\home\newwork\newwork.html"*/`<!--\n  Generated template for the Newwork page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>新建事项</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list inset style="margin:16px 0;">\n        <button ion-item *ngFor="let item of items" (click)="addNew(item.FK_fid)">\n    {{item.wfName}}\n  </button>\n    </ion-list>\n</ion-content>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\home\newwork\newwork.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
    ], Newwork);
    return Newwork;
}());

//# sourceMappingURL=newwork.js.map

/***/ })

});
//# sourceMappingURL=35.js.map