import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { GlobalData } from '../../../providers/GlobalData';
import { SmsService } from '../smsService';
import { NativeService } from '../../../providers/NativeService';

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
  CellPhone: number = 12;
  IsTimer: boolean = false;
  SendDate = new Date().getDate();
  Content: string = "";

  constructor(private globalData: GlobalData,
              private smsService: SmsService,
              private nativeService: NativeService) {
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {

  }
  send(){
    let data = {
      "CellPhone": this.CellPhone,
      "IsTimer": this.IsTimer,
      "SendDate": this.SendDate,
      "Content": this.Content,
      "UserId": this.globalData.Uid
    };
    this.smsService.write(data).subscribe((resJson) => {
        this.nativeService.showToast(resJson.Data, 1000);
    });
  }

}
