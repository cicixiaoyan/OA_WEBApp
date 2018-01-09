import { EmptyModule } from './../../../components/empty/empty.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobTypesSetPage } from './job-types-set';
@NgModule({
  declarations: [
    JobTypesSetPage,
  ],
  imports: [
    IonicPageModule.forChild(JobTypesSetPage),
    EmptyModule
  ],
  exports: [JobTypesSetPage]
})
export class JobTypesSetPageModule {}
