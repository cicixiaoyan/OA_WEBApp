import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PublicService } from '../../../../providers/PublicService';

/**
 * Generated class for the StaffFileMaintenanceSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-staff-file-maintenance-search',
  templateUrl: 'staff-file-maintenance-search.html',
})
export class StaffFileMaintenanceSearchPage {

  searchForm: FormGroup;
  search: any;
  DeptLs: Array<any> = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private publicService: PublicService,
              private formBuilder: FormBuilder) {
    this.search =  this.navParams.get("search");
    this.searchForm = this.formBuilder.group({
      "StaffNumber": ["", []], // 员工工号
      "Name": ["", []], // 姓名
      "IDC": ["", []], // 证件号
      "DeptId": ["", []], // 部门Id
      "FirstEdu": ["", []], // 学历
      "StaffStatus": ["", []], // 员工状态：是否在职
      "Indate": ["", []] // 入职时间
    });

    this.publicService.GetDeptLs().subscribe((resJson) => {
      if (resJson.Result)  this.DeptLs = resJson.Data;
    });

    if (this.search){
      this.searchForm.setValue({
        "DeptId": this.search.DeptId,
        "StartDate": this.search.StartDate,
        "EndDate": this.search.EndDate,
        "ContractYear": this.search.ContractYear,
        "ContractType": this.search.ContractType
      });
    }
  }

  sent(value){
    this.viewCtrl.dismiss({"search": value});
  }

  reset(){
    this.searchForm.reset();
    this.searchForm.setValidators(null);
    this.searchForm.updateValueAndValidity();
  }

}
