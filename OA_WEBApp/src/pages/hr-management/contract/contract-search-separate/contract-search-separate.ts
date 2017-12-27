import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PublicService } from '../../../../providers/PublicService';

@IonicPage()
@Component({
  selector: 'page-contract-search-separate',
  templateUrl: 'contract-search-separate.html',
})
export class ContractSearchSeparatePage {

  searchForm: FormGroup;
  search: any;
  DeptLs: Array<any> = [];
  name: string = '签约';
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private publicService: PublicService,
              private formBuilder: FormBuilder) {
    this.search =  this.navParams.get("search");
    this.name = this.navParams.get("name");
    this.searchForm = this.formBuilder.group({
      "DeptId": ["", [ ]], // 第一个参数是默认值
      "StartDate": ["", []],
      "EndDate": ["", []]
    });

    this.publicService.GetDeptLs().subscribe((resJson) => {
      if (resJson.Result)  this.DeptLs = resJson.Data;
    });

    if (this.search){
      this.searchForm.setValue({
        "DeptId": this.search.DeptId, // 第一个参数是默认值
        "StartDate": this.search.StartDate,
        "EndDate": this.search.EndDate,
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
