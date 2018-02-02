import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,
     Events, ModalController, ActionSheetController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { UserInfo } from "../../../model/UserInfo";
import { GlobalData } from "../../../providers/GlobalData";
// import { LoginPage } from "../login/login";

import { NativeService } from '../../../providers/NativeService';

import { FileService } from "../../../providers/FileService";
import { Utils } from "../../../providers/Utils";

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

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

  pwdEdit() {
      this.navCtrl.push("AccountPasswordedit");
     
  }

  signOut(){
      // this.storage.clear(); // 清除缓存
      this.storage.remove("LoginInfo");
      this.storage.remove("UserInfo");
      Utils.sessionStorageClear(); // 清除数据缓存
      let modal = this.modalCtrl.create("LoginPage");
      modal.present();
      modal.onDidDismiss(data => {
          data && this.navCtrl.parent.goToRoot();
      });
  }

}
