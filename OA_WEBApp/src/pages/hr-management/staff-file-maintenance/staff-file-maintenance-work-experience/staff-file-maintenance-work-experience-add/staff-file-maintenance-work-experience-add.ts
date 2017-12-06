import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the StaffFileMaintenanceWorkExperienceAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-staff-file-maintenance-work-experience-add',
  templateUrl: 'staff-file-maintenance-work-experience-add.html',
})
export class StaffFileMaintenanceWorkExperienceAdd {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffFileMaintenanceWorkExperienceAddPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
