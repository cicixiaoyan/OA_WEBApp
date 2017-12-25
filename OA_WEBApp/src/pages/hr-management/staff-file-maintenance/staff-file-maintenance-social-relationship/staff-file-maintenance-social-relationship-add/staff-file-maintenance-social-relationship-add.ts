import { Component,  Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
// import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Observable';
// import { HttpService } from "../../../providers/HttpService";

/**
 * Generated class for the StaffFileMaintenanceSocialRelationshipAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-staff-file-maintenance-social-relationship-add',
  templateUrl: 'staff-file-maintenance-social-relationship-add.html',
})
export class StaffFileMaintenanceSocialRelationshipAddPage {
  readOnly: boolean = false;
  addForm: FormGroup;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              // private httpService: HttpService,
              private formBuilder: FormBuilder,
              private viewCtrl: ViewController) {
      this.readOnly = this.navParams.get("readOnly") ? true : false;
      this.addForm = this.formBuilder.group({
        Name: ['', [Validators.required, Validators.maxLength(14)]], // 第一个参数是默认值
        Age: ['', [Validators.max(150)]], // 第一个参数是默认值
        Dept: ['', [Validators.maxLength(20)]],
        Duty: ['', [Validators.maxLength(20)]], 
        PoliticalStatus: ['', [Validators.maxLength(80)]], 
        Relationship: ['', [Validators.required, Validators.maxLength(10)]], 
        Company: ['', [Validators.maxLength(80)]], 
        Mobile: ['', [Validators.required, Validators.maxLength(11)]], 
        IsEmergencyContact: [false, [Validators.maxLength(80)]], 
        Remarks: ["", [Validators.maxLength(100)]],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffFileMaintenanceWorkExperienceAddPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  save(value){
    // 提交
    // this.httpService.postFormData("", value)
    // .map((res: Response) => res.json())
    // .subscribe((resJson) => {

    // });
  }

}
