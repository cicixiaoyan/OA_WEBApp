/**
 * Created by yanxiaojun617@163.com on 12-27.
 */
import { Injectable } from '@angular/core';
import { ToastController, LoadingController, Platform, Loading, AlertController } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Toast } from '@ionic-native/toast';
import { File, FileEntry } from '@ionic-native/file';
// import { Transfer, TransferObject } from '@ionic-native/transfer'; // FileUploadOptions
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ImagePicker } from '@ionic-native/image-picker';
import { Network } from '@ionic-native/network';
import { FileChooser } from '@ionic-native/file-chooser';
import { Observable } from "rxjs";
import { Logger } from "./Logger";

import {
    APP_DOWNLOAD,
    APK_DOWNLOAD,
    IMAGE_SIZE,
    QUALITY_SIZE,
    REQUEST_TIMEOUT,
    CODE_PUSH_DEPLOYMENT_KEY,
    IS_DEBUG
  } from "./Constants";

// import {Observable} from "rxjs";
declare var LocationPlugin;
declare var AMapNavigation;
declare var cordova: any;

@Injectable()
export class NativeService {
    private loading: Loading;
    private loadingIsOpen: boolean = false;

    constructor(private platform: Platform,
                private toastCtrl: ToastController,
                private alertCtrl: AlertController,
                private appVersion: AppVersion,
                private camera: Camera,
                private toast: Toast,
                private fileTransfer: FileTransfer,
                private file: File,
                private fileChooser: FileChooser,
                private inAppBrowser: InAppBrowser,
                private imagePicker: ImagePicker,
                private network: Network,
                private loadingCtrl: LoadingController,
                public logger: Logger) {
    }

    // const fileTransfer: TransferObject = this.transfer.create();


    warn(info): void {
        console.log('%cNativeService/' + info, 'color:#e8c406');
    }


    /**
     * 下载
     */

    download(source: string, target: string, trustAllHosts?, Optional?) {
        let alert = this.alertCtrl.create({
            title: '下载进度：0%',
            enableBackdropDismiss: false,
            buttons: ['后台下载']
        });
        alert.present();

        const fileTransfer: FileTransferObject = this.fileTransfer.create();
        // target = this.file.dataDirectory + target; // 文件保存的目录
        target = this.file.dataDirectory + target;
        console.log(target);
        fileTransfer.download(encodeURI(source), target).then((entry) => {
            console.log('download complete: ' + entry.toURL());
          }, (error) => {
            console.log(error);
          });

        fileTransfer.onProgress((event: ProgressEvent) => {
            let num = Math.floor(event.loaded / event.total * 100);
            if (num === 100) {
                alert.dismiss();
            } else {
                let title = document.getElementsByClassName('alert-title')[0];
                title && (title.innerHTML = '下载进度：' + num + '%');
            }
        });
    }

    /**
     * 通过浏览器打开url
     */
    openUrlByBrowser(url: string): void {
        this.inAppBrowser.create(url, '_system');
    }

    /**
     * 检查app是否需要升级
     */
    detectionUpgrade() {
        // 这里连接后台判断是否需要升级,不需要升级就return
        this.alertCtrl.create({
            title: '升级',
            subTitle: '发现新版本,是否立即升级？',
            buttons: [{ text: '取消' },
            {
                text: '确定',
                handler: () => {
                    this.downloadApp();
                }
            }
            ]
        }).present();
    }

    /**
     * 下载安装app
     */
    downloadApp() {
        if (this.isAndroid()) {
            let alert = this.alertCtrl.create({
                title: '下载进度：0%',
                enableBackdropDismiss: false,
                buttons: ['后台下载']
            });
            alert.present();

            const fileTransfer: FileTransferObject = this.fileTransfer.create();
            const apk = this.file.externalRootDirectory + 'android.apk'; // apk保存的目录

            fileTransfer.download(APK_DOWNLOAD, apk).then(() => {
                window['install'].install(apk.replace('file://', ''));
            });

            fileTransfer.onProgress((event: ProgressEvent) => {
                let num = Math.floor(event.loaded / event.total * 100);
                if (num === 100) {
                    alert.dismiss();
                } else {
                    let title = document.getElementsByClassName('alert-title')[0];
                    title && (title.innerHTML = '下载进度：' + num + '%');
                }
            });
        }
        if (this.isIos()) {
            this.openUrlByBrowser(APP_DOWNLOAD);
        }
    }

    /**
     * 是否真机环境
     * @return {boolean}
     */
    isMobile(): boolean {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    }

    /**
     * 是否android真机环境
     * @return {boolean}
     */
    isAndroid(): boolean {
        return this.isMobile() && this.platform.is('android');
    }

    /**
     * 是否ios真机环境
     * @return {boolean}
     */
    isIos(): boolean {
        return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
    }

    /**
     * 统一调用此方法显示提示信息
     * @param message 信息内容
     * @param duration 显示时长
     */
    showToast(message: string = '操作完成', duration: number = 2000, callback?: object): void {
        if (this.isMobile()) {
            this.toast.show(message, String(duration), 'center').subscribe();
        } else {
            this.toastCtrl.create({
                message: message,
                duration: duration,
                position: 'middle',
                showCloseButton: false
            }).present();
        }
    }


    /**
     * 统一调用此方法显示loading
     * @param content 显示的内容
     */
    showLoading(content: string = ''): void {
        if (!this.loadingIsOpen) {
            this.loadingIsOpen = true;
            this.loading = this.loadingCtrl.create({
                content: content
            });
            this.loading.present();
            setTimeout(() => {// 最长显示10秒
                this.loadingIsOpen && this.loading.dismiss();
                this.loadingIsOpen = false;
            }, 10000);
        }
    }

    /**
     * 关闭loading
     */
    hideLoading(): void {
        this.loadingIsOpen && this.loading.dismiss();
        this.loadingIsOpen = false;
    }

  /**
   * 使用cordova-plugin-camera获取照片
   * @param options
   */
  getPicture(options: CameraOptions = {}): Observable<string> {
    let ops: CameraOptions = Object.assign({
      sourceType: this.camera.PictureSourceType.CAMERA, // 图片来源,CAMERA:拍照,PHOTOLIBRARY:相册
      destinationType: this.camera.DestinationType.DATA_URL, // 默认返回base64字符串,DATA_URL:base64   FILE_URI:图片路径
      quality: QUALITY_SIZE, // 图像质量，范围为0 - 100
      allowEdit: false, // 选择图片前是否允许编辑
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: IMAGE_SIZE, // 缩放图像的宽度（像素）
      targetHeight: IMAGE_SIZE, // 缩放图像的高度（像素）
      saveToPhotoAlbum: false, // 是否保存到相册
      correctOrientation: true // 设置摄像机拍摄的图像是否为正确的方向
    }, options);
    return Observable.create(observer => {
      this.camera.getPicture(ops).then((imgData: string) => {
        if (ops.destinationType === this.camera.DestinationType.DATA_URL) {
          observer.next('data:image/jpg;base64,' + imgData);
        } else {
          observer.next(imgData);
        }
      }).catch(err => {
        if (err == 20) {
          this.showToast('没有权限,请在设置中开启权限', 1000);
          return;
        }
        if (String(err).indexOf('cancel') != -1) {
          return;
        }
        this.logger.log(err, '使用cordova-plugin-camera获取照片失败');
        this.showToast('获取照片失败', 800);
      });
    });
  }

  /**
   * 通过拍照获取照片
   * @param options
   */
  getPictureByCamera(options: CameraOptions = {}): Observable<string> {
    let ops: CameraOptions = Object.assign({
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL // DATA_URL: 0 base64字符串, FILE_URI: 1图片路径
    }, options);
    return this.getPicture(ops);
  }

  /**
   * 通过图库获取照片
   * @param options
   */
  getPictureByPhotoLibrary(options: CameraOptions = {}): Observable<string> {
    let ops: CameraOptions = Object.assign({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL // DATA_URL: 0 base64字符串, FILE_URI: 1图片路径
    }, options);
    return this.getPicture(ops);
  }

  /**
   * 通过图库选择多图
   * @param options
   */
  getMultiplePicture(options = {}): Observable<any> {
    let that = this;
    let ops = Object.assign({
      maximumImagesCount: 6,
      width: IMAGE_SIZE, // 缩放图像的宽度（像素）
      height: IMAGE_SIZE, // 缩放图像的高度（像素）
      quality: QUALITY_SIZE // 图像质量，范围为0 - 100
    }, options);
    return Observable.create(observer => {
      this.imagePicker.getPictures(ops).then(files => {
        let destinationType = options['destinationType'] || 0; // 0:base64字符串,1:图片url
        if (destinationType === 1) {
          observer.next(files);
        } else {
          let imgBase64s = []; // base64字符串数组
          for (let fileUrl of files) {
            that.convertImgToBase64(fileUrl).subscribe(base64 => {
              imgBase64s.push(base64);
              if (imgBase64s.length === files.length) {
                observer.next(imgBase64s);
              }
            });
          }
        }
      }).catch(err => {
        this.logger.log(err, '通过图库选择多图失败');
        this.showToast('获取照片失败', 800);
      });
    });
  }

  /**
   * 根据图片绝对路径转化为base64字符串
   * @param path 绝对路径
   */
  convertImgToBase64(path: string): Observable<string> {
    return Observable.create(observer => {
      this.file.resolveLocalFilesystemUrl(path).then((fileEnter: FileEntry) => {
        fileEnter.file(file => {
          let reader = new FileReader();
          reader.onloadend = function (e) {
            observer.next(this.result);
          };
          reader.readAsDataURL(file);
        });
      }).catch(err => {
        this.logger.log(err, '根据图片绝对路径转化为base64字符串失败');
      });
    });
  }


    /**
     * 获取网络类型 如`unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
     */
    getNetworkType(): string {
        if (!this.isMobile()) {
            return 'wifi';
        }
        return this.network.type;
    }

    /**
     * 判断是否有网络
     * @returns {boolean}
     */
    isConnecting(): boolean {
        return this.getNetworkType() != 'none';
    }

    /**
     * 获得app版本号,如0.01
     * @description  对应/config.xml中version的值
     * @returns {Promise<string>}
     */
    getVersionNumber(): Promise<string> {
        return new Promise((resolve) => {
            this.appVersion.getVersionNumber().then((value: string) => {
                resolve(value);
            }).catch(err => {
                this.warn('getVersionNumber:' + err);
            });
        });
    }

    /**
     * 获得app name,如ionic2_tabs
     * @description  对应/config.xml中name的值
     * @returns {Promise<string>}
     */
    getAppName(): Promise<string> {
        return new Promise((resolve) => {
            this.appVersion.getAppName().then((value: string) => {
                resolve(value);
            }).catch(err => {
                this.warn('getAppName:' + err);
            });
        });
    }

    /**
     * 获得app包名/id,如com.kit.ionic2tabs
     * @description  对应/config.xml中id的值
     * @returns {Promise<string>}
     */
    getPackageName(): Promise<string> {
        return new Promise((resolve) => {
            this.appVersion.getPackageName().then((value: string) => {
                resolve(value);
            }).catch(err => {
                this.warn('getPackageName:' + err);
            });
        });
    }
}
