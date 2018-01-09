import { EmptyModule } from './../../../../components/empty/empty.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FileApplicationReviewPage } from './file-application-review';
import { FileApplicationService } from '../fileApplicationService';
import { TabSlideModule } from '../../../../components/tab-slide/tab-slide.module';
@NgModule({
  declarations: [
    FileApplicationReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(FileApplicationReviewPage),
    EmptyModule,
    TabSlideModule
  ],
  providers: [FileApplicationService]
})
export class FileApplicationReviewPageModule {}
