import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Content } from 'ionic-angular';

/**
 * Generated class for the MessageReadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message-read',
  templateUrl: 'message-read.html',
})
export class MessageReadPage {
    @ViewChild(Content) content: Content;
    messageContent: string; // 消息内容
    messageDetail: any = [];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.initializeItems();
    }
    initializeItems() {
        this.messageDetail = this.navParams.get("Params");
        this.messageContent = this.messageDetail.Title;
    }

}
