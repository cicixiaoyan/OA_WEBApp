import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmsWritePage } from './sms-write';
import { SmsService } from '../smsService';
@NgModule({
  declarations: [
    SmsWritePage,
  ],
  imports: [
    IonicPageModule.forChild(SmsWritePage),
  ],
  exports: [SmsWritePage],
  providers: [SmsService]
})
export class SmsWritePageModule {}
