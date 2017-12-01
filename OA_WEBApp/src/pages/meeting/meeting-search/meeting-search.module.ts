import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeetingSearchPage } from './meeting-search';
import { MeetingService } from '../meeting_service';
@NgModule({
  declarations: [
    MeetingSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(MeetingSearchPage),
  ],
  exports: [
    MeetingSearchPage
  ],
  providers: [MeetingService]
})
export class MeetingSearchPageModule {}
