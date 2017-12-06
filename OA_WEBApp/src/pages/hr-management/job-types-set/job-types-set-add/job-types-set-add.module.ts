import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobTypesSetAddPage } from './job-types-set-add';

@NgModule({
  declarations: [
    JobTypesSetAddPage,
  ],
  imports: [
    IonicPageModule.forChild(JobTypesSetAddPage),
  ],
  exports: [JobTypesSetAddPage]
})
export class JobTypesSetAddPageModule {}
