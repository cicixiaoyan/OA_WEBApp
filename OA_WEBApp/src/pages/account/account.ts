import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { AccountEdit } from '../account/account-edit/account-edit';
import { AccountPasswordedit } from '../account/account-passwordedit/account-passwordedit';


import { UserInfo } from "../../model/UserInfo";
import { GlobalData } from "../../providers/GlobalData";
import { LoginPage } from "../login/login";


/**
 * Generated class for the Account page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})

export class Account {
  userInfo: UserInfo = new UserInfo();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage,
              private globalData: GlobalData,
              private events: Events,
              private modalCtrl: ModalController) {
     this.storage.get('UserInfo').then((userInfo: UserInfo) => {
          if (userInfo) {
            this.userInfo = userInfo;
            this.events.publish('user:login', userInfo);
            this.globalData.ui_id = userInfo.ui_id;
            this.globalData.ui_desc = userInfo.ui_desc;
            // this.globalData.token = userInfo.token;
          } else {
            let modal = this.modalCtrl.create(LoginPage);
            modal.present();
            modal.onDidDismiss(data => {
              data && console.log(data);
            });
          }
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Account');
  }

  edit(){
    this.navCtrl.push(AccountEdit);
  }

  pwdEdit(){
    this.navCtrl.push(AccountPasswordedit);
  }

}
