import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Notice } from './notice';


@NgModule({
  declarations: [
    Notice
  ],
  imports: [
    IonicPageModule.forChild(Notice)
  ],
  exports: [
    Notice
  ]
})
export class NoticeModule {}
