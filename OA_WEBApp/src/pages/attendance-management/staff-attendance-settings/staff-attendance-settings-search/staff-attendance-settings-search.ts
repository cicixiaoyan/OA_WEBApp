import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PublicService } from '../../../../providers/PublicService';

@IonicPage()
@Component({
  selector: 'page-staff-attendance-settings-search',
  templateUrl: 'staff-attendance-settings-search.html',
})
export class StaffAttendanceSettingsSearchPage {

  searchForm: FormGroup;
  search: any;
  DeptLs: Array<any> = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private publicService: PublicService,
              @Inject(FormBuilder) formBuilder: FormBuilder) {
    
    this.search =  this.navParams.get("search");
    this.searchForm = formBuilder.group({
      "DeptId": ["", []], // 第一个参数是默认值
      "iValue": ["", []],
      "fastSelect": ["", []],
    });

    this.publicService.GetDeptLs().subscribe((resJson) => {
      if (resJson.Result)  this.DeptLs = resJson.Data;
    });

    if (this.search){
      this.searchForm.setValue({
        "DeptId": this.search.DeptId,
        "iValue": this.search.iValue,
        "fastSelect": this.search.fastSelect,
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
