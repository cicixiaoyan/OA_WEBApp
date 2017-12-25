import { Component,  Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
// import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Observable';
// import { HttpService } from "../../../providers/HttpService";

/**
 * Generated class for the StaffFileMaintenanceEducationAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-staff-file-maintenance-education-add',
  templateUrl: 'staff-file-maintenance-education-add.html',
})
export class StaffFileMaintenanceEducationAddPage {
  readOnly: boolean = false;
  addForm: FormGroup;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              // private httpService: HttpService,
              private formBuilder: FormBuilder,
              private viewCtrl: ViewController) {
      this.readOnly = this.navParams.get("readOnly") ? true : false;
      this.addForm = this.formBuilder.group({
        StartDate: ['', [Validators.required]], // 第一个参数是默认值
        EndDate: ['', [Validators.required]],
        School: ['', [Validators.required, Validators.maxLength(30)]],
        Major: ['', [Validators.required, Validators.maxLength(30)]], 
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
