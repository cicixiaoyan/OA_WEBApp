import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher } from 'ionic-angular';
import { CarService } from '../car_service';
import { NativeService } from '../../../providers/NativeService';
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
  isEmpty: boolean = false;
  data: any = {};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private nativeService: NativeService,
              private carService: CarService) {
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
          refresher.complete();
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
