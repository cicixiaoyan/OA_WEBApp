import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,
    AlertController, ActionSheetController, PopoverController } from 'ionic-angular';

import { GlobalData } from '../../../providers/GlobalData';
import { NativeService } from '../../../providers/NativeService';
import { FileService } from "../../../providers/FileService";
import { FileObj } from "../../../model/FileObj";
import { FILE_SERVE_URL } from "../../../providers/Constants";
import { FileChooser } from '@ionic-native/file-chooser';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MailService } from "../mailService";
import { Utils } from '../../../providers/Utils';



/**
 * Generated class for the MailWrite page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-mail-write',
    templateUrl: 'mail-write.html',
})
export class MailWrite {
    imageBase64: string;
    affixPath: string;
    addressee: string = "";
    addresseeIds: string = "";
    attName: string = "109.png";
    fsbt: "主题";
    haveAffix: boolean = false;

    writeForm: FormGroup;
    @ViewChild("popoverContent", { read: ElementRef }) content: ElementRef;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public actionSheetCtrl: ActionSheetController,
                private popoverCtrl: PopoverController,
                private fileService: FileService,
                public nativeService: NativeService,
                private fileChooser: FileChooser,
                private alertCtrl: AlertController,
                private fileTransfer: FileTransfer,
                private viewCtrl: ViewController,
                private globalData: GlobalData,
                private mailService: MailService,
                private formBuilder: FormBuilder) {

        this.writeForm = this.formBuilder.group({
            addressee: ['', [Validators.required]],
            Title: ['', []],
            Level: ["普通", []],
            Bcc: [false, []],
            Content: ["", [Validators.maxLength(180)]],
        });

        // console.log(this.navParams.get("mail"));
        let mail = this.navParams.get("mail");
        if (typeof (mail) !== "undefined") {
            this.affixPath = mail.yjfj;
            this.fsbt = mail.jsbt;
        }
    }

    ionViewDidLoad() {
        console.log("ionViewDidLoad MailWrite");
    }

    sent(data) {
        // AccessPresonId= context.Request.Params["AccessPresonId"],
        // AccessPerson= context.Request.Params["AccessPerson"],
        // Title= context.Request.Params["Title"],
        // Content= context.Request.Params["Content"],
        // Level = context.Request.Params["Level"],
        // Bcc= context.Request.Params["Bcc"],
        // AttNo= context.Request.Params["AttNo"],
        // UserId= context.Request.Params["UserId"],
        // UserName = context.Request.Params["UserName"],
        let data1 =  {
            "AccessPresonId": this.addresseeIds,
            "AccessPerson": this.addressee,
            "Title": data.Title,
            "Content": data.Content,
            "Level": data.Level,
            "Bcc": data.Bcc,
            "AttNo": this.attName,
            "UserId": this.globalData.Uid,
            "UserName": this.globalData.Name
        };

        this.mailService.write(data).subscribe((resJson) => {
            resJson.Result ? this.nativeService.showToast("信息已发送") :
            this.nativeService.showToast(resJson.Data);
        });

    }

    addAffix() {
        let options = {
            targetWidth: 400,
            targetHeight: 400
        };
        let actionSheet = this.actionSheetCtrl.create({
            title: '添加附件选择',
            buttons: [
                {
                    text: '相册',
                    handler: () => {
                        this.nativeService.getPictureByPhotoLibrary(options).subscribe(imageBase64 => {
                            this.getPictureSuccess(imageBase64);
                        });

                    }
                }, {
                    text: '拍照',
                    handler: () => {
                        this.nativeService.getPictureByCamera(options).subscribe(imageBase64 => {
                            this.getPictureSuccess(imageBase64);
                        });
                    }
                }, {
                    text: '文件',
                    handler: () => {
                        this.fileChooser.open().then(fileURL => {
                            let mimeType = fileURL.toLowerCase().split(".").splice(-1)[0];
                            let pathOption: FileUploadOptions = {
                                "fileKey": "file",
                                "fileName": fileURL.substr(fileURL.lastIndexOf('/') + 1),
                                "mimeType": Utils.getFileMimeType( mimeType ),
                                "headers" : {
                                    "Connection": "close"
                                },
                                "chunkedMode": false,
                                "httpMethod" : "POST",
                                "params": {"token": this.globalData.token, "type": 1}
                            };
                            let url = encodeURI(FILE_SERVE_URL + "ashx/AttachUpload.ashx");
                            console.log(fileURL, url, pathOption, true);
                            return this.upload(fileURL, url, pathOption, true);
                        }).catch(err => {
                            console.log(err);
                        });
                    }
                }, {
                    text: '取消',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }

    checkPeople(myEvent) {
        let popover = this.popoverCtrl.create("ContactsPopoverPage",
            { addressee: this.addressee, addresseeIds: this.addresseeIds });
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(data => {
            if (!!data) {
                console.log(data);
                // {addressee:this.addressee,addresseeIds:this.addresseeIds}
                this.writeForm.patchValue({'addressee': data.addressee});
                this.addresseeIds = data.addresseeIds;
            }

        });
    }

    private getPictureSuccess(imageBase64) {
        this.imageBase64 = <string>imageBase64;
        this.affixPath = "data:image/jpg;base64," + imageBase64;
        let fileObj = <FileObj>{ "base64": this.imageBase64 };
        this.fileService.uploadByBase64(fileObj).subscribe(result => {// 上传图片到文件服务器
            if (result) {
                let origPath = FILE_SERVE_URL + result.origPath;
                console.log(origPath);
            }
        });
    }



    /**
     * 上传
     */
    upload(fileUrl, url, options, trustAllHosts?: boolean) {
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
        return fileTransfer.upload(fileUrl, url, options, trustAllHosts).then((data) => {
            console.log(data);
            this.haveAffix = true;

          }, (err) => {
            // error
            console.log(err);
          }).catch((err) => {
            console.log(err);
            alert.dismiss();
            this.nativeService.showToast(err);
          });
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }


}




