import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,
     Events, ModalController, ActionSheetController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UserInfo } from "../../../model/UserInfo";
import { GlobalData } from "../../../providers/GlobalData";
import { NativeService } from '../../../providers/NativeService';
import { FileService } from "../../../providers/FileService";
import { Utils } from "../../../providers/Utils";
import { JPush } from 'ionic3-jpush';
// import { OpenNativeSettings } from '@ionic-native/open-native-settings';
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
  openJPush: boolean = true;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage: Storage,
              public nativeService: NativeService,
              public globalData: GlobalData,
              public jPush: JPush,
            //   private openNativeSettings: OpenNativeSettings,
              private events: Events,
              private modalCtrl: ModalController,
              private actionSheetCtrl: ActionSheetController,
              private fileService: FileService,
              private alertCtrl: AlertController) {
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
      this.jPush.getUserNotificationSettings().then((result) => {
        if (result == 0) {
            // 系统设置中已关闭应用推送。
            this.openJPush = false;
        } else if (result > 0) {
            // 系统设置中打开了应用推送。
            this.openJPush = true;
        }
    }).catch(err => console.log(err));
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

    stopPush() {
        if (this.openJPush == true) {
            console.log(false);
            this.jPush.resumePush().then(data => {
                // this.jPush.isPushStopped().then(data => {
                //     if (data > 0) {
                        console.log("您将收到任何推送消息");
                        this.nativeService.showToast("已恢复推送");
                        this.openJPush = true;
                //     } else {
                //         this.nativeService.showToast("推送恢复失败");
                //         this.openJPush = true;
                //     }
                // });
            })
                .catch(err => console.log(err));
        } else {
                        console.log(true);
            // this.jPush.isPlatformIOS()
            //     .then((bol) => {
            //         if (bol) {
            //             let prompt = this.alertCtrl.create({
            //                 title: '关闭推送提示',
            //                 message: "请手动到&nbsp;设置->通知->找到OA应用并点击->允许通知&nbsp;，关闭通知！",
            //                 buttons: [
            //                     {
            //                         text: '取消关闭',
            //                         handler: data => {
            //                             this.openJPush = true;
            //                         }
            //                     },
            //                     {
            //                         text: '前往设置',
            //                         handler: data => {
            //                             this.openNativeSettings.open("settings").then((data) => {
            //                                 console.log(data);
            //                             });
            //                         }
            //                     }
            //                 ]
            //             });
            //             prompt.present();

            //         } else {
                        this.jPush.stopPush().then(data => {
                            console.log("您将不会收到任何推送消息");
                            this.nativeService.showToast("您将不会收到任何推送消息");
                            this.openJPush = false;
                        }).catch(err => console.log(err));
                //     }
                // })
                // .catch(err => console.log(err));
        }

    }

}
