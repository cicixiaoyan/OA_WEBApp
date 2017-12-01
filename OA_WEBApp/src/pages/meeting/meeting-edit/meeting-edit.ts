import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavParams, NavController, PopoverController, ViewController } from 'ionic-angular';

import { GlobalData } from '../../../providers/GlobalData';
import { NativeService } from '../../../providers/NativeService';
import { FileObj } from "../../../model/FileObj";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FileService } from '../../../providers/FileService';
import { MeetingService } from '../meeting_service';

/**
 * Generated class for the MeetingEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meeting-edit',
  templateUrl: 'meeting-edit.html',
})
export class MeetingEditPage {

  writeForm: FormGroup;
  FileNewName: string = ""; // 附件名称
  MeetPlaceLs = [];
  MeetTypeLs = [];
  DeptLs = [];
  detail = {};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private fileService: FileService,
              private formBuilder: FormBuilder,
              private globalData: GlobalData,
              private nativeService: NativeService,
              private meetingService: MeetingService) {
    this.writeForm = this.formBuilder.group({
      Title: ["", [Validators.required, Validators.maxLength(30)]], // 第一个参数是默认值
      TypeId: ["", [Validators.required]],
      PlaceId: ["", [ Validators.required]],
      StartDate: [null, [ Validators.required]],
      EndDate: [null, [Validators.required]],
      PersonId: ["", [Validators.maxLength(180), Validators.required]],
      DeptId: ["", []],
      HostName: ["", [Validators.maxLength(8)]],
      Range: ["", [Validators.maxLength(180)]],
      Detail: ["", [Validators.maxLength(180)]],
      FileOldName: ["", [Validators.maxLength(180)]],
    });
    let parma = {"id": this.navParams.get("Id")};

    this.meetingService.MeetPlaceLs().subscribe((resJson) => {
      if (resJson.Result)  this.MeetPlaceLs = resJson.Data;
    });

    this.meetingService.MeetTypeLs().subscribe((resJson) => {
      if (resJson.Result)  this.MeetTypeLs = resJson.Data;
    });

    this.meetingService.GetDeptLs().subscribe((resJson) => {
      if (resJson.Result)  this.DeptLs = resJson.Data;
    });

    this.meetingService.read(parma).subscribe((resJson) => {
      if (resJson.Result){
        this.detail = resJson.Data;
        this.FileNewName = resJson.Data.FileNewName;
        this.writeForm.setValue({
          Title: this.detail["Title"],
          TypeId: this.detail["TypeId"],
          PlaceId: this.detail["PlaceId"],
          StartDate: new Date(this.detail["StartDate"]),
          EndDate: new Date(this.detail["EndDate"]), 
          PersonId: this.detail["PersonId"],
          DeptId: this.detail["DeptId"],
          HostName: this.detail["HostName"],
          Range: this.detail["Range"],
          Detail: this.detail["Detail"],
          FileOldName: this.detail["FileOldName"],
        });

      }else{
        this.nativeService.showToast(resJson.Data, 800);
        this.navCtrl.pop();
      }
    });


  }

  ionViewWillEnter(){



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeetingWritePage');
  }
  save(data){
    data.Uid = this.globalData.Uid;
    data.FileNewName = this.FileNewName;
    data.Id = this.detail["Id"];
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
