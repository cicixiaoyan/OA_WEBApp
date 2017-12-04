import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CarService } from '../car_service';
import { NativeService } from '../../../providers/NativeService';
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
  BusStatusLs: Array<any>;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private nativeService: NativeService,
              private carService: CarService) {
    let today = new Date();
    this.addForm = this.formBuilder.group({
      BusNumber: ['', [Validators.required]], // 第一个参数是默认值
      BusName: ["", [Validators.maxLength(180), Validators.required]],
      BusPassenger: ["", [Validators.maxLength(180), Validators.required]],
      StartDate: [today, [Validators.maxLength(180), Validators.required]],
      BusBuyPrice: ["", [Validators.maxLength(5)]],
      Salvage: ["", [Validators.maxLength(5)]],
      BusLicensePlate: ["", [Validators.maxLength(180)]],
      BusEngineNumber: ["", [Validators.maxLength(180)]],
      BusFrameNumber: ["", [Validators.maxLength(180)]],
      BusDrivingLicenseNumber: ["", [Validators.maxLength(20)]],
      BusManger: ["", [Validators.maxLength(20), Validators.required, Validators.minLength(4)]],
      BusStatus: ["", []],
      BusAnnualInspection: ["", ],
      BusMaintenanceDate: ["", []],
      BusDated: ["", []],
      BusMemo: ["", [Validators.maxLength(180)]],
    });
  }

  ionViewDidLoad() {
    this.carService.geStatus().subscribe(resJson => {
      if (resJson.Result){
        this.BusStatusLs = resJson.Data;
      }
    });
    console.log('ionViewDidLoad CarAddPage');
  }

  save(value){
    value.Uid = this.carService.httpService.globalData.Uid;
    this.carService.add(value).subscribe((resJson) => {
      if (resJson.Result){
        this.nativeService.showToast("添加成功", 500);
      }else{
        this.nativeService.showToast(resJson.Data, 500);
      }
    });
  }

}
