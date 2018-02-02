import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher, ModalController, Events } from 'ionic-angular';
import { MeetingService } from './meeting_service';

/**
 * Generated class for the MeetingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meeting',
  templateUrl: 'meeting.html',
})
export class MeetingPage {
  list = [];
  pageSlides: Array<string> = ["起草中", "送审中", "已审批", "已退回", "已完成" ];
  data: any;
  moredata: boolean = true;
  isEmpty: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private modalCtrl: ModalController,
              private meetingService: MeetingService,
              public events: Events) {
      this.data = {
        "status": this.meetingService.meetingStatus["Delivered"],
        "uid": this.meetingService.httpService.globalData.Uid,
        "PageIndex": 0,
        "PageSize": 8
      };
      
      this.events.subscribe('message.receiveNotification', bol => {
        if (bol) this.getList(this.data);
      });
  }


  ionViewWillEnter() {
    this.list = [];
    this.getList(this.data);
  }

  // 选择状态
  onSlideClick(i: number) {
    this.data.PageIndex = 0;
    this.list = [];
    if (i === 0) {
      this.data.status = this.meetingService.meetingStatus["Drafting"];
    }
    else if (i === 1) {
      this.data.status = this.meetingService.meetingStatus["Delivered"];
    }
    else if (i === 2) {
      this.data.status = this.meetingService.meetingStatus["Approved"];
    }
    else if (i === 3) {
      this.data.status = this.meetingService.meetingStatus["HasBeenReturned"];
    }
    else if (i === 4) {
      this.data.status = this.meetingService.meetingStatus["completed"];
    }
    this.getList(this.data);
  }

  doRead(Params) {
    let parma = this.data.status == this.meetingService.meetingStatus["Drafting"]
    ? { "Id": Params } : { "Id": Params, "readOnly": true };
    this.navCtrl.push("MeetingEditPage", parma);
    // let modal = this.modalCtrl.create("MeetingEditPage");
    // modal.present();
    // modal.onDidDismiss(data => {
    //     data && console.log(data);
    // });
  }

  doWrite() {
      // let modal = this.modalCtrl.create("MeetingWritePage");
      // modal.present();
      // modal.onDidDismiss(data => {
      //     data && console.log(data);
      // });
      this.navCtrl.push("MeetingWritePage");
  }

  doRefresh(refresher: Refresher) {
    this.list = [];
    this.data.PageIndex = 0;
    this.getList(this.data);
    setTimeout(() => {
        refresher.complete();
    }, 1000);
  }


  doInfinite(): Promise<any> {
      if (this.moredata) {
          this.data.PageIndex++;
          this.getList(this.data);
      }

      return new Promise((resolve) => {
          setTimeout(() => {
              resolve();
          }, 500);
      });
  }

  private getList(data){
    this.meetingService.getList(data).subscribe((resJson) => {
      if (resJson.Result  &&  resJson.Data.length !== 0 && (resJson.Data instanceof Array)){
        this.moredata = true;
        this.isEmpty = false;
        let list = resJson.Data;
        this.list = [...this.list, ...list];
      }else{
        this.moredata = false;
        this.isEmpty = (this.data.PageIndex == 0) ? true : false;
      }
    });
    

  }

}
