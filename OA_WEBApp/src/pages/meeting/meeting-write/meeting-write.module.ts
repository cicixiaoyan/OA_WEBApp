import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeetingWritePage } from './meeting-write';

@NgModule({
  declarations: [
    MeetingWritePage,
  ],
  imports: [
    IonicPageModule.forChild(MeetingWritePage),
  ],
  exports: [MeetingWritePage]
})
export class MeetingWritePageModule {}
