import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher, PopoverController } from 'ionic-angular';
import { AttendanceAuditInstructionsService } from './attendance-audit-instructions-service';


@IonicPage()
@Component({
  selector: 'page-attendance-audit-instructions',
  templateUrl: 'attendance-audit-instructions.html',
})
export class AttendanceAuditInstructionsPage {

  list: any = [];
  isEmpty: boolean = false;
  data: any = {};
  search: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private popoverCtrl: PopoverController,
              private attendanceAuditInstructionsService: AttendanceAuditInstructionsService) {
      this.data = {
        "PageIndex": 0,
        "PageSize": 100
      };
      this.initializeItems();
  }

  initializeItems() {
    this.getList(this.data);
  }

  doRead(id?) {
    this.navCtrl.push("AttendanceAuditInstructionsViewPage", { "Id": id });
}

  doWrite() {
      this.navCtrl.push("AttendanceAuditInstructionsViewPage");
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
          "Name": '张三', // 名称
          "Type": '请假单', // 类型
          "ApplicablePersonnel": '申请说明', // 适用人员
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
