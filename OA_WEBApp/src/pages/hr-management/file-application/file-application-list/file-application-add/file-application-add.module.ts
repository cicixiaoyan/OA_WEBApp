import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FileApplicationAddPage } from './file-application-add';
import { FileApplicationService } from '../../fileApplicationService';

@NgModule({
  declarations: [
    FileApplicationAddPage,
  ],
  imports: [
    IonicPageModule.forChild(FileApplicationAddPage),
  ],
  providers: [FileApplicationService]
})
export class FileApplicationAddPageModule {}
