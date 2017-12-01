webpackJsonp([35],{

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsModule", function() { return ContactsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts__ = __webpack_require__(751);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactsModule = (function () {
    function ContactsModule() {
    }
    ContactsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contacts__["a" /* Contacts */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contacts__["a" /* Contacts */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__contacts__["a" /* Contacts */]
            ]
        })
    ], ContactsModule);
    return ContactsModule;
}());

//# sourceMappingURL=contacts.module.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contacts; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
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



// import { ContactsDetail } from './contacts-detail/contacts-detail';
/**
 * Generated class for the Contacts page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Contacts = (function () {
    function Contacts(navCtrl, navParams, httpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nxPage = "ContactsDetail";
        this.params = { id: 42 };
        this.page = 1;
        this.size = 1;
        this.moredata = true;
        this.isEmpty = false;
        this.initializeItems();
    }
    Contacts.prototype.doRefresh = function (refresher) {
        this.page = 1;
        this.size = 1;
        this.initializeItems();
        setTimeout(function () {
            console.log('数据加载完成');
            refresher.complete();
        }, 2000);
    };
    Contacts.prototype.doInfinite = function () {
        var _this = this;
        if (this.moredata) {
            this.size++;
            var data = { page: this.page, size: this.size };
            this.getList(data).subscribe(function (resJson) {
                if (resJson.Result && resJson.Result !== []) {
                    _this.items = _this.items.concat(resJson.Data);
                }
                else {
                    _this.moredata = false;
                }
            });
        }
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve();
            }, 500);
        });
    };
    Contacts.prototype.initializeItems = function () {
        var _this = this;
        this.getList().subscribe(function (resJson) {
            if (resJson.Result && resJson.Result !== []) {
                _this.items = resJson.Data;
                _this.isEmpty = false;
            }
            else {
                _this.isEmpty = true;
                _this.moredata = false;
                _this.httpService.nativeService.showToast(resJson.Data || "无数据");
            }
        });
        // let data={action: "Yh_List", page: 1, size: 1};
        // this.httpService.postFormData("ashx/MailList.ashx/Yh_List",data)
        //   .map(Response => Response.json())
        //   .subscribe(list => {
        //     this.items = list;
        //   });
        // 假数据
        // this.items = [
        //        {"ui_id":"admin","ui_desc":"系统管理员","ui_sex":"男","ui_lx":"总部","zwmc":"员工"},
        //        {"ui_id":"admin1","ui_desc":"系统管理员1","ui_sex":"男","ui_lx":"总部","zwmc":"员工1"},
        //        {"ui_id":"admin2","ui_desc":"系统管理员2","ui_sex":"男","ui_lx":"总部","zwmc":"员工2"},
        //        {"ui_id":"admin3","ui_desc":"系统管理员3","ui_sex":"男","ui_lx":"总部","zwmc":"员工3"},
        //     ];
    };
    Contacts.prototype.getList = function (data) {
        data = !!data ? data : { page: 1, size: 1 };
        return this.httpService.postFormData("ashx/UserSheet.ashx", data).map(function (Response) { return Response.json(); });
    };
    Contacts.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Contacts');
    };
    Contacts.prototype.search = function (refresher) {
        var _this = this;
        console.log(this.searchKey);
        this.initializeItems();
        return this.httpService.postFormData("ashx/UserSheet.ashx", { "Name": this.searchKey })
            .map(function (Response) { return Response.json(); })
            .subscribe(function (resJson) {
            if (resJson.Result) {
                _this.items = resJson.Data;
                _this.isEmpty = false;
            }
            else {
                _this.items = [];
                _this.isEmpty = true;
                _this.moredata = false;
            }
        });
        // setTimeout(() => {
        //   console.log('数据加载完成');
        //   refresher.complete();
        // }, 2000);
    };
    Contacts = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contacts',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\home\contacts\contacts.html"*/`<!--\n\n  Generated template for the Contacts page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>通讯录</ion-title>\n\n    </ion-navbar>\n\n    <ion-searchbar color="dark" type="text" placeholder="请输入姓名" [(ngModel)]="searchKey" [showCancelButton]="true" cancelButtonText="搜索" (ionCancel)="search($event)">\n\n    </ion-searchbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="正在刷新...">\n\n        </ion-refresher-content>\n\n    </ion-refresher>\n\n    <!--<ion-refresher on-refresh="doRefresh()"></ion-refresher>-->\n\n    <ion-list inset style="margin:16px 0;">\n\n        <button ion-item *ngFor="let contact of items" [navPush]="nxPage" [navParams]="{id:contact.Uid}">\n\n            <span>{{contact.Name}}({{contact.Uid}})</span>\n\n            <p>{{contact.Dept}}&emsp;{{contact.Duty}}</p>\n\n        </button>\n\n    </ion-list>\n\n    <div *ngIf="isEmpty" text-center padding style="font-size:.9em;">\n\n        <div padding>未搜索到信息！！！</div>\n\n        <img src="assets/img/face/face2.png" height="100">\n\n    </div>\n\n    <!--<ion-infinite-scroll ng-if="moredata" on-infinite="loadMore()" distance="10%"></ion-infinite-scroll>-->\n\n    <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())" [enabled]="moredata" threshold="100px">\n\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中..."></ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n</ion-content>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\home\contacts\contacts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */]])
    ], Contacts);
    return Contacts;
}());

//# sourceMappingURL=contacts.js.map

/***/ })

});
//# sourceMappingURL=35.js.map