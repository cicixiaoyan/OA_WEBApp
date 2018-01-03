import { Component,  Inject } from '@angular/core';
import { IonicPage, NavParams, NavController, PopoverController, ViewController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { StaffAttendanceSettingsService } from '../staff-attendance-settings-service';

@IonicPage()
@Component({
  selector: 'page-staff-attendance-basicsettings',
  templateUrl: 'staff-attendance-basicsettings.html',
})
export class StaffAttendanceBasicsettingsPage {

  writeForm: FormGroup;
  
  readOnly: boolean = false;
  formCtrls: any;
  Identity: string = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              @Inject(FormBuilder) fb: FormBuilder,
              private popoverCtrl: PopoverController,
              private staffAttendanceSettingsService: StaffAttendanceSettingsService) {
    this.readOnly = this.navParams.get("readOnly") ? true : false;
    this.writeForm = fb.group({
      "Name": ['admin', []], // 姓名
      "Company": ['成都市青白江区疾病预防控制中心', []], // 公司
      "Code": ['001', []], // 编码
      "Role": ['中心主任', []], // 角色
      "Dept": ['办公室	', []], // 所在部门
      "Duty": ['中心主任', []], // 职务
      "Status": ['正常', []], // 状态

      "Id": ['', [Validators.required, Validators.maxLength(12)]], // 对应考勤ID
      "InDate": ['', [Validators.required]], // 入职日期
      "IsDepartmentAttendanceApprovalStaff": ['否', []], // 是否部门考勤人员?
      "IsAttendanceApprovalLeadership": ['否', []], // 是否考勤分管领导?
      "IsAttendanceApprovalCenterLeadership": ['否', []], // 是否考勤审批中心领导?
      "IsAttendanceManagementStaff": ['否', []], // 是否考勤管理人员?
      "IsSpecialAttendanceStaff": ['否', []], // 是否特殊考勤人员?
      "IsParticipateAnnualleaveStatistics": ['否', []], // 是否参与部门年假统计?
    });

    this.formCtrls = this.writeForm.controls;


  }

  sent(data){
    let identityArr = [
      'IsDepartmentAttendanceApprovalStaff',
      'IsAttendanceApprovalLeadership',
      'IsAttendanceApprovalCenterLeadership',
      'IsAttendanceManagementStaff',
      'IsSpecialAttendanceStaff',
      'IsParticipateAnnualleaveStatistics'];

    if (this.Identity.length != 0){
      for (let value of this.Identity){
        if (!!value) data[identityArr[value]] = "是";
      }   
    }
    console.log(data);

  }

}
