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


  private static getFileType(path: string): string {
    return path.substring(path.lastIndexOf('.') + 1);
  }

  upload(fileURL, url, pathOption, observer){
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
        this.upload(fileURL, url, pathOption, observer);
      });
    });

  }

  /**
   * app上传图片
   * 
   */

  uploadPicture(filepath): Observable<any>{
    return Observable.create(observer => {
      let pathOption: FileUploadOptions = {
        "fileKey": "file",
        "fileName": "img",
        "mimeType": "image/jpeg",
        "headers": {
          "Connection": "close",
          "Token": this.httpService.globalData.token,
        },
        "chunkedMode": false,
        "httpMethod": "POST",
        "params": {  "type": 2 }
      };
      let url = encodeURI(FILE_SERVE_URL + "ashx/AttachUpload.ashx");
      this.upload(filepath, url, pathOption, observer);

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