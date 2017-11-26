import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmsWritePage } from './sms-write';

@NgModule({
  declarations: [
    SmsWritePage,
  ],
  imports: [
    IonicPageModule.forChild(SmsWritePage),
  ],
  exports: [SmsWritePage]
})
export class SmsWritePageModule {}
