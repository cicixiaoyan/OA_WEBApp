webpackJsonp([32],{

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractRenewPageModule", function() { return ContractRenewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contract_renew__ = __webpack_require__(820);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contract_service__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ContractRenewPageModule = (function () {
    function ContractRenewPageModule() {
    }
    ContractRenewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contract_renew__["a" /* ContractRenewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contract_renew__["a" /* ContractRenewPage */]),
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__contract_service__["a" /* ContractService */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__contract_renew__["a" /* ContractRenewPage */]]
        })
    ], ContractRenewPageModule);
    return ContractRenewPageModule;
}());

//# sourceMappingURL=contract-renew.module.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_HttpService__ = __webpack_require__(61);
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
var ContractService = (function () {
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

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractRenewPage; });
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



var ContractRenewPage = (function () {
    function ContractRenewPage(navCtrl, navParams, popoverCtrl, contractService) {
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
    ContractRenewPage.prototype.ionViewDidLoad = function () {
    };
    ContractRenewPage.prototype.presentPopover = function (myEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create("ContractSearchSeparatePage", { "search": this.search, 'name': '续签' });
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
    ContractRenewPage.prototype.doRead = function (id) {
        this.navCtrl.push("ContractRenewViewPage", { "Id": id });
    };
    ContractRenewPage.prototype.doWrite = function () {
        this.navCtrl.push("ContractRenewViewPage");
        // let modal = this.modalCtrl.create("TrainingMaintenanceSetPage");
        // modal.present();
        // modal.onDidDismiss(data => {
        //     data && console.log(data);
        // });
    };
    ContractRenewPage.prototype.delete = function (index) {
        var id = this.list[index].Id;
        this.list.splice(index, 1);
    };
    ContractRenewPage.prototype.doRefresh = function (refresher) {
        this.list = [];
        this.data.PageIndex = 1;
        this.getList(this.data);
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    ContractRenewPage.prototype.doInfinite = function () {
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
    ContractRenewPage.prototype.getList = function (data) {
        this.list = [
            {
                "Id": "1",
                "Name": '张三',
                "Code": "A012345677",
                "Dept": '检验科',
                "RenewType": '合同延期',
                "RenewDate": '2017-12-27'
            },
            {
                "Id": "2",
                "Name": '李四',
                "Code": "A012345688",
                "Dept": '其他科',
                "RenewType": '其他原因',
                "RenewDate": '2017-12-27'
            }
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
    ContractRenewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contract-renew',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\contract\contract-renew\contract-renew.html"*/`<ion-header>\n\n    <ion-navbar>\n        <ion-title>合同续签</ion-title>\n        <ion-buttons end (click)="presentPopover($event)">\n            <button ion-button icon-only>\n            <ion-icon name="search"></ion-icon>\n          </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="正在刷新...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ion-list>\n        <ion-item-sliding *ngFor="let item of list; index as i" (click)="doRead(item.Id)">\n            <ion-item>\n                <h2>{{item.Name}}<span class="text-ios-royal">[{{item.Code}}]</span></h2>\n                <div class="small">部门：{{item.Dept}}&emsp; <span float-right color=\'energized\'>{{item.RenewType}}</span></div>\n                <p class="small">续签时间：{{item.RenewDate}}</p>\n            </ion-item>\n            <ion-item-options side="right">\n                <button ion-button color="primary" (click)=\'delete(index)\'>\n                    <ion-icon name="md-trash"></ion-icon>删除\n                </button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n    <empty *ngIf="isEmpty"></empty>\n    <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())" [enabled]="moredata" threshold="100px">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    <ion-fab bottom right>\n        <button ion-fab color="danger" (click)="doWrite()"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n</ion-content>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\contract\contract-renew\contract-renew.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__contract_service__["a" /* ContractService */]])
    ], ContractRenewPage);
    return ContractRenewPage;
}());

//# sourceMappingURL=contract-renew.js.map

/***/ })

});
//# sourceMappingURL=32.js.map