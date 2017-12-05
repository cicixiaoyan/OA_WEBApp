import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavParams, NavController, PopoverController, ViewController } from 'ionic-angular';

import { GlobalData } from '../../../../providers/GlobalData';
import { NativeService } from '../../../../providers/NativeService';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TrainingMaintenanceService } from '../training-maintenance_service';
/**
 * Generated class for the TrainingMaintenanceSetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-training-maintenance-set',
  templateUrl: 'training-maintenance-set.html',
})
export class TrainingMaintenanceSetPage {
  isWrite: boolean = false;

  writeForm: FormGroup;
  FileNewName: string = ""; // 附件名称
  MeetPlaceLs = [];
  MeetTypeLs = [];
  DeptLs = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private globalData: GlobalData,
              private nativeService: NativeService,
              private trainingMaintenanceService: TrainingMaintenanceService) {

    this.writeForm = this.formBuilder.group({
        Title: ['', [Validators.required, Validators.maxLength(30)]], // 第一个参数是默认值
        StartDate: ["", [Validators.required]],
        EndDate: ["", [Validators.required]],
        Object: ["", [Validators.maxLength(180), Validators.required]],
        Unit: ["", []],
        Instructor: ["", [Validators.maxLength(8)]],
        Place: ["", [Validators.maxLength(100)]],
        Content: ["", [Validators.maxLength(180)]],
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeetingWritePage');
  }
  sent(data){
    data.Uid = this.globalData.Uid;
    data.FileNewName = this.FileNewName;
    this.trainingMaintenanceService.write(data).subscribe((resJson) => {
      if (resJson.Result){
        this.nativeService.showToast("添加成功", 888);
      }else{
        this.nativeService.showToast(resJson.Data, 888);
      }
    });
  }

}
