import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher, ModalController } from 'ionic-angular';
import { MeetingService } from '../meeting_service';

/**
 * Generated class for the MeetingMinutesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meeting-minutes',
  templateUrl: 'meeting-minutes.html',
})
export class MeetingMinutesPage {

  list = [];

  data: any;
  moredata: boolean = true;
  isEmpty: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private modalCtrl: ModalController,
              private meetingService: MeetingService) {
      this.data = {
        "status": this.meetingService.meetingStatus["completed"],
        "uid": this.meetingService.httpService.globalData.Uid,
        "PageIndex": 0,
        "PageSize": 8
      };
      this.getList(this.data);
  }


  ionViewDidLoad() {

  }

  doRead(Params) {
    this.navCtrl.push("MeetingMinutesDetaiilPage", { "Id": Params });
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
    this.meetingService.MeetRecordLs(data).subscribe((resJson) => {
      if (resJson.Result && resJson.Data.length !== 0  && (resJson.Data instanceof Array)){
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
