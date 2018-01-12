import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ContractService } from '../../contract-service';
import { NativeService } from '../../../../../providers/NativeService';
import { Utils } from '../../../../../providers/Utils';

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

  contractTypeLs: Array<string>;
  contractType = {};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private popoverCtrl: PopoverController,
              private nativeService: NativeService,
              @Inject(FormBuilder) fb: FormBuilder,
              private contractService: ContractService
            ) {

      this.readOnly = this.navParams.get("readOnly") ? true : false;
      this.Id = this.navParams.get("Id") || '';

      this.baseForm = fb.group({
        "id": "", // 合同编号
        "HtID": "", // 合同id

        "ContractNum": ['', [Validators.required]], // 合同编号
        "ContractName": ['', []], // 合同名称
        "UpStratDate": [], // 上次生效时间
        "UpEndDate": [], // 上次到期时间
        "SignDate": ['', []], // 签约时间

        "UserNum": ['', []], // 员工工号
        "UserName": ['', []], // 姓名
        "Sex": ['', []], // 性别
        "IDNumber": ['', []], // 身份证号
        "DeptName": ['', []], // 所在部门
        "DeptId": ['', []], // 所在部门id
        "Duty": ['', []], // 职务

        "ContractDate": ['', [Validators.required]], // 续签时间
        "ContractTypeId": ['', []], // 续签类别id
        "ContractType": ['', []], // 续签类别
        "ContractStartDate": ['', [Validators.required]], // 续签生效时间
        "ContractEndDate": ['', [Validators.required]], // 续签到期时间
        "Content": "", // 续签内容
      });

      if (this.Id !== ""){
        this.contractService.getRenew({"id": this.Id}).subscribe(resJson => {
          if (resJson.Result){
            let data = resJson.Data[0];
            data.UpStratDate = Utils.dateFormat(new Date(data.UpStratDate), 'yyyy-MM-ddTHH:mm+08:00');
            data.UpEndDate = Utils.dateFormat(new Date(data.UpEndDate), 'yyyy-MM-ddTHH:mm+08:00');
            data.SignDate = Utils.dateFormat(new Date(data.SignDate), 'yyyy-MM-ddTHH:mm+08:00');
            data.ContractDate = Utils.dateFormat(new Date(data.ContractDate), 'yyyy-MM-ddTHH:mm+08:00');
            data.ContractStartDate = Utils.dateFormat(new Date(data.ContractStartDate), 'yyyy-MM-ddTHH:mm+08:00');
            data.ContractEndDate = Utils.dateFormat(new Date(data.ContractEndDate), 'yyyy-MM-ddTHH:mm+08:00');
            this.baseForm.patchValue(resJson.Data[0]); 
          }else{
            this.nativeService.showToast(resJson.Data, 800);
          }
        });
      }

      this.contractService.getContractType().subscribe(resJson => {
        if (resJson.Data) {
          this.contractType = resJson.Data;
          let arr = [];
          for (let i in resJson.Data) {
            arr.push({ Id: i, Name: resJson.Data[i] });
          }
          this.contractTypeLs = [...arr];
        }
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

  compareFn(e1, e2){
    console.log(e1, e2);
  }

  submit(value){
    console.log(value);

    value.UpStratDate = Utils.dateFormat(new Date(value.UpStratDate), 'yyyy-MM-dd HH:mm:ss');
    value.UpEndDate = Utils.dateFormat(new Date(value.UpEndDate), 'yyyy-MM-dd HH:mm:ss');
    value.UpEndDate = Utils.dateFormat(new Date(value.UpEndDate), 'yyyy-MM-dd HH:mm:ss');
    value.SignDate = Utils.dateFormat(new Date(value.SignDate), 'yyyy-MM-dd HH:mm:ss');
    value.ContractDate = Utils.dateFormat(new Date(value.ContractDate), 'yyyy-MM-dd HH:mm:ss');
    value.ContractStartDate = Utils.dateFormat(new Date(value.ContractStartDate), 'yyyy-MM-dd HH:mm:ss');
    value.ContractEndDate = Utils.dateFormat(new Date(value.ContractEndDate), 'yyyy-MM-dd HH:mm:ss');
    if (value.ContractTypeId != ""){
      value.ContractType = this.contractType[value.ContractTypeId];
    }

    if (this.Id != ""){
      this.contractService.modRenew(value).subscribe(resJson => {
        if (resJson.Data){
          this.nativeService.showToast("修改合同续签成功", 800);
          this.navCtrl.pop();
        }else{
          this.nativeService.showToast(resJson.Data, 800);          
        }
      });
    }else{
      value.Id = null;
      this.contractService.addRenew(value).subscribe(resJson => {
        if (resJson.Data){
          this.nativeService.showToast("添加合同续签成功", 800);
          this.navCtrl.pop();
        }else{
          this.nativeService.showToast(resJson.Data, 800);          
        }
      });
    }
  }

  chooseContract(myEvent) {
      let popover = this.popoverCtrl.create("ContractChoosePage",
          { 'HtID': this.baseForm.value.HtID }, {cssClass: 'popoverW88'});
      popover.present({
          ev: myEvent
      });
      popover.onDidDismiss(data => {
          if (!!data) {
              console.log(data);
              this.baseForm.patchValue(data);
              // this.baseForm.patchValue({
              //   "ContractNum": data.ContractNum, // 合同编号
              //   "ContractName": data.ContractName, // 合同名称
              //   "UpStratDate": data.UpStratDate, // 上次生效时间
              //   "UpEndDate": data.UpEndDate, // 上次到期时间
              //   "SignDate": data.SignDate, // 签约时间

              //   "UserNum": data.UserNum, // 员工工号
              //   "UserName": data.UserName, // 姓名
              //   "Sex": data.Sex, // 性别
              //   "IDNumber": data.IDNumber, // 身份证号
              //   "DeptName": data.DeptName, // 所在部门
              //   "Duty": data.Duty, // 职务
              // });
          }
      });
  }

}
