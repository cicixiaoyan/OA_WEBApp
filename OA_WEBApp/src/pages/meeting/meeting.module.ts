import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeetingPage } from './meeting';
import { MeetingService } from './meeting_service';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MeetingPage,
  ],
  imports: [
    IonicPageModule.forChild(MeetingPage),
    ComponentsModule
  ],
  exports: [
    MeetingPage
  ],
  providers: [MeetingService]

})
export class MeetingPageModule {}
