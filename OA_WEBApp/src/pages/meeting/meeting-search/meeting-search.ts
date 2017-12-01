import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher, ModalController } from 'ionic-angular';
import { MeetingService } from '../meeting_service';

/**
 * Generated class for the MeetingSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meeting-search',
  templateUrl: 'meeting-search.html',
})
export class MeetingSearchPage {

  list = [];
  checkBtn: any = {
    Drafting: false, // 起草中
    Delivered: true, // 送审中(默认)
    Approved: false, // 已审批
    HasBeenReturned: false, // 已退回
    completed: false, // 已完成
  };
  data: any;
  moredata: boolean = true;
  isEmpty: boolean = false;
  searchKey: string = "";
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private modalCtrl: ModalController,
              private meetingService: MeetingService) {
      this.data = {
        "status": this.meetingService.meetingStatus["Delivered"],
        "uid": this.meetingService.httpService.globalData.Uid,
        "PageIndex": 1,
        "PageSize": 8
      };
      this.list = [
        {}
      ];
      // this.getList(this.data);
  }


  ionViewDidLoad() {

  }

  // 选择状态
  checkRead(name: string = "Delivered") {
    this.data.PageIndex = 1;
    this.list = [];
    this.checkBtn = { Drafting: false, Delivered: false, Approved: false,
      HasBeenReturned: false, completed: false, 
    };

    this.checkBtn[name] = true;
    this.data.status = this.meetingService.meetingStatus[name];
    console.log(this.data);
    this.getList(this.data);
  }

  doRead(Params) {
    this.navCtrl.push("MeetingEditPage", { "Id": Params });
  }

  search(e){

  }


  doRefresh(refresher: Refresher) {
    this.list = [];
    this.data.PageIndex = 1;
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
      if (resJson.Result && resJson.Data !== []){
        this.moredata = true;
        this.isEmpty = false;
        let list = resJson.Data;
        this.list = [...this.list, ...list];
      }else{
        this.moredata = false;
        this.isEmpty = (this.data.PageIndex == 1) ? true : false;
      }
    });
    

  }

}
