import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Refresher } from 'ionic-angular';

import { GlobalData } from "../../providers/GlobalData";
import { CarService } from './car_service';

/**
 * Generated class for the CarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-car',
  templateUrl: 'car.html',
})
export class CarPage {
  isEmpty: boolean = false;
  list: any = [];
  moredata: boolean = true;
  data: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public globalData: GlobalData,
              private modalCtrl: ModalController,
              private CarService: CarService) {

  }
  initializeItems() {
    this.getList(this.data);
    console.log(this);

    setInterval(() => {
        console.log(this);
        this.getList(this.data);
   }, 50000);
}

ionViewDidLoad() {
    console.log('ionViewDidLoad Message');
}


doRead(Params?) {
    // this.navCtrl.push("CarReadPage", { Params: Params });
    this.navCtrl.push("CarReadPage");
}

doWrite() {
    // let modal = this.modalCtrl.create("CarAddPage");
    // modal.present();
    // modal.onDidDismiss(data => {
    //     data && console.log(data);
    // });
    this.navCtrl.push("CarAddPage");
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
    this.CarService.getList(data).subscribe(resJson => {
        if (resJson.Result && resJson.Data !== []){
          let list = resJson.Data;
          this.list = [...this.list, ...list];
          this.moredata = true;
          this.isEmpty = false;
        }else{
          this.moredata = false;
          if (this.data.PageIndex === 1) {
               this.CarService.httpService.nativeService.showToast(resJson.Data);
               this.isEmpty = true;
               this.list = [];
          }

        }
    });
}



}
