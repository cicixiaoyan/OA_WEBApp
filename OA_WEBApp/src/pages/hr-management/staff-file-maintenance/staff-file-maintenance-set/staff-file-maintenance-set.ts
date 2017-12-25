import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams, Platform, NavController } from 'ionic-angular';
import { Tabs } from "ionic-angular";

/**
 * Generated class for the StaffFileMaintenanceSetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-staff-file-maintenance-set',
  templateUrl: 'staff-file-maintenance-set.html',
})
export class StaffFileMaintenanceSet {
  rootParams = {
    "readOnly": false
  };
  
  tab1Root = "StaffFileMaintenanceBasicImfornation";
  tab2Root = "StaffFileMaintenanceWorkExperience";
  tab3Root = "StaffFileMaintenanceSocialRelationship";
  tab4Root = "StaffFileMaintenanceEducation";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootParams.readOnly = this.navParams.get("readOnly") ? true : false;
    console.log(this.rootParams.readOnly, this.navParams.get("readOnly"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffFileMaintenanceSetPage');
  }

}
