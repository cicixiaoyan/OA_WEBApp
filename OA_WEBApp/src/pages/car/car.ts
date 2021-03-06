import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Refresher } from 'ionic-angular';

import { GlobalData } from "../../providers/GlobalData";
import { CarService } from './car_service';

@IonicPage()
@Component({
  selector: 'page-car',
  templateUrl: 'car.html',
})
export class CarPage {
  isEmpty: boolean = false;
  list: any = [];
  moredata: boolean = true;
  data: any = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public globalData: GlobalData,
              private modalCtrl: ModalController,
              private CarService: CarService) {
    this.data = {
        "PageIndex": 0,
        "PageSize": 8
        };
  }

  ionViewWillEnter() {
    this.doRefresh(null);
}


doRead(id) {
    console.log(id, "id");
    // this.navCtrl.push("CarReadPage", { Params: Params });
    this.navCtrl.push("CarReadPage", {"Id": id} );
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
    this.list = [];
    this.data.PageIndex = 0;
    this.getList(this.data);


    setTimeout(() => {
        refresher && refresher.complete();
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
        if (resJson.Result && resJson.Data.length !== 0 && typeof(resJson.Data) !== "string"){
          let list = resJson.Data;
          this.list = [...this.list, ...list];
          this.moredata = true;
          this.isEmpty = false;
        }else{
          this.moredata = false;
          if (this.data.PageIndex === 0) {
               this.CarService.httpService.nativeService.showToast(resJson.Data);
               this.isEmpty = true;
               this.list = [];
          }

        }
    });
}



}
