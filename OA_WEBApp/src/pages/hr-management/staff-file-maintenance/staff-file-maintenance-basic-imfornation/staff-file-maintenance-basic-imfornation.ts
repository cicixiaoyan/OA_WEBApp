import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Validators as iValidators } from '../../../../providers/Validators';
import { StaffFileMaintenanceService } from '../staff-file-maintenance-service';
import { NativeService } from '../../../../providers/NativeService';
@IonicPage()
@Component({
  selector: 'page-staff-file-maintenance-basic-imfornation',
  templateUrl: 'staff-file-maintenance-basic-imfornation.html',
})
export class StaffFileMaintenanceBasicImfornation {
  Id: string = "";
  readOnly: boolean = false;

  baseForm: FormGroup;
  hideOne: boolean = true;
  hideTwo: boolean = true;
  hideThree: boolean = true;
  hideFour: boolean = true;
  formCtrls: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private FormBuilder: FormBuilder,
              private NativeService: NativeService,
              private staffFileMaintenanceService: StaffFileMaintenanceService
            ) {
      this.readOnly = this.navParams.get("readOnly") ? true : false;
      this.Id = this.navParams.get("Id");
      this.baseForm = this.FormBuilder.group({
        
        BasicNum: ['', [Validators.required, Validators.maxLength(20)]], // 员工工号
        BasicName: ['', [Validators.required, Validators.maxLength(10)]], // 姓名
        BasicSex: ['男', [Validators.required]], // 性别
        BasciBirth: ['', [Validators.required]], // 出生日期
        BasicFrom: ['', [Validators.maxLength(12)]], // 籍贯
        BasicNation: ['', [Validators.required]], // 名族
        BasicPartyDate: ['', []], // 入党时间
        BasicOutlook: ['', []], // 政治面貌
        BasicIDCard: ['', [iValidators.idcValid]], // 身份证号
        BasicStatus: ['在职', []], // 员工状态，在职或离职

        BasicFirstEduation: ['', [Validators.required]], // 第一学历
        BasicFirstGraduaiton: ['', []], // 毕业日期
        BasicFirstGraduationSchool: ['', [Validators.maxLength(30)]], // 毕业学校
        BasicFirstMajor: ['', []], // 专业
        BasicSecondEduation: ['', []], // 第二学历
        BasicSecondGradutionSchool: ['', [Validators.maxLength(30)]], // 毕业学校
        BasicAcademic: ['', []], // 学位
        BasicResidence: ['', [Validators.maxLength(40)]], // 户口所在地
        BasicFamilyAddr: ['', [Validators.maxLength(40)]], // 家庭地址
        BasicContactNumber: ['', [iValidators.phone]], // 联系电话
        BasicCellPhone: ['', [iValidators.phone]], // 手机号
        BasicMail: ['', [Validators.email]], // 电子邮箱
        BasicCertificate: ['', [Validators.maxLength(180)]], // 所获证书

        BasicDeptId: ['', [Validators.required]], // 所在部门
        BasicDeptName: ['', [Validators.required]], // 所属部门名称
        BasicDuty: ['', [Validators.required]], // 职务
        BasicQualifications: ['', [Validators.maxLength(30)]], // 职业资格
        BasicTitle: ['', []], // 职称
        BasciFileNum: ['', [Validators.maxLength(30)]], // 员工档案号
        BasicWordDate: ['', [Validators.required]], // 参加工作日期
        BasicUnitDate: ['', []], // 进入本单位日期
        BasicNature: ['', [Validators.required]], // 员工性质
        BasicInsuranceNum: ['', [Validators.maxLength(16)]], // 医疗保险号
        BasicHandBookNum: ['', [Validators.maxLength(20)]], // 养老手册号
        BasicProvidentNum: ['', [Validators.maxLength(20)]], // 公积金账号
        BasicMemo: ['', [Validators.maxLength(180)]], // 备注

        // //基本信息-员工性质
        // public string BasicNature { get; set; }
        // //基本信息-医疗保险号
        // public string BasicInsuranceNum { get; set; }
        // //基本信息-养老手册号
        // public string BasicHandBookNum { get; set; }
        // //基本信息-公积金号
        // public string BasicProvidentNum{ get; set; }
        // //基本信息-备注
        // public string BasicMemo { get; set; }
        // //基本信息-头像
        // public string BasicPhoto { get; set; }
        // //基本信息-附件
        // public Dictionary<string,string> BasicAttach { get; set; }
        // //工作经历
        // public List<Exp> ExpLs { get; set; }
        // //社会关系
        // public List<Sociology> SociologyLs { get; set; }
        // //教育经历
        // public List<Edu> EduLs { get; set; }
      });
      this.formCtrls = this.baseForm.controls;
      if (this.Id != ""){
        this.staffFileMaintenanceService.getList({"id": this.Id}).subscribe(resJson => {
          if (resJson.Result){
            this.baseForm.patchValue(resJson.Data[0]);
          }else{
            this.NativeService.showToast(resJson.Data, 800);
          }
        });
      }
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
    if (this.Id != ""){
      this.staffFileMaintenanceService.modBasic(value).subscribe(resJson => {
        if (resJson.Data){
          this.NativeService.showToast("修改成功", 500);
        }else this.NativeService.showToast(resJson.Data, 800);
      });
    }else{
      this.staffFileMaintenanceService.addBasic(value).subscribe(resJson => {
        if (resJson.Data){
          this.NativeService.showToast("保存基础资料成功", 500);
          this.navCtrl.parent.select(1);
        }else this.NativeService.showToast(resJson.Data, 800);
      });
    }
  }

}
