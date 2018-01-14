import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ContractService } from '../contract-service';
import { NativeService } from '../../../../providers/NativeService';
import { FileService } from '../../../../providers/FileService';
import { FILE_SERVE_URL } from '../../../../providers/Constants';
@IonicPage()
@Component({
  selector: 'page-contract-setting',
  templateUrl: 'contract-setting.html',
})
export class ContractSettingPage {
  Id: string = '';
  readOnly: boolean = false;

  baseForm: FormGroup;
  hideOne: boolean = false;
  hideTwo: boolean = true;
  hideThree: boolean = true;
  hideFour: boolean = true;

  Uid: string = '';
  DeptId: string = '';
  ContactContent: string = '';
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private popoverCtrl: PopoverController,
              private FormBuilder: FormBuilder,
              private contractService: ContractService,
              private nativeService: NativeService,
              private fileService: FileService
            ) {
      this.readOnly = this.navParams.get("readOnly") ? true : false;
      this.Id = this.navParams.get("Id") || '';

      this.baseForm = this.FormBuilder.group({
        "UserNum": ['', [Validators.maxLength(20), Validators.required]], // 员工工号
        "UserName": ['', []], // 姓名
        "Sex": ['', []], // 性别
        "IDNumber": ['', []], // 身份证号
        "DeptName": ['', []], // 所在部门
        "Duty": ['', []], // 职务

        "ContractNum": ['', []], // 合同编号
        "ContractName": ['', []], // 合同名称
        "ContractType": ['', []], // 合同类型
        "TimeLimit": ['有', []], // 有无期限
        "IsCorrect": ['已转正', []], // 是否转正
        "SignDate": ['', []], // 签约时间
        "ContractYear": ['', []], // 签约年份
        "ContractStatus": ['', []], // 合同状态

        "ProbationPeriod": ['', []], // 试用期限
        "BasicWage": ['', []], // 试用基本工资
        "ContractStartDate": ['', []], // 试用生效日期
        "ContractEndDate": ['', []], // 试用到期日期

        "Memo": ['', []], // 备注
        "Attch": [{}, []]
      });
      if (this.Id != ""){
        this.contractService.getList({"id": this.Id}).subscribe(resJson => {
          if (resJson.Result){
            this.baseForm.patchValue(resJson.Data[0]);
          }else{
            this.nativeService.showToast(resJson.Data, 800);
          }
        });
      }

      // <!-- model.ContractNum = dt.Rows[i]["HtBianHao"].ToString();
      // model.ContractName = dt.Rows[i]["HtMc"].ToString();
      // model.StratDate = dt.Rows[i]["HeTongSj"].ToString();
      // model.EndDate = dt.Rows[i]["HeTongqxsj"].ToString();
      // model.UserNum = dt.Rows[i]["StaffNumer"].ToString();
      // model.UserName = dt.Rows[i]["XingMing"].ToString();
      // model.Sex = dt.Rows[i]["XingBie"].ToString();
      // model.IDNumber = dt.Rows[i]["ShenFen"].ToString();
      // model.DeptName = dt.Rows[i]["BuMen"].ToString();
      // model.Duty = dt.Rows[i]["ZhiWu"].ToString();
      // model.SignDate = dt.Rows[i]["QinYue"].ToString();
      // model.ContractStartDate = dt.Rows[i]["ShiYongSj"].ToString();
      // model.ContractEndDate = dt.Rows[i]["ShiYongDq"].ToString();
      // model.TimeLimit = dt.Rows[i]["QiXian"].ToString();
      // model.ContractYear = dt.Rows[i]["Nianfen_MC"].ToString();
      // model.ContractStatus = dt.Rows[i]["HtZt"].ToString();
      // model.IsCorrect = dt.Rows[i]["ZhuanZheng"].ToString();
      // model.ProbationPeriod = dt.Rows[i]["ShiYongQx"].ToString();
      // model.BasicWage = dt.Rows[i]["ShiYongGz"].ToString();
      // model.Memo = dt.Rows[i]["HtBeiZhu"].ToString();
      // model.ContractDate = dt.Rows[i]["HeTongQx"].ToString();
      // model.RegularBasicWage = dt.Rows[i]["HeTongGz"].ToString(); -->
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

  downloadAffix(path, name) {
    const target = path.split("/").pop();
    // let url = "http://192.168.0.49:789/Attach/flow/Work/201111302315473908417.pdf";
    this.fileService.download1(FILE_SERVE_URL + path, target).subscribe((path) => {
      this.fileService.openFile(path).subscribe(() => {
        
      });
    });
}


}
