import { Component, Inject } from '@angular/core';
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
  BusMangerLs: Array<any> = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              @Inject(FormBuilder) fb: FormBuilder,
              private nativeService: NativeService,
              private carService: CarService) {
    this.carService.ClsqAddSpry({}).subscribe(resJson => {
      if (resJson.Result && resJson.Data.length != 0){
        this.BusMangerLs = resJson.Data;
      }
    });
    let today = new Date();
    this.addForm = fb.group({
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
      BusStatus: ["未借出", []],
      BusAnnualInspection: ["", ],
      BusMaintenanceDate: ["", []],
      BusDated: ["", []],
      BusMemo: ["", [Validators.maxLength(180)]],
    });
  }

  ionViewDidLoad() {
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
