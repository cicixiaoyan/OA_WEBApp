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
  selector: 'page-staff-file-maintenance-education-add',
  templateUrl: 'staff-file-maintenance-education-add.html',
})
export class StaffFileMaintenanceEducationAddPage {
  id: string = "";
  readOnly: boolean = false;
  addForm: FormGroup;
  formCtrls: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private nativeService: NativeService,
              private staffFileMaintenanceService: StaffFileMaintenanceService,
              private formBuilder: FormBuilder,
              private viewCtrl: ViewController) {
      this.readOnly = this.navParams.get("readOnly") ? true : false;
      this.id = this.navParams.get("id");
      this.addForm = this.formBuilder.group({
        "EduStartDate": ['', [Validators.required]], // 第一个参数是默认值
        "EduEndDate": ['', [Validators.required]],
        "EduMechanism": ['', [Validators.required, Validators.maxLength(30)]],
        "EduMajor": ['', [Validators.required, Validators.maxLength(30)]],
        "EduMmeo": ["", [Validators.maxLength(100)]],
      });
      this.formCtrls = this.addForm.controls;

      if (!!this.navParams.get("item")){
        
        this.addForm.patchValue(this.navParams.get("item"));
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
    this.staffFileMaintenanceService.addEdu(value).subscribe(resJson => {
      if (resJson.Data){
        this.nativeService.showToast("添加教育经历成功", 500);
        this.viewCtrl.dismiss(true);
      }else{
        this.nativeService.showToast(resJson.Data, 800);
      }
    });
  }
}
