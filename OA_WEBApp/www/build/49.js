webpackJsonp([49],{

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobTypesSetPageModule", function() { return JobTypesSetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_types_set__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var JobTypesSetPageModule = (function () {
    function JobTypesSetPageModule() {
    }
    JobTypesSetPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__job_types_set__["a" /* JobTypesSetPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__job_types_set__["a" /* JobTypesSetPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__job_types_set__["a" /* JobTypesSetPage */]]
        })
    ], JobTypesSetPageModule);
    return JobTypesSetPageModule;
}());

//# sourceMappingURL=job-types-set.module.js.map

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobTypesSetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Observable';
// import { HttpService } from "../../../providers/HttpService";
/**
 * Generated class for the JobTypesSetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JobTypesSetPage = (function () {
    function JobTypesSetPage(navCtrl, navParams, 
        // private httpService: HttpService,
        modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.list = [];
        this.moredata = true;
        this.isEmpty = false;
        this.data = {
            "PageIndex": 0,
            "PageSize": 8
        };
        this.getList(this.data);
    }
    JobTypesSetPage.prototype.ionViewDidLoad = function () {
    };
    JobTypesSetPage.prototype.doRead = function (Params) {
        var modal = this.modalCtrl.create("JobTypesSetAddPage", { "id": Params });
        modal.present();
        modal.onDidDismiss(function (data) {
            data && console.log(data);
        });
    };
    JobTypesSetPage.prototype.doWrite = function () {
        var modal = this.modalCtrl.create("JobTypesSetAddPage");
        modal.present();
        modal.onDidDismiss(function (data) {
            data && console.log(data);
        });
        // this.navCtrl.push(MailWrite);
    };
    JobTypesSetPage.prototype.doRefresh = function (refresher) {
        this.list = [];
        this.data.PageIndex = 0;
        this.getList(this.data);
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    JobTypesSetPage.prototype.doInfinite = function () {
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
    JobTypesSetPage.prototype.getList = function (data) {
        this.list = [
            {
                "Id": 1,
                "Name": '工种名称1',
                "Category": '教务人员	',
                "Remarks": ''
            },
            {
                "Id": 2,
                "Name": '工种名称2',
                "Category": '后勤人员	',
                "Remarks": '我是备注'
            },
        ];
        // this.httpService.postFormData("", data)
        // .map((res: Response) => res.json())
        // .subscribe((resJson) => {
        //   if (resJson.Result  &&  resJson.Data.length !== 0 && (resJson.Data instanceof Array)){
        //     this.moredata = true;
        //     this.isEmpty = false;
        //     let list = resJson.Data;
        //     this.list = [...this.list, ...list];
        //   }else{
        //     this.moredata = false;
        //     this.isEmpty = (this.data.PageIndex == 0) ? true : false;
        //   }
        // });
    };
    JobTypesSetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-job-types-set',template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\job-types-set\job-types-set.html"*/`<ion-header>\n\n    <ion-navbar>\n        <ion-title>工种设置</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="正在刷新...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ion-list>\n        <ion-item *ngFor="let item of list " (click)="doRead(item.Id)">\n            <span>{{item.Name}}</span>\n            <p class="font-12">所属分类：{{item.Category}}	</p>\n            <p class="font-12" *ngIf="item.Remarks !== \'\'">{{item.Remarks}}</p>\n        </ion-item>\n    </ion-list>\n    <empty *ngIf="isEmpty"></empty>\n    <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())" [enabled]="moredata" threshold="100px">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    <ion-fab bottom right>\n        <button ion-fab color="danger" (click)="doWrite()"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n</ion-content>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\pages\hr-management\job-types-set\job-types-set.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */]])
    ], JobTypesSetPage);
    return JobTypesSetPage;
}());

//# sourceMappingURL=job-types-set.js.map

/***/ })

});
//# sourceMappingURL=49.js.map