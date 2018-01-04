import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CarService } from './../car_service';

@IonicPage()
@Component({
  selector: 'page-vehicle-application',
  templateUrl: 'vehicle-application.html',
})
export class VehicleApplicationPage {

  Id: string = '';
  readOnly: boolean = false;

  baseForm: FormGroup;

  Uid: string = '';
  DeptId: string = '';
  MethodToInforme: Array<any> = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private popoverCtrl: PopoverController,
              @Inject(FormBuilder) formBuilder: FormBuilder,
              private carService: CarService
            ) {
      this.readOnly = this.navParams.get("readOnly") ? true : false;
      this.Id = this.navParams.get("Id") || '';

      this.baseForm = formBuilder.group({
        "BusId": ['', [Validators.required]], // 车辆Id
        "PersonNum": ['', [Validators.required]], // 乘坐人数
        "StartPlace": ['', [Validators.required]], // 出发地
        "EndPlace": ['', [Validators.required]], // 目的地
        "DeptId": ['', []], // 部门Id
        "StartDate": ['', [Validators.required]], // 行驶时间（自）
        "EndDate": ['', [Validators.required]], // 行驶时间（至）
        "Reson": ['', [Validators.required, Validators.maxLength(180)]], // 出发是由
        "Memo": ['', [Validators.maxLength(180)]], // 备注
        "SPId": ['', [Validators.required]], // 审核人ID
        "IsStationNotice": ['', []], // 是否站内通知审核人
      });

      
  }

  

  ionViewDidLoad() {
    if (!this.navParams.get('Id')){

    }
  }

  submit(value){
    console.log(value);
  }


}
