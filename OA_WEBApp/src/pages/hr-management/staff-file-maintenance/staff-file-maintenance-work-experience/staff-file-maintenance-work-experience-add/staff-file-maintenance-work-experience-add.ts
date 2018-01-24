import { Component,  Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { StaffFileMaintenanceService } from '../../staff-file-maintenance-service';
import { NativeService } from '../../../../../providers/NativeService';

@IonicPage()
@Component({
  selector: 'page-staff-file-maintenance-work-experience-add',
  templateUrl: 'staff-file-maintenance-work-experience-add.html',
})
export class StaffFileMaintenanceWorkExperienceAdd {
  @Input() isShow: boolean = true;
  addForm: FormGroup;
  readOnly: boolean = false;
  id: string = "";
  formCtrls: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private staffFileMaintenanceService: StaffFileMaintenanceService,
              private formBuilder: FormBuilder,
              private nativeService: NativeService,
              private viewCtrl: ViewController) {
      this.readOnly = this.navParams.get("readOnly") ? true : false;
      this.id = this.navParams.get("id");

      this.addForm = this.formBuilder.group({
        "ExpStartDate": ['', [Validators.required]], // 第一个参数是默认值
        "ExpEndDate": ['', [Validators.required]],
        "ExpDeptName": ['', [Validators.required, Validators.maxLength(20)]],
        "ExpDuty": ['', [Validators.required, Validators.maxLength(30)]],
        "ExpUnit": ['', [Validators.required, Validators.maxLength(20)]],
        "ExpMemo": ["", [Validators.maxLength(180)]],
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
    value.id = this.id;
    this.staffFileMaintenanceService.addWorkExp(value).subscribe(resJson => {
      if (resJson.Result){
        this.nativeService.showToast("保存工作经验成功", 1000);
        this.viewCtrl.dismiss(true);
      }else{
        this.nativeService.showToast(resJson.Data, 1000);        
      }
    });
  }
  
}
