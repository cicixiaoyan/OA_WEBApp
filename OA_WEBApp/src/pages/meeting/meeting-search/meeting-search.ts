import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, Refresher, ModalController } from 'ionic-angular';
import { MeetingService } from '../meeting_service';

@IonicPage()
@Component({
  selector: 'page-meeting-search',
  templateUrl: 'meeting-search.html',
})
export class MeetingSearchPage {

  list: Array<any> = [];
  data: any;
  moredata: boolean = true;
  isEmpty: boolean = false;
  search: any;

  pageSlides: Array<string> = ["起草中", "送审中", "已审批", "已退回", "已完成" ];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private modalCtrl: ModalController,
              private popoverCtrl: PopoverController,
              private meetingService: MeetingService) {
      this.data = {
        "status": this.meetingService.meetingStatus["Delivered"],
        "uid": this.meetingService.httpService.globalData.Uid,
        "PageIndex": 0,
        "PageSize": 8
      };
      this.getList(this.data);
  }


  ionViewDidLoad() {

  }

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
    this.navCtrl.push("MeetingEditPage", { "Id": Params, "readOnly": true });
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create("HolidayGroupSettingsSearchPage", {"search": this.search});
    popover.present({
      ev: myEvent
    });
    popover.onDidDismiss(search => {
      console.log(search);
      if (search){
        this.search = search.search;
        let data = search.search;
        data.uid =  this.meetingService.httpService.globalData.Uid;
        data.PageIndex = 0;
        data.PageSize = 8;
        this.getList(data);
      }
    });
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
      if (resJson.Result  && resJson.Data.length !== 0 && (resJson.Data instanceof Array)){
        this.moredata = true;
        this.isEmpty = false;
        let list = resJson.Data;
        this.list = [...this.list, ...list];
        console.log(this.list);
      }else{
        this.moredata = false;
        this.isEmpty = (this.data.PageIndex == 0) ? true : false;
      }
    });
    

  }

}
