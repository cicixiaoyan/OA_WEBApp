import { Component,  Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '../../../../../providers/Validators';
// import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Observable';
// import { HttpService } from "../../../providers/HttpService";

@IonicPage()
@Component({
  selector: 'page-staff-file-maintenance-social-relationship-add',
  templateUrl: 'staff-file-maintenance-social-relationship-add.html',
})
export class StaffFileMaintenanceSocialRelationshipAddPage {
  readOnly: boolean = false;
  addForm: FormGroup;
  formCtrls: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              // private httpService: HttpService,
              private formBuilder: FormBuilder,
              private viewCtrl: ViewController) {
      this.readOnly = this.navParams.get("readOnly") ? true : false;
      this.addForm = this.formBuilder.group({
        Name: ['', [Validators.required, Validators.maxLength(14)]], // 姓名
        Age: ['', [Validators.max(150)]], // 年龄
        Dept: ['', [Validators.maxLength(20)]], // 部门
        Duty: ['', [Validators.maxLength(30)]],  // 职务
        PoliticalStatus: ['', []],  // 政治面貌
        Relationship: ['', [Validators.required, Validators.maxLength(10)]],  // 与本人关系
        Company: ['', [Validators.maxLength(30)]],  // 工作单位
        Mobile: ['', [Validators.required, Validators.phone]],  // 联系电话
        IsEmergencyContact: [false, []],  // 是否为紧急联系人
        Remarks: ["", [Validators.maxLength(100)]], // 备注
      });
      this.formCtrls = this.addForm.controls;
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
