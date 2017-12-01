import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmsReadPage } from './sms-read';
import { SmsService } from '../smsService';
@NgModule({
  declarations: [
    SmsReadPage,
  ],
  imports: [
    IonicPageModule.forChild(SmsReadPage),
  ],
  exports: [
    SmsReadPage
  ],
  providers: [SmsService]
})
export class SmsReadPageModule {}
