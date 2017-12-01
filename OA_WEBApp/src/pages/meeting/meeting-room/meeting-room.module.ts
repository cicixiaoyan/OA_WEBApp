import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeetingRoomPage } from './meeting-room';
import { MeetingService } from '../meeting_service';
@NgModule({
  declarations: [
    MeetingRoomPage,
  ],
  imports: [
    IonicPageModule.forChild(MeetingRoomPage),
  ],
  exports: [MeetingRoomPage],
  providers: [MeetingService]
})
export class MeetingRoomPageModule {}
