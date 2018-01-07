import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CarService } from '../../car_service';

@IonicPage()
@Component({
  selector: 'page-vehicle-scheduling-view',
  templateUrl: 'vehicle-scheduling-view.html',
})
export class VehicleSchedulingViewPage {

  Id: string = '';
  readOnly: boolean = false;

  baseForm: FormGroup;

  Uid: string = '';
  DeptId: string = '';
  MethodToInforme: Array<any> = [];
  busApplication = {
    "Id": "",
    "BusName": "", // 车辆
    "PersonNum": "", // 乘坐人数
    "StartPlace": "", // 出发地
    "EndPlace": "", // 目的地
    "Dept": "", // 部门Id
    "StartDate": "", // 行驶时间（自）
    "EndDate": "", // 行驶时间（至）
    "Reson": "", // 出发是由
    "Memo": "", // 备注
    "SPId": "", // 审核人ID
    "IsStationNotice": "", // 是否站内通知审核人
  };

  driverList: Array<any> = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private popoverCtrl: PopoverController,
              @Inject(FormBuilder) formBuilder: FormBuilder,
              private carService: CarService
            ) {
      this.readOnly = this.navParams.get("readOnly") ? true : false;
      this.Id = this.navParams.get("Id") || '';

      this.carService.getDriverList({}).subscribe(resJson => {
        if (resJson.Result){
          this.driverList = resJson.Data;
        }
      });

      this.busApplication = {
        "Id": "",
        "BusName": "车辆名称", // 车辆
        "PersonNum": "3", // 乘坐人数
        "StartPlace": "44", // 出发地
        "EndPlace": "44", // 目的地
        "Dept": "44", // 部门Id
        "StartDate": "2012-12-12", // 行驶时间（自）
        "EndDate": "2012-12-12", // 行驶时间（至）
        "Reson": "", // 出发是由
        "Memo": "", // 备注
        "SPId": "", // 审核人ID
        "IsStationNotice": "", // 是否站内通知审核人
      };

      this.baseForm = formBuilder.group({
        "RealBusId": ['', [Validators.required]], // 分配车辆
        "RealDriverId": [''], // 分配驾驶员
        "opinion": ['', [Validators.required]], // 审批意见
        "IsStationNotice": [true]
      });

      
  }

  

  ionViewDidLoad() {
    if (!this.navParams.get('Id')){

    }
  }

  submit(value){
    console.log(value);
  }

  delete(){}

}
