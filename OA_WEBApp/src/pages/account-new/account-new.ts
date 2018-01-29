import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,
     Events, ModalController, ActionSheetController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { UserInfo } from "../../model/UserInfo";
import { GlobalData } from "../../providers/GlobalData";
// import { LoginPage } from "../login/login";

import { NativeService } from '../../providers/NativeService';

import { FileService } from "../../providers/FileService";
import { FileObj } from "../../model/FileObj";
import { Utils } from "../../providers/Utils";

@IonicPage()
@Component({
  selector: 'page-account-new',
  templateUrl: 'account-new.html',
})
export class AccountNewPage {

  userInfo: UserInfo = new UserInfo();
  isChange: boolean = false; // 头像是否改变标识
  // avatarPath: string;
  imageBase64: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage: Storage,
              public globalData: GlobalData,
              private events: Events,
              private modalCtrl: ModalController,
              private actionSheetCtrl: ActionSheetController,
              private fileService: FileService,
              private alertCtrl: AlertController,
              public nativeService: NativeService) {
      this.userInfo.photo = "assets/img/ionic.png";
      // this.navCtrl.parent.select(this.navCtrl.parent.getByIndex(0));
      // console.log(this.navCtrl.parent.selectedIndex);
  }

  ionViewWillEnter(){
      this.storage.get('UserInfo').then((userInfo: UserInfo) => {
          if (userInfo) {
              userInfo.photo = userInfo.photo ? userInfo.photo : this.userInfo.photo;
              this.userInfo = userInfo;
              this.events.publish('user:login', userInfo);
              this.globalData.Uid = userInfo.Uid;
              this.globalData.Name = userInfo.Name;
              this.globalData.token = userInfo.Token;
          } else {
              let modal = this.modalCtrl.create("LoginPage");
              modal.present();
              modal.onDidDismiss(data => {
                  if (!!data){
                      this.navCtrl.parent.goToRoot();
                  }
              });
          }
      });
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad Account');
  }

  edit() {
      this.navCtrl.push("AccountEdit");
  }

  getAboutus() {
      this.navCtrl.push("AboutusPage");
  }

  pwdEdit() {
      this.navCtrl.push("AccountPasswordedit");
     
  }

  changePhoto() {
      let options = {
          targetWidth: 400,
          targetHeight: 400
        };
      this.nativeService.getPictureByPhotoLibrary(options).subscribe(filepath => {
          // console.log(filepath);
          this.fileService.uploadPicture(filepath).subscribe(data => this.photoAddSuc(data));
      });
      // let actionSheet = this.actionSheetCtrl.create({
      //     title: '获取头像方式',
      //     buttons: [
      //         {
      //             text: '相册',
      //             handler: () => {
      //                 this.nativeService.getPictureByPhotoLibrary(options).subscribe(filepath => {
      //                     console.log(filepath);
      //                     this.fileService.uploadPicture(filepath).subscribe(data => this.photoAddSuc(data));
      //                 });

      //             }
      //         }, {
      //             text: '拍照',
      //             handler: () => {
      //                 this.nativeService.getPictureByCamera(options).subscribe(filepath => {
      //                     console.log(filepath);
      //                     this.fileService.uploadPicture(filepath).subscribe(data => this.photoAddSuc(data));
      //                 });
      //             }

      //         }, {
      //             text: '取消',
      //             role: 'cancel',
      //             handler: () => {
      //                 console.log('Cancel clicked');
      //             }
      //         }
      //     ]
      // });
      // actionSheet.present();
    
  }

  private photoAddSuc(data){
      let Data = JSON.parse(data.response).Data;
      this.userInfo.photo = this.globalData.FILE_SERVE_URL + "images/hr/" + Data[0].NewName;
      console.log(Data[0]);
      // this.attName = Data[0].OldName;
      // this.attNo = Data[0].AttNo;

      this.storage.get('UserInfo').then((userInfo: UserInfo) => {
          userInfo.photo =  this.globalData.FILE_SERVE_URL + "images/hr/" + Data[0].NewName;
          this.storage.set('UserInfo', userInfo);
      });
    }

  // private getPictureSuccess(imageBase64) {
  //     this.isChange = true;
  //     this.imageBase64 = <string>imageBase64;
  //     this.userInfo.photo = 'data:image/jpg;base64,' + imageBase64;
  // }

  // save() {
  //     if (this.isChange) {
  //         let fileObj = <FileObj>{ 'base64': this.imageBase64 };
  //         this.fileService.uploadByBase64(fileObj).subscribe(result => {// 上传图片到文件服务器
  //             if (result) {
  //                 let origPath = FILE_SERVE_URL + result[0].origPath;
  //                 this.storage.get('UserInfo').then((userInfo: UserInfo) => {
  //                     userInfo.photo = origPath;
  //                     this.storage.set('UserInfo', userInfo);
  //                 });
  //                 // this.viewCtrl.dismiss({avatarPath: origPath});
  //                 // 这里需要保存avatar字段到用户表
  //             }
  //         });
  //     } else {
  //         this.userInfo.photo = this.storage.get('UserInfo')["photo"];
  //     }
  // }

  signOut(){
      this.storage.clear(); // 清除缓存
      Utils.sessionStorageClear(); // 清除数据缓存
      let modal = this.modalCtrl.create("LoginPage");
      modal.present();
      modal.onDidDismiss(data => {
          data && this.navCtrl.parent.goToRoot();
      });
  }

}
