import { Injectable } from "@angular/core";
import { AlertController } from 'ionic-angular';
import { HttpService } from "./HttpService";
import { FILE_SERVE_URL } from "./Constants";
import { FileObj, AffixObj } from "../model/FileObj";
import { Response  } from "@angular/http";
import { Observable } from "rxjs";
import { NativeService } from "./NativeService";

import { FileChooser } from '@ionic-native/file-chooser';
// import { Transfer, FileUploadOptions, TransferObject, } from '@ionic-native/file-transfer';
import { Utils } from './Utils';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FileOpener } from '@ionic-native/file-opener';
/**
 * 上传图片到文件服务器
 */
@Injectable()
export class FileService {
  constructor(private httpService: HttpService,
              private nativeService: NativeService,
              private alertCtrl: AlertController,
              // private transfer: Transfer,
              private fileChooser: FileChooser,
              private file: File,
              private fileTransfer: FileTransfer,
              private fileOpener: FileOpener
            ) {
  }

  /**
   * 根据文件id获取文件信息
   * @param id
   * @returns {FileObj}
   */
  getFileInfoById(id: string): Observable<FileObj> {
    if (!id) {
      return Observable.never();
    }
    return this.httpService.get(FILE_SERVE_URL + '/getById', {id: id}).map((res: Response) => {
      let result = res.json();
      if (!result.success) {
        this.nativeService.showToast(result.msg, 800);
        return {};
      } else {
        let fileObj = result.data;
        fileObj.origPath = FILE_SERVE_URL + fileObj.origPath;
        fileObj.thumbPath = FILE_SERVE_URL + fileObj.thumbPath;
        return fileObj;
      }
    });
  }

  /**
   * 根据文件id数组获取文件信息
   * @param ids
   * @returns {FileObj[]}
   */
  getFileInfoByIds(ids: string[]): Observable<FileObj[]> {
    if (!ids || ids.length == 0) {
      return Observable.of([]);
    }
    return this.httpService.get(FILE_SERVE_URL + '/getByIds', {ids: ids}).map((res: Response) => {
      let result = res.json();
      if (!result.success) {
        this.nativeService.showToast(result.msg, 800);
        return [];
      } else {
        for (let fileObj of result.data) {
          fileObj.origPath = FILE_SERVE_URL + fileObj.origPath;
          fileObj.thumbPath = FILE_SERVE_URL + fileObj.thumbPath;
        }
        return result.data;
      }
    });
  }

  /**
   * 批量上传图片,只支持上传base64字符串
   * @param fileObjList 数组中的对象必须包含bse64属性
   * @returns {FileObj[]}
   */
  uploadMultiByBase64(fileObjList: FileObj[]): Observable<FileObj[]> {
    if (!fileObjList || fileObjList.length == 0) {
      return Observable.of([]);
    }
    return this.httpService.post(FILE_SERVE_URL + '/ashx/appUpload.aspx', fileObjList).map((res: Response) => {
      let result = res.json();
      if (!result.success) {
        this.nativeService.showToast(result.msg, 800);
        return [];
      } else {
        for (let fileObj of result.data) {
          fileObj.origPath = FILE_SERVE_URL + fileObj.origPath;
          fileObj.thumbPath = FILE_SERVE_URL + fileObj.thumbPath;
        }
        return result.data;
      }
    });
  }

  /**
   * 上传单张图片,只支持上传base64字符串
   * @param fileObj 对象必须包含origPath属性
   * @returns {FileObj}
   */
  uploadByBase64(fileObj: FileObj): Observable<FileObj> {
    if (!fileObj.base64) {
      return Observable.never();
    }
    return this.httpService.post(FILE_SERVE_URL + '/ashx/appUpload.aspx', [fileObj]).map((res: Response) => {
      let result = res.json();
      if (!result.success) {
        this.nativeService.showToast(result.msg, 800);
        return [];
      } else {
        let fileObj = result.data[0];
        fileObj.origPath = FILE_SERVE_URL + fileObj.origPath;
        fileObj.thumbPath = FILE_SERVE_URL + fileObj.thumbPath;
        return fileObj;
      }
    });
  }

  /**
   * 批量上传图片
   * @param fileObjList 数组中的对象必须包含origPath属性
   * @returns {FileObj[]}
   */
  uploadMultiByFilePath(fileObjList: FileObj[]): Observable<FileObj[]> {
    if (fileObjList.length == 0) {
      return Observable.of([]);
    }
    return Observable.create((observer) => {
      this.nativeService.showLoading();
      let fileObjs = [];
      for (let fileObj of fileObjList) {
        this.nativeService.convertImgToBase64(fileObj.origPath).subscribe(base64 => {
          fileObjs.push({
            'base64': base64,
            'type': FileService.getFileType(fileObj.origPath),
            'parameter': fileObj.parameter
          });
          if (fileObjs.length === fileObjList.length) {
            this.uploadMultiByBase64(fileObjs).subscribe(res => {
              observer.next(res);
              this.nativeService.hideLoading();
            });
          }
        });
      }
    });
  }

  /**
   * app上传单张图片
   * @param fileObj 对象必须包含origPath属性
   * @returns {FileObj}
   */
  uploadByFilePath(fileObj: FileObj): Observable<FileObj> {
    if (!fileObj.origPath) {
      return Observable.never();
    }
    return Observable.create((observer) => {
      this.nativeService.showLoading();
      this.nativeService.convertImgToBase64(fileObj.origPath).subscribe(base64 => {
        let file = <FileObj>({
          'base64': base64,
          'type': FileService.getFileType(fileObj.origPath),
          'parameter': fileObj.parameter
        });
        this.uploadByBase64(file).subscribe(res => {
          observer.next(res);
          this.nativeService.hideLoading();
        });
      });
    });
  }

  private static getFileType(path: string): string {
    return path.substring(path.lastIndexOf('.') + 1);
  }

  /**
   * app上传附件
   * 
   */

  uploadAffix(type: number): Observable<any>{
    return Observable.create((observer) => {
      this.fileChooser.open().then(fileURL => {
        let mimeType = fileURL.toLowerCase().split(".").splice(-1)[0];
        let pathOption: FileUploadOptions = {
          "fileKey": "file",
          "fileName": fileURL.substr(fileURL.lastIndexOf('/') + 1),
          "mimeType": Utils.getFileMimeType(mimeType),
          "headers": {
            "Connection": "close",
            "Token": this.httpService.globalData.token,
          },
          "chunkedMode": false,
          "httpMethod": "POST",
          "params": {  "type": type }
        };
        let url = encodeURI(FILE_SERVE_URL + "ashx/AttachUpload.ashx");
        let alert = this.alertCtrl.create({
          title: '上传进度：0%',
          enableBackdropDismiss: false,
          buttons: ['后台上传']
        });
        alert.present();
        const fileTransfer: FileTransferObject = this.fileTransfer.create();
        fileTransfer.onProgress((event: ProgressEvent) => {
          let num = Math.floor(event.loaded / event.total * 100);
          if (num === 100) {
            alert.dismiss();
          } else {
            let title = document.getElementsByClassName('alert-title')[0];
            title && (title.innerHTML = '上传进度：' + url + event.loaded + " " + event.total + '%');
          }
        });
        fileTransfer.upload(fileURL, url, pathOption, true).then((data) => {
          alert.dismiss();
          observer.next(data);
        }, (err) => {
          console.log(err);
          alert.dismiss();
          this.nativeService.showToast(err);
          observer.next(err);
        });
        });
      });

  }

  download(url, name): Observable<any>{
    const fileTransfer: FileTransferObject = this.fileTransfer.create();
    return Observable.create((observer) => {
      fileTransfer.download(FILE_SERVE_URL + url, this.file.dataDirectory + name).then((entry) => {
        if (entry.Response == "200")
        observer.next(entry);
      }, (error) => {
        observer.next(error);
        // handle error
      });
    });

  }

/**
 * 下载
 */

download1(source: string, target: string, trustAllHosts?, Optional?): Observable<any> {
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
  return Observable.create((observer) => {
    fileTransfer.download(encodeURI(source), target).then((entry) => {
        console.log('download complete: ' + entry.toURL());
        observer.next(entry.toURL());
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
  });
}

/*
** 打开文件
*/

openFile(path): Observable<any>{
  let mimeType = path.toLowerCase().split(".").splice(-1)[0];
  return Observable.create((observer) => {
    this.fileOpener.open(path, Utils.getFileMimeType(mimeType))
    .then(() => observer.next())
    .catch(e => console.log('Error openening file', e));
  });
}


}