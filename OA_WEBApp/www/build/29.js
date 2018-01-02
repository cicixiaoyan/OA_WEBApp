webpackJsonp([29],{

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileApplicationListPageModule", function() { return FileApplicationListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_application_list__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fileApplicationService__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FileApplicationListPageModule = (function () {
    function FileApplicationListPageModule() {
    }
    FileApplicationListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__file_application_list__["a" /* FileApplicationListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__file_application_list__["a" /* FileApplicationListPage */]),
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__fileApplicationService__["a" /* FileApplicationService */]]
        })
    ], FileApplicationListPageModule);
    return FileApplicationListPageModule;
}());

//# sourceMappingURL=file-application-list.module.js.map

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileApplicationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileApplicationService = (function () {
    function FileApplicationService(httpService) {
        this.httpService = httpService;
        this.status = {
            "审批中": '审批中',
            "已同意": '已同意',
            "已拒绝": '已拒绝',
        };
    }
    FileApplicationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */]])
    ], FileApplicationService);
    return FileApplicationService;
}());

//# sourceMappingURL=fileApplicationService.js.map

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileApplicationListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileApplicationService__ = __webpack_require__(780);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileApplicationListPage = (function () {
    function FileApplicationListPage(navCtrl, navParams, popoverCtrl, fileApplicationService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.fileApplicationService = fileApplicationService;
        this.list = [];
        this.moredata = true;
        this.isEmpty = false;
        this.checkBtn = { "审批中": true, "已同意": false, "已拒绝": false };
        this.data = {
            "uid": this.fileApplicationService.httpService.globalData.Uid,
            "Status": this.fileApplicationService.status['审批中'],
            "PageIndex": 0,
            "PageSize": 8
        };
        this.getList(this.data);
    }
    // 选择
    FileApplicationListPage.prototype.checkRead = function (name) {
        if (name === void 0) { name = "审批中"; }
        this.data.PageIndex = 0;
        this.list = [];
        this.checkBtn = { "审批中": false, "已同意": false, "已拒绝": false };
        this.checkBtn[name] = true;
        if (name === "审批中") {
            // 参数设置
            this.data.Status = this.fileApplicationService.status["审批中"];
        }
        else if (name === "已同意") {
            // 参数设置
            this.data.Status = this.fileApplicationService.status["已同意"];
        }
        else {
            // 参数设置
            this.data.Status = this.fileApplicationService.status["all"];
        }
        this.getList(this.data);
    };
    FileApplicationListPage.prototype.doWrite = function () {
        this.navCtrl.push("FileApplicationAddPage");
    };
    FileApplicationListPage.prototype.doRefresh = function (refresher) {
        this.list = [];
        this.data.PageIndex = 1;
        this.getList(this.data);
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    FileApplicationListPage.prototype.doInfinite = function () {
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
    FileApplicationListPage.prototype.getList = function (data) {
        this.list = [
            {
                "Id": "1",
                "Name": '张三',
                "ApplicationDate": '2017-10-12',
                "ApplicationReason": '我是申请理由',
                "ApplicationStatus": '审批中',
                "AuditDate": "2017-12-12",
            },
            {
                "Id": "2",
                "Name": '李四',
                "ApplicationDate": '2017-10-12',
                "ApplicationReason": '我是申请理由',
                "ApplicationStatus": '已同意',
                "AuditDate": "2017-12-12",
            },
            {
                "Id": "3",
                "Name": '李四',
                "ApplicationDate": '2017-10-12',
                "ApplicationReason": '我是申请理由',
                "ApplicationStatus": '已拒绝',
                "AuditDate": "2017-12-12",
            }
        ];
        // this.fileApplicationService.getList(data).subscribe((resJson) => {
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
    FileApplicationListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-file-application-list',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\file-application\file-application-list\file-application-list.html"*/`<ion-header>\n\n    <ion-navbar>\n        <ion-title>档案申请查看</ion-title>\n    </ion-navbar>\n    <div class="subbox">\n        <div>\n            <button ion-button small (click)="checkRead(\'审批中\')" class="button-ios-light" [ngClass]="{\'button-ios-calm\':checkBtn[\'审批中\']}">审批中</button>\n            <button ion-button small (click)="checkRead(\'已同意\')" class="button-ios-light" [ngClass]="{\'button-ios-calm\':checkBtn[\'已同意\']}">已同意</button>\n            <button ion-button small (click)="checkRead(\'已拒绝\')" class="button-ios-light" [ngClass]="{\'button-ios-calm\':checkBtn[\'已拒绝\']}">已拒绝</button>\n        </div>\n    </div>\n</ion-header>\n\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="正在刷新...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ion-list>\n        <ion-item-sliding *ngFor="let item of list">\n            <ion-item>\n                <ion-avatar item-start [ngClass]="{\'success\': (item.ApplicationStatus == \'已同意\'), \'danger\': (item.ApplicationStatus == \'已拒绝\')}"><span>{{item.ApplicationStatus}}</span></ion-avatar>\n                <h2>{{item.Name}}\n                  <small float-end	 class="text-ios-primary" *ngIf="item.ApplicationStatus != \'审批中\'"><em>{{item.AuditDate}}审</em></small>\n                </h2>\n                <h3 class="small">申请日期：{{item.ApplicationDate}}</h3>\n                <p class=\'small\'>理由：{{item.ApplicationReason}}</p>\n            </ion-item>\n        </ion-item-sliding>\n    </ion-list>\n    <empty *ngIf="isEmpty"></empty>\n    <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())" [enabled]="moredata" threshold="100px">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    <ion-fab bottom right>\n        <button ion-fab color="danger" (click)="doWrite()"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n</ion-content>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\file-application\file-application-list\file-application-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__fileApplicationService__["a" /* FileApplicationService */]])
    ], FileApplicationListPage);
    return FileApplicationListPage;
}());

//# sourceMappingURL=file-application-list.js.map

/***/ })

});
//# sourceMappingURL=29.js.map