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
  detail = {};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private fileService: FileService,
              private formBuilder: FormBuilder,
              private globalData: GlobalData,
              private nativeService: NativeService,
              private meetingService: MeetingService) {
    let parma = {"id": this.navParams.get("Id")};
    this.meetingService.read(parma).subscribe((resJson) => {
      if (resJson.Result){
        this.detail = resJson.Data[0];
        console.log(this.detail);
        this.FileNewName = resJson.Data[0].FileNewName;
        this.writeForm = this.formBuilder.group({
          Title: [this.detail["Title"], [Validators.required, Validators.maxLength(30)]], // 第一个参数是默认值
          TypeId: [this.detail["TypeId"], [Validators.required]],
          PlaceId: [this.detail["PlaceId"], [ Validators.required]],
          StartDate: [this.detail["StartDate"], [ Validators.required]],
          EndDate: [this.detail["EndDate"], [Validators.required]],
          PersonId: [this.detail["PersonId"], [Validators.maxLength(180), Validators.required]],
          DeptId: [this.detail["DeptId"], []],
          HostName: [this.detail["HostName"], [Validators.maxLength(8)]],
          Range: [this.detail["Range"], [Validators.maxLength(180)]],
          Detail: [this.detail["Detail"], [Validators.maxLength(180)]],
          FileOldName: [this.detail["FileOldName"], [Validators.maxLength(180)]],
        });
      }else{
        this.nativeService.showToast(resJson.Result, 800);
        this.navCtrl.pop();
      }
    });
    this.meetingService.MeetPlaceLs().subscribe((resJson) => {
      if (resJson.Result)  this.MeetPlaceLs = resJson.Data;
    });

    this.meetingService.MeetTypeLs().subscribe((resJson) => {
      if (resJson.Result)  this.MeetTypeLs = resJson.Data;
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
