import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnnouncementPage } from './announcement';
import { AnnouncementService } from './announcementService';

@NgModule({
  declarations: [
    AnnouncementPage,
  ],
  imports: [
    IonicPageModule.forChild(AnnouncementPage),
  ],
  providers: [AnnouncementService]
})
export class AnnouncementPageModule {}
