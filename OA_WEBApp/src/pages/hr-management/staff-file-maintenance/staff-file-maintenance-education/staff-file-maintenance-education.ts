import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the StaffFileMaintenanceEducationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-staff-file-maintenance-education',
  templateUrl: 'staff-file-maintenance-education.html',
})
export class StaffFileMaintenanceEducation {

  list: Array<any> = [];
  isShowAdd: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
    this.getList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffFileMaintenanceWorkExperiencePage');
  }

  add(){
      let modal = this.modalCtrl.create("StaffFileMaintenanceEducationAddPage");
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
    let modal = this.modalCtrl.create("StaffFileMaintenanceEducationAddPage", parma);
    modal.present();
    modal.onDidDismiss(data => {
        data && console.log(data);
    });
  }

  private getList(){
    this.list = [
      {
        "Id": '1',
        'StartDate': '2017-08-08',
        'EndDate': '2017-08-08',
        'School': '我是学校1',
        'Major': '专业1',
        'Remarks': '我是备注'
      },
      {
        "Id": '2',
        'StartDate': '2017-08-08',
        'EndDate': '2017-08-08',
        'School': '我是学校2',
        'Major': '专业1',
        'Remarks': ''
      },
    ];
  }

}
