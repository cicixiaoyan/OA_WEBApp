import { EmptyModule } from './../../components/empty/empty.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeetingPage } from './meeting';
import { MeetingService } from './meeting_service';
import { TabSlideModule } from './../../components/tab-slide/tab-slide.module';
import { GetdatediffPipeModule } from '../../pipes/getdatediff/getdatediff.module';

@NgModule({
  declarations: [
    MeetingPage,
  ],
  imports: [
    IonicPageModule.forChild(MeetingPage),
    EmptyModule,
    TabSlideModule,
    GetdatediffPipeModule
  ],
  exports: [
    MeetingPage
  ],
  providers: [MeetingService]

})
export class MeetingPageModule {}
