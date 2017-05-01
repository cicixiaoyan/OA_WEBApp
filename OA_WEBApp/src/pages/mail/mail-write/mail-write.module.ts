import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MailWrite } from './mail-write';

@NgModule({
  declarations: [
    MailWrite,
  ],
  imports: [
    IonicPageModule.forChild(MailWrite),
  ],
  exports: [
    MailWrite
  ]
})
export class MailWriteModule {}
