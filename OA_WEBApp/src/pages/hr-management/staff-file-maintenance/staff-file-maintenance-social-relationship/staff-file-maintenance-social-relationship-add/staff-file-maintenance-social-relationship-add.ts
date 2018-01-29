import { Component,  Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '../../../../../providers/Validators';
import { StaffFileMaintenanceService } from '../../staff-file-maintenance-service';
import { NativeService } from '../../../../../providers/NativeService';
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
  id: string = "";

  addForm: FormGroup;
  formCtrls: any;
  item: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private nativeService: NativeService,
              private staffFileMaintenanceService: StaffFileMaintenanceService,
              private formBuilder: FormBuilder,
              private viewCtrl: ViewController) {
      this.item = this.navParams.get("item");
      this.readOnly = !!this.item ? true : false;
      this.id = this.navParams.get("id");
  

      this.addForm = this.formBuilder.group({
        "SociologyName": ['', [Validators.required, Validators.maxLength(14)]], // 姓名
        "SociologyAge": ['', [Validators.max(150)]], // 年龄
        "SociologyDeptName": ['', [Validators.maxLength(20)]], // 部门
        "SociologyDuty": ['', [Validators.maxLength(30)]],  // 职务
        "SociologyOutlook": ['', []],  // 政治面貌
        "SociologyByRelation": ['', [Validators.required, Validators.maxLength(10)]],  // 与本人关系
        "SociologyUnit": ['', [Validators.maxLength(30)]],  // 工作单位
        "SociologyContacNum": ['', [Validators.required, Validators.phone]],  // 联系电话
        "SociologyEmergency": ["否", []],  // 是否为紧急联系人
        "SociologyMemo": ["", [Validators.maxLength(100)]], // 备注
      });
      this.formCtrls = this.addForm.controls;
      if (this.readOnly){
        this.addForm.patchValue(this.item);
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffFileMaintenanceWorkExperienceAddPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  save(value){
    // 提交
    value.id = this.id;
    this.staffFileMaintenanceService.addSociology(value).subscribe(resJson => {
      if (resJson.Data){
        this.nativeService.showToast("添加社会关系成功", 500);
        this.viewCtrl.dismiss(true);
      }
    });
  }

}
