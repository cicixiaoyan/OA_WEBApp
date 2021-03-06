import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

/**
 * Generated class for the HolidayGroupSettingsSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-holiday-group-settings-search',
  templateUrl: 'holiday-group-settings-search.html',
})
export class HolidayGroupSettingsSearchPage {

  searchForm: FormGroup;
  search: any;
  DeptLs: Array<any> = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              @Inject(FormBuilder) formBuilder: FormBuilder) {
    this.search =  this.navParams.get("search");
    this.searchForm = formBuilder.group({
      "GroupName": ["", []], // 第一个参数是默认值
      "Code": ["", []],
      "Name": ["", []],
      "Description": ["", []],
    });

    if (this.search){
      this.searchForm.setValue({
        "GroupName": this.search.GroupName,
        "Code": this.search.Code,
        "Name": this.search.Name,
        "Description": this.search.Description,
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
