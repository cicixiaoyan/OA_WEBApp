import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher, ModalController } from 'ionic-angular';
import { MeetingService } from '../meeting_service';
/**
 * Generated class for the MeetingRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meeting-room',
  templateUrl: 'meeting-room.html',
})
export class MeetingRoomPage {

  list = [];
  isEmpty: boolean = false;
  data: object = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private modalCtrl: ModalController,
              private meetingService: MeetingService) {
      this.data = {
        "PageIndex": 1,
        "PageSize": 8
      };
      this.getList();

  }


  ionViewDidLoad() {

  }

  doRead(Params) {
    this.navCtrl.push("MeetingRoomSetPage", { "isAdd": false, "Id": Params });
  }

  doWrite() {
    this.navCtrl.push("MeetingRoomSetPage", { "isAdd": true });
  }

  doRefresh(refresher: Refresher) {
    this.list = [];
    this.getList();
    setTimeout(() => {
        refresher.complete();
    }, 1000);
  }

  private getList(){

    this.meetingService.MeetRoomLs(this.data).subscribe((resJson) => {
      if (resJson.Result  && resJson.Data.length !== 0 && typeof(resJson.Data) !== "string"){
        this.isEmpty = false;
        let list = resJson.Data;
        this.list = [...this.list, ...list];
      }else{
        this.isEmpty =  true;
      }
    });
  }

}
