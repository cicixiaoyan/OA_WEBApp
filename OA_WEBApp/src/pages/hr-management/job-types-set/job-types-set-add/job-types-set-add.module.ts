import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobTypesSetAddPage } from './job-types-set-add';
import { JobTypeSetService } from '../job-types-set-service';

@NgModule({
  declarations: [
    JobTypesSetAddPage,
  ],
  imports: [
    IonicPageModule.forChild(JobTypesSetAddPage),
  ],
  providers: [JobTypeSetService],
  exports: [JobTypesSetAddPage]
})
export class JobTypesSetAddPageModule {}
