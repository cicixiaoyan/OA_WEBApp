import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Content } from 'ionic-angular';

/**
 * Generated class for the SmsReadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sms-read',
  templateUrl: 'sms-read.html',
})
export class SmsReadPage {

  @ViewChild(Content) content: Content;
  Content: string; // 消息内容
  detail: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.initializeItems();
  }
  initializeItems() {
      this.detail = this.navParams.get("Params");
      console.log(this.detail);
      this.Content = this.detail.SmsMsg;
  }

}
