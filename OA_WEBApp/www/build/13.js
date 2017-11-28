webpackJsonp([13],{

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementDetailPageModule", function() { return AnnouncementDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__announcement_detail__ = __webpack_require__(748);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AnnouncementDetailPageModule = (function () {
    function AnnouncementDetailPageModule() {
    }
    AnnouncementDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__announcement_detail__["a" /* AnnouncementDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__announcement_detail__["a" /* AnnouncementDetailPage */]),
            ],
        })
    ], AnnouncementDetailPageModule);
    return AnnouncementDetailPageModule;
}());

//# sourceMappingURL=announcement-detail.module.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(88);
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
 * Generated class for the AnnouncementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnnouncementService = (function () {
    function AnnouncementService(httpService) {
        this.httpService = httpService;
        this.announcementStatus = {
            "enter": "录入",
            "published": "已发布",
            "all": "0" // 全部
        };
    }
    AnnouncementService.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login');
    };
    AnnouncementService.prototype.getList = function (param) {
        return this.httpService.postFormData("ashx/Announcement.ashx", param)
            .map(function (res) { return res.json(); });
    };
    AnnouncementService.prototype.detail = function (key) {
        return this.httpService.postFormData("ashx/AnnouncementDetail.ashx", { "attKey": key })
            .map(function (res) { return res.json(); });
    };
    AnnouncementService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */]])
    ], AnnouncementService);
    return AnnouncementService;
}());

//# sourceMappingURL=announcementService.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_NativeService__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__announcementService__ = __webpack_require__(734);
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
 * Generated class for the AnnouncementDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnnouncementDetailPage = (function () {
    function AnnouncementDetailPage(navCtrl, navParams, announcementService, nativeService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.announcementService = announcementService;
        this.nativeService = nativeService;
        this.myDiv = '';
        this.item = this.navParams.get('item');
        this.initializeItems();
    }
    AnnouncementDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AnnouncementDetailPage');
    };
    AnnouncementDetailPage.prototype.initializeItems = function () {
        var _this = this;
        this.announcementService.detail(this.item.AnnouncementAtt).subscribe(function (resJson) {
            if (resJson.Result && resJson !== []) {
                _this.attObg = resJson.Data[0];
            }
            else {
                _this.attObg = {};
            }
        });
        this.myDiv = this.item.AnnouncementTitle;
    };
    AnnouncementDetailPage.prototype.download = function (path) {
        var target = path.split("/").pop();
        this.nativeService.download(path, target);
    };
    AnnouncementDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-announcement-detail',template:/*ion-inline-start:"F:\GithubSourceCode\OA_WEBApp\src\pages\announcement\announcement-detail\announcement-detail.html"*/`<!--\n\n  Generated template for the AnnouncementDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n      <ion-navbar>\n\n          <ion-title>公告详情</ion-title>\n\n      </ion-navbar>\n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content>\n\n      <div class="detail-header">\n\n          <div class="detail-title"><span color="calm">[{{item.AnnouncementType}}]</span>{{item.AnnouncementTitle}}</div>\n\n          <p>\n\n              {{item.AnnouncementPublishPerson}}\n\n              <span class="right">{{item.AnnouncementPublishDate|date : "yyyy年MM月dd日 hh时mm分"}}</span>\n\n          </p>\n\n      </div>\n\n      <div class="content">\n\n          <ion-scroll class="detail-content" scrollY="true" id="noticeContent">\n\n              <div padding>开始时间：{{item.AnnouncementStarDate|date : "yyyy年MM月dd日 hh时mm分"}}\n\n                  <br/>结束时间：{{item.AnnouncementEndDate|date : "yyyy年MM月dd日 hh时mm分"}}</div>\n\n              <div padding-horizontal [innerHTML]="myDiv"></div>\n\n              <div class="affix" *ngIf="attObj">\n\n                  <ion-grid>\n\n                      <ion-row align-items-center>\n\n                          <ion-col col-6 col-lg-4>\n\n                              <div (click)="download(attObj.AttNewName)">\n\n                                  <ion-icon class="affix-icon" name="md-image"></ion-icon>\n\n                                  <p>{{attObj.attName}}</p>\n\n                                  <p color="gray">大小未知</p>\n\n                                  <ion-icon class="affix-dismiss" name="ios-cloud-download-outline"></ion-icon>\n\n                              </div>\n\n                          </ion-col>\n\n                      </ion-row>\n\n                  </ion-grid>\n\n              </div>\n\n          </ion-scroll>\n\n      </div>\n\n  \n\n  \n\n  </ion-content>\n\n`/*ion-inline-end:"F:\GithubSourceCode\OA_WEBApp\src\pages\announcement\announcement-detail\announcement-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__announcementService__["a" /* AnnouncementService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_NativeService__["a" /* NativeService */]])
    ], AnnouncementDetailPage);
    return AnnouncementDetailPage;
}());

//# sourceMappingURL=announcement-detail.js.map

/***/ })

});
//# sourceMappingURL=13.js.map