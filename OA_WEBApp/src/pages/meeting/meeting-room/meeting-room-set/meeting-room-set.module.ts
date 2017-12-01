import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeetingRoomSetPage } from './meeting-room-set';
import { MeetingService } from '../../meeting_service';
@NgModule({
  declarations: [
    MeetingRoomSetPage,
  ],
  imports: [
    IonicPageModule.forChild(MeetingRoomSetPage),
  ],
  exports: [MeetingRoomSetPage],
  providers: [MeetingService]
})
export class MeetingRoomSetPageModule {}
