import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Refresher } from 'ionic-angular';
import { StaffFileMaintenanceService } from '../staff-file-maintenance-service';
import { NativeService } from '../../../../providers/NativeService';

/**
 * Generated class for the StaffFileMaintenanceSocialRelationshipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-staff-file-maintenance-social-relationship',
  templateUrl: 'staff-file-maintenance-social-relationship.html',
})
export class StaffFileMaintenanceSocialRelationship {
  readOnly: boolean = false;
  Id: string = "";

  list: Array<any>;
  constructor(public navCtrl: NavController, 
              private modalCtrl: ModalController,
              private nativeService: NativeService,
              private staffFileMaintenanceService: StaffFileMaintenanceService,
              public navParams: NavParams) {
    this.readOnly = this.navParams.get("readOnly") ? true : false;
    this.Id = this.navParams.get("Id");
            
    this.getList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffFileMaintenanceSocialRelationshipPage');
  }

  add(){
    let modal = this.modalCtrl.create("StaffFileMaintenanceSocialRelationshipAddPage", {"id": this.Id});
    modal.present();
    modal.onDidDismiss(data => {
        if (!!data && data.change == "true"){
          this.doRefresh(null);
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

  doRead(item){
    let modal = this.modalCtrl.create("StaffFileMaintenanceSocialRelationshipAddPage", {"item": item, "id": this.Id});
    modal.present();
  }

  delete(i){
    this.staffFileMaintenanceService.sociologyDel({"id": this.list[i].SociologyID}).subscribe(resJson => {
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
        this.list = [...resJson.Data[0].SociologyLs];
      }else{
        this.nativeService.showToast(resJson.Data, 800);
      }
    });
  }

}
