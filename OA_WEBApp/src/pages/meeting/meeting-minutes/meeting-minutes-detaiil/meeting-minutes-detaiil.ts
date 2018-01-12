import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavParams, NavController, PopoverController,  ViewController } from 'ionic-angular';

import { GlobalData } from '../../../../providers/GlobalData';
import { NativeService } from '../../../../providers/NativeService';
import { FileObj } from "../../../../model/FileObj";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FileService } from '../../../../providers/FileService';
import { Utils } from '../../../../providers/Utils';
import { MeetingService } from '../../meeting_service';

@IonicPage()
@Component({
  selector: 'page-meeting-minutes-detaiil',
  templateUrl: 'meeting-minutes-detaiil.html',
})
export class MeetingMinutesDetaiilPage {

  writeForm: FormGroup;
  FileNewName: string = ""; // 附件名称
  MeetPlaceLs = [];
  MeetTypeLs = [];
  DeptLs = [];
  detail = {};
  readOnly: boolean = false;
  HostId: string = "";
  PersonId: string = "";
  formCtrl: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private fileService: FileService,
              private formBuilder: FormBuilder,
              private globalData: GlobalData,
              private nativeService: NativeService,
              private popoverCtrl: PopoverController,
              private meetingService: MeetingService) {
    this.writeForm = this.formBuilder.group({
        Id: "",
        Title: '', // 第一个参数是默认值
        TypeName: "",
        Place: "",
        StartDate: "",
        EndDate: "",
        PersonName: "",
        PersonId: "",
        DeptName: "",
        HostName: "",
        Range: "",
        Detail: ["", Validators.maxLength(500)],
        Attath: [],
        AttathUrl: [],
        MeetRecod: ["", [Validators.maxLength(1000), Validators.required]],
    });


    this.formCtrl = this.writeForm.controls;
    let id = {"id": this.navParams.get("Id")};
    this.readOnly = this.navParams.get("readOnly") ? true : false;

    this.meetingService.MeetPlaceLs().subscribe((resJson) => {
      if (resJson.Result)  this.MeetPlaceLs = resJson.Data;
    });

    this.meetingService.MeetTypeLs().subscribe((resJson) => {
      if (resJson.Result)  this.MeetTypeLs = resJson.Data;
    });

    this.meetingService.GetDeptLs().subscribe((resJson) => {
      if (resJson.Result)  this.DeptLs = resJson.Data;
    });

    this.meetingService.MeetRecordDetail(id).subscribe((resJson) => {
      if (resJson.Result){
        this.detail = resJson.Data;
        this.FileNewName = resJson.Data.FileNewName;
        this.writeForm.patchValue(resJson.Data[0]);

      }else{
        this.nativeService.showToast(resJson.Data, 800);
        this.navCtrl.pop();
      }
    });


  }

  ionViewWillEnter(){
    // this.writeForm.disable();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeetingWritePage');
  }
  save(data){
    this.meetingService.MeetRecordMod(data).subscribe((resJson) => {
      if (resJson.Result){
        this.nativeService.showToast("保存成功", 888);
      }else{
        this.nativeService.showToast(resJson.Data, 888);
      }
    });
  }

  viewAffix() {
    this.fileService.download(this.writeForm.value.AttathUrl, this.writeForm.value.Attath).subscribe();
  }

  aprove(){

  }

  close(){
    this.navCtrl.pop();
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
        this.writeForm.patchValue({ 'Person': data.addressee });
      }

    });
  }
  checkHostName(myEvent) {
    let popover = this.popoverCtrl.create("ContactsPopoverPage",
      { addressee: this.writeForm.get("HostName").value, addresseeIds: this.HostId });
    popover.present({
      ev: myEvent
    });
    popover.onDidDismiss(data => {
      if (!!data) {
        this.HostId = data.addresseeIds;
        this.writeForm.patchValue({ 'HostName': data.addressee });
      }

    });
  }

}
