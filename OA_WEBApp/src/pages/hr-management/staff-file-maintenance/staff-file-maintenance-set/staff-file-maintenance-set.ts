import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams, Platform, NavController, Events } from 'ionic-angular';
import { Tabs } from "ionic-angular";


@IonicPage()
@Component({
  selector: 'page-staff-file-maintenance-set',
  templateUrl: 'staff-file-maintenance-set.html',
})
export class StaffFileMaintenanceSet {
  rootParams = {
    "readOnly": false,
    "Id": ""
  };
  enable = false;

  @ViewChild("myTabs") tab: Tabs;

  
  tab1Root = "StaffFileMaintenanceBasicImfornation";
  tab2Root = "StaffFileMaintenanceWorkExperience";
  tab3Root = "StaffFileMaintenanceSocialRelationship";
  tab4Root = "StaffFileMaintenanceEducation";

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    this.rootParams.readOnly = this.navParams.get("readOnly") ? true : false;
    this.rootParams.Id = this.navParams.get("Id") || "";
    this.enable = this.rootParams.Id == "" ? false : true;
    events.subscribe('staff:created', (id, time) => {
      this.rootParams.Id = id || "";
      this.enable = !!id ? true : false;
    });
    console.log(this.rootParams.readOnly, this.navParams.get("readOnly"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffFileMaintenanceSetPage');
  }

}
