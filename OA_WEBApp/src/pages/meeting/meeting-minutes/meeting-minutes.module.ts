import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeetingMinutesPage } from './meeting-minutes';
import { MeetingService } from '../meeting_service';
@NgModule({
  declarations: [
    MeetingMinutesPage,
  ],
  imports: [
    IonicPageModule.forChild(MeetingMinutesPage),
  ],
  exports: [MeetingMinutesPage],
  providers: [MeetingService]

})
export class MeetingMinutesPageModule {}
