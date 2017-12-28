import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FileApplicationReviewPage } from './file-application-review';
import { FileApplicationService } from '../fileApplicationService';
import { ComponentsModule } from '../../../../components/components.module';
import { TabSlideModule } from '../../../../components/tab-slide/tab-slide.module';
@NgModule({
  declarations: [
    FileApplicationReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(FileApplicationReviewPage),
    ComponentsModule,
    TabSlideModule
  ],
  providers: [FileApplicationService]
})
export class FileApplicationReviewPageModule {}
