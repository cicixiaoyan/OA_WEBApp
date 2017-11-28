import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher } from 'ionic-angular';
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
  list: any;
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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private meetingService: MeetingService) {
      this.data = {
        Status: this.meetingService.meetingStatus["Delivered"],
        Uid: this.meetingService.httpService.globalData.Uid,
        PageIndex: 1,
        PageSize: 8
      };
      this.getList(this.data);
  }


  ionViewDidLoad() {

  }

      // 选择已读、未读、全部
  checkRead(name: string = "read") {
    this.data.PageIndex = 1;
    this.list = [];
    this.checkBtn = { Drafting: false, Delivered: false, Approved: false,
      HasBeenReturned: false, completed: false, 
    };

    this.checkBtn[name] = true;
    this.data.Status = this.meetingService.meetingStatus[name];
    this.getList(this.data);
  }

  doRefresh(refresher: Refresher) {
    console.log("加载更多");
    // this.initializeItems();
    this.list = [];
    this.data.PageIndex = 1;
    this.getList(this.data);
    setTimeout(() => {
        console.log('数据加载完成');
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
    this.list = [
      {
        Status: 0,
        Theme: "会议主题1",
        StartTime: "2017-12-12 15:15",
        location: "会议室01",
        Id: "170905001",
      },
      {
        Status: 1,
        Theme: "会议主题2",
        StartTime: "2017-12-12 15:15",
        location: "会议室02",
        Id: "170905002",
      },
      {
        Status: 3,
        Theme: "会议主题1",
        StartTime: "2017-12-12 15:15",
        location: "会议室01",
        Id: "170905001",
      },
      {
        Status: 4,
        Theme: "会议主题2",
        StartTime: "2017-12-12 15:15",
        location: "会议室02",
        Id: "170905002",
      },
      {
        Status: 5,
        Theme: "会议主题3",
        StartTime: "2017-12-12 15:15",
        location: "会议室03",
        Id: "170905003",
      }
    ];

    

  }

}
