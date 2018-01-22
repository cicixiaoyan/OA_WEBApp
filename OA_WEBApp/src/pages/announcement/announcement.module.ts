import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnnouncementPage } from './announcement';
import { AnnouncementService } from './announcementService';
import { TabSlideModule } from '../../components/tab-slide/tab-slide.module';

@NgModule({
  declarations: [
    AnnouncementPage,
  ],
  imports: [
    IonicPageModule.forChild(AnnouncementPage),
    TabSlideModule
  ],
  providers: [AnnouncementService]
})
export class AnnouncementPageModule {}
