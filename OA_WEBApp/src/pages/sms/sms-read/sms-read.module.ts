import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmsReadPage } from './sms-read';

@NgModule({
  declarations: [
    SmsReadPage,
  ],
  imports: [
    IonicPageModule.forChild(SmsReadPage),
  ],
  exports: [
    SmsReadPage
  ]
})
export class SmsReadPageModule {}
