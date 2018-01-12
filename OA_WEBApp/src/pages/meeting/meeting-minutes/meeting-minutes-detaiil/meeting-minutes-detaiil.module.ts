import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeetingMinutesDetaiilPage } from './meeting-minutes-detaiil';
import { MeetingService } from '../../meeting_service';

@NgModule({
  declarations: [
    MeetingMinutesDetaiilPage,
  ],
  imports: [
    IonicPageModule.forChild(MeetingMinutesDetaiilPage),
  ],
  providers: [MeetingService]
})
export class MeetingMinutesDetaiilPageModule {}
