webpackJsonp([35],{

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractListPageModule", function() { return ContractListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contract_list__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contract_service__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(364);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ContractListPageModule = /** @class */ (function () {
    function ContractListPageModule() {
    }
    ContractListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contract_list__["a" /* ContractListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contract_list__["a" /* ContractListPage */]),
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__contract_service__["a" /* ContractService */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__contract_list__["a" /* ContractListPage */]]
        })
    ], ContractListPageModule);
    return ContractListPageModule;
}());

//# sourceMappingURL=contract-list.module.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_HttpService__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { UserInfo } from "../../model/UserInfo";
var ContractService = /** @class */ (function () {
    function ContractService(httpService) {
        this.httpService = httpService;
    }
    ContractService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_HttpService__["a" /* HttpService */]])
    ], ContractService);
    return ContractService;
}());

//# sourceMappingURL=contract-service.js.map

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contract_service__ = __webpack_require__(777);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContractListPage = /** @class */ (function () {
    function ContractListPage(navCtrl, navParams, popoverCtrl, contractService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.contractService = contractService;
        this.list = [];
        this.moredata = true;
        this.isEmpty = false;
        this.data = {
            "uid": this.contractService.httpService.globalData.Uid,
            "PageIndex": 0,
            "PageSize": 8
        };
        this.getList(this.data);
    }
    ContractListPage.prototype.ionViewDidLoad = function () {
    };
    ContractListPage.prototype.presentPopover = function (myEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create("ContractSearchPage", { "search": this.search });
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(function (search) {
            console.log(search);
            if (search) {
                _this.search = search.search;
                var data = search.search;
                data.uid = _this.contractService.httpService.globalData.Uid;
                data.PageIndex = 0;
                data.PageSize = 8;
                _this.getList(data);
            }
        });
    };
    ContractListPage.prototype.doRead = function (id) {
        this.navCtrl.push("ContractSettingPage", { "Id": id, 'readOnly': true });
    };
    ContractListPage.prototype.doRefresh = function (refresher) {
        this.list = [];
        this.data.PageIndex = 1;
        this.getList(this.data);
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    ContractListPage.prototype.doInfinite = function () {
        if (this.moredata) {
            this.data.PageIndex++;
            this.getList(this.data);
        }
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve();
            }, 500);
        });
    };
    ContractListPage.prototype.getList = function (data) {
        this.list = [
            {
                "Id": "1",
                "Name": '张三',
                "Dept": '检验科',
                "Type": '劳动合同',
                "ContractNumber": "A012345677",
                "TurnPositive": '已转正',
                "Status": '生效中' // 合同状态
            },
            {
                "Id": "2",
                "Name": '李四',
                "Dept": '其他',
                "Type": '劳动合同',
                "ContractNumber": "A012345688",
                "TurnPositive": '未转正',
                "Status": '试用中' // 合同状态
            },
        ];
        // this.contractService.getList(data).subscribe((resJson) => {
        //   if (resJson.Result  &&  resJson.Data.length !== 0 && (resJson.Data instanceof Array)){
        //     this.moredata = true;
        //     this.isEmpty = false;
        //     let list = resJson.Data;
        //     this.list = [...this.list, ...list];
        //   }else{
        //     this.moredata = false;
        //     this.isEmpty = (this.data.PageIndex == 1) ? true : false;
        //   }
        // });
    };
    ContractListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contract-list',template:/*ion-inline-start:"/Users/lieon/Desktop/OA_WEBApp/OA_WEBApp/src/pages/hr-management/contract/contract-list/contract-list.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>合同查询</ion-title>\n    <ion-buttons end  (click)="presentPopover($event)">\n        <button ion-button icon-only>\n          <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="正在刷新...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ion-list>\n      <ion-item-sliding *ngFor="let item of list"  (click)="doRead(item.Id)">\n          <ion-item>\n              <h2>{{item.Name}}[{{item.ContractNumber}}]</h2>\n              <div class="small">类型：{{item.Type}}&emsp;{{item.Status}}\n                <span float-right [ngClass]="{\'text-ios-secondary\':(item.TurnPositive == \'已转正\'),\'text-ios-energized\':(item.TurnPositive != \'已转正\')}">{{item.TurnPositive}}</span>\n              </div>\n              <p class="small">部门：{{item.Dept}}&emsp;</p>\n          </ion-item>\n      </ion-item-sliding>\n    </ion-list>\n    <empty *ngIf="isEmpty"></empty>\n    <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())" [enabled]="moredata" threshold="100px">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/lieon/Desktop/OA_WEBApp/OA_WEBApp/src/pages/hr-management/contract/contract-list/contract-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__contract_service__["a" /* ContractService */]])
    ], ContractListPage);
    return ContractListPage;
}());

//# sourceMappingURL=contract-list.js.map

/***/ })

});
//# sourceMappingURL=35.js.map