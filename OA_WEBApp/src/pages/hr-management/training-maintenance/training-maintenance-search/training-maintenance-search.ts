import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
  
/**
 * Generated class for the TrainingMaintenanceSearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@IonicPage()
@Component({
  selector: 'training-maintenance-search',
  templateUrl: 'training-maintenance-search.html'
})
export class TrainingMaintenanceSearch {

  searchForm: FormGroup;
  search: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private formBuilder: FormBuilder) {
    this.search =  this.navParams.get("search");         
    this.searchForm = this.formBuilder.group({
      Title: ['', [ Validators.maxLength(30)]], // 第一个参数是默认值
      StartDate: ["", []],
      EndDate: ["", []],
      Instructor: ["", [Validators.maxLength(8)]],
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
