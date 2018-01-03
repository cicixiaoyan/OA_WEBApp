import { Component,  Inject } from '@angular/core';
import { IonicPage, NavParams, NavController, PopoverController,
   ViewController, AlertController  } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { StaffAttendanceSettingsService } from '../staff-attendance-settings-service';

@IonicPage()
@Component({
  selector: 'page-staff-attendance-batchsettings',
  templateUrl: 'staff-attendance-batchsettings.html',
})
export class StaffAttendanceBatchsettingsPage {

  writeForm: FormGroup;
  
  FileNewName: string = ""; // 附件名称
  PersonId: string = "";
  readOnly: boolean = false;
  formCtrls: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              @Inject(FormBuilder) fb: FormBuilder,
              private popoverCtrl: PopoverController,
              private alertCtrl: AlertController ,
              private staffAttendanceSettingsService: StaffAttendanceSettingsService) {
    this.readOnly = this.navParams.get("readOnly") ? true : false;
    this.writeForm = fb.group({
        "BaseStaff": ['', []], // 基准员工
        "UpdateStaff": ["", [Validators.required, Validators.maxLength(30)]], // 更新员工
        "StartTime": ["", [ Validators.required]], // 开始时间
        "EndTime": ["", [ Validators.required]], // 结束时间
    });

    this.formCtrls = this.writeForm.controls;


  }

  sent(data){
    let alert = this.alertCtrl.create({
      title: '更新确认',
      message: '您确定以 ' + this.writeForm.value.BaseStaff + " 的工作日设定为标准，更新选中人员在" +
      this.writeForm.value.StartTime + "到" + this.writeForm.value.StartTime + '范围内的工作日信息?',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            console.log(data);
          }
        }
      ]
    });
    alert.present();
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
