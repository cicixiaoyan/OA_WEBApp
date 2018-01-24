import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CarService } from '../car_service';
import { NativeService } from '../../../providers/NativeService';
/**
 * Generated class for the CarReadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-car-read',
  templateUrl: 'car-read.html',
})
export class CarReadPage {
  id: string;  
  editForm: FormGroup;
  BusStatusLs: Array<any>;
  BusMangerLs: Array<any> = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private nativeService: NativeService,
              private carService: CarService) {
    let today = new Date();
    this.carService.ClsqAddSpry({}).subscribe(resJson => {
      if (resJson.Result && resJson.Data.length != 0){
        this.BusMangerLs = resJson.Data;
      }
    });
    this.editForm = this.formBuilder.group({
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
    this.carService.geDetail(this.navParams.get("Id")).subscribe((resJson) => {
      if (resJson.Result){
        let data = resJson.Data;
        this.id = data.Id;
        this.editForm.setValue({
          BusNumber: data.BusNumber, // 第一个参数是默认值
          BusName: data.BusName,
          BusPassenger: data.BusPassenger,
          StartDate: data.StartDate,
          BusBuyPrice: data.BusBuyPrice,
          Salvage: data.Salvage,
          BusLicensePlate: data.BusLicensePlate,
          BusEngineNumber: data.BusEngineNumber,
          BusFrameNumber: data.BusFrameNumber,
          BusDrivingLicenseNumber: data.BusDrivingLicenseNumber,
          BusManger: data.BusManger,
          BusStatus: data.BusStatus,
          BusAnnualInspection: data.BusAnnualInspection,
          BusMaintenanceDate: data.BusMaintenanceDate,
          BusDated: data.BusDated,
          BusMemo: data.BusMemo,
        });
      }
    });
  }

  save(value){
    value.Uid = this.carService.httpService.globalData.Uid;
    value.Id = this.id;
    this.carService.mod(value).subscribe((resJson) => {
      if (resJson.Result){
        this.nativeService.showToast("添加成功", 500);
      }else{
        this.nativeService.showToast(resJson.Data, 500);
      }
    });
  }

}
