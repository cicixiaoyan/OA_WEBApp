import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher, ModalController } from 'ionic-angular';

/**
 * Generated class for the StaffFileMaintenancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-staff-file-maintenance',
  templateUrl: 'staff-file-maintenance.html',
})
export class StaffFileMaintenance {

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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private modalCtrl: ModalController) {

      this.getList(this.data);
  }


  ionViewDidLoad() {

  }

  doRead(Params) {
    this.navCtrl.push("StaffFileMaintenanceSet", { "Id": Params, "readOnly": true });
    // let modal = this.modalCtrl.create("MeetingEditPage");
    // modal.present();
    // modal.onDidDismiss(data => {
    //     data && console.log(data);
    // });
  }

  doWrite() {
      this.navCtrl.push("StaffFileMaintenanceSet");
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
    this.list = [
      {
        "Id": "70",
        "StaffNumber": "070", // 工号
        "Name": "刘展志", // 姓名
        "Sex": "男", // 性别
        "FirstEdu": "本科", // 学历
        "Dept": "检验科", // 部门名称
        "Indate": "2017-07-03", // 入职时间
      },
      {
        "Id": "69",
        "Name": "姚美英",
        "Dept": "其他",
        "Indate": "2017-07-03",
        "FirstEdu": "高中",
        "Sex": "女",
        "StaffNumber": "069",
      },
      {
        "Id": "68",
        "Name": "卿明月",
        "Dept": "重大传染病防控科",
        "Indate": "2017-07-03",
        "FirstEdu": "高中",
        "Sex": "女",
        "StaffNumber": "068",
      },
    ];
    // this.meetingService.getList(data).subscribe((resJson) => {
    //   if (resJson.Result  &&  resJson.Data.length !== 0 && (resJson.Data instanceof Array)){
    //     this.moredata = true;
    //     this.isEmpty = false;
    //     let list = resJson.Data;
    //     this.list = [...this.list, ...list];
    //   }else{
    //     this.moredata = false;
    //     this.isEmpty = (this.data.PageIndex == 0) ? true : false;
    //   }
    // });


  }

}
