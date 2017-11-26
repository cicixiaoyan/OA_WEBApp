import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Refresher } from 'ionic-angular';

import { GlobalData } from "../../providers/GlobalData";

import { SmsReadPage } from '../sms/sms-read/sms-read';
import { SmsWritePage } from '../sms/sms-write/sms-write';
import { SmsService } from "./smsService";

/**
 * Generated class for the SmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sms',
  templateUrl: 'sms.html',
})
export class SmsPage {

  box: string = "inbox";
  isSent: boolean = true; // 默认为已发送
  isEmpty: boolean = false;
  list: any = [];
  moredata: boolean = true;
  data: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public globalData: GlobalData,
              private modalCtrl: ModalController,
              private smsService: SmsService) {
      this.list = [];              
      this.data = { 
          "PageSize": 5,
          "PageIndex": 1, 
          "UserId": this.globalData.Uid,
          "Status": this.smsService.smsStatus["sent"],
      };
      this.initializeItems();
  }

  initializeItems() {
      this._getList(this.data);

      setInterval(() => {
          this.getNewList(this.data);
     }, 50000);
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad Mail');
  }


  checkRead(bol: boolean = false) {
    this.data.PageIndex = 1;
    this.list = [];
    if (bol) {
        this.isSent = true;
        this.data.Status = this.smsService.smsStatus["sent"];
    } else {
        this.isSent = false;
        this.data.Status = this.smsService.smsStatus["toBeSent"];
    }
    this._getList(this.data);
}


  doRead(parma) {
      this.navCtrl.push(SmsReadPage, { "Params": parma });
  }

  doWrite() {
      let modal = this.modalCtrl.create(SmsWritePage);
      modal.present();
      modal.onDidDismiss(data => {
          data && console.log(data);
      });
      // this.navCtrl.push(MailWrite);
  }

  doRefresh(refresher: Refresher) {
      console.log("加载更多");
      // this.initializeItems();
      this.moredata = true;
      this.list = [];
      this.data.PageIndex = 1;
      this._getList(this.data);


      setTimeout(() => {
          console.log('数据加载完成');
          refresher.complete();
      }, 1000);
  }

  doInfinite(): Promise<any> {
      if (this.moredata) {
          this.data.PageIndex++;
          this._getList(this.data);

      }

      return new Promise((resolve) => {
          setTimeout(() => {
              resolve();
          }, 500);
      });
  }

  getNewList(data){
      data.PageIndex = 1;
      this.smsService.getList(data).subscribe(list => {
          if (list.Result == true ) {
              let arr = list.Data.filter(item => {
                  return item.Id !== this.list[0].Id;
              });
              if (arr !== []) {
                  this.list = [...this.list, ...arr];
              }
          }
      });
  }


    _getList(inboxData) {
            this.smsService.getList(inboxData).subscribe(resJson => {
                if (resJson.Result && resJson.Data !== []){
                    let list = resJson.Data;
                    this.list = [...this.list, ...list];
                }else{
                    this.moredata = false;
                    if (this.data.PageIndex === 1) {
                        this.smsService.httpService.nativeService.showToast(resJson.Data);
                        this.list = [];                 
                    }
                }      
            });
    }


}
