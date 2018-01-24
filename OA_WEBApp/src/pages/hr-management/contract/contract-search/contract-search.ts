import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PublicService } from '../../../../providers/PublicService';
import { ContractService } from "../contract-service";

@IonicPage()
@Component({
  selector: 'page-contract-search',
  templateUrl: 'contract-search.html',
})
export class ContractSearchPage {

  searchForm: FormGroup;
  search: any;
  DeptLs: Array<any> = [];
  typeLs: Array<any>;
  yearLs: Array<any>;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private publicService: PublicService,
              private contractService: ContractService,
              private formBuilder: FormBuilder) {
    this.search =  this.navParams.get("search");
    this.searchForm = this.formBuilder.group({
      "bmid": ["", []], // 第一个参数是默认值
      "nf": ["", []],
      "tp": ["", []],
      "startdate": ["", []],
      "enddate": ["", []],
    });

    this.contractService.getType().subscribe(resJson => {
      if (resJson.Result){
        let arr = [];
        for (let i in resJson.Data){
          arr.push({"id": i, "name": resJson.Data[i]});
        }
        this.typeLs = arr;
      }    
    });
    this.contractService.getYear().subscribe(resJson => {
      if (resJson.Result){
        let arr = [];
        for (let i in resJson.Data){
          arr.push({"id": i, "name": resJson.Data[i]});
        }
        this.yearLs = arr;
      }    
    });

    this.publicService.GetDeptLs().subscribe((resJson) => {
      if (resJson.Result){}  this.DeptLs = resJson.Data;
    });

    if (this.search){
      this.searchForm.setValue({
        "bmid": this.search.bmid,
        "nf": this.search.nf,
        "tp": this.search.tp,
        "startdate": this.search.startdate,
        "enddate": this.search.enddate
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
