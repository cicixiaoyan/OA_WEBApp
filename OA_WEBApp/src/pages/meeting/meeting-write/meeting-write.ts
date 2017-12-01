import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavParams, NavController, PopoverController, ViewController } from 'ionic-angular';

import { GlobalData } from '../../../providers/GlobalData';
import { NativeService } from '../../../providers/NativeService';
import { FileObj } from "../../../model/FileObj";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FileService } from '../../../providers/FileService';
import { MeetingService } from '../meeting_service';

/**
 * Generated class for the MeetingWritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meeting-write',
  templateUrl: 'meeting-write.html',
})
export class MeetingWritePage {
  writeForm: FormGroup;
  FileNewName: string = ""; // 附件名称
  MeetPlaceLs = [];
  MeetTypeLs = [];
  DeptLs = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private fileService: FileService,
              private formBuilder: FormBuilder,
              private globalData: GlobalData,
              private nativeService: NativeService,
              private meetingService: MeetingService) {
    this.meetingService.MeetPlaceLs().subscribe((resJson) => {
      if (resJson.Result)  this.MeetPlaceLs = resJson.Data;
    });

    this.meetingService.MeetTypeLs().subscribe((resJson) => {
      if (resJson.Result)  this.MeetTypeLs = resJson.Data;
    });

    this.meetingService.GetDeptLs().subscribe((resJson) => {
      if (resJson.Result)  this.DeptLs = resJson.Data;
    });

    this.writeForm = this.formBuilder.group({
        Title: ['', [Validators.required, Validators.maxLength(30)]], // 第一个参数是默认值
        TypeId: ["", [Validators.required]],
        PlaceId: ["", [ Validators.required]],
        StartDate: ["", [ Validators.required]],
        EndDate: ["", [Validators.required]],
        PersonId: ["", [Validators.maxLength(180), Validators.required]],
        DeptId: ["", []],
        HostName: ["", [Validators.maxLength(8)]],
        Range: ["", [Validators.maxLength(180)]],
        Detail: ["", [Validators.maxLength(180)]],
        FileOldName: ["", [Validators.maxLength(180)]],
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeetingWritePage');
  }
  sent(data){
    data.Uid = this.globalData.Uid;
    data.FileNewName = this.FileNewName;
    this.meetingService.write(data).subscribe((resJson) => {
      if (resJson.Result){
        this.nativeService.showToast("添加成功", 888);
      }else{
        this.nativeService.showToast(resJson.Data, 888);
      }
    });
  }

  addAffix() {
    this.fileService.uploadAffix(1).subscribe((data) => {
      let resJson = JSON.parse(data.response);
      if (data.responseCode === 200){
        this.writeForm.patchValue({'Affix': resJson.Data[0].OldName});
        this.FileNewName = resJson.Data[0].NewName;
      }else{
        this.nativeService.showToast(resJson.Data, 800);
      }

    });
  }

}
