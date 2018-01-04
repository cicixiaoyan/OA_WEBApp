import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeetingSearchPopoverPage } from './meeting-search-popover';
import { MeetingService } from '../../meeting_service';

@NgModule({
  declarations: [
    MeetingSearchPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(MeetingSearchPopoverPage),
  ],
  providers: [MeetingService]
})
export class MeetingSearchPopoverPageModule {}
