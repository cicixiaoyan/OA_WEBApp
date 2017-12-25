import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PublicService } from '../../../../providers/PublicService';
/**
 * Generated class for the ContractSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract-search',
  templateUrl: 'contract-search.html',
})
export class ContractSearchPage {

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
      DeptId: ["", [ ]], // 第一个参数是默认值
      StartDate: ["", []],
      EndDate: ["", []],
      ContractYear: ["", []],
      ContractType: ["", []],
    });

    this.publicService.GetDeptLs().subscribe((resJson) => {
      if (resJson.Result)  this.DeptLs = resJson.Data;
    });

    if (this.search){
      this.searchForm.setValue({
        Title: this.search.Title, // 第一个参数是默认值
        StartDate: this.search.StartDate,
        EndDate: this.search.EndDate,
        Instructor: this.search.Instructor,
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
