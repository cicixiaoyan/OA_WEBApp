import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FileApplicationReviewViewPage } from './file-application-review-view';
import { FileApplicationService } from '../../fileApplicationService';
@NgModule({
  declarations: [
    FileApplicationReviewViewPage,
  ],
  imports: [
    IonicPageModule.forChild(FileApplicationReviewViewPage),
  ],
  providers: [FileApplicationService]
})
export class FileApplicationReviewViewPageModule {}
