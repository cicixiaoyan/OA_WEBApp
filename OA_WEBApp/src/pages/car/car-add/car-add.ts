import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
/**
 * Generated class for the CarAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-car-add',
  templateUrl: 'car-add.html',
})
export class CarAddPage {
  addForm: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder) {
    let today = new Date();
    this.addForm = this.formBuilder.group({
      CarNum: ['', [Validators.required]], // 第一个参数是默认值
      Name: ["", [Validators.maxLength(180), Validators.required]],
      Number: ["", [Validators.maxLength(180), Validators.required]],
      StartDate: [today, [Validators.maxLength(180), Validators.required]],
      PurchasePrice: ["", [Validators.maxLength(5)]],
      ResidualValue: ["", [Validators.maxLength(5)]],
      BrandModel: ["", [Validators.maxLength(180)]],
      EngineNumber: ["", [Validators.maxLength(180)]],
      FrameNumber: ["", [Validators.maxLength(180)]],
      DrivingLicenseNumber: ["", [Validators.maxLength(20)]],
      manager: ["", [Validators.maxLength(20), Validators.required, Validators.minLength(4)]],
      VehicleCondition: ["", []],
      AnnualinspectionDate: ["", ],
      WarrantyDate: ["", []],
      InsuranceDate: ["", []],
      Remarks: ["", [Validators.maxLength(180)]],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarAddPage');
  }

}
