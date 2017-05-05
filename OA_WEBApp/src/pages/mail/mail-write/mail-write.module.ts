import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MailWrite,PopoverPage } from './mail-write';

@NgModule({
  declarations: [
    MailWrite,
    PopoverPage
  ],
  imports: [
    IonicPageModule.forChild(MailWrite),
    IonicPageModule.forChild(PopoverPage),
  ],
  exports: [
    MailWrite,
    PopoverPage
  ]
})
export class MailWriteModule {}
