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
  id: string = "";

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
    this.id = this.navParams.get("Id") || "";
    this.isWrite = this.id == "" ? true : false;
    this.writeForm = this.formBuilder.group({
        Topic: ['', [Validators.required, Validators.maxLength(30)]], // 第一个参数是默认值
        StartDate: ["", [Validators.required]],
        EndDate: ["", [Validators.required]],
        PXObject: ["", [Validators.maxLength(180), Validators.required]],
        Trainingunit: ["", []],
        Teacher: ["", [Validators.maxLength(8)]],
        Place: ["", [Validators.maxLength(100)]],
        Content: ["", [Validators.maxLength(180)]],
    });
    if (this.isWrite){
      this.trainingMaintenanceService.view({"id": this.id}).subscribe(resJson => {
        if (resJson.Result && resJson.Data.length != 0){
          let data = resJson.Data[0];
          this.writeForm.patchValue({
            Topic: data.Topic, // 第一个参数是默认值
            StartDate: data.StartDate,
            EndDate: data.EndDate,
            PXObject: data.PXObject,
            Trainingunit: data.Trainingunit,
            Teacher: data.Teacher,
            Place: data.Place,
            Content: data.Content
          });
        }else{
          this.nativeService.showToast(resJson.Data || "服务器错误", 800);
        }
      });
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeetingWritePage');
  }
  sent(data){
    // data.Uid = this.globalData.Uid;

    if (this.isWrite){
      data.id = this.id;
      this.trainingMaintenanceService.mod(data).subscribe(resJson => {
        this.nativeService.showToast(resJson.Data, 800);
        if (resJson.Result){
          this.navCtrl.pop();
        }
      });
    }else{
      this.trainingMaintenanceService.add(data).subscribe(resJson => {
        this.nativeService.showToast(resJson.Data, 800);
        if (resJson.Result){
          this.navCtrl.pop();
        }
      });
    }
    
  }

}
