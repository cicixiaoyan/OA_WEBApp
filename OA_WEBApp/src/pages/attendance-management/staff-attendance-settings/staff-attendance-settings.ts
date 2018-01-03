import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher, PopoverController } from 'ionic-angular';
import { StaffAttendanceSettingsService } from './staff-attendance-settings-service';
import { Searchbar } from 'ionic-angular/components/searchbar/searchbar';

@IonicPage()
@Component({
  selector: 'page-staff-attendance-settings',
  templateUrl: 'staff-attendance-settings.html',
})
export class StaffAttendanceSettingsPage {

  list: any = [];
  isEmpty: boolean = false;
  data: any = {};
  search: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private popoverCtrl: PopoverController,
              private staffAttendanceSettingsService: StaffAttendanceSettingsService
            ) {
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
    this.navCtrl.push("HolidayGroupSettingsViewPage", { "isWrite": false, "Id": id });
  }

  doSet(id) {
      this.navCtrl.push("StaffAttendanceBasicsettingsPage", { "isWrite": true });
  }

  doRefresh(refresher: Refresher) {
      this.list = [];
      console.log(this.data);
      this.getList(this.data);

      setTimeout(() => {
          refresher.complete();
      }, 1000);
  }

  BatchSettings(){
    this.navCtrl.push("StaffAttendanceBasicsettingsPage", { "isWrite": true });
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create("StaffAttendanceSettingsSearchPage", {"search": this.search});
    popover.present({
      ev: myEvent
    });
    popover.onDidDismiss(search => {
      console.log(search);
      if (search){
        this.search = search.search;
        let qukSearch = search.search.fastSelect;
        let data = {
          DeptId: search.search.DeptId,
          [qukSearch]: search.search.iValue,
          uid: this.staffAttendanceSettingsService.httpService.globalData.Uid,
          PageIndex: 0,
          PageSize: 0,
        };
        console.log(data);
        this.getList(data);
      }
    });
  }

  private getList(data) {
      this.list = [
        {
          "Id": '1', //
          "Name": '张三', // 姓名
          "Code": '001', // 编号
          "Sex": '男', // 性别
          "InDate": '2017-01-01', // 入职时间
          "Dept": '研发部', // 部门名称
          "Duty": '员工', // 职位
          "Status": '正常' // 状态
        },
        {
          "Id": '2', //
          "Name": '李四', // 姓名
          "Code": '002', // 编号
          "Sex": '女', // 性别
          "InDate": '2017-10-01', // 入职时间
          "Dept": '总部', // 部门名称
          "Duty": '员工', // 职位
          "Status": '正常' // 状态
        },
        {
          "Id": '3', //
          "Name": '王五', // 姓名
          "Code": '002', // 编号
          "Sex": '女', // 性别
          "InDate": '2017-10-01', // 入职时间
          "Dept": '总部', // 部门名称
          "Duty": '员工', // 职位
          "Status": '正常' // 状态
        },
      ];
      // this.staffAttendanceSettingsService.getList(data).subscribe(resJson => {
      //     if (resJson.Result && resJson.Data.length !== 0 && typeof(resJson.Data) !== "string"){
      //       let list = resJson.Data;
      //       this.list = [...this.list, ...list];
      //       this.isEmpty = false;
      //     }else{
      //       this.staffAttendanceSettingsService.httpService.nativeService.showToast(resJson.Data);
      //       this.isEmpty = true;
      //       this.list = [];
      //     }
      // });
  }


}
