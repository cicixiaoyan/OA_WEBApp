import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher, ModalController } from 'ionic-angular';
import { StaffFileMaintenanceService } from './staff-file-maintenance-service';
import { NativeService } from '../../../providers/NativeService';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


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
  data = {
    "PageIndex": 1,
    "PageSize": 8
  };
  moredata: boolean = true;
  isEmpty: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private staffFileMaintenanceService: StaffFileMaintenanceService,
              private nativeService: NativeService,
              private modalCtrl: ModalController) {

      this.getList(this.data);
  }


  ionViewDidLoad() {

  }

  doRead(Params) {
    // this.navCtrl.push("StaffFileMaintenanceSet", { "Id": Params, "readOnly": true });
    this.navCtrl.push("StaffFileMaintenanceSet", { "Id": Params });
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

  delete(i){
    let item = this.list[i];

    let prompt = this.alertCtrl.create({
      title: '删除档案',
      message: "你确定删除员工 <span class='text-ios-danger'>" + item.BasicName + "</span> 的档案吗？",
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '删除',
          handler: data => {
            this.staffFileMaintenanceService.basicDel({ id: item.Id }).subscribe(resJson => {
              if (resJson.Result) {
                this.nativeService.showToast("档案删除成功");
                this.list.splice(i, 1);
              } else {
                this.nativeService.showToast(resJson.Data, 800);
              }
            });
          }
        }
      ]
    });
    prompt.present();
  }

  private getList(data){

    this.staffFileMaintenanceService.getList(data).subscribe((resJson) => {
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
