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
  PersonId: string = "";
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private fileService: FileService,
              private formBuilder: FormBuilder,
              private globalData: GlobalData,
              private popoverCtrl: PopoverController,
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
        Title: ['', [Validators.required, Validators.maxLength(30), Validators.maxLength(2)]], // 第一个参数是默认值
        TypeId: ["", [Validators.required]],
        PlaceId: ["", [ Validators.required]],
        StartDate: ["", [ Validators.required]],
        EndDate: ["", [Validators.required]],
        Person: ["", [Validators.maxLength(180), Validators.required]],
        DeptId: ["", []],
        HostName: ["", [Validators.maxLength(20)]],
        Range: ["", [Validators.maxLength(180)]],
        Detail: ["", [Validators.maxLength(180)]],
        FileOldName: ["", [Validators.maxLength(180)]],
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeetingWritePage');
  }
  sent(data){
    data.Person = null;
    data.Uid = this.globalData.Uid;
    data.FileNewName = this.FileNewName;
    data.PersonId = this.PersonId;
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

  checkPeople(myEvent) {
    let popover = this.popoverCtrl.create("ContactsPopoverPage",
        { addressee: this.writeForm.get("Person").value, addresseeIds: this.PersonId });
    popover.present({
        ev: myEvent
    });
    popover.onDidDismiss(data => {
        if (!!data) {
            this.PersonId = data.addresseeIds;                
            this.writeForm.patchValue({'Person': data.addressee});
        }

    });
}

}
