import { EmptyModule } from './../../components/empty/empty.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeetingPage } from './meeting';
import { MeetingService } from './meeting_service';

@NgModule({
  declarations: [
    MeetingPage,
  ],
  imports: [
    IonicPageModule.forChild(MeetingPage),
    EmptyModule
  ],
  exports: [
    MeetingPage
  ],
  providers: [MeetingService]

})
export class MeetingPageModule {}
