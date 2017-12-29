import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FileApplicationAddPage } from './file-application-add';
import { FileApplicationService } from '../../fileApplicationService';
import { DirectivesModule } from '../../../../../directives/directives.module';
@NgModule({
  declarations: [
    FileApplicationAddPage,
  ],
  imports: [
    IonicPageModule.forChild(FileApplicationAddPage),
    DirectivesModule
  ],
  providers: [FileApplicationService]
})
export class FileApplicationAddPageModule {}
