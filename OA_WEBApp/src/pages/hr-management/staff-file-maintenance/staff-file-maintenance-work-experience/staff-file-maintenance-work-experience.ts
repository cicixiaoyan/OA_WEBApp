import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Refresher } from 'ionic-angular';
import { StaffFileMaintenanceService } from '../staff-file-maintenance-service';
import { NativeService } from '../../../../providers/NativeService';

@IonicPage()
@Component({
  selector: 'page-staff-file-maintenance-work-experience',
  templateUrl: 'staff-file-maintenance-work-experience.html',
})
export class StaffFileMaintenanceWorkExperience {
  readOnly: boolean = false;
  Id: string = "";

  list: Array<any> = [];
  isShowAdd: boolean = true;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private nativeService: NativeService,
              private staffFileMaintenanceService: StaffFileMaintenanceService,
              private modalCtrl: ModalController) {
    this.readOnly = this.navParams.get("readOnly") ? true : false;
    this.Id = this.navParams.get("Id") || "";
          
    this.getList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffFileMaintenanceWorkExperiencePage');
  }

  add(){
      let modal = this.modalCtrl.create("StaffFileMaintenanceWorkExperienceAdd", {"id": this.Id});
      modal.present();
      modal.onDidDismiss(data => {
          data && this.doRefresh(null);
      });
  }

  doRefresh(refresher: Refresher) {
    this.list = [];
    this.getList();
    setTimeout(() => {
      refresher && refresher.complete();
    }, 1000);
  }

  doRead(item){
    // let parma = {
    //   "Id": id,
    //   "readOnly": (this.navParams.get("readOnly") ? true : null)
    // };
    let modal = this.modalCtrl.create("StaffFileMaintenanceWorkExperienceAdd", {"item": item, "id": this.Id});
    modal.present();
    modal.onDidDismiss(data => {
        data && this.doRefresh(null);
    });
  }

  delete(i){
    this.staffFileMaintenanceService.workExpDel({"id": this.list[i].ExpID}).subscribe(resJson => {
      if (resJson.Result){
        this.nativeService.showToast("删除成功", 800);
        this.list.splice(i, 1);
      }else{
        this.nativeService.showToast(resJson.Data, 800);
      }
    });
  }

  private getList(){
    this.staffFileMaintenanceService.getList({"id": this.Id}).subscribe(resJson => {
      if (resJson.Result){
        this.list = [...resJson.Data[0].ExpLs];
      }else{
        this.nativeService.showToast(resJson.Data, 800);
      }
    });
  }

}
