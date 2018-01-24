import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher } from 'ionic-angular';
import { CarService } from '../car_service';
import { NativeService } from '../../../providers/NativeService';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


@IonicPage()
@Component({
  selector: 'page-driver',
  templateUrl: 'driver.html',
})
export class DriverPage {
  list: any = [];
  isEmpty: boolean = false;
  data: any = {};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private nativeService: NativeService,
              private carService: CarService) {
      this.data = {
        "PageIndex": 0,
        "PageSize": 100
      };
  }

  ionViewWillEnter() {
    this.doRefresh(null);
  }

  doRead(id?) {
    this.navCtrl.push("DriverSetPage", { "isWrite": false, "Id": id });
}

  doWrite() {
      this.navCtrl.push("DriverSetPage", { "isWrite": true });
  }

  doRefresh(refresher: Refresher) {
      this.list = [];
      console.log(this.data);
      this.getList(this.data);

      setTimeout(() => {
        refresher && refresher.complete();
      }, 1000);
  }

  private getList(data) {
      this.carService.getDriverList(data).subscribe(resJson => {
          if (resJson.Result && resJson.Data.length !== 0 && typeof(resJson.Data) !== "string"){
            let list = resJson.Data;
            this.list = [...this.list, ...list];
            this.isEmpty = false;
          }else{
            this.carService.httpService.nativeService.showToast(resJson.Data);
            this.isEmpty = true;
            this.list = [];
          }
      });
  }

  delete(id, index){

    let prompt = this.alertCtrl.create({
      title: '温馨提示',
      message: "你确定删除此司机的档案吗？<br/><span class='text-ios-danger'>删除后不能恢复</span>",
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
            this.carService.driverDel(id).subscribe((resJson) => {
              if (resJson.Result){
                this.list.splice(index, 1);    
                this.nativeService.showToast("删除成功", 300);    
              }else{
                this.nativeService.showToast(resJson.Data, 800);
              }
            });
          }
        }
      ]
    });
    prompt.present();
    
  }

}
