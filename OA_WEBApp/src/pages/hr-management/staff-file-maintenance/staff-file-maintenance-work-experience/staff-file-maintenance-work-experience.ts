import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the StaffFileMaintenanceWorkExperiencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-staff-file-maintenance-work-experience',
  templateUrl: 'staff-file-maintenance-work-experience.html',
})
export class StaffFileMaintenanceWorkExperience {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffFileMaintenanceWorkExperiencePage');
  }

  add(){
      let modal = this.modalCtrl.create("StaffFileMaintenanceWorkExperienceAdd");
      modal.present();
      modal.onDidDismiss(data => {
          data && console.log(data);
      });
  }

}
