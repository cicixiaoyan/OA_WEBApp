webpackJsonp([1],{

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileApplicationReviewPageModule", function() { return FileApplicationReviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_application_review__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fileApplicationService__ = __webpack_require__(775);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tab_slide_tab_slide_module__ = __webpack_require__(816);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FileApplicationReviewPageModule = (function () {
    function FileApplicationReviewPageModule() {
    }
    FileApplicationReviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__file_application_review__["a" /* FileApplicationReviewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__file_application_review__["a" /* FileApplicationReviewPage */]),
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_tab_slide_tab_slide_module__["a" /* TabSlideModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__fileApplicationService__["a" /* FileApplicationService */]]
        })
    ], FileApplicationReviewPageModule);
    return FileApplicationReviewPageModule;
}());

//# sourceMappingURL=file-application-review.module.js.map

/***/ }),

/***/ 775:
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

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileApplicationReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileApplicationService__ = __webpack_require__(775);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileApplicationReviewPage = (function () {
    function FileApplicationReviewPage(navCtrl, navParams, popoverCtrl, fileApplicationService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.fileApplicationService = fileApplicationService;
        this.list = [];
        this.moredata = true;
        this.isEmpty = false;
        this.pageSlides = ["审批中", "已同意", "已拒绝"];
        this.data = {
            "uid": this.fileApplicationService.httpService.globalData.Uid,
            "Status": this.fileApplicationService.status['审批中'],
            "PageIndex": 0,
            "PageSize": 8
        };
        this.getList(this.data);
    }
    FileApplicationReviewPage.prototype.onSlideClick = function (i) {
        this.data.PageIndex = 0;
        this.list = [];
        if (i === 0) {
            // 参数设置
            this.data.Status = this.fileApplicationService.status["审批中"];
        }
        else if (i === 1) {
            // 参数设置
            this.data.Status = this.fileApplicationService.status["已同意"];
        }
        else {
            // 参数设置
            this.data.Status = this.fileApplicationService.status["all"];
        }
        this.getList(this.data);
    };
    FileApplicationReviewPage.prototype.doRead = function (id) {
        this.navCtrl.push("FileApplicationReviewViewPage", { "Id": id });
    };
    FileApplicationReviewPage.prototype.doRefresh = function (refresher) {
        this.list = [];
        this.data.PageIndex = 1;
        this.getList(this.data);
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    FileApplicationReviewPage.prototype.doInfinite = function () {
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
    FileApplicationReviewPage.prototype.getList = function (data) {
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
    FileApplicationReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-file-application-review',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\file-application\file-application-review\file-application-review.html"*/`<ion-header>\n\n    <ion-navbar>\n        <ion-title>档案申请审批</ion-title>\n    </ion-navbar>\n    <!-- <div class="subbox">\n        <div>\n            <button ion-button small (click)="checkRead(\'审批中\')" class="button-ios-light" [ngClass]="{\'button-ios-calm\':checkBtn[\'审批中\']}">审批中</button>\n            <button ion-button small (click)="checkRead(\'已同意\')" class="button-ios-light" [ngClass]="{\'button-ios-calm\':checkBtn[\'已同意\']}">已同意</button>\n            <button ion-button small (click)="checkRead(\'已拒绝\')" class="button-ios-light" [ngClass]="{\'button-ios-calm\':checkBtn[\'已拒绝\']}">已拒绝</button>\n        </div>\n    </div> -->\n    <div>\n        <tab-slide (slideClick)="onSlideClick($event)" [slides]="pageSlides" [pageNumber]="3"></tab-slide>\n    </div>\n</ion-header>\n\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="正在刷新...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ion-list>\n        <ion-item-sliding *ngFor="let item of list" (click)=\'doRead(item.Id)\'>\n            <ion-item>\n                <ion-avatar item-start [ngClass]="{\'success\': (item.ApplicationStatus == \'已同意\'), \'danger\': (item.ApplicationStatus == \'已拒绝\')}"><span>{{item.ApplicationStatus}}</span></ion-avatar>\n                <h2>{{item.Name}}\n                  <small float-end	 class="text-ios-primary" *ngIf="item.ApplicationStatus != \'审批中\'"><em>{{item.AuditDate}}审</em></small>\n                </h2>\n                <h3 class="small">申请日期：{{item.ApplicationDate}}</h3>\n                <p class=\'small\'>理由：{{item.ApplicationReason}}</p>\n            </ion-item>\n        </ion-item-sliding>\n    </ion-list>\n    <empty *ngIf="isEmpty"></empty>\n    <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())" [enabled]="moredata" threshold="100px">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\file-application\file-application-review\file-application-review.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__fileApplicationService__["a" /* FileApplicationService */]])
    ], FileApplicationReviewPage);
    return FileApplicationReviewPage;
}());

//# sourceMappingURL=file-application-review.js.map

/***/ }),

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabSlideModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_slide__ = __webpack_require__(817);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabSlideModule = (function () {
    function TabSlideModule() {
    }
    TabSlideModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tab_slide__["a" /* TabSlideComponent */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicModule */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tab_slide__["a" /* TabSlideComponent */]
            ]
        })
    ], TabSlideModule);
    return TabSlideModule;
}());

//# sourceMappingURL=tab-slide.module.js.map

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabSlideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabSlideComponent = (function () {
    function TabSlideComponent() {
        this.slides = []; // 显示类型的字符串数组
        this.pageNumber = 3; // 表示当前屏幕可以显示的类型数目，默认为3。
        this.slideClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */](); // 当点击某个类型时，将点击的index返回给使用者
        this.selectedIndex = 0;
    }
    TabSlideComponent.prototype.ngOnInit = function () {
        this.mySlideOptions = {
            loop: false,
            autoplay: false,
            initialSlide: 0,
            pager: false,
            slidesPerView: this.pageNumber,
            paginationHide: true,
            paginationClickable: true
        };
    };
    TabSlideComponent.prototype.onClick = function (index) {
        this.selectedIndex = index;
        this.slideClick.emit(index);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("slides"),
        __metadata("design:type", Array)
    ], TabSlideComponent.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("pageNumber"),
        __metadata("design:type", Number)
    ], TabSlideComponent.prototype, "pageNumber", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])("slideClick"),
        __metadata("design:type", Object)
    ], TabSlideComponent.prototype, "slideClick", void 0);
    TabSlideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'tab-slide',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\components\tab-slide\tab-slide.html"*/`\n\n<ion-slides class="slide-title" [slidesPerView]="pageNumber" [pager]="false">\n\n  <ion-slide *ngFor="let slide of slides; let i = index;">\n\n    <div (click)="onClick(i)" class="itab-item" [ngClass]="{\'slide-title-active\': selectedIndex == i}">\n\n      <span class="slide-title-unit" >{{slide}}</span>\n\n    </div>\n\n  </ion-slide>\n\n</ion-slides>\n\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\components\tab-slide\tab-slide.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabSlideComponent);
    return TabSlideComponent;
}());

//# sourceMappingURL=tab-slide.js.map

/***/ })

});
//# sourceMappingURL=1.js.map