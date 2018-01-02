webpackJsonp([65],{

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractChoosePageModule", function() { return ContractChoosePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contract_choose__ = __webpack_require__(816);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContractChoosePageModule = /** @class */ (function () {
    function ContractChoosePageModule() {
    }
    ContractChoosePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contract_choose__["a" /* ContractChoosePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contract_choose__["a" /* ContractChoosePage */]),
            ],
        })
    ], ContractChoosePageModule);
    return ContractChoosePageModule;
}());

//# sourceMappingURL=contract-choose.module.js.map

/***/ }),

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractChoosePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContractChoosePage = /** @class */ (function () {
    function ContractChoosePage(navParams, viewCtrl, storage, httpService) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.httpService = httpService;
        this.deptItems = [];
        this.items = [];
        this.haveAffix = false;
        this.Result = {}; // 最终返回结果
        this.ContactId = this.navParams.get("ContactId");
        this.initializeItems();
    }
    ContractChoosePage.prototype.initializeItems = function () {
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
    ContractChoosePage.prototype.getItems = function (ev) {
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
    ContractChoosePage.prototype.getRecipientsByDept = function (id) {
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
            //             if (idArr[i] !== value.ContactId) {
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
    ContractChoosePage.prototype.search = function () {
        console.log('change');
        var that = this;
        var data = [
            {
                "ContactId": '1',
                "ContractNumber": '1',
                "ContractName": '',
                "LastValidDate": '2017-12-12',
                "LastExpirationDate": '2017-12-12',
                "SigningDate": '12345',
                'StaffId': '1',
                "StaffNumber": '123456',
                'Name': '张三',
                'Sex': '男',
                'IDC': '511324198910121111',
                'Dept': '部门名称1',
                'DeptId': '部门名称1',
                'Duty': '职务1',
            },
            {
                "ContactId": '2',
                "ContractNumber": '1',
                "ContractName": '',
                "LastValidDate": '2017-12-12',
                "LastExpirationDate": '2017-12-12',
                "SigningDate": '12345',
                'StaffId': '1',
                "StaffNumber": '123456',
                'Name': '张三',
                'Sex': '男',
                'IDC': '511324198910121111',
                'Dept': '部门名称1',
                'DeptId': '部门名称1',
                'Duty': '职务1',
            },
        ];
        this.items = data.map(function (value, index) {
            if (value.ContactId == that.ContactId)
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
    ContractChoosePage.prototype.checkContract = function (Index) {
        this.items.forEach(function (value, index) {
            if (Index === index)
                value.checked = true;
            else
                value.checked = false;
        });
    };
    ContractChoosePage.prototype.confirm = function () {
        console.log(confirm);
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.checked) {
                this.Result = value;
            }
        }
        this.viewCtrl.dismiss(this.Result);
    };
    ContractChoosePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contract-choose',template:/*ion-inline-start:"/Users/lieon/Desktop/OA_WEBApp/OA_WEBApp/src/pages/hr-management/contract/contract-choose/contract-choose.html"*/'<!-- <ion-content> -->\n<ion-list class="checkpeople-popover">\n    <ion-item>\n        <ion-label>部门选择</ion-label>\n        <ion-select [(ngModel)]="dept" submitText="确定" (ngModelChange)="getRecipientsByDept(dept)" cancelText="取消" okText="确定">\n            <ion-option *ngFor="let item of deptItems;let i = index" [value]="item.Id">\n                {{item.BmName}}\n            </ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-searchbar color="danger" cancelButtonText=\'搜索\' showCancelButton="true" (ionCancel)="search()" [(ngModel)]="name" placeholder="请输入编码或姓名">\n    </ion-searchbar>\n\n    <ion-list-header >员工列表</ion-list-header>\n    <div class="">\n        <ion-scroll scrollY="true">\n          <ion-item *ngFor="let item of items;let i = index">\n            <ion-label>\n              {{item.ContractNumber}}{{item.ContractName == \'\' ? \'\' : \'(\'+item.ContractName+\')\' }}<br>\n              <span>{{item.Name}}</span>\n            </ion-label>\n            <ion-checkbox [checked]="item.checked" (click)="checkContract(i)"></ion-checkbox>\n          </ion-item>\n        </ion-scroll>\n    </div>\n</ion-list>\n<!-- </ion-content> -->\n<ion-footer>\n    <button (click)="confirm()" icon-left ion-button full color="calm">\n  <ion-icon name="checkmark"></ion-icon>确定</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/lieon/Desktop/OA_WEBApp/OA_WEBApp/src/pages/hr-management/contract/contract-choose/contract-choose.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__["a" /* HttpService */]])
    ], ContractChoosePage);
    return ContractChoosePage;
}());

//# sourceMappingURL=contract-choose.js.map

/***/ })

});
//# sourceMappingURL=65.js.map