import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeetingSearchPage } from './meeting-search';
import { MeetingService } from '../meeting_service';
import { EmptyModule } from './../../../components/empty/empty.module';
import { TabSlideModule } from '../../../components/tab-slide/tab-slide.module';
import { GetdatediffPipeModule } from '../../../pipes/getdatediff/getdatediff.module';


@NgModule({
  declarations: [
    MeetingSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(MeetingSearchPage),
    EmptyModule,
    TabSlideModule,
    GetdatediffPipeModule
  ],
  exports: [
    MeetingSearchPage,
    
  ],
  providers: [MeetingService]
})
export class MeetingSearchPageModule {}
