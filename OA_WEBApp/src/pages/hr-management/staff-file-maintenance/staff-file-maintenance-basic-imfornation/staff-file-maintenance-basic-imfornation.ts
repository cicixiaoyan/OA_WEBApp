import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Validators as iValidators } from '../../../../providers/Validators';
@IonicPage()
@Component({
  selector: 'page-staff-file-maintenance-basic-imfornation',
  templateUrl: 'staff-file-maintenance-basic-imfornation.html',
})
export class StaffFileMaintenanceBasicImfornation {
  baseForm: FormGroup;
  hideOne: boolean = true;
  hideTwo: boolean = true;
  hideThree: boolean = true;
  hideFour: boolean = true;
  readOnly: boolean = false;
  formCtrls: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private FormBuilder: FormBuilder
            ) {
      this.readOnly = this.navParams.get("readOnly") ? true : false;
      this.baseForm = this.FormBuilder.group({
        StaffNumber: ['', [Validators.required, Validators.maxLength(20)]], // 员工工号
        Name: ['', [Validators.required, Validators.maxLength(10)]], // 姓名
        Sex: ['男', [Validators.required]], // 性别
        BirthDate: ['', [Validators.required]], // 出生日期
        NativePlace: ['', [Validators.maxLength(12)]], // 籍贯
        Ethnic: ['', [Validators.required]], // 名族
        JoinPartyTime: ['', []], // 入党时间
        PoliticalStatus: ['', []], // 政治面貌
        IDC: ['', [iValidators.idcValid]], // 身份证号
        StaffStatus: ['在职', []], // 员工状态，在职或离职

        FirstEdu: ['', [Validators.required]], // 第一学历
        GraduationDate: ['', []], // 毕业日期
        GraduatedSchool: ['', [Validators.maxLength(30)]], // 毕业学校
        profession: ['', []], // 专业
        SecondEdu: ['', []], // 第二学历
        SecondGraduatedSchool: ['', [Validators.maxLength(30)]], // 毕业学校
        Degree: ['', []], // 学位
        AccountLocation: ['', [Validators.maxLength(40)]], // 户口所在地
        FamilyAddress: ['', [Validators.maxLength(40)]], // 家庭地址
        Telephone: ['', [iValidators.phone]], // 联系电话
        Mobile: ['', [iValidators.phone]], // 手机号
        Email: ['', [Validators.email]], // 电子邮箱
        CertificateObtained: ['', [Validators.maxLength(180)]], // 所获证书

        DeptId: ['', [Validators.required]], // 所在部门
        Duty: ['', [Validators.required]], // 职务
        JobTitle: ['', [Validators.maxLength(30)]], // 职业资格
        ProfessionalQualification: ['', []], // 职称
        StaffFileNumber: ['', [Validators.maxLength(30)]], // 员工档案号
        Workday: ['', [Validators.required]], // 参加工作日期
        Indate: ['', []], // 进入本单位日期
        EmployeeNature: ['', [Validators.required]], // 员工性质
        MedicareNumber: ['', [Validators.maxLength(16)]], // 医疗保险号
        PensionBookNumber: ['', [Validators.maxLength(20)]], // 养老手册号
        ProvidentFundAccount: ['', [Validators.maxLength(20)]], // 公积金账号
        Remarks: ['', [Validators.maxLength(180)]] // 备注
      });
      this.formCtrls = this.baseForm.controls;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffFileMaintenanceBasicImfornationPage');
  }

  shrink(parma){
    if (parma === 'one') this.hideOne = !this.hideOne;
    if (parma === 'two') this.hideTwo = !this.hideTwo;
    if (parma === 'three') this.hideThree = !this.hideThree;
    if (parma === 'four') this.hideFour = !this.hideFour;
  }
  sent(value){
    console.log(value);
  }

}
