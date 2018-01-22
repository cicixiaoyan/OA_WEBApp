import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeetingWritePage } from './meeting-write';
import { MeetingService } from '../meeting_service';
import { FileChooseModule } from "../../../components/file-choose/file-choose.module";

@NgModule({
  declarations: [
    MeetingWritePage,
  ],
  imports: [
    IonicPageModule.forChild(MeetingWritePage),
    FileChooseModule
  ],
  exports: [MeetingWritePage],
  providers: [MeetingService] 
})
export class MeetingWritePageModule {}
