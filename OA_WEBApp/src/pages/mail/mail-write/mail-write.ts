import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,
    AlertController, ActionSheetController, PopoverController } from 'ionic-angular';

import { GlobalData } from '../../../providers/GlobalData';
import { NativeService } from '../../../providers/NativeService';
import { FileService } from "../../../providers/FileService";
import { FileObj } from "../../../model/FileObj";
import { FILE_SERVE_URL } from "../../../providers/Constants";
import { FileChooser } from '@ionic-native/file-chooser';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MailService } from "../mailService";
import { Utils } from '../../../providers/Utils';



/**
 * Generated class for the MailWrite page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
    template: `
        <ion-list class="checkpeople-popover">
        <ion-item>
            <ion-label>部门选择</ion-label>
            <ion-select [(ngModel)]="dept" submitText="确定" (ngModelChange)="getRecipientsByDept(dept)"
                cancelText="取消" okText="确定">
                <ion-option  *ngFor="let item of deptItems;let i = index" [value]="item.Id">
                    {{item.BmName}}
                </ion-option>
            </ion-select>
        </ion-item>
        <ion-searchbar color="danger" [(ngModel)]="name"  placeholder="请输入编码或姓名">
        </ion-searchbar>

        <div text-center>
            <button (click)="search()" icon-left ion-button small color="calm">
            <ion-icon name="search"></ion-icon>查询</button>

            <button (click)="confirm()" icon-left ion-button small color="calm">
            <ion-icon name="checkmark"></ion-icon>确定</button>
        </div>

        <ion-list-header>
            通讯录
        </ion-list-header>

        <ion-item *ngFor="let item of items;let i = index">
            <ion-label>
            {{item.Name}}({{item.Uid}})<br>
            <span>{{item.Dept}}&emsp;{{item.Duty}}</span>
            </ion-label>
            <ion-checkbox [checked]="item.checked" (ionChange)="checkPeople(i)"></ion-checkbox>
        </ion-item>
        <ion-list>
    `
})
export class PopoverPage {
    dept: string;
    deptItems: any = [];
    items: any = [];
    haveAffix: boolean = false;
    addressee: string;
    addresseeIds: string;
    name: string;

    constructor(private navParams: NavParams,
                public viewCtrl: ViewController,
                public mailService: MailService) {
        this.addressee = this.navParams.get("addressee");
        this.addresseeIds = this.navParams.get("addresseeIds");
        console.log(this.addressee, this.addresseeIds);
        this.initializeItems();
    }

    initializeItems() {
        // const testArray = [
        //     { ui_id: "1", ui_desc: "admin1", bianhao: "dewr1", ui_ssbm: "本部1", ui_zw: "职员" },
        //     { ui_id: "2", ui_desc: "admin2", bianhao: "dewr2", ui_ssbm: "本部2", ui_zw: "职员" },
        //     { ui_id: "3", ui_desc: "admin3", bianhao: "dewr3", ui_ssbm: "本部3", ui_zw: "职员" },
        //     { ui_id: "4", ui_desc: "admin4", bianhao: "dewr4", ui_ssbm: "本部4", ui_zw: "职员" },
        //     { ui_id: "5", ui_desc: "admin5", bianhao: "dewr5", ui_ssbm: "本部5", ui_zw: "职员" },
        //     { ui_id: "6", ui_desc: "admin6", bianhao: "dewr6", ui_ssbm: "本部6", ui_zw: "职员" },
        //     { ui_id: "7", ui_desc: "admin7", bianhao: "dewr7", ui_ssbm: "本部7", ui_zw: "职员" }
        // ];

        this.mailService.getDept().subscribe((resJson) => {
            if (resJson.Result){
                this.deptItems = resJson.Data;
            }
        });

        this.mailService.getRecipients({}).subscribe((result) => {
            console.log(result);
            if (result.Result){
                const idArr = this.addresseeIds.split(",");

                this.items = result.Data.map(function (value, index) {
                    for (let i in idArr) {
                        if (idArr[i] !== value.Uid) {
                            Object.assign(value, { checked: false });
                        } else {
                            return Object.assign(value, { checked: true });

                        }
                    }
                    return value;

                });
            }

        });


    }

    getItems(ev) {
        // Reset items back to all of the items
        this.initializeItems();

        // set val to the value of the ev target
        let val = ev.target.value;
        this.name = val;
        // if the value is an empty string don't filter the items
        // if (val && val.trim() != '') {
        //   this.items = this.items.filter((item) => {
        //     return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        //   });
        // }
    }

    getRecipientsByDept(id){
        this.mailService.getRecipientsByDept({DeptId: id}).subscribe((result) => {
            console.log(result);
            if (result.Result){
                const idArr = this.addresseeIds.split(",");

                this.items = result.Data.map(function (value, index) {
                    for (let i in idArr) {
                        if (idArr[i] !== value.Uid) {
                            Object.assign(value, { checked: false });
                        } else {
                            return Object.assign(value, { checked: true });

                        }
                    }
                    return value;

                });
            }
        });
    }



    serach() {

        this.mailService.getRecipients({name: this.name}).subscribe((result) => {
            console.log(result);
            if (result.Result){
                const idArr = this.addresseeIds.split(",");

                this.items = result.Data.map(function (value, index) {
                    for (let i in idArr) {
                        if (idArr[i] !== value.Uid) {
                            Object.assign(value, { checked: false });
                        } else {
                            return Object.assign(value, { checked: true });

                        }
                    }
                    return value;

                });
            }
        });
     }

    checkPeople(index: number) {
        this.items[index].checked = !this.items[index].checked;
    }

    confirm() {
        console.log(confirm);
        this.addressee = "";
        this.addresseeIds = "";
        for (let value of this.items) {
            if (value.checked) {
                this.addressee += value.Name + ",";
                this.addresseeIds += value.Uid + ",";
            }
        }
        this.viewCtrl.dismiss({ addressee: this.addressee, addresseeIds: this.addresseeIds });
    }
}

@IonicPage()
@Component({
    selector: 'page-mail-write',
    templateUrl: 'mail-write.html',
})
export class MailWrite {
    // avatarPath: string;
    imageBase64: string;
    affixPath: string;
    addressee: string = "";
    addresseeIds: string = "";
    attName: string = "109.png";
    fsbt: "主题";
    haveAffix: boolean = false;

    writeForm: FormGroup;
    // mailObj : object = {};
    @ViewChild("popoverContent", { read: ElementRef }) content: ElementRef;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public actionSheetCtrl: ActionSheetController,
                private popoverCtrl: PopoverController,
                private fileService: FileService,
                public nativeService: NativeService,
                private fileChooser: FileChooser,
                private alertCtrl: AlertController,
                private transfer: Transfer,
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


            // Object.assign(this.mailObj,{
            //   "fsrName":this.globaldata.ui_desc,
            //   "fsrID":this.globaldata.ui_id,
            //   "attName":mail.attName,
            //   "fsbt":mail.jsbt,
            //   "yjfj":mail.yjfj
            // })
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
                            alert(mimeType);
                            let pathOption: FileUploadOptions = {
                                "fileKey": "file",
                                "fileName": fileURL.substr(fileURL.lastIndexOf('/') + 1),
                                "mimeType": Utils.getFileMimeType( mimeType ),
                                "headers" : {
                                    "Connection": "close"
                                },
                                "chunkedMode": false,
                                "httpMethod" : "POST",
                                "params": {"token": this.globalData.token}
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
        let popover = this.popoverCtrl.create(PopoverPage,
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

        const fileTransfer: TransferObject = this.transfer.create();

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




