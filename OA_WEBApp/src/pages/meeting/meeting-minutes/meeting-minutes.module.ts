import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeetingMinutesPage } from './meeting-minutes';
import { MeetingService } from '../meeting_service';
import { GetdatediffPipeModule } from '../../../pipes/getdatediff/getdatediff.module';
import { EmptyModule } from '../../../components/empty/empty.module';
@NgModule({
  declarations: [
    MeetingMinutesPage,
  ],
  imports: [
    IonicPageModule.forChild(MeetingMinutesPage),
    GetdatediffPipeModule,
    EmptyModule
  ],
  exports: [MeetingMinutesPage],
  providers: [MeetingService]

})
export class MeetingMinutesPageModule {}
