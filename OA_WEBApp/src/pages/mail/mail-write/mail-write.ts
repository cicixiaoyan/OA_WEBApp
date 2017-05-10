import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, PopoverController } from 'ionic-angular';

import { NativeService } from '../../../providers/NativeService';
import {FileService} from "../../../providers/FileService";
import {FileObj} from "../../../model/FileObj";
import {FILE_SERVE_URL} from "../../../providers/Constants";

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
          <button icon-left ion-button small color="calm"><ion-icon name="search"></ion-icon>查询</button>
          <button icon-left ion-button small color="calm"><ion-icon name="ios-trash-outline"></ion-icon>清空</button>
          <button icon-left ion-button small color="calm"><ion-icon name="checkmark"></ion-icon>确定</button>
      </div>

      <ion-list-header>
        通讯录
      </ion-list-header>

      <ion-item *ngFor="let item of items">
        <ion-label>
          {{item.ui_desc}}({{item.ui_id}})<br>
          <span>{{item.ui_ssbm}}&emsp;{{item.ui_zw}}</span>
        </ion-label>
        <ion-checkbox checked="true"></ion-checkbox>
      </ion-item>
    <ion-list>

  `
})
export class PopoverPage {
  os: string;
  items;
  haveAffix: boolean = false;

  constructor(private navParams: NavParams,
              private fileService: FileService,
              public nativeService: NativeService) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
            { ui_id: "1", ui_desc: "admin", bianhao: "dewr", ui_ssbm: "本部", ui_zw: "职员" },
            { ui_id: "2", ui_desc: "admin", bianhao: "dewr", ui_ssbm: "本部", ui_zw: "职员" },
            { ui_id: "3", ui_desc: "admin", bianhao: "dewr", ui_ssbm: "本部", ui_zw: "职员" }
        ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
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
  affixPath:string;
  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController,
              private popoverCtrl: PopoverController,
              private fileService: FileService,
              public nativeService: NativeService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MailWrite');
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
        },{
          text: '拍照',
          handler: () => {
            this.nativeService.getPictureByPhotoLibrary(options).then(imageBase64 => {
              this.getPictureSuccess(imageBase64);
            });
          }
        },{
          text: '文件',
          handler: () => {
            console.log('文件');
          }
        },{
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

    let popover = this.popoverCtrl.create(PopoverPage);

    popover.present({
      ev: myEvent
    });
  }

  private getPictureSuccess(imageBase64) {
    this.imageBase64 = <string>imageBase64;
    this.affixPath = 'data:image/jpg;base64,' + imageBase64;
    let fileObj = <FileObj>{'base64': this.imageBase64};
      this.fileService.uploadByBase64(fileObj).subscribe(result => {// 上传图片到文件服务器
        if (result.success) {
          let origPath = FILE_SERVE_URL + result.data[0].origPath;
        }
      });
  }

}




