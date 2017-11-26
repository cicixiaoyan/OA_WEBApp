import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmsPage } from './sms';
import { SmsService } from './smsService';
@NgModule({
  declarations: [
    SmsPage,
  ],
  imports: [
    IonicPageModule.forChild(SmsPage),
  ],
  exports: [SmsPage],
  providers: [SmsService]
})
export class SmsPageModule {}
