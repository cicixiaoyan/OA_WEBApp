import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MeetingService } from '../../meeting_service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
/**
 * Generated class for the MeetingRoomSetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meeting-room-set',
  templateUrl: 'meeting-room-set.html',
})
export class MeetingRoomSetPage {
  isWrite: boolean = false;
  DeptLs: any = [];
  setForm: FormGroup;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private meetingService: MeetingService) {
    this.isWrite = !!this.navParams.get("Id") ? false : true; 
    this.setForm = this.formBuilder.group({
      Name: ["", [Validators.required, Validators.maxLength(20), Validators.minLength(2)]], // 第一个参数是默认值
      Manager: ["", [Validators.required, Validators.maxLength(20), Validators.minLength(2)]],
      Number: ["", [Validators.required, Validators.max(10000)]],
      Mobile: [null, [Validators.minLength(7), Validators.maxLength(11)]],
      HaveAttendant: [false, [] ],
      DeptId: ["", [Validators.maxLength(180)]],
      Introduction: ["", [Validators.maxLength(180)]]
    });

    this.meetingService.GetDeptLs().subscribe((resJson) => {
      if (resJson.Result)  this.DeptLs = resJson.Data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeetingRoomSetPage');
  }

}
