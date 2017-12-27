webpackJsonp([36],{

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementDetailPageModule", function() { return AnnouncementDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__announcement_detail__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__announcementService__ = __webpack_require__(774);
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
            exports: [__WEBPACK_IMPORTED_MODULE_2__announcement_detail__["a" /* AnnouncementDetailPage */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__announcementService__["a" /* AnnouncementService */]]
        })
    ], AnnouncementDetailPageModule);
    return AnnouncementDetailPageModule;
}());

//# sourceMappingURL=announcement-detail.module.js.map

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementService; });
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

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_NativeService__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__announcementService__ = __webpack_require__(774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_FileService__ = __webpack_require__(161);
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
    function AnnouncementDetailPage(navCtrl, navParams, announcementService, fileService, nativeService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.announcementService = announcementService;
        this.fileService = fileService;
        this.nativeService = nativeService;
        this.myDiv = '';
        this.hasAtt = false;
        this.downloaded = false;
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
                _this.attObj = resJson.Data[0];
                _this.hasAtt = true;
            }
            else {
                _this.attObj = {};
            }
        });
        this.myDiv = this.item.AnnouncementTitle;
    };
    AnnouncementDetailPage.prototype.download = function (path, name) {
        var _this = this;
        var target = path.split("/").pop();
        var url = "http://192.168.0.49:789/Attach/flow/Work/201111302315473908417.pdf";
        this.fileService.download1(url, target).subscribe(function (path) {
            _this.downloaded = true;
            _this.fileService.openFile(path).subscribe(function () {
            });
        });
    };
    AnnouncementDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-announcement-detail',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\announcement\announcement-detail\announcement-detail.html"*/`<!--\n  Generated template for the AnnouncementDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n      <ion-navbar>\n          <ion-title>公告详情</ion-title>\n      </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content>\n      <div class="detail-header">\n          <div class="detail-title"><span color="calm">[{{item.AnnouncementType}}]</span>{{item.AnnouncementTitle}}</div>\n          <p>\n              {{item.AnnouncementPublishPerson}}\n              <span class="right">{{item.AnnouncementPublishDate|date : "yyyy年MM月dd日 hh时mm分"}}</span>\n          </p>\n      </div>\n      <div class="content">\n          <ion-scroll class="detail-content" scrollY="true" id="noticeContent">\n              <div padding>开始时间：{{item.AnnouncementStarDate|date : "yyyy年MM月dd日 hh时mm分"}}\n                  <br/>结束时间：{{item.AnnouncementEndDate|date : "yyyy年MM月dd日 hh时mm分"}}</div>\n              <div padding-horizontal [innerHTML]="myDiv"></div>\n              <div class="affix" *ngIf="hasAtt">\n                  <ion-grid>\n                      <ion-row align-items-center>\n                          <ion-col col-6 col-lg-4>\n                              <div (click)="download(attObj.AttNewName, attObj.AttName)">\n                                  <ion-icon class="affix-icon" name="md-image"></ion-icon>\n                                  <p>{{attObj.AttName}}</p>\n                                  <!-- <p color="gray">大小未知</p> -->\n                                  <ion-icon *ngIf="!downloaded" class="affix-dismiss" name="ios-cloud-download-outline"></ion-icon>\n                                  <ion-icon *ngIf="downloaded" class="affix-open" name="ios-folder-open-outline"></ion-icon>\n                              </div>\n                          </ion-col>\n                      </ion-row>\n                  </ion-grid>\n              </div>\n          </ion-scroll>\n      </div>\n  \n  \n  </ion-content>\n`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\announcement\announcement-detail\announcement-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__announcementService__["a" /* AnnouncementService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_FileService__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_NativeService__["a" /* NativeService */]])
    ], AnnouncementDetailPage);
    return AnnouncementDetailPage;
}());

//# sourceMappingURL=announcement-detail.js.map

/***/ })

});
//# sourceMappingURL=36.js.map