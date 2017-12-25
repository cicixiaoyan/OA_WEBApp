import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

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
  list: Array<any>;
  constructor(public navCtrl: NavController, 
              private modalCtrl: ModalController,
              public navParams: NavParams) {
    this.getList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffFileMaintenanceSocialRelationshipPage');
  }

  add(){
    let modal = this.modalCtrl.create("StaffFileMaintenanceSocialRelationshipAddPage");
    modal.present();
    modal.onDidDismiss(data => {
        data && console.log(data);
    });
  }

  doRead(id){
    let parma = {
      "Id": id,
      "readOnly": (this.navParams.get("readOnly") ? true : null)
    };
    let modal = this.modalCtrl.create("StaffFileMaintenanceSocialRelationshipAddPage", parma);
    modal.present();
    modal.onDidDismiss(data => {
        data && console.log(data);
    });
  }

  getList(){
    this.list = [
      {
        'Id': '1',
        'Name': '父亲',
        'Relationship': '父子',
        'Mobile': '1311111111',
      },
      {
        'Id': '2',
        'Name': '母亲',
        'Relationship': '母子',
        'Mobile': '1311111111'
      },
    ];
  }

}
