import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ContractService } from '../contract-service';
@IonicPage()
@Component({
  selector: 'page-contract-setting',
  templateUrl: 'contract-setting.html',
})
export class ContractSettingPage {

  baseForm: FormGroup;
  hideOne: boolean = false;
  hideTwo: boolean = true;
  hideThree: boolean = true;
  hideFour: boolean = true;
  readOnly: boolean = false;


  Uid: string = '';
  DeptId: string = '';
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private popoverCtrl: PopoverController,
              private FormBuilder: FormBuilder,
              private contractService: ContractService
            ) {
      this.readOnly = this.navParams.get("readOnly") ? true : false;
      this.baseForm = this.FormBuilder.group({
        JobNumber: ['', [Validators.maxLength(20), Validators.required]], // 员工工号
        Name: ['', []], // 姓名
        Sex: ['', []], // 性别
        IDC: ['', []], // 身份证号
        Dept: ['', []], // 所在部门
        Duty: ['', []], // 职务

        ContractCode: ['', []], // 合同编号
        ContractName: ['', []], // 合同名称
        ContractType: ['', []], // 合同类型
        HavePeriod: ['有', []], // 有无期限
        IsPositive: ['已转正', []], // 是否转正
        SigningDate: ['', []], // 签约时间
        ContractYear: ['', []], // 签约年份
        ContractStatus: ['', []], // 合同状态

        TrialPeriod: ['', []], // 试用期限
        TrialBasicSalary: ['', []], // 试用基本工资
        TrialEffectiveDate: ['', []], // 试用生效日期
        TrialExpirationDate: ['', []], // 试用到期日期

        Remarks: ['', []] // 备注
      });
  }

  ionViewDidLoad() {
    if (!this.navParams.get('Id')){

    }
  }

  shrink(parma){
    if (parma === 'one') this.hideOne = !this.hideOne;
    if (parma === 'two') this.hideTwo = !this.hideTwo;
    if (parma === 'three') this.hideThree = !this.hideThree;
    if (parma === 'four') this.hideFour = !this.hideFour;
  }
  submit(value){
    console.log(value);
  }

  checkPeople(myEvent) {
      let popover = this.popoverCtrl.create("StaffPopoverPage",
          { 'Uid': this.Uid }, {cssClass: 'popoverW88'});
      popover.present({
          ev: myEvent
      });
      popover.onDidDismiss(data => {
          if (!!data) {
              console.log(data);
              // {addressee:this.addressee,addresseeIds:this.addresseeIds}

              this.Uid = data.Uid;
              this.DeptId = data.DeptId;
              this.baseForm.patchValue({
                "JobNumber": data.JobNumber, // 员工工号
                "Name": data.Name, // 姓名
                "Sex": data.Sex, // 性别
                "IDC": data.IDC, // 身份证号
                "Dept": data.Dept, // 所在部门
                "Duty": data.Duty, // 职务
              });
          }

      });
  }


}
