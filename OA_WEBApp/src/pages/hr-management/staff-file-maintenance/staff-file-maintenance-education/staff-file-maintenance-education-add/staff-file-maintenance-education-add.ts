import { Component,  Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '../../../../../providers/Validators';
import { StaffFileMaintenanceService } from '../../staff-file-maintenance-service';
import { NativeService } from '../../../../../providers/NativeService';
import { Utils } from '../../../../../providers/Utils';


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
  item: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private nativeService: NativeService,
              private staffFileMaintenanceService: StaffFileMaintenanceService,
              private formBuilder: FormBuilder,
              private viewCtrl: ViewController) {
      this.item =  this.navParams.get("item"); 
      this.readOnly = !!this.item ? true : false;
      this.id = this.navParams.get("id");
      this.addForm = this.formBuilder.group({
        "EduStartDate": [null, [Validators.required]], // 第一个参数是默认值
        "EduEndDate": [null, [Validators.required]],
        "EduMechanism": ['', [Validators.required, Validators.maxLength(30)]],
        "EduMajor": ['', [Validators.required, Validators.maxLength(30)]],
        "EduMmeo": ["", [Validators.maxLength(100)]],
      });
      this.formCtrls = this.addForm.controls;

      if (this.readOnly){
        
        // this.addForm.patchValue(this.navParams.get("item"));
        this.addForm.patchValue({
          "EduStartDate": Utils.dateFormat(new Date(this.item.EduStartDate), 'yyyy-MM-dd'), // 第一个参数是默认值
          "EduEndDate": Utils.dateFormat(new Date(this.item.EduEndDate), 'yyyy-MM-dd'),
          "EduMechanism": this.item.EduMechanism,
          "EduMajor": this.item.EduMajor,
          "EduMmeo": this.item.EduMmeo,
        });
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffFileMaintenanceWorkExperienceAddPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  save(value1){
    // 提交
    let value = Object.assign({}, value1);
    value.EduStartDate = Utils.dateFormat_zh(new Date(value.EduStartDate), 'yyyy-MM-dd HH:mm:ss');
    value.EduEndDate = Utils.dateFormat_zh(new Date(value.EduEndDate), 'yyyy-MM-dd HH:mm:ss');
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
