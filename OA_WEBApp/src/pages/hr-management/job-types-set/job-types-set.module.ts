import { EmptyModule } from './../../../components/empty/empty.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobTypesSetPage } from './job-types-set';
import { JobTypeSetService } from './job-types-set-service';
@NgModule({
  declarations: [
    JobTypesSetPage,
  ],
  imports: [
    IonicPageModule.forChild(JobTypesSetPage),
    EmptyModule
  ],
  providers: [JobTypeSetService],
  exports: [JobTypesSetPage]
})
export class JobTypesSetPageModule {}
