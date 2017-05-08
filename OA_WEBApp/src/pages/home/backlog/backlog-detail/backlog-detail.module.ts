import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BacklogDetail } from './backlog-detail';

@NgModule({
  declarations: [
    BacklogDetail,
  ],
  imports: [
    IonicPageModule.forChild(BacklogDetail),
  ],
  exports: [
    BacklogDetail
  ]
})
export class BacklogDetailModule {}
