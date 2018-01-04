import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Refresher } from 'ionic-angular';

import { GlobalData } from "../../providers/GlobalData";
import { MessageService } from "./messageService";

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  box: string = "inbox";
  inbox: boolean = true; // 默认为收件箱
  isDraft: boolean = false; // 默认为发件箱
  isEmpty: boolean = false;
  checkBtn: object = { "read": false, "unread": true };
  inboxList: any = [];
  outboxList: any = [];
  moredata: boolean = true;
  inboxData: any;
  outboxData: any;
  timer: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public globalData: GlobalData,
              private modalCtrl: ModalController,
              private messageService: MessageService) {
      this.inboxData = {
          "PageSize": 5,
          "PageIndex": 0,
          "NewsStatus": this.messageService.Message["inbox"],
          "Uid": this.globalData.Uid,
          "Status": this.messageService.messageStatus["unread"],
      };

      this.outboxData = {
          "PageSize": 5,
          "PageIndex": 0,
          "NewsStatus": this.messageService.Message["outbox"], // 收件、发件
          "Uid": this.globalData.Uid,
          "Status": this.messageService.messageStatus["unread"] // 已读、未读
      };
      this.initializeItems();
  }

  initializeItems() {
      this._getInboxList(this.inboxData);
      this._getOutboxList(this.outboxData);
      console.log(this);

      this.timer = setInterval(() => {
          console.log(this);
          this.getNewInboxList(this.inboxData);
     }, 50000);
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad Message');
  }

  // 选择已读
  checkRead(name: string = "read") {
      this.inboxData.PageIndex = 0;
      this.inboxList = [];
      this.checkBtn = { "read": false, "unread": false };
      this.checkBtn[name] = true;
      if (name === "unread") {
          // 参数设置
          this.inboxData.Status = this.messageService.messageStatus["unread"];
      }
      else if (name === "read") {
          // 参数设置
          this.inboxData.Status = this.messageService.messageStatus["read"];
      }
      this._getInboxList(this.inboxData);
  }

  doRead(Params) {
      this.navCtrl.push("MessageReadPage", { Params: Params });
  }

  doReadOutBox(Params) {
      console.log(Params);
      this.navCtrl.push("MessageReadOutPage", { Params: Params });
  }

  doWrite() {
      let modal = this.modalCtrl.create("MessageWritePage");
      modal.present();
      modal.onDidDismiss(data => {
          data && console.log(data);
      });
      // this.navCtrl.push(MailWrite);
  }

  doRefresh(refresher: Refresher) {
      console.log("加载更多");
      // this.initializeItems();
      this.change();

      setTimeout(() => {
          console.log('数据加载完成');
          refresher.complete();
      }, 1000);
  }

  change(){
    this.moredata = true;
    if (this.box === "inbox") {
        this.inboxList = [];
        this.inboxData.PageIndex = 0;
        this._getInboxList(this.inboxData);
    } else {
        this.outboxList = [];
        this.outboxData.PageIndex = 0;
        this._getOutboxList(this.outboxData);
    }
  }

  doInfinite(): Promise<any> {
      if (this.moredata) {
          if (this.box === "inbox") {
              this.inboxData.PageIndex++;
              this._getInboxList(this.inboxData);
          } else {
              this.outboxData.PageIndex++;
              this._getOutboxList(this.outboxData);
          }
      }

      return new Promise((resolve) => {
          setTimeout(() => {
              resolve();
          }, 500);
      });
  }

  getNewInboxList(inboxData){
      let data = inboxData;
      data.PageIndex = 1;
      data.PageSize = 2;
      this.messageService.getInboxList(data).subscribe(list => {
          if (list.Result == true ) {
              let arr = list.Data.filter(item => {
                  return item.Id !== this.inboxList[0].Id;
              });
              if (arr !== []) {
                  this.inboxList = [...this.inboxList, ...arr];
              }
          }else{
            clearInterval(this.timer);
          }
      });
  }


  _getInboxList(inboxData) {
      
      this.messageService.getInboxList(inboxData).subscribe(resJson => {
          if (resJson.Result && resJson.Data.length !== 0 && typeof(resJson.Data) !== "string"){
              this.moredata = false;
              this.isEmpty = false;
              let list = resJson.Data;
              this.inboxList = [...this.inboxList, ...list];
          }else{
              this.moredata = false;
              if (this.inboxData.PageIndex === 0) {
                   this.messageService.httpService.nativeService.showToast(resJson.Data);
                   this.isEmpty = true;
                   this.inboxList = [];
              }
          }
      });
  }

  _getOutboxList(outboxData) {
      this.messageService.getOutboxList(outboxData).subscribe(resJson => {
        if (resJson.Result && resJson.Data.length !== 0 && typeof(resJson.Data) !== "string"){
            this.moredata = false;
            this.isEmpty = false;
            let list = resJson.Data;
            this.outboxList = [...this.outboxList, ...list];
        }else{
            this.moredata = false;
            if (this.outboxList.PageIndex === 1) {
                 this.messageService.httpService.nativeService.showToast(resJson.Data);
                 this.isEmpty = true;
                 this.outboxList = [];
            }
        }
      });
  }

}
