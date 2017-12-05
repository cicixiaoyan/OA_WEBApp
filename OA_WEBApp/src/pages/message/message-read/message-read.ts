import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessageService } from '../messageService';
import { NativeService } from '../../../providers/NativeService';
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
  providers: [MessageService]
})
export class MessageReadPage {
    messageContent: string; // 消息内容
    messageDetail: any = [];
    constructor(public navCtrl: NavController, 
                private nativeService: NativeService,
                public navParams: NavParams, 
                private messageService: MessageService) {
        this.initializeItems();

    }
    initializeItems() {
        this.messageDetail = this.navParams.get("Params");
        let data = {
            "uid": this.messageService.httpService.globalData.Uid,
            "id": this.messageDetail.Id
        };
        this.messageService.markup(data).subscribe((resJson) => {
            console.log(resJson.Data);
            if (resJson.Result)  this.nativeService.showToast(resJson.Data, 800);
        });
        // this.messageDetail.Name = this.messageDetail.Name.split(":")[1];
    }

}
