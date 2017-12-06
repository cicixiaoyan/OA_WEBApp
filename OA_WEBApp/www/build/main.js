webpackJsonp([53],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GlobalData__ = __webpack_require__(61);
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
 * Utils类存放和业务无关的公共方法
 * @description
 */
var Logger = (function () {
    function Logger(globalData) {
        this.globalData = globalData;
    }
    Logger.prototype.log = function (err, action, other) {
        if (other === void 0) { other = null; }
        console.log('Logger.log：action-' + action);
        other && console.log(other);
        console.log(err);
        fundebug.notifyError(err, {
            metaData: {
                action: action,
                other: other,
                user: { id: this.globalData.Uid, name: this.globalData.Name }
            }
        });
    };
    Logger.prototype.httpLog = function (err, msg, other) {
        if (other === void 0) { other = {}; }
        console.log('Logger.httpLog：msg-' + msg);
        fundebug.notifyHttpError(err, {
            metaData: {
                action: msg,
                other: other,
                user: { id: this.globalData.Uid, name: this.globalData.Name }
            }
        });
    };
    Logger = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__GlobalData__["a" /* GlobalData */]])
    ], Logger);
    return Logger;
}());

//# sourceMappingURL=Logger.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HttpService__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Constants__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__NativeService__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_chooser__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Utils__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_opener__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { Transfer, FileUploadOptions, TransferObject, } from '@ionic-native/file-transfer';




/**
 * 上传图片到文件服务器
 */
var FileService = (function () {
    function FileService(httpService, nativeService, alertCtrl, 
        // private transfer: Transfer,
        fileChooser, file, fileTransfer, fileOpener) {
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.alertCtrl = alertCtrl;
        this.fileChooser = fileChooser;
        this.file = file;
        this.fileTransfer = fileTransfer;
        this.fileOpener = fileOpener;
    }
    FileService_1 = FileService;
    /**
     * 根据文件id获取文件信息
     * @param id
     * @returns {FileObj}
     */
    FileService.prototype.getFileInfoById = function (id) {
        var _this = this;
        if (!id) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].never();
        }
        return this.httpService.get(__WEBPACK_IMPORTED_MODULE_3__Constants__["e" /* FILE_SERVE_URL */] + '/getById', { id: id }).map(function (res) {
            var result = res.json();
            if (!result.success) {
                _this.nativeService.showToast(result.msg, 800);
                return {};
            }
            else {
                var fileObj = result.data;
                fileObj.origPath = __WEBPACK_IMPORTED_MODULE_3__Constants__["e" /* FILE_SERVE_URL */] + fileObj.origPath;
                fileObj.thumbPath = __WEBPACK_IMPORTED_MODULE_3__Constants__["e" /* FILE_SERVE_URL */] + fileObj.thumbPath;
                return fileObj;
            }
        });
    };
    /**
     * 根据文件id数组获取文件信息
     * @param ids
     * @returns {FileObj[]}
     */
    FileService.prototype.getFileInfoByIds = function (ids) {
        var _this = this;
        if (!ids || ids.length == 0) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].of([]);
        }
        return this.httpService.get(__WEBPACK_IMPORTED_MODULE_3__Constants__["e" /* FILE_SERVE_URL */] + '/getByIds', { ids: ids }).map(function (res) {
            var result = res.json();
            if (!result.success) {
                _this.nativeService.showToast(result.msg, 800);
                return [];
            }
            else {
                for (var _i = 0, _a = result.data; _i < _a.length; _i++) {
                    var fileObj = _a[_i];
                    fileObj.origPath = __WEBPACK_IMPORTED_MODULE_3__Constants__["e" /* FILE_SERVE_URL */] + fileObj.origPath;
                    fileObj.thumbPath = __WEBPACK_IMPORTED_MODULE_3__Constants__["e" /* FILE_SERVE_URL */] + fileObj.thumbPath;
                }
                return result.data;
            }
        });
    };
    /**
     * 批量上传图片,只支持上传base64字符串
     * @param fileObjList 数组中的对象必须包含bse64属性
     * @returns {FileObj[]}
     */
    FileService.prototype.uploadMultiByBase64 = function (fileObjList) {
        var _this = this;
        if (!fileObjList || fileObjList.length == 0) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].of([]);
        }
        return this.httpService.post(__WEBPACK_IMPORTED_MODULE_3__Constants__["e" /* FILE_SERVE_URL */] + '/ashx/appUpload.aspx', fileObjList).map(function (res) {
            var result = res.json();
            if (!result.success) {
                _this.nativeService.showToast(result.msg, 800);
                return [];
            }
            else {
                for (var _i = 0, _a = result.data; _i < _a.length; _i++) {
                    var fileObj = _a[_i];
                    fileObj.origPath = __WEBPACK_IMPORTED_MODULE_3__Constants__["e" /* FILE_SERVE_URL */] + fileObj.origPath;
                    fileObj.thumbPath = __WEBPACK_IMPORTED_MODULE_3__Constants__["e" /* FILE_SERVE_URL */] + fileObj.thumbPath;
                }
                return result.data;
            }
        });
    };
    /**
     * 上传单张图片,只支持上传base64字符串
     * @param fileObj 对象必须包含origPath属性
     * @returns {FileObj}
     */
    FileService.prototype.uploadByBase64 = function (fileObj) {
        var _this = this;
        if (!fileObj.base64) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].never();
        }
        return this.httpService.post(__WEBPACK_IMPORTED_MODULE_3__Constants__["e" /* FILE_SERVE_URL */] + '/ashx/appUpload.aspx', [fileObj]).map(function (res) {
            var result = res.json();
            if (!result.success) {
                _this.nativeService.showToast(result.msg, 800);
                return [];
            }
            else {
                var fileObj_1 = result.data[0];
                fileObj_1.origPath = __WEBPACK_IMPORTED_MODULE_3__Constants__["e" /* FILE_SERVE_URL */] + fileObj_1.origPath;
                fileObj_1.thumbPath = __WEBPACK_IMPORTED_MODULE_3__Constants__["e" /* FILE_SERVE_URL */] + fileObj_1.thumbPath;
                return fileObj_1;
            }
        });
    };
    /**
     * 批量上传图片
     * @param fileObjList 数组中的对象必须包含origPath属性
     * @returns {FileObj[]}
     */
    FileService.prototype.uploadMultiByFilePath = function (fileObjList) {
        var _this = this;
        if (fileObjList.length == 0) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].of([]);
        }
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].create(function (observer) {
            _this.nativeService.showLoading();
            var fileObjs = [];
            var _loop_1 = function (fileObj) {
                _this.nativeService.convertImgToBase64(fileObj.origPath).subscribe(function (base64) {
                    fileObjs.push({
                        'base64': base64,
                        'type': FileService_1.getFileType(fileObj.origPath),
                        'parameter': fileObj.parameter
                    });
                    if (fileObjs.length === fileObjList.length) {
                        _this.uploadMultiByBase64(fileObjs).subscribe(function (res) {
                            observer.next(res);
                            _this.nativeService.hideLoading();
                        });
                    }
                });
            };
            for (var _i = 0, fileObjList_1 = fileObjList; _i < fileObjList_1.length; _i++) {
                var fileObj = fileObjList_1[_i];
                _loop_1(fileObj);
            }
        });
    };
    /**
     * app上传单张图片
     * @param fileObj 对象必须包含origPath属性
     * @returns {FileObj}
     */
    FileService.prototype.uploadByFilePath = function (fileObj) {
        var _this = this;
        if (!fileObj.origPath) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].never();
        }
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].create(function (observer) {
            _this.nativeService.showLoading();
            _this.nativeService.convertImgToBase64(fileObj.origPath).subscribe(function (base64) {
                var file = ({
                    'base64': base64,
                    'type': FileService_1.getFileType(fileObj.origPath),
                    'parameter': fileObj.parameter
                });
                _this.uploadByBase64(file).subscribe(function (res) {
                    observer.next(res);
                    _this.nativeService.hideLoading();
                });
            });
        });
    };
    FileService.getFileType = function (path) {
        return path.substring(path.lastIndexOf('.') + 1);
    };
    /**
     * app上传附件
     *
     */
    FileService.prototype.uploadAffix = function (type) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].create(function (observer) {
            _this.fileChooser.open().then(function (fileURL) {
                var mimeType = fileURL.toLowerCase().split(".").splice(-1)[0];
                var pathOption = {
                    "fileKey": "file",
                    "fileName": fileURL.substr(fileURL.lastIndexOf('/') + 1),
                    "mimeType": __WEBPACK_IMPORTED_MODULE_7__Utils__["a" /* Utils */].getFileMimeType(mimeType),
                    "headers": {
                        "Connection": "close"
                    },
                    "chunkedMode": false,
                    "httpMethod": "POST",
                    "params": { "token": _this.httpService.globalData.token, "type": type }
                };
                var url = encodeURI(__WEBPACK_IMPORTED_MODULE_3__Constants__["e" /* FILE_SERVE_URL */] + "ashx/AttachUpload.ashx");
                var alert = _this.alertCtrl.create({
                    title: '上传进度：0%',
                    enableBackdropDismiss: false,
                    buttons: ['后台上传']
                });
                alert.present();
                var fileTransfer = _this.fileTransfer.create();
                fileTransfer.onProgress(function (event) {
                    var num = Math.floor(event.loaded / event.total * 100);
                    if (num === 100) {
                        alert.dismiss();
                    }
                    else {
                        var title = document.getElementsByClassName('alert-title')[0];
                        title && (title.innerHTML = '上传进度：' + url + event.loaded + " " + event.total + '%');
                    }
                });
                fileTransfer.upload(fileURL, url, pathOption, true).then(function (data) {
                    alert.dismiss();
                    observer.next(data);
                }, function (err) {
                    console.log(err);
                    alert.dismiss();
                    _this.nativeService.showToast(err);
                    observer.next(err);
                });
            });
        });
    };
    FileService.prototype.download = function (url, name) {
        var _this = this;
        var fileTransfer = this.fileTransfer.create();
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].create(function (observer) {
            fileTransfer.download(url, _this.file.dataDirectory + name).then(function (entry) {
                if (entry.Response == "200")
                    observer.next(entry);
            }, function (error) {
                observer.next(error);
                // handle error
            });
        });
    };
    /**
     * 下载
     */
    FileService.prototype.download1 = function (source, target, trustAllHosts, Optional) {
        var alert = this.alertCtrl.create({
            title: '下载进度：0%',
            enableBackdropDismiss: false,
            buttons: ['后台下载']
        });
        alert.present();
        var fileTransfer = this.fileTransfer.create();
        // target = this.file.dataDirectory + target; // 文件保存的目录
        target = this.file.dataDirectory + target;
        console.log(target);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].create(function (observer) {
            fileTransfer.download(encodeURI(source), target).then(function (entry) {
                console.log('download complete: ' + entry.toURL());
                observer.next(entry.toURL());
            }, function (error) {
                console.log(error);
            });
            fileTransfer.onProgress(function (event) {
                var num = Math.floor(event.loaded / event.total * 100);
                if (num === 100) {
                    alert.dismiss();
                }
                else {
                    var title = document.getElementsByClassName('alert-title')[0];
                    title && (title.innerHTML = '下载进度：' + num + '%');
                }
            });
        });
    };
    /*
    ** 打开文件
    */
    FileService.prototype.openFile = function (path) {
        var _this = this;
        var mimeType = path.toLowerCase().split(".").splice(-1)[0];
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].create(function (observer) {
            _this.fileOpener.open(path, __WEBPACK_IMPORTED_MODULE_7__Utils__["a" /* Utils */].getFileMimeType(mimeType))
                .then(function () { return observer.next(); })
                .catch(function (e) { return console.log('Error openening file', e); });
        });
    };
    FileService = FileService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__HttpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_5__NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_opener__["a" /* FileOpener */]])
    ], FileService);
    return FileService;
    var FileService_1;
}());

//# sourceMappingURL=FileService.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_HttpService__ = __webpack_require__(89);
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
var LoginService = (function () {
    function LoginService(httpService) {
        this.httpService = httpService;
    }
    LoginService.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login');
    };
    LoginService.prototype.login = function (user) {
        return this.httpService.noTokenPostFormData("ashx/Login.ashx", user).map(function (responce) { return responce.json(); });
        // return Observable.create((observer) => {
        //   observer.next(userInfo);
        // });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_HttpService__["a" /* HttpService */]])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=LoginService.js.map

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 174;

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/aboutus/aboutus.module": [
		707,
		52
	],
	"../pages/account/account-edit/account-edit.module": [
		708,
		31
	],
	"../pages/account/account-passwordedit/account-passwordedit.module": [
		709,
		51
	],
	"../pages/account/account.module": [
		710,
		30
	],
	"../pages/announcement/announcement-detail/announcement-detail.module": [
		711,
		29
	],
	"../pages/announcement/announcement.module": [
		712,
		28
	],
	"../pages/car/car-add/car-add.module": [
		713,
		27
	],
	"../pages/car/car-read/car-read.module": [
		714,
		26
	],
	"../pages/car/car.module": [
		715,
		25
	],
	"../pages/car/driver/driver-set/driver-set.module": [
		716,
		24
	],
	"../pages/car/driver/driver.module": [
		717,
		23
	],
	"../pages/contacts-popover/contacts-popover.module": [
		718,
		50
	],
	"../pages/getmobile-popover/getmobile-popover.module": [
		719,
		49
	],
	"../pages/home/backlog/backlog-detail/backlog-detail.module": [
		702,
		22
	],
	"../pages/home/backlog/backlog.module": [
		703,
		21
	],
	"../pages/home/contacts/contacts-detail/contacts-detail.module": [
		704,
		48
	],
	"../pages/home/contacts/contacts.module": [
		705,
		47
	],
	"../pages/home/home.module": [
		720,
		0
	],
	"../pages/home/newwork/newwork-detail/newwork-detail.module": [
		721,
		46
	],
	"../pages/home/newwork/newwork.module": [
		722,
		45
	],
	"../pages/hr-management/job-types-set/job-types-set-add/job-types-set-add.module": [
		723,
		44
	],
	"../pages/hr-management/job-types-set/job-types-set.module": [
		724,
		43
	],
	"../pages/hr-management/staff-file-maintenance/staff-file-maintenance-basic-imfornation/staff-file-maintenance-basic-imfornation.module": [
		725,
		42
	],
	"../pages/hr-management/staff-file-maintenance/staff-file-maintenance-education/staff-file-maintenance-education.module": [
		726,
		41
	],
	"../pages/hr-management/staff-file-maintenance/staff-file-maintenance-set/staff-file-maintenance-set.module": [
		727,
		40
	],
	"../pages/hr-management/staff-file-maintenance/staff-file-maintenance-social-relationship/staff-file-maintenance-social-relationship.module": [
		728,
		39
	],
	"../pages/hr-management/staff-file-maintenance/staff-file-maintenance-work-experience/staff-file-maintenance-work-experience-add/staff-file-maintenance-work-experience-add.module": [
		729,
		38
	],
	"../pages/hr-management/staff-file-maintenance/staff-file-maintenance-work-experience/staff-file-maintenance-work-experience.module": [
		730,
		37
	],
	"../pages/hr-management/staff-file-maintenance/staff-file-maintenance.module": [
		731,
		36
	],
	"../pages/hr-management/training-maintenance/training-maintenance-search/training-maintenance-search.module": [
		732,
		35
	],
	"../pages/hr-management/training-maintenance/training-maintenance-set/training-maintenance-set.module": [
		733,
		20
	],
	"../pages/hr-management/training-maintenance/training-maintenance.module": [
		734,
		19
	],
	"../pages/login/find-password/find-password.module": [
		706,
		34
	],
	"../pages/login/login.module": [
		735,
		1
	],
	"../pages/mail/mail-read/mail-read.module": [
		736,
		18
	],
	"../pages/mail/mail-write/mail-write.module": [
		737,
		17
	],
	"../pages/mail/mail.module": [
		738,
		16
	],
	"../pages/meeting/meeting-edit/meeting-edit.module": [
		739,
		15
	],
	"../pages/meeting/meeting-minutes/meeting-minutes.module": [
		740,
		14
	],
	"../pages/meeting/meeting-room/meeting-room-set/meeting-room-set.module": [
		741,
		13
	],
	"../pages/meeting/meeting-room/meeting-room.module": [
		742,
		12
	],
	"../pages/meeting/meeting-search/meeting-search.module": [
		743,
		11
	],
	"../pages/meeting/meeting-write/meeting-write.module": [
		744,
		10
	],
	"../pages/meeting/meeting.module": [
		745,
		9
	],
	"../pages/message/message-read-out/message-read-out.module": [
		746,
		8
	],
	"../pages/message/message-read/message-read.module": [
		747,
		7
	],
	"../pages/message/message-write/message-write.module": [
		748,
		6
	],
	"../pages/message/message.module": [
		749,
		5
	],
	"../pages/sms/sms-read/sms-read.module": [
		750,
		4
	],
	"../pages/sms/sms-write/sms-write.module": [
		751,
		3
	],
	"../pages/sms/sms.module": [
		752,
		2
	],
	"../pages/tabs/tabs.module": [
		753,
		33
	],
	"../pages/welcome/welcome.module": [
		754,
		32
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 219;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpInterceptHandle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NativeService__ = __webpack_require__(45);
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
 * Created by yanxiaojun617@163.com on 2-25.
 */



var HttpInterceptHandle = (function () {
    function HttpInterceptHandle(events, nativeService) {
        this.events = events;
        this.nativeService = nativeService;
        events.subscribe('request:before', function (url, options) {
            nativeService.showLoading();
            console.log('%c 请求前 %c', 'color:blue', '', 'url', url, 'options', options);
        });
        events.subscribe('request:success', function (url, options, res) {
            nativeService.hideLoading();
            console.log('%c 请求成功 %c', 'color:green', '', 'url', url, 'options', options, 'res', res);
        });
        events.subscribe('request:error', function (url, options, error) {
            nativeService.hideLoading();
            console.log('%c 请求失败 %c', 'color:red', '', 'url', url, 'options', options, 'error', error);
            var status = error.status;
            if (status === 0) {
                nativeService.showToast('请求响应错误，请检查网络');
            }
            else if (status === 404) {
                nativeService.showToast('请求链接不存在，请联系管理员');
            }
            else if (status === 500) {
                nativeService.showToast('服务器出错，请稍后再试');
            }
            else {
                nativeService.showToast('未知错误，请检查网络');
            }
        });
    }
    HttpInterceptHandle = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* Events */], __WEBPACK_IMPORTED_MODULE_2__NativeService__["a" /* NativeService */]])
    ], HttpInterceptHandle);
    return HttpInterceptHandle;
}());

//# sourceMappingURL=HttpInterceptHandle.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__empty_empty__ = __webpack_require__(678);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__empty_empty__["a" /* EmptyComponent */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__empty_empty__["a" /* EmptyComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackButtonService; });
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


var BackButtonService = (function () {
    // 构造函数 依赖注入
    function BackButtonService(platform, appCtrl, toastCtrl) {
        this.platform = platform;
        this.appCtrl = appCtrl;
        this.toastCtrl = toastCtrl;
        // 控制硬件返回按钮是否触发，默认false
        this.backButtonPressed = false;
    }
    // 注册方法
    BackButtonService.prototype.registerBackButtonAction = function (tabRef) {
        var _this = this;
        // registerBackButtonAction是系统自带的方法
        this.platform.registerBackButtonAction(function () {
            // 获取NavController
            var activeNav = _this.appCtrl.getActiveNav();
            // 如果可以返回上一页，则执行pop
            if (activeNav.canGoBack()) {
                activeNav.pop();
            }
            else {
                if (tabRef == null || tabRef._selectHistory[tabRef._selectHistory.length - 1] === tabRef.getByIndex(0).id) {
                    // 执行退出
                    _this.showExit();
                }
                else {
                    // 选择首页第一个的标签
                    tabRef.select(0);
                }
            }
        });
    };
    // 退出应用方法
    BackButtonService.prototype.showExit = function () {
        var _this = this;
        // 如果为true，退出
        if (this.backButtonPressed) {
            this.platform.exitApp();
        }
        else {
            // 第一次按，弹出Toast
            this.toastCtrl.create({
                message: '再按一次退出应用',
                duration: 2000,
                position: 'top'
            }).present();
            // 标记为true
            this.backButtonPressed = true;
            // 两秒后标记为false，如果退出的话，就不会执行了
            setTimeout(function () { return _this.backButtonPressed = false; }, 2000);
        }
    };
    BackButtonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ToastController */]])
    ], BackButtonService);
    return BackButtonService;
}());

//# sourceMappingURL=backButtonService.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(372);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FunDebugErrorHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_LoginService__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_app_version__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_toast__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_chooser__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_opener__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_transfer__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_in_app_browser__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_network__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_image_picker__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_photo_viewer__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_NativeService__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_HttpIntercept__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_HttpService__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_FileService__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_Helper__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_Utils__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_http__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_HttpInterceptHandle__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_GlobalData__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_backButtonService__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_components_module__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_Logger__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__itransitions__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_Constants__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
































// 安装依赖:cnpm i fundebug-javascript --save
// https://docs.fundebug.com/notifier/javascript/framework/ionic2.html

var fundebug = __webpack_require__(701);
fundebug.apikey = __WEBPACK_IMPORTED_MODULE_32__providers_Constants__["f" /* FUNDEBUG_API_KEY */];
fundebug.releasestage = __WEBPACK_IMPORTED_MODULE_32__providers_Constants__["h" /* IS_DEBUG */] ? 'development' : 'production'; // 应用开发阶段，development:开发;production:生产
fundebug.silent = !__WEBPACK_IMPORTED_MODULE_32__providers_Constants__["d" /* ENABLE_FUNDEBUG */]; // 如果暂时不需要使用Fundebug，将silent属性设为true
var FunDebugErrorHandler = (function () {
    function FunDebugErrorHandler() {
    }
    FunDebugErrorHandler.prototype.handleError = function (err) {
        fundebug.notifyError(err);
        console.error(err);
    };
    return FunDebugErrorHandler;
}());

var AppModule = (function () {
    function AppModule(config) {
        this.config = config;
        this.setCustomTransitions();
    }
    AppModule.prototype.setCustomTransitions = function () {
        this.config.setTransition('modal-from-right-enter', __WEBPACK_IMPORTED_MODULE_31__itransitions__["a" /* ModalFromRightEnter */]);
        this.config.setTransition('modal-from-right-leave', __WEBPACK_IMPORTED_MODULE_31__itransitions__["b" /* ModalFromRightLeave */]);
        this.config.setTransition('modal-scale-enter', __WEBPACK_IMPORTED_MODULE_31__itransitions__["c" /* ModalScaleEnter */]);
        this.config.setTransition('modal-scale-leave', __WEBPACK_IMPORTED_MODULE_31__itransitions__["d" /* ModalScaleLeave */]);
    };
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    iconMode: 'ios',
                    mode: 'ios',
                    tabsHideOnSubPages: true
                }, {
                    links: [
                        { loadChildren: '../pages/account/aboutus/aboutus.module#AboutusPageModule', name: 'AboutusPage', segment: 'aboutus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/account-edit/account-edit.module#AccountEditModule', name: 'AccountEdit', segment: 'account-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/account-passwordedit/account-passwordedit.module#AccountPasswordeditModule', name: 'AccountPasswordedit', segment: 'account-passwordedit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/account.module#AccountModule', name: 'Account', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/announcement/announcement-detail/announcement-detail.module#AnnouncementDetailPageModule', name: 'AnnouncementDetailPage', segment: 'announcement-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/announcement/announcement.module#AnnouncementPageModule', name: 'AnnouncementPage', segment: 'announcement', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car/car-add/car-add.module#CarAddPageModule', name: 'CarAddPage', segment: 'car-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car/car-read/car-read.module#CarReadPageModule', name: 'CarReadPage', segment: 'car-read', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car/car.module#CarPageModule', name: 'CarPage', segment: 'car', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car/driver/driver-set/driver-set.module#DriverSetPageModule', name: 'DriverSetPage', segment: 'driver-set', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car/driver/driver.module#DriverPageModule', name: 'DriverPage', segment: 'driver', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contacts-popover/contacts-popover.module#ContactsPopoverPageModule', name: 'ContactsPopoverPage', segment: 'contacts-popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/getmobile-popover/getmobile-popover.module#GetmobilePopoverPageModule', name: 'GetmobilePopoverPage', segment: 'getmobile-popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/backlog/backlog-detail/backlog-detail.module#BacklogDetailModule', name: 'BacklogDetail', segment: 'backlog-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/backlog/backlog.module#BacklogModule', name: 'Backlog', segment: 'backlog', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/contacts/contacts-detail/contacts-detail.module#ContactsDetailModule', name: 'ContactsDetail', segment: 'contacts-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/contacts/contacts.module#ContactsModule', name: 'Contacts', segment: 'contacts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomeModule', name: 'Home', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/newwork/newwork-detail/newwork-detail.module#NewworkDetailModule', name: 'NewworkDetail', segment: 'newwork-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/newwork/newwork.module#NewworkModule', name: 'Newwork', segment: 'newwork', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hr-management/job-types-set/job-types-set-add/job-types-set-add.module#JobTypesSetAddPageModule', name: 'JobTypesSetAddPage', segment: 'job-types-set-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hr-management/job-types-set/job-types-set.module#JobTypesSetPageModule', name: 'JobTypesSetPage', segment: 'job-types-set', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hr-management/staff-file-maintenance/staff-file-maintenance-basic-imfornation/staff-file-maintenance-basic-imfornation.module#StaffFileMaintenanceBasicImfornationPageModule', name: 'StaffFileMaintenanceBasicImfornation', segment: 'staff-file-maintenance-basic-imfornation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hr-management/staff-file-maintenance/staff-file-maintenance-education/staff-file-maintenance-education.module#StaffFileMaintenanceEducationPageModule', name: 'StaffFileMaintenanceEducation', segment: 'staff-file-maintenance-education', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hr-management/staff-file-maintenance/staff-file-maintenance-set/staff-file-maintenance-set.module#StaffFileMaintenanceSetPageModule', name: 'StaffFileMaintenanceSet', segment: 'staff-file-maintenance-set', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hr-management/staff-file-maintenance/staff-file-maintenance-social-relationship/staff-file-maintenance-social-relationship.module#StaffFileMaintenanceSocialRelationshipPageModule', name: 'StaffFileMaintenanceSocialRelationship', segment: 'staff-file-maintenance-social-relationship', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hr-management/staff-file-maintenance/staff-file-maintenance-work-experience/staff-file-maintenance-work-experience-add/staff-file-maintenance-work-experience-add.module#StaffFileMaintenanceWorkExperienceAddModule', name: 'StaffFileMaintenanceWorkExperienceAdd', segment: 'staff-file-maintenance-work-experience-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hr-management/staff-file-maintenance/staff-file-maintenance-work-experience/staff-file-maintenance-work-experience.module#StaffFileMaintenanceWorkExperiencePageModule', name: 'StaffFileMaintenanceWorkExperience', segment: 'staff-file-maintenance-work-experience', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hr-management/staff-file-maintenance/staff-file-maintenance.module#StaffFileMaintenancePageModule', name: 'StaffFileMaintenance', segment: 'staff-file-maintenance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hr-management/training-maintenance/training-maintenance-search/training-maintenance-search.module#TrainingMaintenancePageModule', name: 'TrainingMaintenanceSearch', segment: 'training-maintenance-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hr-management/training-maintenance/training-maintenance-set/training-maintenance-set.module#TrainingMaintenanceSetPageModule', name: 'TrainingMaintenanceSetPage', segment: 'training-maintenance-set', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hr-management/training-maintenance/training-maintenance.module#TrainingMaintenancePageModule', name: 'TrainingMaintenancePage', segment: 'training-maintenance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/find-password/find-password.module#FindPasswordModule', name: 'FindPassword', segment: 'find-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mail/mail-read/mail-read.module#MailReadModule', name: 'MailRead', segment: 'mail-read', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mail/mail-write/mail-write.module#MailWriteModule', name: 'MailWrite', segment: 'mail-write', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mail/mail.module#MailModule', name: 'Mail', segment: 'mail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/meeting/meeting-edit/meeting-edit.module#MeetingEditPageModule', name: 'MeetingEditPage', segment: 'meeting-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/meeting/meeting-minutes/meeting-minutes.module#MeetingMinutesPageModule', name: 'MeetingMinutesPage', segment: 'meeting-minutes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/meeting/meeting-room/meeting-room-set/meeting-room-set.module#MeetingRoomSetPageModule', name: 'MeetingRoomSetPage', segment: 'meeting-room-set', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/meeting/meeting-room/meeting-room.module#MeetingRoomPageModule', name: 'MeetingRoomPage', segment: 'meeting-room', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/meeting/meeting-search/meeting-search.module#MeetingSearchPageModule', name: 'MeetingSearchPage', segment: 'meeting-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/meeting/meeting-write/meeting-write.module#MeetingWritePageModule', name: 'MeetingWritePage', segment: 'meeting-write', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/meeting/meeting.module#MeetingPageModule', name: 'MeetingPage', segment: 'meeting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message/message-read-out/message-read-out.module#MessageReadOutPageModule', name: 'MessageReadOutPage', segment: 'message-read-out', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message/message-read/message-read.module#MessageReadPageModule', name: 'MessageReadPage', segment: 'message-read', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message/message-write/message-write.module#MessageWritePageModule', name: 'MessageWritePage', segment: 'message-write', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message/message.module#MessagePageModule', name: 'MessagePage', segment: 'message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sms/sms-read/sms-read.module#SmsReadPageModule', name: 'SmsReadPage', segment: 'sms-read', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sms/sms-write/sms-write.module#SmsWritePageModule', name: 'SmsWritePage', segment: 'sms-write', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sms/sms.module#SmsPageModule', name: 'SmsPage', segment: 'sms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomeModule', name: 'Welcome', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_29__components_components_module__["a" /* ComponentsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__pages_login_LoginService__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Content */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: FunDebugErrorHandler },
                __WEBPACK_IMPORTED_MODULE_19__providers_NativeService__["a" /* NativeService */],
                __WEBPACK_IMPORTED_MODULE_20__providers_HttpIntercept__["a" /* HttpIntercept */],
                __WEBPACK_IMPORTED_MODULE_21__providers_HttpService__["a" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_22__providers_FileService__["a" /* FileService */],
                __WEBPACK_IMPORTED_MODULE_23__providers_Helper__["a" /* Helper */],
                __WEBPACK_IMPORTED_MODULE_24__providers_Utils__["a" /* Utils */],
                __WEBPACK_IMPORTED_MODULE_26__providers_HttpInterceptHandle__["a" /* HttpInterceptHandle */],
                __WEBPACK_IMPORTED_MODULE_27__providers_GlobalData__["a" /* GlobalData */],
                __WEBPACK_IMPORTED_MODULE_30__providers_Logger__["a" /* Logger */],
                __WEBPACK_IMPORTED_MODULE_28__services_backButtonService__["a" /* BackButtonService */]
                // ,HTTP
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Config */]])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_chooser__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Logger__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Constants__ = __webpack_require__(63);
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
 * Created by yanxiaojun617@163.com on 12-27.
 */






// import { Transfer, TransferObject } from '@ionic-native/transfer'; // FileUploadOptions








var NativeService = (function () {
    function NativeService(platform, toastCtrl, alertCtrl, appVersion, camera, toast, fileTransfer, file, fileChooser, inAppBrowser, imagePicker, network, loadingCtrl, logger) {
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.appVersion = appVersion;
        this.camera = camera;
        this.toast = toast;
        this.fileTransfer = fileTransfer;
        this.file = file;
        this.fileChooser = fileChooser;
        this.inAppBrowser = inAppBrowser;
        this.imagePicker = imagePicker;
        this.network = network;
        this.loadingCtrl = loadingCtrl;
        this.logger = logger;
        this.loadingIsOpen = false;
    }
    // const fileTransfer: TransferObject = this.transfer.create();
    NativeService.prototype.warn = function (info) {
        console.log('%cNativeService/' + info, 'color:#e8c406');
    };
    /**
     * 下载
     */
    NativeService.prototype.download = function (source, target, trustAllHosts, Optional) {
        var alert = this.alertCtrl.create({
            title: '下载进度：0%',
            enableBackdropDismiss: false,
            buttons: ['后台下载']
        });
        alert.present();
        var fileTransfer = this.fileTransfer.create();
        // target = this.file.dataDirectory + target; // 文件保存的目录
        target = this.file.dataDirectory + target;
        console.log(target);
        fileTransfer.download(encodeURI(source), target).then(function (entry) {
            console.log('download complete: ' + entry.toURL());
        }, function (error) {
            console.log(error);
        });
        fileTransfer.onProgress(function (event) {
            var num = Math.floor(event.loaded / event.total * 100);
            if (num === 100) {
                alert.dismiss();
            }
            else {
                var title = document.getElementsByClassName('alert-title')[0];
                title && (title.innerHTML = '下载进度：' + num + '%');
            }
        });
    };
    /**
     * 通过浏览器打开url
     */
    NativeService.prototype.openUrlByBrowser = function (url) {
        this.inAppBrowser.create(url, '_system');
    };
    /**
     * 检查app是否需要升级
     */
    NativeService.prototype.detectionUpgrade = function () {
        var _this = this;
        // 这里连接后台判断是否需要升级,不需要升级就return
        this.alertCtrl.create({
            title: '升级',
            subTitle: '发现新版本,是否立即升级？',
            buttons: [{ text: '取消' },
                {
                    text: '确定',
                    handler: function () {
                        _this.downloadApp();
                    }
                }
            ]
        }).present();
    };
    /**
     * 下载安装app
     */
    NativeService.prototype.downloadApp = function () {
        if (this.isAndroid()) {
            var alert_1 = this.alertCtrl.create({
                title: '下载进度：0%',
                enableBackdropDismiss: false,
                buttons: ['后台下载']
            });
            alert_1.present();
            var fileTransfer = this.fileTransfer.create();
            var apk_1 = this.file.externalRootDirectory + 'android.apk'; // apk保存的目录
            fileTransfer.download(__WEBPACK_IMPORTED_MODULE_13__Constants__["a" /* APK_DOWNLOAD */], apk_1).then(function () {
                window['install'].install(apk_1.replace('file://', ''));
            });
            fileTransfer.onProgress(function (event) {
                var num = Math.floor(event.loaded / event.total * 100);
                if (num === 100) {
                    alert_1.dismiss();
                }
                else {
                    var title = document.getElementsByClassName('alert-title')[0];
                    title && (title.innerHTML = '下载进度：' + num + '%');
                }
            });
        }
        if (this.isIos()) {
            this.openUrlByBrowser(__WEBPACK_IMPORTED_MODULE_13__Constants__["b" /* APP_DOWNLOAD */]);
        }
    };
    /**
     * 是否真机环境
     * @return {boolean}
     */
    NativeService.prototype.isMobile = function () {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    };
    /**
     * 是否android真机环境
     * @return {boolean}
     */
    NativeService.prototype.isAndroid = function () {
        return this.isMobile() && this.platform.is('android');
    };
    /**
     * 是否ios真机环境
     * @return {boolean}
     */
    NativeService.prototype.isIos = function () {
        return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
    };
    /**
     * 统一调用此方法显示提示信息
     * @param message 信息内容
     * @param duration 显示时长
     */
    NativeService.prototype.showToast = function (message, duration, callback) {
        if (message === void 0) { message = '操作完成'; }
        if (duration === void 0) { duration = 2000; }
        if (this.isMobile()) {
            this.toast.show(message, String(duration), 'center').subscribe();
        }
        else {
            this.toastCtrl.create({
                message: message,
                duration: duration,
                position: 'middle',
                showCloseButton: false
            }).present();
        }
    };
    /**
     * 统一调用此方法显示loading
     * @param content 显示的内容
     */
    NativeService.prototype.showLoading = function (content) {
        var _this = this;
        if (content === void 0) { content = ''; }
        if (!this.loadingIsOpen) {
            this.loadingIsOpen = true;
            this.loading = this.loadingCtrl.create({
                content: content
            });
            this.loading.present();
            setTimeout(function () {
                _this.loadingIsOpen && _this.loading.dismiss();
                _this.loadingIsOpen = false;
            }, 10000);
        }
    };
    /**
     * 关闭loading
     */
    NativeService.prototype.hideLoading = function () {
        this.loadingIsOpen && this.loading.dismiss();
        this.loadingIsOpen = false;
    };
    /**
     * 使用cordova-plugin-camera获取照片
     * @param options
     */
    NativeService.prototype.getPicture = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var ops = Object.assign({
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: __WEBPACK_IMPORTED_MODULE_13__Constants__["i" /* QUALITY_SIZE */],
            allowEdit: false,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: __WEBPACK_IMPORTED_MODULE_13__Constants__["g" /* IMAGE_SIZE */],
            targetHeight: __WEBPACK_IMPORTED_MODULE_13__Constants__["g" /* IMAGE_SIZE */],
            saveToPhotoAlbum: false,
            correctOrientation: true // 设置摄像机拍摄的图像是否为正确的方向
        }, options);
        return __WEBPACK_IMPORTED_MODULE_11_rxjs__["Observable"].create(function (observer) {
            _this.camera.getPicture(ops).then(function (imgData) {
                if (ops.destinationType === _this.camera.DestinationType.DATA_URL) {
                    observer.next('data:image/jpg;base64,' + imgData);
                }
                else {
                    observer.next(imgData);
                }
            }).catch(function (err) {
                if (err == 20) {
                    _this.showToast('没有权限,请在设置中开启权限', 1000);
                    return;
                }
                if (String(err).indexOf('cancel') != -1) {
                    return;
                }
                _this.logger.log(err, '使用cordova-plugin-camera获取照片失败');
                _this.showToast('获取照片失败', 800);
            });
        });
    };
    /**
     * 通过拍照获取照片
     * @param options
     */
    NativeService.prototype.getPictureByCamera = function (options) {
        if (options === void 0) { options = {}; }
        var ops = Object.assign({
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL // DATA_URL: 0 base64字符串, FILE_URI: 1图片路径
        }, options);
        return this.getPicture(ops);
    };
    /**
     * 通过图库获取照片
     * @param options
     */
    NativeService.prototype.getPictureByPhotoLibrary = function (options) {
        if (options === void 0) { options = {}; }
        var ops = Object.assign({
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL // DATA_URL: 0 base64字符串, FILE_URI: 1图片路径
        }, options);
        return this.getPicture(ops);
    };
    /**
     * 通过图库选择多图
     * @param options
     */
    NativeService.prototype.getMultiplePicture = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var that = this;
        var ops = Object.assign({
            maximumImagesCount: 6,
            width: __WEBPACK_IMPORTED_MODULE_13__Constants__["g" /* IMAGE_SIZE */],
            height: __WEBPACK_IMPORTED_MODULE_13__Constants__["g" /* IMAGE_SIZE */],
            quality: __WEBPACK_IMPORTED_MODULE_13__Constants__["i" /* QUALITY_SIZE */] // 图像质量，范围为0 - 100
        }, options);
        return __WEBPACK_IMPORTED_MODULE_11_rxjs__["Observable"].create(function (observer) {
            _this.imagePicker.getPictures(ops).then(function (files) {
                var destinationType = options['destinationType'] || 0; // 0:base64字符串,1:图片url
                if (destinationType === 1) {
                    observer.next(files);
                }
                else {
                    var imgBase64s_1 = []; // base64字符串数组
                    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                        var fileUrl = files_1[_i];
                        that.convertImgToBase64(fileUrl).subscribe(function (base64) {
                            imgBase64s_1.push(base64);
                            if (imgBase64s_1.length === files.length) {
                                observer.next(imgBase64s_1);
                            }
                        });
                    }
                }
            }).catch(function (err) {
                _this.logger.log(err, '通过图库选择多图失败');
                _this.showToast('获取照片失败', 800);
            });
        });
    };
    /**
     * 根据图片绝对路径转化为base64字符串
     * @param path 绝对路径
     */
    NativeService.prototype.convertImgToBase64 = function (path) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_11_rxjs__["Observable"].create(function (observer) {
            _this.file.resolveLocalFilesystemUrl(path).then(function (fileEnter) {
                fileEnter.file(function (file) {
                    var reader = new FileReader();
                    reader.onloadend = function (e) {
                        observer.next(this.result);
                    };
                    reader.readAsDataURL(file);
                });
            }).catch(function (err) {
                _this.logger.log(err, '根据图片绝对路径转化为base64字符串失败');
            });
        });
    };
    /**
     * 获取网络类型 如`unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
     */
    NativeService.prototype.getNetworkType = function () {
        if (!this.isMobile()) {
            return 'wifi';
        }
        return this.network.type;
    };
    /**
     * 判断是否有网络
     * @returns {boolean}
     */
    NativeService.prototype.isConnecting = function () {
        return this.getNetworkType() != 'none';
    };
    /**
     * 获得app版本号,如0.01
     * @description  对应/config.xml中version的值
     * @returns {Promise<string>}
     */
    NativeService.prototype.getVersionNumber = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.appVersion.getVersionNumber().then(function (value) {
                resolve(value);
            }).catch(function (err) {
                _this.warn('getVersionNumber:' + err);
            });
        });
    };
    /**
     * 获得app name,如ionic2_tabs
     * @description  对应/config.xml中name的值
     * @returns {Promise<string>}
     */
    NativeService.prototype.getAppName = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.appVersion.getAppName().then(function (value) {
                resolve(value);
            }).catch(function (err) {
                _this.warn('getAppName:' + err);
            });
        });
    };
    /**
     * 获得app包名/id,如com.kit.ionic2tabs
     * @description  对应/config.xml中id的值
     * @returns {Promise<string>}
     */
    NativeService.prototype.getPackageName = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.appVersion.getPackageName().then(function (value) {
                resolve(value);
            }).catch(function (err) {
                _this.warn('getPackageName:' + err);
            });
        });
    };
    NativeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_12__Logger__["a" /* Logger */]])
    ], NativeService);
    return NativeService;
}());

//# sourceMappingURL=NativeService.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by yanxiaojun on 2017/4/13.
 */

var GlobalData = (function () {
    function GlobalData() {
    }
    Object.defineProperty(GlobalData.prototype, "Uid", {
        get: function () {
            return this._Uid;
        },
        set: function (value) {
            this._Uid = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalData.prototype, "Name", {
        get: function () {
            return this._Name;
        },
        set: function (value) {
            this._Name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalData.prototype, "token", {
        get: function () {
            return this._token;
        },
        set: function (value) {
            this._token = value;
        },
        enumerable: true,
        configurable: true
    });
    GlobalData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], GlobalData);
    return GlobalData;
}());

//# sourceMappingURL=GlobalData.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
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

/**
 * Utils类存放和业务无关的公共方法
 * @description
 */
var Utils = (function () {
    function Utils() {
    }
    Utils_1 = Utils;
    Utils.isEmpty = function (value) {
        return value == null || typeof value === 'string' && value.length === 0;
    };
    Utils.isNotEmpty = function (value) {
        return !Utils_1.isEmpty(value);
    };
    /**
     * 格式“是”or“否”
     * @param value
     * @returns {string|string}
     */
    Utils.formatYesOrNo = function (value) {
        return value == 1 ? '是' : (value == '0' ? '否' : null);
    };
    /**
     * 日期对象转为日期字符串
     * @param date 需要格式化的日期对象
     * @param sFormat 输出格式,默认为yyyy-MM-dd                        年：y，月：M，日：d，时：h，分：m，秒：s
     * @example  dateFormat(new Date())                               "2017-02-28"
     * @example  dateFormat(new Date(),'yyyy-MM-dd')                  "2017-02-28"
     * @example  dateFormat(new Date(),'yyyy-MM-dd HH:mm:ss')         "2017-02-28 13:24:00"   ps:HH:24小时制
     * @example  dateFormat(new Date(),'yyyy-MM-dd hh:mm:ss')         "2017-02-28 01:24:00"   ps:hh:12小时制
     * @example  dateFormat(new Date(),'hh:mm')                       "09:24"
     * @example  dateFormat(new Date(),'yyyy-MM-ddTHH:mm:ss+08:00')   "2017-02-28T13:24:00+08:00"
     * @example  dateFormat(new Date('2017-02-28 13:24:00'),'yyyy-MM-ddTHH:mm:ss+08:00')   "2017-02-28T13:24:00+08:00"
     * @returns {string}
     */
    Utils.dateFormat = function (date, sFormat, range) {
        if (sFormat === void 0) { sFormat = 'yyyy-MM-dd'; }
        if (range === void 0) { range = 0; }
        var time = {
            Year: 0,
            TYear: '0',
            Month: 0,
            TMonth: '0',
            Day: 0,
            TDay: '0',
            Hour: 0,
            THour: '0',
            hour: 0,
            Thour: '0',
            Minute: 0,
            TMinute: '0',
            Second: 0,
            TSecond: '0',
            Millisecond: 0
        };
        date.setDate(date.getDate() + range);
        time.Year = date.getFullYear();
        time.TYear = String(time.Year).substr(2);
        time.Month = date.getMonth() + 1;
        time.TMonth = time.Month < 10 ? "0" + time.Month : String(time.Month);
        time.Day = date.getDate();
        time.TDay = time.Day < 10 ? "0" + time.Day : String(time.Day);
        time.Hour = date.getHours();
        time.THour = time.Hour < 10 ? "0" + time.Hour : String(time.Hour);
        time.hour = time.Hour < 13 ? time.Hour : time.Hour - 12;
        time.Thour = time.hour < 10 ? "0" + time.hour : String(time.hour);
        time.Minute = date.getMinutes();
        time.TMinute = time.Minute < 10 ? "0" + time.Minute : String(time.Minute);
        time.Second = date.getSeconds();
        time.TSecond = time.Second < 10 ? "0" + time.Second : String(time.Second);
        time.Millisecond = date.getMilliseconds();
        return sFormat.replace(/yyyy/ig, String(time.Year))
            .replace(/yyy/ig, String(time.Year))
            .replace(/yy/ig, time.TYear)
            .replace(/y/ig, time.TYear)
            .replace(/MM/g, time.TMonth)
            .replace(/M/g, String(time.Month))
            .replace(/dd/ig, time.TDay)
            .replace(/d/ig, String(time.Day))
            .replace(/HH/g, time.THour)
            .replace(/H/g, String(time.Hour))
            .replace(/hh/g, time.Thour)
            .replace(/h/g, String(time.hour))
            .replace(/mm/g, time.TMinute)
            .replace(/m/g, String(time.Minute))
            .replace(/ss/ig, time.TSecond)
            .replace(/s/ig, String(time.Second))
            .replace(/fff/ig, String(time.Millisecond));
    };
    /**
     * 返回字符串长度，汉子计数为2
     * @param str
     * @returns {number}
     */
    Utils.strLength = function (str) {
        var len = 0;
        for (var i = 0, length_1 = str.length; i < length_1; i++) {
            str.charCodeAt(i) > 255 ? len += 2 : len++;
        }
        return len;
    };
    /**
     * 把url中的双斜杠替换为单斜杠
     * 如:http://localhost:8080//api//demo.替换后http://localhost:8080/api/demo
     * @param url
     * @returns {string}
     */
    Utils.formatUrl = function (url) {
        if (url === void 0) { url = ''; }
        var index = 0;
        if (url.startsWith('http')) {
            index = 7;
        }
        return url.substring(0, index) + url.substring(index).replace(/\/\/*/g, '/');
    };
    Utils.sessionStorageGetItem = function (key) {
        var jsonString = sessionStorage.getItem(key);
        if (jsonString) {
            return JSON.parse(jsonString);
        }
        return null;
    };
    Utils.sessionStorageSetItem = function (key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    };
    Utils.sessionStorageRemoveItem = function (key) {
        sessionStorage.removeItem(key);
    };
    Utils.sessionStorageClear = function () {
        sessionStorage.clear();
    };
    Utils.getFileMimeType = function (fileType) {
        var mimeType = '';
        switch (fileType) {
            case 'txt':
                mimeType = 'text/plain';
                break;
            case 'docx':
                mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
                break;
            case 'doc':
                mimeType = 'application/msword';
                break;
            case 'pptx':
                mimeType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
                break;
            case 'ppt':
                mimeType = 'application/vnd.ms-powerpoint';
                break;
            case 'xlsx':
                mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                break;
            case 'xls':
                mimeType = 'application/vnd.ms-excel';
                break;
            case 'zip':
                mimeType = 'application/x-zip-compressed';
                break;
            case 'rar':
                mimeType = 'application/octet-stream';
                break;
            case 'pdf':
                mimeType = 'application/pdf';
                break;
            case 'jpg':
                mimeType = 'image/jpeg';
                break;
            case 'png':
                mimeType = 'image/png';
                break;
            default:
                mimeType = 'application/' + fileType;
                break;
        }
        return mimeType;
    };
    /**
     * 每次调用sequence加1
     * @type {()=>number}
     */
    Utils.getSequence = (function () {
        var sequence = 1;
        return function () {
            return ++sequence;
        };
    })();
    Utils = Utils_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Utils);
    return Utils;
    var Utils_1;
}());

//# sourceMappingURL=Utils.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return APP_SERVE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FILE_SERVE_URL; });
/* unused harmony export APP_VERSION_SERVE_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return IS_DEBUG; });
/* unused harmony export DEFAULT_AVATAR */
/* unused harmony export PAGE_SIZE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return IMAGE_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return QUALITY_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return REQUEST_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ENABLE_FUNDEBUG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FUNDEBUG_API_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APK_DOWNLOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return APP_DOWNLOAD; });
/* unused harmony export CODE_PUSH_DEPLOYMENT_KEY */
// export const APP_SERVE_URL = 'http://88.128.18.193:8080/';
// export const FILE_SERVE_URL = 'http://88.128.18.144:3333/';
/*----------------------------------------后台Api地址----------------------------------------*/
var APP_SERVE_URL = 'http://192.168.0.49:8100/'; // 'http://192.168.0.49:789/';
/*----------------------------------------文件服务器地址----------------------------------------*/
var FILE_SERVE_URL = 'http://192.168.0.49:8100/'; // 文件服务:测试环境
/*----------------------------------------app版本升级服务地址----------------------------------------*/
var APP_VERSION_SERVE_URL = 'http://192.168.0.49:8100/'; // app版本升级服务;测试环境,查询app最新版本号,更新日志等信息.
var IS_DEBUG = true; // 是否开发(调试)模式
var DEFAULT_AVATAR = './assets/img/avatar.png'; // 用户默认头像
var PAGE_SIZE = 5; // 默认分页大小
var IMAGE_SIZE = 1024; // 拍照/从相册选择照片压缩大小
var QUALITY_SIZE = 94; // 图像压缩质量，范围为0 - 100
var REQUEST_TIMEOUT = 20000; // 请求超时时间,单位为毫秒
var ENABLE_FUNDEBUG = false; // 是否启用fundebug日志监控
var FUNDEBUG_API_KEY = 'ec3cba8712b00e9db075ee9debf73fdfb2233c748b737d71f69ed7fe04b9ead4'; // 去https://fundebug.com/申请key
var APK_DOWNLOAD = 'http://omzo595hi.bkt.clouddn.com/ionic2_tabs.apk'; // android apk下载完整地址,用于android本地升级
var APP_DOWNLOAD = 'http://omzo595hi.bkt.clouddn.com/download.html'; // app网页下载地址,用于ios升级或android本地升级失败
// code push 部署key
var CODE_PUSH_DEPLOYMENT_KEY = {
    'android': {
        'Production': 'i0LgJRugiIfjVYTgmXs9go45Xc7g26690215-d954-4697-a879-90e0c4612b59',
        'Staging': 'WY29_Zyq_hg0eB3TSTGaKRSKPE6k26690215-d954-4697-a879-90e0c4612b59'
    },
    'ios': {
        'Production': 'kn3VJ28z0hB_zQYnW-KnblldnBzN26690215-d954-4697-a879-90e0c4612b59',
        'Staging': 'SRoxClVMoed8SgwIRxeVCPWx26Fk26690215-d954-4697-a879-90e0c4612b59'
    }
};
//# sourceMappingURL=Constants.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyComponent; });
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

/**
 * Generated class for the EmptyComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var EmptyComponent = (function () {
    function EmptyComponent() {
        this.isEmpty = false;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], EmptyComponent.prototype, "isEmpty", void 0);
    EmptyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'empty',
            template: "\n    <div  text-center padding style=\"font-size:.9em;\">\n      <div padding>\u6682\u65E0\u6D88\u606F\u6570\u636E\uFF01\uFF01\uFF01</div>\n      <img src=\"assets/img/face/face2.png\" height=\"100\">\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], EmptyComponent);
    return EmptyComponent;
}());

//# sourceMappingURL=empty.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_NativeService__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_GlobalData__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_LoginService__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_Utils__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { Welcome } from '../pages/welcome/welcome';
// import { TabsPage } from "../pages/tabs/tabs";


// import { LoginPage } from "../pages/login/login";
// import { Backlog } from "../pages/home/backlog/backlog";
// import { Contacts } from "../pages/home/contacts/contacts";

var MyApp = (function () {
    function MyApp(menu, platform, statusBar, splashScreen, keyboard, ionicApp, storage, globalData, toastCtrl, modalCtrl, events, loginService, nativeService) {
        var _this = this;
        this.menu = menu;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.keyboard = keyboard;
        this.ionicApp = ionicApp;
        this.storage = storage;
        this.globalData = globalData;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.loginService = loginService;
        this.nativeService = nativeService;
        this.photo = "assets/img/ben.png";
        // set our app's pages
        this.appPages = [
            { title: '首页', component: "TabsPage", index: 0, icon: 'calendar' },
            { title: '邮件', component: "TabsPage", index: 1, icon: 'ios-mail' },
            { title: '通讯录', component: "TabsPage", index: 4, icon: 'md-call', tab1Component: "Contacts" },
            { title: '公告管理', component: "TabsPage", index: 2, icon: 'ios-notifications' },
            // { title: '新建工作', component: TabsPage, index: 5, icon: 'md-exit', tab1Component: Newwork },
            { title: '待办事项', component: "TabsPage", index: 6, icon: 'ios-calendar', tab1Component: "Backlog" }
            // ,{ title: '设置', component: TabsPage, index: 3, icon: 'ios-cog'},
            // { title: '登陆', component: LoginPage, index: 7, icon: 'contacts' }
        ];
        this.rootPage = "TabsPage";
        this.backButtonPressed = false;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.storage.get('firstIn').then(function (result) {
                // this.nativeService.showToast("不是第一次进入");
                if (result) {
                    // this.rootPage = TabsPage;
                    _this.storage.get('loginInfo').then(function (loginInfo) {
                        _this.nav.setRoot("TabsPage", { tabIndex: 0 });
                        if (loginInfo) {
                            _this.loginService.login(loginInfo).subscribe(function (resJson) {
                                if (resJson.result) {
                                    _this.globalData.Uid = resJson.Data.Uid;
                                    _this.globalData.Name = resJson.Data.Name;
                                    _this.globalData.token = resJson.Data.Token;
                                    _this.events.publish('user:login', result.Data);
                                }
                                else {
                                    // this.NavCtrl.push("LoginPage");
                                    var modal = _this.modalCtrl.create("LoginPage");
                                    modal.present();
                                    modal.onDidDismiss(function (data) {
                                        data && console.log(data);
                                        _this.nav.setRoot("TabsPage", { tabIndex: 0 });
                                    });
                                }
                            });
                        }
                        else {
                            var modal = _this.modalCtrl.create("LoginPage");
                            modal.present();
                            modal.onDidDismiss(function (data) {
                                data && console.log(data);
                                _this.nav.setRoot("TabsPage", { tabIndex: 0 });
                            });
                        }
                    });
                }
                else {
                    _this.storage.set('firstIn', true);
                    var modal = _this.modalCtrl.create("Welcome");
                    modal.present();
                    modal.onDidDismiss(function (data) {
                        data && console.log(data);
                        _this.nav.setRoot("TabsPage", { tabIndex: 0 });
                    });
                    // this.rootPage = Welcome;
                }
            });
            statusBar.styleDefault();
            splashScreen.hide();
            _this.registerBackButtonAction(); // 注册返回按键事件
            _this.assertNetwork(); // 检测网络
            // this.nativeService.detectionUpgrade(); // 检测app是否升级
        });
    }
    MyApp.prototype.openPage = function (page) {
        // the nav component was found using @ViewChild(Nav)
        // reset the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        this.menu.close();
        if (page.index) {
            if (page.tab1Component) {
                this.nav.setRoot(page.component, { tab1Component: page.tab1Component, tabIndex: page.index });
            }
            else {
                this.nav.setRoot(page.component, { tabIndex: page.index });
            }
        }
        else {
            this.nav.setRoot(page.component).catch(function () {
                console.log("Didn't set nav root");
            });
        }
    };
    MyApp.prototype.goTo = function (name) {
        this.menu.close();
        if (name == "edit") {
            this.nav.setRoot("TabsPage", { tabIndex: 3 });
        }
        else {
            this.storage.clear(); // 清除缓存
            __WEBPACK_IMPORTED_MODULE_8__providers_Utils__["a" /* Utils */].sessionStorageClear(); // 清除数据缓存
            var modal = this.modalCtrl.create("LoginPage");
            modal.present();
            modal.onDidDismiss(function (data) {
                data && console.log(data);
            });
        }
    };
    MyApp.prototype.assertNetwork = function () {
        if (!this.nativeService.isConnecting()) {
            this.toastCtrl.create({
                message: '未检测到网络,请连接网络',
                showCloseButton: true,
                closeButtonText: '确定'
            }).present();
        }
    };
    MyApp.prototype.registerBackButtonAction = function () {
        var _this = this;
        if (!this.nativeService.isAndroid()) {
            return;
        }
        this.platform.registerBackButtonAction(function () {
            if (_this.keyboard.isOpen()) {
                _this.keyboard.close();
                return;
            }
            // 如果想点击返回按钮隐藏toast或loading或Overlay就把下面加上
            // this.ionicApp._toastPortal.getActive() ||
            //   this.ionicApp._loadingPortal.getActive()|| this.ionicApp._overlayPortal.getActive()
            var activePortal = _this.ionicApp._modalPortal.getActive()
                || _this.ionicApp._toastPortal.getActive() ||
                _this.ionicApp._overlayPortal.getActive();
            if (activePortal) {
                activePortal.dismiss();
                return;
            }
            var activeVC = _this.nav.getActive();
            var tabs = activeVC.instance.tabs;
            var activeNav = tabs.getSelected();
            return activeNav.canGoBack() ?
                activeNav.pop() :
                // this.nativeService.minimize(); //
                _this.showExit();
        }, 1);
    };
    // 双击退出提示框
    MyApp.prototype.showExit = function () {
        var _this = this;
        if (this.backButtonPressed) {
            this.platform.exitApp();
        }
        else {
            this.nativeService.showToast('再按一次退出应用');
            this.backButtonPressed = true;
            setTimeout(function () {
                _this.backButtonPressed = false;
            }, 2000);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\svn\mine\gitSource\OA_WEBApp\src\app\app.html"*/`<ion-menu [content]="content">\n\n    <ion-header class="menu-header" padding-bottom>\n        <ion-row text-center>\n            <ion-col>\n                <a (click)="goTo(\'edit\')">\n                    <img [src]="photo" title="头像" />\n                </a>\n                <span>系统管理员</span>\n            </ion-col>\n        </ion-row>\n    </ion-header>\n\n    <ion-content>\n        <ion-list>\n            <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n                <ion-icon color="positive" item-left [name]="p.icon"></ion-icon>\n                {{p.title}}\n            </button>\n        </ion-list>\n        <ion-row>\n            <ion-col col-6>\n                <button (click)="goTo()" ion-button icon-left clear>\n                    <ion-icon name=\'contacts\'></ion-icon>注销登录\n                </button>\n            </ion-col>\n            <ion-col col-6>\n                <button (click)="goTo(\'edit\')" ion-button icon-left clear>\n                    <ion-icon name=\'ios-cog\'></ion-icon>设置\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-content>\n\n</ion-menu>\n<ion-nav #content [root]="rootPage"></ion-nav>`/*ion-inline-end:"D:\svn\mine\gitSource\OA_WEBApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicApp */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__providers_GlobalData__["a" /* GlobalData */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_LoginService__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_NativeService__["a" /* NativeService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpIntercept; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HttpInterceptHandle__ = __webpack_require__(363);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * Created by yanxiaojun617@163.com on 12-27.
 */




var HttpIntercept = (function (_super) {
    __extends(HttpIntercept, _super);
    function HttpIntercept(backend, defaultOptions, _) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this._ = _;
        return _this;
    }
    HttpIntercept.prototype.get = function (url, options) {
        var _this = this;
        this._.events.publish("request:before", url, options);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            _super.prototype.get.call(_this, url, options).subscribe(function (res) {
                _this._.events.publish("request:success", url, options, res);
                observer.next(res);
            }, function (err) {
                _this._.events.publish("request:error", url, options, err);
                observer.error(err);
            });
        });
    };
    HttpIntercept.prototype.post = function (url, body, options) {
        var _this = this;
        this._.events.publish("request:before", url, options);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            _super.prototype.post.call(_this, url, body, options).subscribe(function (res) {
                _this._.events.publish("request:success", url, options, res);
                observer.next(res);
            }, function (err) {
                _this._.events.publish("request:error", url, options, err);
                observer.error(err);
            });
        });
    };
    HttpIntercept.prototype.put = function (url, body, options) {
        var _this = this;
        this._.events.publish("request:before", url, options);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            _super.prototype.put.call(_this, url, body, options).subscribe(function (res) {
                _this._.events.publish("request:success", url, options, res);
                observer.next(res);
            }, function (err) {
                _this._.events.publish("request:error", url, options, err);
                observer.error(err);
            });
        });
    };
    HttpIntercept.prototype.delete = function (url, options) {
        var _this = this;
        this._.events.publish("request:before", url, options);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            _super.prototype.delete.call(_this, url, options).subscribe(function (res) {
                _this._.events.publish("request:success", url, options, res);
                observer.next(res);
            }, function (err) {
                _this._.events.publish("request:error", url, options, err);
                observer.error(err);
            });
        });
    };
    HttpIntercept.prototype.patch = function (url, body, options) {
        var _this = this;
        this._.events.publish("request:before", url, options);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            _super.prototype.patch.call(_this, url, body, options).subscribe(function (res) {
                _this._.events.publish("request:success", url, options, res);
                observer.next(res);
            }, function (err) {
                _this._.events.publish("request:error", url, options, err);
                observer.error(err);
            });
        });
    };
    HttpIntercept.prototype.head = function (url, options) {
        var _this = this;
        this._.events.publish("request:before", url, options);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            _super.prototype.head.call(_this, url, options).subscribe(function (res) {
                _this._.events.publish("request:success", url, options, res);
                observer.next(res);
            }, function (err) {
                _this._.events.publish("request:error", url, options, err);
                observer.error(err);
            });
        });
    };
    HttpIntercept.prototype.options = function (url, options) {
        var _this = this;
        this._.events.publish("request:before", url, options);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            _super.prototype.options.call(_this, url, options).subscribe(function (res) {
                _this._.events.publish("request:success", url, options, res);
                observer.next(res);
            }, function (err) {
                _this._.events.publish("request:error", url, options, err);
                observer.error(err);
            });
        });
    };
    HttpIntercept = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* ConnectionBackend */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_3__HttpInterceptHandle__["a" /* HttpInterceptHandle */]])
    ], HttpIntercept);
    return HttpIntercept;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]));

//# sourceMappingURL=HttpIntercept.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FileService__ = __webpack_require__(160);
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
 * Created by yanxiaojun617@163.com on 12-27.
 */




/**
 * Helper类存放和业务有关的公共方法
 * @description
 */
var Helper = (function () {
    function Helper(modalCtrl, storage, fileService) {
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.fileService = fileService;
    }
    Helper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__FileService__["a" /* FileService */]])
    ], Helper);
    return Helper;
}());

//# sourceMappingURL=Helper.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalFromRightEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalFromRightLeave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ModalScaleEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ModalScaleLeave; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(32);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ModalFromRightEnter = (function (_super) {
    __extends(ModalFromRightEnter, _super);
    function ModalFromRightEnter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalFromRightEnter.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.enteringView.pageRef().nativeElement;
        var backdrop = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-backdrop'));
        backdrop.beforeStyles({ 'z-index': 0, 'opacity': 0.3, 'visibility': 'visible' });
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.beforeStyles({ 'opacity': 1 });
        wrapper.fromTo('transform', 'translateX(100%)', 'translateX(20%)');
        var contentWrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-content.content'));
        contentWrapper.beforeStyles({ 'width': '80%' });
        this
            .element(this.enteringView.pageRef())
            .duration(300)
            .easing('cubic-bezier(.25, .1, .25, 1)')
            .add(backdrop)
            .add(wrapper)
            .add(contentWrapper);
    };
    return ModalFromRightEnter;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["r" /* PageTransition */]));

var ModalFromRightLeave = (function (_super) {
    __extends(ModalFromRightLeave, _super);
    function ModalFromRightLeave() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalFromRightLeave.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.leavingView.pageRef().nativeElement;
        var backdrop = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-backdrop'));
        backdrop.beforeStyles({ 'visibility': 'hidden' });
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.fromTo('transform', 'translateX(20%)', 'translateX(100%)');
        this
            .element(this.leavingView.pageRef())
            .duration(300)
            .easing('cubic-bezier(.25, .1, .25, 1)')
            .add(backdrop)
            .add(wrapper);
    };
    return ModalFromRightLeave;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["r" /* PageTransition */]));

var ModalScaleEnter = (function (_super) {
    __extends(ModalScaleEnter, _super);
    function ModalScaleEnter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalScaleEnter.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.enteringView.pageRef().nativeElement;
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.beforeStyles({ 'opacity': 1 });
        wrapper.fromTo('transform', 'scale(0)', 'scale(1)');
        this
            .element(this.enteringView.pageRef())
            .duration(400)
            .easing('cubic-bezier(.1, .7, .1, 1)')
            .add(wrapper);
    };
    return ModalScaleEnter;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["r" /* PageTransition */]));

var ModalScaleLeave = (function (_super) {
    __extends(ModalScaleLeave, _super);
    function ModalScaleLeave() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalScaleLeave.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.leavingView.pageRef().nativeElement;
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.fromTo('transform', 'scale(1)', 'scale(0)');
        this
            .element(this.leavingView.pageRef())
            .duration(400)
            .easing('cubic-bezier(.1, .7, .1, 1)')
            .add(wrapper);
    };
    return ModalScaleLeave;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["r" /* PageTransition */]));

//# sourceMappingURL=itransitions.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Utils__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__GlobalData__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__NativeService__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Constants__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Logger__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HttpService = (function () {
    function HttpService(http, globalData, logger, nativeService) {
        this.http = http;
        this.globalData = globalData;
        this.logger = logger;
        this.nativeService = nativeService;
    }
    HttpService_1 = HttpService;
    HttpService.prototype.request = function (url, options) {
        var _this = this;
        url = __WEBPACK_IMPORTED_MODULE_4__Utils__["a" /* Utils */].formatUrl(url.startsWith('http') ? url : __WEBPACK_IMPORTED_MODULE_7__Constants__["c" /* APP_SERVE_URL */] + url);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].create(function (observer) {
            _this.nativeService.showLoading();
            __WEBPACK_IMPORTED_MODULE_7__Constants__["h" /* IS_DEBUG */] && console.log('%c 请求前 %c', 'color:blue', '', 'url', url, 'options', options);
            _this.http.request(url, options).timeout(__WEBPACK_IMPORTED_MODULE_7__Constants__["j" /* REQUEST_TIMEOUT */]).subscribe(function (res) {
                _this.nativeService.hideLoading();
                __WEBPACK_IMPORTED_MODULE_7__Constants__["h" /* IS_DEBUG */] && console.log('%c 请求成功 %c', 'color:green', '', 'url', url, 'options', options, 'res', res);
                if (res['_body'] == '') {
                    res['_body'] = null;
                }
                observer.next(res);
            }, function (err) {
                _this.requestFailed(url, options, err); // 处理请求失败
                observer.error(err);
            });
        });
    };
    HttpService.prototype.get = function (url, paramMap) {
        if (paramMap === void 0) { paramMap = null; }
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            search: HttpService_1.buildURLSearchParams(paramMap)
        }));
    };
    HttpService.prototype.noTokenPostFormData = function (url, paramMap) {
        if (paramMap === void 0) { paramMap = null; }
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            // search: HttpService.buildURLSearchParams(paramMap).toString(),
            body: HttpService_1.buildURLSearchParams(paramMap).toString(),
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            })
        }));
    };
    HttpService.prototype.post = function (url, body) {
        if (body === void 0) { body = {}; }
        body.Token = this.globalData.token;
        console.log(body);
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            body: body,
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
                'Content-Type': 'application/json; charset=UTF-8'
            })
        }));
    };
    HttpService.prototype.postFormData = function (url, paramMap) {
        if (paramMap === void 0) { paramMap = {}; }
        paramMap.Token = this.globalData.token;
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            // search: HttpService.buildURLSearchParams(paramMap).toString(),
            body: HttpService_1.buildURLSearchParams(paramMap).toString(),
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            })
        }));
    };
    HttpService.prototype.put = function (url, body) {
        if (body === void 0) { body = {}; }
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Put,
            body: body
        }));
    };
    HttpService.prototype.delete = function (url, paramMap) {
        if (paramMap === void 0) { paramMap = null; }
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Delete,
            search: HttpService_1.buildURLSearchParams(paramMap).toString()
        }));
    };
    HttpService.prototype.patch = function (url, body) {
        if (body === void 0) { body = {}; }
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Patch,
            body: body
        }));
    };
    HttpService.prototype.head = function (url, paramMap) {
        if (paramMap === void 0) { paramMap = null; }
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Head,
            search: HttpService_1.buildURLSearchParams(paramMap).toString()
        }));
    };
    HttpService.prototype.options = function (url, paramMap) {
        if (paramMap === void 0) { paramMap = null; }
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Options,
            search: HttpService_1.buildURLSearchParams(paramMap).toString()
        }));
    };
    /**
     * 将对象转为查询参数
     * @param paramMap
     * @returns {URLSearchParams}
     */
    HttpService.buildURLSearchParams = function (paramMap) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        if (!paramMap) {
            return params;
        }
        for (var key in paramMap) {
            var val = paramMap[key];
            if (val instanceof Date) {
                val = __WEBPACK_IMPORTED_MODULE_4__Utils__["a" /* Utils */].dateFormat(val, 'yyyy-MM-dd hh:mm:ss');
            }
            params.set(key, val);
        }
        return params;
    };
    /**
     * 处理请求失败事件
     * @param url
     * @param options
     * @param err
     */
    HttpService.prototype.requestFailed = function (url, options, err) {
        this.nativeService.hideLoading();
        __WEBPACK_IMPORTED_MODULE_7__Constants__["h" /* IS_DEBUG */] && console.log('%c 请求失败 %c', 'color:red', '', 'url', url, 'options', options, 'err', err);
        if (err instanceof __WEBPACK_IMPORTED_MODULE_3_rxjs__["TimeoutError"]) {
            this.nativeService.showToast('请求超时,请稍后再试!');
            return;
        }
        // err数据类型不确定,判断消息体是否有message字段,如果有说明是后台返回的json数据
        var index = JSON.stringify(err['_body']).indexOf('message');
        if (index != -1) {
            this.nativeService.showToast(err.json().message || '请求发生异常');
            return;
        }
        if (!this.nativeService.isConnecting()) {
            this.nativeService.showToast('请连接网络');
            return;
        }
        var status = err.status;
        var msg = '请求发生异常';
        if (status === 0) {
            msg = '请求失败，请求响应出错';
        }
        else if (status === 404) {
            msg = '请求失败，未找到请求地址';
        }
        else if (status === 500) {
            msg = '请求失败，服务器出错，请稍后再试';
        }
        this.nativeService.showToast(msg);
        this.logger.httpLog(err, msg, {
            url: url,
            status: status
        });
    };
    HttpService.prototype.optionsAddToken = function (options) {
        var token = this.globalData.token;
        if (options.headers) {
            options.headers.append('Token', token);
        }
        else {
            options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
                'Token': token
            });
        }
    };
    HttpService = HttpService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__GlobalData__["a" /* GlobalData */],
            __WEBPACK_IMPORTED_MODULE_8__Logger__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_6__NativeService__["a" /* NativeService */]])
    ], HttpService);
    return HttpService;
    var HttpService_1;
}());

//# sourceMappingURL=HttpService.js.map

/***/ })

},[367]);
//# sourceMappingURL=main.js.map