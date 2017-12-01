import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher } from 'ionic-angular';
import { CarService } from '../car_service';
/**
 * Generated class for the DriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driver',
  templateUrl: 'driver.html',
})
export class DriverPage {
  list: any = [];
  data: any = {};
  moredata: boolean = true;
  isEmpty: boolean = false;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private carService: CarService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverPage');
    this.list = [
      { 
        "Id": "1",
        "Name": "张三",
        "Sex": "男",
        "Age": "16",
        "InDate": '12',
        "Remark": '11444'
      },
      {
        "Id": "1",
        "Name": "李四",
        "Sex": "男",
        "Age": "19",
        "InDate": '12',
        "Remark": '11444'
      },
      {
        "Id": "2",
        "Name": "王五",
        "Sex": "男",
        "Age": "20",
        "InDate": '12',
        "Remark": '11444'
      },
    ];
  }

  doRead(Params?) {
    // this.navCtrl.push("CarReadPage", { Params: Params });
    this.navCtrl.push("DriverSetPage", { "isWrite": false });
}

  doWrite() {
      this.navCtrl.push("DriverSetPage", { "isWrite": true });
  }

  doRefresh(refresher: Refresher) {
      console.log("加载更多");
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


  private getList(data) {
      this.carService.getDriverList(data).subscribe(resJson => {
          if (resJson.Result && resJson.Data !== []){
            let list = resJson.Data;
            this.list = [...this.list, ...list];
            this.moredata = true;
            this.isEmpty = false;
          }else{
            this.moredata = false;
            if (this.data.PageIndex === 1) {
                this.carService.httpService.nativeService.showToast(resJson.Data);
                this.isEmpty = true;
                this.list = [];
            }

          }
      });
  }

}
