import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mail } from './mail';

@NgModule({
  declarations: [
    Mail,
  ],
  imports: [
    IonicPageModule.forChild(Mail),
  ],
  exports: [
    Mail
  ]
})
export class MailModule {}
