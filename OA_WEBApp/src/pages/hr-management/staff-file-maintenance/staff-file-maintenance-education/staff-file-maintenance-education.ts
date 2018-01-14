import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Refresher } from 'ionic-angular';
import { StaffFileMaintenanceService } from '../staff-file-maintenance-service';
import { NativeService } from '../../../../providers/NativeService';

@IonicPage()
@Component({
  selector: 'page-staff-file-maintenance-education',
  templateUrl: 'staff-file-maintenance-education.html',
})
export class StaffFileMaintenanceEducation {
  Id: string = '';
  readOnly: boolean = false;

  list: Array<any> = [];
  isShowAdd: boolean = true;
  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
              private staffFileMaintenanceService: StaffFileMaintenanceService,
              private nativeService: NativeService,
              private modalCtrl: ModalController) {
    this.readOnly = this.navParams.get("readOnly") ? true : false;
    this.Id = this.navParams.get("Id");

    this.getList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffFileMaintenanceWorkExperiencePage');
  }

  add(){
      let modal = this.modalCtrl.create("StaffFileMaintenanceEducationAddPage", {"id": this.Id});
      modal.present();
      modal.onDidDismiss(data => {
        data && this.doRefresh(null);
      });
  }

  doRead(item){
    let modal = this.modalCtrl.create("StaffFileMaintenanceEducationAddPage", {"item": item, "id": this.Id});
    modal.present();
  }

  delete(i){
    this.staffFileMaintenanceService.sociologyDel({"id": this.list[i].EduID}).subscribe(resJson => {
      if (resJson.Result){
        this.nativeService.showToast("删除成功", 800);
        this.list.splice(i, 1);
      }else{
        this.nativeService.showToast(resJson.Data, 800);
      }
    });
  }

  doRefresh(refresher: Refresher) {
    this.list = [];
    this.getList();
    setTimeout(() => {
      refresher && refresher.complete();
    }, 1000);
  }

  private getList(){
    this.staffFileMaintenanceService.getList({"id": this.Id}).subscribe(resJson => {
      if (resJson.Result){
        this.list = [...resJson.Data[0].EduLs];
      }else{
        this.nativeService.showToast(resJson.Data, 800);
      }
    });
  }

}
