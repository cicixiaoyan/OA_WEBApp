import { Component, ViewChild, ElementRef  } from '@angular/core';
import { IonicPage, ViewController, PopoverController } from 'ionic-angular';
import { GlobalData } from '../../../providers/GlobalData';
import { SmsService } from '../smsService';
import { NativeService } from '../../../providers/NativeService';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Utils } from '../../../providers/Utils';
import { GetmobilePopoverPage } from '../../getmobile-popover/getmobile-popover';

/**
 * Generated class for the SmsWritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sms-write',
  templateUrl: 'sms-write.html',
})
export class SmsWritePage {
  writeForm: FormGroup;
  IsTimer: boolean = false;
  min: string;
  max: string;
  CellPhones: string;
  @ViewChild("popoverContent", { read: ElementRef }) content: ElementRef;
  constructor(private globalData: GlobalData,
              private smsService: SmsService,
              private nativeService: NativeService,
              private popoverCtrl: PopoverController,
              private viewCtrl: ViewController,
              private formBuilder: FormBuilder) {
    this.min = Utils.dateFormat(new Date(), 'yyyy-MM-ddTHH:mm:ss');
    this.max = Utils.dateFormat(new Date(), 'yyyy-MM-ddTHH:mm:ss', 7);

    this.writeForm = this.formBuilder.group({
      CellPhone: ['', [Validators.required]], // 第一个参数是默认值
      IsTimer: [false, []],
      SendDate: [new Date().getTime(), []],
      Content: ["", [Validators.maxLength(180)]],

    });
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {

  }
  sent(data){
    let data1 = {
      "CellPhone": this.CellPhones,
      "UserId": this.globalData.Uid,
      "IsTimer": data.IsTimer ? 1 : 0,
      "SendDate": data.IsTimer ? data.SendDate : new Date(),
      "Content": data.Content
    };

    this.smsService.write(data1).subscribe((resJson) => {
        this.nativeService.showToast(resJson.Data, 1000);
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  checkPeople(myEvent) {
    
    let popover = this.popoverCtrl.create(GetmobilePopoverPage,
        { addressee: this.writeForm.get("CellPhone").value, addresseeIds: this.CellPhones });
    popover.present({
        ev: myEvent
    });
    popover.onDidDismiss(data => {
        if (!!data) {
            console.log(data);
            // {addressee:this.addressee,addresseeIds:this.addresseeIds}
            this.writeForm.patchValue({"CellPhone": data.addressee});
            // setValue('CellPhone', data.addressee);
            this.CellPhones = data.addresseeIds;
        }

    });
}

}
