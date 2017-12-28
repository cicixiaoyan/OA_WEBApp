webpackJsonp([65],{

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPopoverPageModule", function() { return ContactsPopoverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts_popover__ = __webpack_require__(799);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactsPopoverPageModule = (function () {
    function ContactsPopoverPageModule() {
    }
    ContactsPopoverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contacts_popover__["a" /* ContactsPopoverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contacts_popover__["a" /* ContactsPopoverPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__contacts_popover__["a" /* ContactsPopoverPage */]]
        })
    ], ContactsPopoverPageModule);
    return ContactsPopoverPageModule;
}());

//# sourceMappingURL=contacts-popover.module.js.map

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
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
 * Generated class for the ContactsPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactsPopoverPage = (function () {
    function ContactsPopoverPage(navParams, viewCtrl, storage, httpService) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.httpService = httpService;
        this.deptItems = [];
        this.items = [];
        this.haveAffix = false;
        this.addressee = this.navParams.get("addressee");
        this.addresseeIds = this.navParams.get("addresseeIds");
        console.log(this.addressee, this.addresseeIds);
        this.initializeItems();
    }
    ContactsPopoverPage.prototype.initializeItems = function () {
        var _this = this;
        this.httpService.postFormData("ashx/BmLs.ashx", {})
            .map(function (res) { return res.json(); })
            .subscribe(function (resJson) {
            if (resJson.Result) {
                _this.deptItems = resJson.Data;
            }
        });
        this.search();
    };
    ContactsPopoverPage.prototype.getItems = function (ev) {
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
    ContactsPopoverPage.prototype.getRecipientsByDept = function (id) {
        var _this = this;
        var data = !!id ? { DeptId: id } : {};
        this.httpService.postFormData("ashx/UserSheet.ashx", data)
            .map(function (res) { return res.json(); })
            .subscribe(function (result) {
            console.log(result);
            if (result.Result) {
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
        });
    };
    ContactsPopoverPage.prototype.search = function () {
        var _this = this;
        var data = (this.name !== "") ? { name: name } : {};
        this.httpService.postFormData("ashx/UserSheet.ashx", data)
            .map(function (res) { return res.json(); })
            .subscribe(function (result) {
            console.log(result);
            if (result.Result) {
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
        });
    };
    ContactsPopoverPage.prototype.checkPeople = function (index) {
        this.items[index].checked = !this.items[index].checked;
    };
    ContactsPopoverPage.prototype.confirm = function () {
        console.log(confirm);
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
    ContactsPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contacts-popover',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\contacts-popover\contacts-popover.html"*/`<!--\n  Generated template for the ContactsPopoverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>联系人选择</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list class="checkpeople-popover">\n    <ion-item>\n        <ion-label>部门选择</ion-label>\n        <ion-select [(ngModel)]="dept" submitText="确定" (ngModelChange)="getRecipientsByDept(dept)"\n            cancelText="取消" okText="确定">\n            <ion-option  *ngFor="let item of deptItems;let i = index" [value]="item.Id">\n                {{item.BmName}}\n            </ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-searchbar color="danger" [(ngModel)]="name"  placeholder="请输入编码或姓名">\n    </ion-searchbar>\n  \n    <div text-center>\n        <button (click)="search()" icon-left ion-button small color="calm">\n        <ion-icon name="search"></ion-icon>查询</button>\n  \n        <button (click)="confirm()" icon-left ion-button small color="calm">\n        <ion-icon name="checkmark"></ion-icon>确定</button>\n    </div>\n  \n    <ion-list-header>\n        通讯录\n    </ion-list-header>\n  \n    <ion-item *ngFor="let item of items;let i = index">\n        <ion-label>\n        {{item.Name}}({{item.Uid}})<br>\n        <span>{{item.Dept}}&emsp;{{item.Duty}}</span>\n        </ion-label>\n        <ion-checkbox [checked]="item.checked" (ionChange)="checkPeople(i)"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\contacts-popover\contacts-popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__["a" /* HttpService */]])
    ], ContactsPopoverPage);
    return ContactsPopoverPage;
}());

//# sourceMappingURL=contacts-popover.js.map

/***/ })

});
//# sourceMappingURL=65.js.map