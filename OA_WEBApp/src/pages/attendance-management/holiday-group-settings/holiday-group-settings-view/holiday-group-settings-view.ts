import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavParams, NavController, PopoverController, ViewController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HolidayGroupSettingsService } from '../holiday-group-settings-service';

@IonicPage()
@Component({
  selector: 'page-holiday-group-settings-view',
  templateUrl: 'holiday-group-settings-view.html',
})
export class HolidayGroupSettingsViewPage {

  writeForm: FormGroup;
  FileNewName: string = ""; // 附件名称
  PersonId: string = "";
  readOnly: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private popoverCtrl: PopoverController,
              private holidayGroupSettingsService: HolidayGroupSettingsService) {
    this.readOnly = this.navParams.get("readOnly") ? true : false;
    this.writeForm = this.formBuilder.group({
        "Years": ['', []], // 年份
        "GroupName": ["", [Validators.required, Validators.maxLength(12)]], // 分组名称
        "LeaveDays": ["", [ Validators.required, Validators.max(365)]], // 事假天数
        "TuneOffDays": ["", [ Validators.required, Validators.max(365)]], // 调休天数
        "SickLeaveDays": ["", [Validators.required, Validators.max(365)]], // 病假天数
        "Person": ["", [Validators.maxLength(180), Validators.required]], // 参加人员
        "Description": ["", [Validators.maxLength(180)]], // 分组说明
    });


  }

  sent(data){

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
