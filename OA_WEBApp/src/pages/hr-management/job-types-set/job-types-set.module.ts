import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobTypesSetPage } from './job-types-set';
import { ComponentsModule } from '../../../components/components.module';
@NgModule({
  declarations: [
    JobTypesSetPage,
  ],
  imports: [
    IonicPageModule.forChild(JobTypesSetPage),
    ComponentsModule
  ],
  exports: [JobTypesSetPage]
})
export class JobTypesSetPageModule {}
