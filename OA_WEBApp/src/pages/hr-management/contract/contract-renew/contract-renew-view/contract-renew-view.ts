import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ContractService } from '../../contract-service';

@IonicPage()
@Component({
  selector: 'page-contract-renew-view',
  templateUrl: 'contract-renew-view.html',
})
export class ContractRenewViewPage {
  Id: string = '';
  readOnly: boolean = false;

  baseForm: FormGroup;
  hideOne: boolean = false;
  hideTwo: boolean = true;
  hideThree: boolean = true;
  hideFour: boolean = true;

  Uid: string = '';
  DeptId: string = '';
  ContactId: string = '';
  ContactContent: string = '';
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private popoverCtrl: PopoverController,
              private FormBuilder: FormBuilder,
              private contractService: ContractService
            ) {

      this.readOnly = this.navParams.get("readOnly") ? true : false;
      this.Id = this.navParams.get("Id") || '';

      this.baseForm = this.FormBuilder.group({
        "ContractNumber": ['', [Validators.required]], // 合同编号
        "ContractName": ['', []], // 合同名称
        "LastValidDate": [], // 上次生效时间
        "LastExpirationDate": [], // 上次到期时间
        "SigningDate": ['', []], // 签约时间

        "StaffNumber": ['', []], // 员工工号
        "Name": ['', []], // 姓名
        "Sex": ['', []], // 性别
        "IDC": ['', []], // 身份证号
        "Dept": ['', []], // 所在部门
        "Duty": ['', []], // 职务

        "RenewDate": ['', [Validators.required]], // 续签时间
        "RenewType": ['', []], // 续签类别
        "RenewValidDate": ['', [Validators.required]], // 续签生效时间
        "RenewExpirationDate": ['', [Validators.required]], // 续签到期时间
      });
  }

  ionViewDidLoad() {
  }

  shrink(parma){
    if (parma === 'one') this.hideOne = !this.hideOne;
    if (parma === 'two') this.hideTwo = !this.hideTwo;
    if (parma === 'three') this.hideThree = !this.hideThree;
    if (parma === 'four') this.hideFour = !this.hideFour;
  }

  submit(value){
    value.Uid = this.Uid;
    value.DeptId = this.DeptId;
    value.ContactId = this.ContactId;
    console.log(value);
  }

  chooseContract(myEvent) {
      let popover = this.popoverCtrl.create("ContractChoosePage",
          { 'ContactId': this.ContactId }, {cssClass: 'popoverW88'});
      popover.present({
          ev: myEvent
      });
      popover.onDidDismiss(data => {
          if (!!data) {
              console.log(data);
              this.Uid = data.StaffId;
              this.DeptId = data.DeptId;
              this.ContactId = data.ContactId;
              this.baseForm.patchValue({
                "ContractNumber": data.ContractNumber, // 合同编号
                "ContractName": data.ContractName, // 合同名称
                "LastValidDate": data.LastValidDate, // 上次生效时间
                "LastExpirationDate": data.LastExpirationDate, // 上次到期时间
                "SigningDate": data.SigningDate, // 签约时间

                "StaffNumber": data.StaffNumber, // 员工工号
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
