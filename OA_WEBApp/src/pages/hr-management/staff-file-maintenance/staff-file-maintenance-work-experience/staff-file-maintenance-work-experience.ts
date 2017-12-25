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
  list: Array<any> = [];
  isShowAdd: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
    this.getList();
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

  doRead(id){
    let parma = {
      "Id": id,
      "readOnly": (this.navParams.get("readOnly") ? true : null)
    };
    let modal = this.modalCtrl.create("StaffFileMaintenanceWorkExperienceAdd", parma);
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
        'Company': '青白江疾控预防',
        'Dept': '部门1',
        'Duty': '我是职务',
        'Remarks': '我是备注'
      },
      {
        "Id": '2',
        'StartDate': '2017-08-08',
        'EndDate': '2017-08-08',
        'Company': '青白江疾控预防',
        'Dept': '部门1',
        'Duty': '我是职务',
        'Remarks': ''
      },
      {
        "Id": '9',
        'StartDate': '2017-08-08',
        'EndDate': '2017-08-08',
        'Company': '青白江疾控预防',
        'Dept': '部门2',
        'Duty': '我是职务',
        'Remarks': ''
      },
      {
        "Id": '12',
        'StartDate': '2017-08-08',
        'EndDate': '2017-08-08',
        'Company': '青白江疾控预防',
        'Dept': '部门1',
        'Duty': '我是职务',
        'Remarks': '我是备注'
      },
    ];
  }

}
