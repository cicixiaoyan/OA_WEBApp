import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher, PopoverController } from 'ionic-angular';
import { HolidayGroupSettingsService } from './holiday-group-settings-service';

@IonicPage()
@Component({
  selector: 'page-holiday-group-settings',
  templateUrl: 'holiday-group-settings.html',
})
export class HolidayGroupSettingsPage {

  list: any = [];
  isEmpty: boolean = false;
  data: any = {};
  search: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private popoverCtrl: PopoverController,
              private holidayGroupSettingsService: HolidayGroupSettingsService) {
      this.data = {
        "PageIndex": 0,
        "PageSize": 100
      };
      this.initializeItems();
  }

  initializeItems() {
    this.getList(this.data);
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
        data.uid =  this.holidayGroupSettingsService.httpService.globalData.Uid;
        data.PageIndex = 0;
        data.PageSize = 8;
        this.getList(data);
      }
    });
  }

  doRead(id?) {
    this.navCtrl.push("HolidayGroupSettingsViewPage", { "readOnly": true, "Id": id });
}

  doWrite() {
      this.navCtrl.push("HolidayGroupSettingsViewPage");
  }

  doRefresh(refresher: Refresher) {
      this.list = [];
      console.log(this.data);
      this.getList(this.data);

      setTimeout(() => {
          refresher.complete();
      }, 1000);
  }

  private getList(data) {
      this.list = [
        {
          "Id": '1', //
          "GroupName": '张三', // 分组名称
          "Years": '2017', // 年份
          "TotalDays": '10', // 累计总天数
          "LeaveDays": '0', // 事假天数
          "TuneOffDays": '10', // 调休天数
          "SickLeaveDays": '0', // 病假天数
        },

      ];
      // this.holidayGroupSettingsService.getList(data).subscribe(resJson => {
      //     if (resJson.Result && resJson.Data.length !== 0 && typeof(resJson.Data) !== "string"){
      //       let list = resJson.Data;
      //       this.list = [...this.list, ...list];
      //       this.isEmpty = false;
      //     }else{
      //       this.holidayGroupSettingsService.httpService.nativeService.showToast(resJson.Data);
      //       this.isEmpty = true;
      //       this.list = [];
      //     }
      // });
  }


}
