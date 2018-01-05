import { Component,  Inject } from '@angular/core';
import { IonicPage, NavParams, NavController, PopoverController, ViewController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AttendanceAuditInstructionsService } from '../attendance-audit-instructions-service';


@IonicPage()
@Component({
  selector: 'page-attendance-audit-instructions-view',
  templateUrl: 'attendance-audit-instructions-view.html',
})
export class AttendanceAuditInstructionsViewPage {

  writeForm: FormGroup;
  
  FileNewName: string = ""; // 附件名称
  PersonId: string = "";
  readOnly: boolean = false;
  formCtrls: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              @Inject(FormBuilder) fb: FormBuilder,
              private popoverCtrl: PopoverController,
              private attendanceAuditInstructionsService: AttendanceAuditInstructionsService) {
    this.readOnly = this.navParams.get("readOnly") ? true : false;
    this.writeForm = fb.group({
        "Name": ['', []], // 名称
        "Type": ["", [Validators.required, Validators.maxLength(12)]], // 类型
        "ApplicablePersonnel": ["", [ Validators.required, Validators.max(365)]], // 适用人员
        "Description": ["", [ Validators.required, Validators.max(365)]], // 内容
    });

    this.formCtrls = this.writeForm.controls;


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
