import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, ActionSheetController, PopoverController } from 'ionic-angular';

import { GlobalData } from '../../../providers/GlobalData';
import { NativeService } from '../../../providers/NativeService';
import { FileService } from "../../../providers/FileService";
import { FileObj } from "../../../model/FileObj";
import { FILE_SERVE_URL } from "../../../providers/Constants";
import { FileChooser } from '@ionic-native/file-chooser';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { Storage } from '@ionic/storage';



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
        <ion-select [(ngModel)]="os" submitText="确定" cancelText="取消">
            <ion-option value="dos">本部</ion-option>
            <ion-option value="lunix">研发部</ion-option>
            <ion-option value="mac7">测试部</ion-option>
        </ion-select>
      </ion-item>
      <ion-searchbar color="danger" (ionInput)="getItems($event)" placeholder="请输入编码或姓名"></ion-searchbar>
            
      <div text-center>
          <button (click)="search()" icon-left ion-button small color="calm"><ion-icon name="search"></ion-icon>查询</button>
          <button (click)="confirm()" icon-left ion-button small color="calm"><ion-icon name="checkmark"></ion-icon>确定</button>
      </div>

      <ion-list-header>
        通讯录
      </ion-list-header>

      <ion-item *ngFor="let item of items;let i = index">
        <ion-label>
          {{item.ui_desc}}({{item.ui_id}})<br>
          <span>{{item.ui_ssbm}}&emsp;{{item.ui_zw}}</span>
        </ion-label>
        <ion-checkbox [checked]="item.checked" (ionChange)="checkPeople(i)"></ion-checkbox>
      </ion-item>
    <ion-list>

  `
})
export class PopoverPage {
    os: string;
    items: any = [];
    haveAffix: boolean = false;
    addressee: string;
    addresseeIds: string;

    constructor(private navParams: NavParams,
                private fileService: FileService,
                public nativeService: NativeService,
                public viewCtrl: ViewController,
                public storage: Storage) {
        this.addressee = this.navParams.get("addressee");
        this.addresseeIds = this.navParams.get("addresseeIds");
        console.log(this.addressee, this.addresseeIds);
        this.initializeItems();
    }

    initializeItems() {
        const testArray = [
            { ui_id: "1", ui_desc: "admin1", bianhao: "dewr1", ui_ssbm: "本部1", ui_zw: "职员" },
            { ui_id: "2", ui_desc: "admin2", bianhao: "dewr2", ui_ssbm: "本部2", ui_zw: "职员" },
            { ui_id: "3", ui_desc: "admin3", bianhao: "dewr3", ui_ssbm: "本部3", ui_zw: "职员" },
            { ui_id: "4", ui_desc: "admin4", bianhao: "dewr4", ui_ssbm: "本部4", ui_zw: "职员" },
            { ui_id: "5", ui_desc: "admin5", bianhao: "dewr5", ui_ssbm: "本部5", ui_zw: "职员" },
            { ui_id: "6", ui_desc: "admin6", bianhao: "dewr6", ui_ssbm: "本部6", ui_zw: "职员" },
            { ui_id: "7", ui_desc: "admin7", bianhao: "dewr7", ui_ssbm: "本部7", ui_zw: "职员" }
        ];

        const idArr = this.addresseeIds.split(",");

        this.items = testArray.map(function(value, index){
            for (var i in idArr){
                if (idArr[i] !== value.ui_id){
                    Object.assign(value, {checked: false});
                }else{
                    return Object.assign(value, {checked: true});
                    
                }
            }
            return value;
          
        });
    }

    getItems(ev) {
      // // Reset items back to all of the items
      // this.initializeItems();

      // // set val to the value of the ev target
      // var val = ev.target.value;

      // // if the value is an empty string don't filter the items
      // if (val && val.trim() != '') {
      //   this.items = this.items.filter((item) => {
      //     return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      //   })
      // }
    }

    serach(){}

    checkPeople(index: number){
        this.items[index].checked = !this.items[index].checked;
    }

    confirm(){
        console.log(confirm);
        this.addressee = "";
        this.addresseeIds = "";
        for (var value of this.items){
            if (value.checked){
                this.addressee += value.ui_desc + ",";
                this.addresseeIds += value.ui_id + ",";
            }
        }
        this.viewCtrl.dismiss({addressee: this.addressee, addresseeIds: this.addresseeIds});
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
    msbz: boolean = false; // 密送标志
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
                private globaldata: GlobalData) {
        console.log(this.navParams.get("mail"));
        let mail = this.navParams.get("mail");
        if (typeof(mail) !== "undefined"){
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

    send(){
        console.log(this.msbz);
        this.nativeService.showToast("信息已发送");
    }

    addAffix(){
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
                this.nativeService.getPictureByCamera(options).then(imageBase64 => {
                        this.getPictureSuccess(imageBase64);
                      });
                }
              }, {
                text: '拍照',
                handler: () => {
                  this.nativeService.getPictureByPhotoLibrary(options).then(imageBase64 => {
                    this.getPictureSuccess(imageBase64);
                  });
                }
              }, {
                text: '文件',
                handler: () => {
                  this.fileChooser.open().then(fileURL => {
                    var pathOption : FileUploadOptions = {
                      fileKey: "file",
                      fileName: fileURL.substr(fileURL.lastIndexOf('/') + 1),
                      mimeType: "text/plain"
                    };
                    var url = encodeURI("http://some.server.com/upload.php");
                    return this.upload(fileURL, url, pathOption);
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
            {addressee: this.addressee, addresseeIds: this.addresseeIds});
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(data => {
            if (!!data){
                console.log(data);
                // {addressee:this.addressee,addresseeIds:this.addresseeIds}
                this.addressee = data.addressee;
                this.addresseeIds = data.addresseeIds;
            }
          
        });
    }

    private getPictureSuccess(imageBase64) {
        this.imageBase64 = <string>imageBase64;
        this.affixPath = "data:image/jpg;base64," + imageBase64;
        let fileObj = <FileObj>{"base64": this.imageBase64};
        this.fileService.uploadByBase64(fileObj).subscribe(result => {// 上传图片到文件服务器
          if (result.success) {
              let origPath = FILE_SERVE_URL + result.data[0].origPath;
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
          buttons: ['后台下载']
        });
        alert.present();

        const fileTransfer: TransferObject = this.transfer.create();

        fileTransfer.onProgress((event: ProgressEvent) => {
            let num = Math.floor(event.loaded / event.total * 100);
            if (num === 100) {
              alert.dismiss();
            } else {
              let title = document.getElementsByClassName('alert-title')[0];
              title && (title.innerHTML = '上传进度：' + num + '%');
            }
        });
        return fileTransfer.upload(fileUrl, url, options);
    }

    dismiss(){
        this.viewCtrl.dismiss();
    }
    

}




