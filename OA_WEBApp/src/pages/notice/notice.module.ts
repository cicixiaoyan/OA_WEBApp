import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Notice } from './notice';
import { NoticeDetail } from './notice-detail/notice-detail';


@NgModule({
  declarations: [
    Notice,
    NoticeDetail
  ],
  imports: [
    IonicPageModule.forChild(Notice),
    IonicPageModule.forChild(NoticeDetail)
  ],
  exports: [
    Notice,
    NoticeDetail
  ]
})
export class NoticeModule {}
