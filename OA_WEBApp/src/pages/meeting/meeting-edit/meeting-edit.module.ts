import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeetingEditPage } from './meeting-edit';
import { MeetingService } from '../meeting_service';
@NgModule({
  declarations: [
    MeetingEditPage,
  ],
  imports: [
    IonicPageModule.forChild(MeetingEditPage),
  ],
  providers: [MeetingService],
  exports: [MeetingEditPage]
})
export class MeetingEditPageModule {}
