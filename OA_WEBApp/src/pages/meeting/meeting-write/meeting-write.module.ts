import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeetingWritePage } from './meeting-write';
import { MeetingService } from '../meeting_service';

@NgModule({
  declarations: [
    MeetingWritePage,
  ],
  imports: [
    IonicPageModule.forChild(MeetingWritePage),
  ],
  exports: [MeetingWritePage],
  providers: [MeetingService] 
})
export class MeetingWritePageModule {}
