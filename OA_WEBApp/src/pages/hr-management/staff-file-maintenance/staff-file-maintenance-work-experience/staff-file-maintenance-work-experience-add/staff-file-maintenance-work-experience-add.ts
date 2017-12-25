import { Component,  Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
// import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Observable';
// import { HttpService } from "../../../providers/HttpService";
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
  @Input() isShow: boolean = true;
  addForm: FormGroup;
  readOnly: boolean = false;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              // private httpService: HttpService,
              private formBuilder: FormBuilder,
              private viewCtrl: ViewController) {
      this.readOnly = this.navParams.get("readOnly") ? true : false;
      this.addForm = this.formBuilder.group({
        StartDate: ['', [Validators.required]], // 第一个参数是默认值
        EndDate: ['', [Validators.required]],
        Dept: ['', [Validators.required]],
        Duty: ['', [Validators.required]], 
        Company: ['', [Validators.maxLength(80)]], 
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
