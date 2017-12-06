import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobTypesSetPage } from './job-types-set';

@NgModule({
  declarations: [
    JobTypesSetPage,
  ],
  imports: [
    IonicPageModule.forChild(JobTypesSetPage),
  ],
  exports: [JobTypesSetPage]
})
export class JobTypesSetPageModule {}
