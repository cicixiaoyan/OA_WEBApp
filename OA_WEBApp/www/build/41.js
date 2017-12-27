webpackJsonp([41],{

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffPopoverPageModule", function() { return StaffPopoverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_popover__ = __webpack_require__(839);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StaffPopoverPageModule = (function () {
    function StaffPopoverPageModule() {
    }
    StaffPopoverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__staff_popover__["a" /* StaffPopoverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__staff_popover__["a" /* StaffPopoverPage */]),
            ],
        })
    ], StaffPopoverPageModule);
    return StaffPopoverPageModule;
}());

//# sourceMappingURL=staff-popover.module.js.map

/***/ }),

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffPopoverPage; });
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
 * Generated class for the StaffPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StaffPopoverPage = (function () {
    function StaffPopoverPage(navParams, viewCtrl, storage, httpService) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.httpService = httpService;
        this.deptItems = [];
        this.items = [];
        this.haveAffix = false;
        this.Result = {}; // 最终返回结果
        this.Uid = this.navParams.get("Uid");
        this.initializeItems();
    }
    StaffPopoverPage.prototype.initializeItems = function () {
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
    StaffPopoverPage.prototype.getItems = function (ev) {
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
    StaffPopoverPage.prototype.getRecipientsByDept = function (id) {
        var data = !!id ? { DeptId: id } : {};
        this.httpService.postFormData("ashx/UserSheet.ashx", data)
            .map(function (res) { return res.json(); })
            .subscribe(function (result) {
            console.log(result);
            // if (result.Result){
            //     const idArr = this.addresseeIds.split(",");
            //
            //     this.items = result.Data.map(function (value, index) {
            //         for (let i in idArr) {
            //             if (idArr[i] !== value.Uid) {
            //                 Object.assign(value, { checked: false });
            //             } else {
            //                 return Object.assign(value, { checked: true });
            //
            //             }
            //         }
            //         return value;
            //
            //     });
            // }
        });
    };
    StaffPopoverPage.prototype.search = function () {
        console.log('change');
        var that = this;
        var data = [
            {
                "Uid": '1',
                'Name': '张三',
                'Sex': '男',
                'IDC': '511324198910121111',
                'Dept': '部门名称1',
                'Duty': '职务1',
                "StaffNumber": '123456'
            },
            {
                "Uid": '2',
                'Name': '李四',
                'Sex': '男',
                'IDC': '511324198910121111',
                'Dept': '部门名称2',
                'Duty': '职务2',
                "StaffNumber": '123455'
            },
            {
                "Uid": '4',
                'Name': '李四',
                'Sex': '男',
                'IDC': '511324198910121111',
                'Dept': '部门名称2',
                'Duty': '职务2',
                "StaffNumber": '123455'
            },
            {
                "Uid": '5',
                'Name': '李四',
                'Sex': '男',
                'IDC': '511324198910121111',
                'Dept': '部门名称2',
                'Duty': '职务2',
                "StaffNumber": '123455'
            },
            {
                "Uid": '6',
                'Name': '李四',
                'Sex': '男',
                'IDC': '511324198910121111',
                'Dept': '部门名称2',
                'Duty': '职务2',
                "StaffNumber": '123455'
            },
            {
                "Uid": '7',
                'Name': '李四',
                'Sex': '男',
                'IDC': '511324198910121111',
                'Dept': '部门名称2',
                'Duty': '职务2',
                "StaffNumber": '123455'
            },
            {
                "Uid": '3',
                'Name': '王五',
                'Sex': '男',
                'IDC': '511324198910121111',
                'Dept': '部门名称3',
                'Duty': '职务3',
                "StaffNumber": '123454'
            }
        ];
        this.items = data.map(function (value, index) {
            if (value.Uid == that.Uid)
                Object.assign(value, { checked: true });
            else
                Object.assign(value, { checked: false });
            return value;
        });
        // let data = (this.name !== "") ? {name: name} : {};
        // this.httpService.postFormData("ashx/UserSheet.ashx", data)
        // .map((res: Response) => res.json())
        // .subscribe((result) => {
        //     console.log(result);
        //     if (result.Result){
        //         const idArr = this.addresseeIds.split(",");
        //
        //         this.items = result.Data.map(function (value, index) {
        //             for (let i in idArr) {
        //                 if (idArr[i] !== value.Uid) {
        //                     Object.assign(value, { checked: false });
        //                 } else {
        //                     return Object.assign(value, { checked: true });
        //
        //                 }
        //             }
        //             return value;
        //
        //         });
        //     }
        // });
    };
    StaffPopoverPage.prototype.checkPeople = function (Index) {
        this.items.forEach(function (value, index) {
            if (Index === index)
                value.checked = true;
            else
                value.checked = false;
        });
    };
    StaffPopoverPage.prototype.confirm = function () {
        console.log(confirm);
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.checked) {
                this.Result = value;
            }
        }
        this.viewCtrl.dismiss(this.Result);
    };
    StaffPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-staff-popover',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\staff-popover\staff-popover.html"*/`<!-- <ion-content> -->\n<ion-list class="checkpeople-popover">\n    <ion-item>\n        <ion-label>部门选择</ion-label>\n        <ion-select [(ngModel)]="dept" submitText="确定" (ngModelChange)="getRecipientsByDept(dept)" cancelText="取消" okText="确定">\n            <ion-option *ngFor="let item of deptItems;let i = index" [value]="item.Id">\n                {{item.BmName}}\n            </ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-searchbar color="danger" cancelButtonText=\'搜索\' showCancelButton="true" (ionCancel)="search()" [(ngModel)]="name" placeholder="请输入编码或姓名">\n    </ion-searchbar>\n\n    <ion-list-header >员工列表</ion-list-header>\n    <div class="">\n        <ion-scroll scrollY="true">\n          <ion-item *ngFor="let item of items;let i = index">\n            <ion-label>\n              {{item.Name}}({{item.Uid}})<br>\n              <span>{{item.Dept}}&emsp;{{item.Duty}}</span>\n            </ion-label>\n            <ion-checkbox [checked]="item.checked" (click)="checkPeople(i)"></ion-checkbox>\n          </ion-item>\n        </ion-scroll>\n    </div>\n</ion-list>\n<!-- </ion-content> -->\n<ion-footer>\n    <button (click)="confirm()" icon-left ion-button full color="calm">\n  <ion-icon name="checkmark"></ion-icon>确定</button>\n</ion-footer>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\staff-popover\staff-popover.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__["a" /* HttpService */]) === "function" && _d || Object])
    ], StaffPopoverPage);
    return StaffPopoverPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=staff-popover.js.map

/***/ })

});
//# sourceMappingURL=41.js.map