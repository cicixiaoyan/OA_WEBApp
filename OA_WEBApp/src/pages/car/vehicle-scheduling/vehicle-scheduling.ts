import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Refresher } from 'ionic-angular';

import { GlobalData } from "../../../providers/GlobalData";
import { CarService } from '../car_service';

@IonicPage()
@Component({
  selector: 'page-vehicle-scheduling',
  templateUrl: 'vehicle-scheduling.html',
})
export class VehicleSchedulingPage {

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
    this.initializeItems();
  }
initializeItems() {
    this.getList(this.data);
}

ionViewDidLoad() {
    console.log('ionViewDidLoad Message');
}


doRead(id) {
    console.log(id, "id");
    // this.navCtrl.push("CarReadPage", { Params: Params });
    this.navCtrl.push("VehicleSchedulingViewPage", {"Id": id} );
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


private getList(data) {
    this.list = [
        {
            "Id": '1',
            "StartPlace": '始发地', // 
            "EndPlace": '目的地', // 
            "PersonNum": '2', // 
            "Applicant": '申请人', // 申请人
            "Dept": '部门名称', // 部门名称
            "applicationStatus": '已同意', // 状态
        },
        {
            "Id": '2',
            "StartPlace": '始发地', // 
            "EndPlace": '目的地', // 
            "PersonNum": '3', // 
            "Applicant": '申请人1', // 申请人
            "Dept": '部门名称', // 部门名称
            "applicationStatus": '已拒绝', // 状态
        },
        {
            "Id": '1',
            "StartPlace": '始发地', // 
            "EndPlace": '目的地', // 
            "PersonNum": '4', // 
            "Applicant": '申请人2', // 申请人
            "Dept": '部门名称', // 部门名称
            "applicationStatus": "审核中", // 状态
        },
    ];
    // this.CarService.getList(data).subscribe(resJson => {
    //     if (resJson.Result && resJson.Data.length !== 0 && typeof(resJson.Data) !== "string"){
    //       let list = resJson.Data;
    //       this.list = [...this.list, ...list];
    //       this.moredata = true;
    //       this.isEmpty = false;
    //     }else{
    //       this.moredata = false;
    //       if (this.data.PageIndex === 0) {
    //            this.CarService.httpService.nativeService.showToast(resJson.Data);
    //            this.isEmpty = true;
    //            this.list = [];
    //       }

    //     }
    // });

}
}
