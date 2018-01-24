import { NativeService } from './../../../providers/NativeService';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController ,
  Refresher, ViewController } from 'ionic-angular';
import { TrainingMaintenanceService } from './training-maintenance_service';
/**
 * Generated class for the TrainingMaintenancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-training-maintenance',
  templateUrl: 'training-maintenance.html',
})
export class TrainingMaintenancePage  {
  list = [];
  data: any;
  moredata: boolean = true;
  isEmpty: boolean = false;
  search: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private popoverCtrl: PopoverController,
              private nativeService: NativeService,
              private trainingMaintenanceService: TrainingMaintenanceService) {
      this.data = {
        // "uid": this.trainingMaintenanceService.httpService.globalData.Uid,
        "PageIndex": 0,
        "PageSize": 10
      };
  }


  ionViewWillEnter() {
    this.doRefresh(null);
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create("TrainingMaintenanceSearch", {"search": this.search});
    popover.present({
      ev: myEvent
    });
    popover.onDidDismiss(search => {
      console.log(search);
      if (search){
        this.search = search.search;
        let data = search.search;
        data.uid =  this.trainingMaintenanceService.httpService.globalData.Uid;
        data.PageIndex = 0;
        data.PageSize = 8;
        this.getList(data);
      }
    });
  }

  doRead(Params) {
    this.navCtrl.push("TrainingMaintenanceSetPage", { "Id": Params, "readOnly": true });
  }

  doWrite() {
    this.navCtrl.push("TrainingMaintenanceSetPage");
      // let modal = this.modalCtrl.create("TrainingMaintenanceSetPage");
      // modal.present();
      // modal.onDidDismiss(data => {
      //     data && console.log(data);
      // });
  }

  delete(id: string) {
    this.trainingMaintenanceService.del({"id": id}).subscribe(resJson => {
      this.nativeService.showToast(resJson.Data, 800);
      if (resJson.Result) this.doRefresh(null);
    });
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

  private getList(data){

    this.trainingMaintenanceService.view(data).subscribe((resJson) => {
      if (resJson.Result  &&  resJson.Data.length !== 0 && (resJson.Data instanceof Array)){
        this.moredata = true;
        this.isEmpty = false;
        let list = resJson.Data;
        if (list.length < data["pageSize"]) this.moredata = false;
        this.list = [...this.list, ...list];
        
      }else{
        this.moredata = false;
        this.isEmpty = (this.data.PageIndex == 0) ? true : false;
      }
    });
    

  }

}


