import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavParams, NavController, PopoverController, ViewController } from 'ionic-angular';

import { GlobalData } from '../../../providers/GlobalData';
import { NativeService } from '../../../providers/NativeService';
import { FileObj } from "../../../model/FileObj";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

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
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder) {
    this.writeForm = this.formBuilder.group({
        Theme: ['', [Validators.required, Validators.maxLength(30)]], // 第一个参数是默认值
        Type: ["", [Validators.required]],
        Location: ["", [ Validators.required]],
        StartTime: ["", [ Validators.required]],
        EndTime: ["", [Validators.required]],
        Participants: ["", [Validators.maxLength(180), Validators.required]],
        Dept: ["", []],
        Host: ["", [Validators.maxLength(8)]],
        Attendance: ["", [Validators.maxLength(180)]],
        Description: ["", [Validators.maxLength(180)]],
        Affix: ["", [Validators.maxLength(180)]],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeetingWritePage');
  }
  sent(data){

  }

}
