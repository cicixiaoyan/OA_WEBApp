import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MeetingService } from '../../meeting_service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-meeting-room-set',
  templateUrl: 'meeting-room-set.html',
})
export class MeetingRoomSetPage {
  isWrite: boolean = false;
  DeptLs: any = [];
  setForm: FormGroup;
  id: string = "";
  formCtrls: any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              @Inject(FormBuilder) fb: FormBuilder,
              private meetingService: MeetingService) {
    this.isWrite = !!this.navParams.get("Id") ? true : false; 
    this.id = this.navParams.get("Id") || "";
    this.setForm = fb.group({
      "MeetName": ["", [Validators.required, Validators.maxLength(20), Validators.minLength(2)]], // 第一个参数是默认值
      "MangerPerson": ["", [Validators.required, Validators.maxLength(20), Validators.minLength(2)]],
      "Scale": ["", [Validators.required, Validators.max(10000)]],
      "Phone": [null, [Validators.minLength(7), Validators.maxLength(11)]],
      "Flag": [false, [] ],
      "DeptId": ["", [Validators.maxLength(180)]],
      "Detail": ["", [Validators.maxLength(180)]]
    });
    this.formCtrls = this.setForm.controls;

    if (this.isWrite){
      this.meetingService.MeetRoomView({"id": this.id}).subscribe(resJson => {
        if (resJson.Result)
          this.setForm.patchValue(resJson.Data);
      });
    }

    this.meetingService.GetDeptLs().subscribe((resJson) => {
      if (resJson.Result)  this.DeptLs = resJson.Data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeetingRoomSetPage');
  }

  save(value){
    if (this.isWrite){
      value.id = this.id;
    
    }else{

    }
  }

}
