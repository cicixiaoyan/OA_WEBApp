import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ContractService } from '../../contract-service';
import { NativeService } from '../../../../../providers/NativeService';
import { Utils } from '../../../../../providers/Utils';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

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
              private alertCtrl: AlertController,
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
    value.ContractDate = Utils.dateFormat(new Date(value.ContractDate), 'yyyy-MM-dd HH:mm:ss');
    value.ContractStartDate = Utils.dateFormat(new Date(value.ContractStartDate), 'yyyy-MM-dd HH:mm:ss');
    value.ContractEndDate = Utils.dateFormat(new Date(value.ContractEndDate), 'yyyy-MM-dd HH:mm:ss');
    if (value.ContractTypeId != ""){
      value.ContractType = this.contractType[value.ContractTypeId];
    }

    if (this.Id != ""){
      let prompt = this.alertCtrl.create({
        title: '温馨提示',
        message: "你确定修改此条合同信息吗？<br/><span class='text-ios-danger'>修改后不能恢复</span>",
        buttons: [
          {
            text: '取消',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: '修改',
            handler: data => {
              this.contractService.modRenew(value).subscribe(resJson => {
                if (resJson.Data){
                  this.nativeService.showToast("修改合同续签成功", 800);
                  this.navCtrl.pop();
                }else{
                  this.nativeService.showToast(resJson.Data, 800);          
                }
              });
            }
          }
        ]
      });
      prompt.present();

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
              // this.baseForm.patchValue(data);
              this.contractService.getList({id: data.id}).subscribe(resJson => {
                if (resJson.Result){
                  let Data = resJson.Data[0];
                  this.baseForm.patchValue({
                    "HtID": Data.Id,
                    "ContractNum": Data.ContractNum, // 合同编号
                    "ContractName": Data.ContractName, // 合同名称
                    "UpStratDate": Data.StratDate, // 上次生效时间
                    "UpEndDate": Data.EndDate, // 上次到期时间
                    "SignDate": Data.SignDate, // 签约时间

                    "UserNum": Data.UserNum, // 员工工号
                    "UserName": Data.UserName, // 姓名
                    "Sex": Data.Sex, // 性别
                    "IDNumber": Data.IDNumber, // 身份证号
                    "DeptName": Data.DeptName, // 所在部门
                    "Duty": Data.Duty, // 职务
                  });
                }else{
                  this.nativeService.showToast(resJson.Data, 800); 
                }
              });
          }
      });
  }

}
