import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Content } from 'ionic-angular';


import { MessageService } from '../messageService';

/**
 * Generated class for the MessageReadOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message-read-out',
  templateUrl: 'message-read-out.html',
})
export class MessageReadOutPage {
  @ViewChild(Content) content: Content;
  messageDetail: any = [];
  messageContent: string; // 消息内容

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }
  initializeItems() {
      this.messageDetail = this.navParams.get("Params");
      console.log(this.messageDetail);
      this.messageContent = this.messageDetail.Content;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MessageReadOutPage');
  }

}
