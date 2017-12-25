webpackJsonp([55],{

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetmobilePopoverPageModule", function() { return GetmobilePopoverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getmobile_popover__ = __webpack_require__(790);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GetmobilePopoverPageModule = (function () {
    function GetmobilePopoverPageModule() {
    }
    GetmobilePopoverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__getmobile_popover__["a" /* GetmobilePopoverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__getmobile_popover__["a" /* GetmobilePopoverPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__getmobile_popover__["a" /* GetmobilePopoverPage */]]
        })
    ], GetmobilePopoverPageModule);
    return GetmobilePopoverPageModule;
}());

//# sourceMappingURL=getmobile-popover.module.js.map

/***/ }),

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetmobilePopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__ = __webpack_require__(61);
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
 * Generated class for the GetmobilePopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GetmobilePopoverPage = (function () {
    function GetmobilePopoverPage(navParams, viewCtrl, storage, httpService) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.httpService = httpService;
        this.items = [];
        this.addressee = this.navParams.get("addressee") ? this.navParams.get("addressee") : '';
        this.addresseeIds = this.navParams.get("addresseeIds") ? this.navParams.get("addresseeIds") : "";
        this.initializeItems();
    }
    GetmobilePopoverPage.prototype.initializeItems = function () {
        this.search();
    };
    GetmobilePopoverPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the ev target
        var val = ev.target.value;
        this.name = val;
        // if the value is an empty string don't filter the items
        // if (val && val.trim() != '') {
        //   this.items = this.items.filter((item) => {
        //     return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        //   });
        // }
    };
    GetmobilePopoverPage.prototype.getRecipientsByDept = function (id) {
        var _this = this;
        var data = !!id ? { DeptId: id } : {};
        data["ISPhone"] = 1;
        this.httpService.postFormData("ashx/UserSheet.ashx", data)
            .map(function (res) { return res.json(); })
            .subscribe(function (result) {
            console.log(result);
            if (result.Result && (result.Data instanceof Array) && result.Data.length !== 0) {
                if (_this.addresseeIds !== "") {
                    var idArr_1 = _this.addresseeIds.split(",");
                    _this.items = result.Data.map(function (value, index) {
                        for (var i in idArr_1) {
                            if (idArr_1[i] !== value.Uid) {
                                Object.assign(value, { checked: false });
                            }
                            else {
                                return Object.assign(value, { checked: true });
                            }
                        }
                        return value;
                    });
                }
                else {
                    _this.items = result.Data;
                }
            }
            else {
            }
        });
    };
    GetmobilePopoverPage.prototype.search = function () {
        var _this = this;
        //   let data = (this.name !== "") ? {name: name} : {};
        var data = {};
        if (this.name && this.name.trim() != '')
            data["name"] = this.name;
        data["ISPhone"] = 1;
        this.httpService.postFormData("ashx/UserSheet.ashx", data)
            .map(function (res) { return res.json(); })
            .subscribe(function (result) {
            if (result.Result && (result.Data instanceof Array) && result.Data.length !== 0) {
                if (_this.addresseeIds !== "") {
                    var idArr_2 = _this.addresseeIds.split(",");
                    _this.items = result.Data.map(function (value, index) {
                        for (var i in idArr_2) {
                            if (idArr_2[i] !== value.Uid) {
                                Object.assign(value, { checked: false });
                            }
                            else {
                                return Object.assign(value, { checked: true });
                            }
                        }
                        return value;
                    });
                }
                else {
                    _this.items = result.Data;
                }
            }
            else {
            }
        });
    };
    GetmobilePopoverPage.prototype.checkPeople = function (index) {
        this.items[index].checked = !this.items[index].checked;
    };
    GetmobilePopoverPage.prototype.confirm = function () {
        this.addressee = "";
        this.addresseeIds = "";
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.checked) {
                this.addressee += value.Name + ",";
                this.addresseeIds += value.Uid + ",";
            }
        }
        this.viewCtrl.dismiss({ addressee: this.addressee, addresseeIds: this.addresseeIds });
    };
    GetmobilePopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-getmobile-popover',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\getmobile-popover\getmobile-popover.html"*/`<!--\n  Generated template for the GetmobilePopoverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    \n      <ion-navbar>\n        <ion-title>联系人选择</ion-title>\n      </ion-navbar>\n    \n    </ion-header>\n    \n    \n    <ion-content>\n      <ion-list class="checkpeople-popover">\n        <ion-searchbar color="danger" [(ngModel)]="name"  placeholder="请输入编码或姓名">\n        </ion-searchbar>\n      \n        <div text-center>\n            <button (click)="search()" icon-left ion-button small color="calm">\n            <ion-icon name="search"></ion-icon>查询</button>\n      \n            <button (click)="confirm()" icon-left ion-button small color="calm">\n            <ion-icon name="checkmark"></ion-icon>确定</button>\n        </div>\n      \n        <ion-list-header>\n            通讯录\n        </ion-list-header>\n      \n        <ion-item *ngFor="let item of items;let i = index">\n            <ion-label>\n            {{item.Name}}({{item.Uid}})<br>\n            <span>{{item.Mobile}}</span>\n            </ion-label>\n            <ion-checkbox [checked]="item.checked" (ionChange)="checkPeople(i)"></ion-checkbox>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\getmobile-popover\getmobile-popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__["a" /* HttpService */]])
    ], GetmobilePopoverPage);
    return GetmobilePopoverPage;
}());

//# sourceMappingURL=getmobile-popover.js.map

/***/ })

});
//# sourceMappingURL=55.js.map