import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnnouncementDetailPage } from './announcement-detail';
import { AnnouncementService } from '../announcementService';

@NgModule({
  declarations: [
    AnnouncementDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AnnouncementDetailPage),
  ],
  exports: [AnnouncementDetailPage],
  providers: [AnnouncementService]
})
export class AnnouncementDetailPageModule {}
