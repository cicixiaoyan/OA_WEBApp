import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BacklogApproveFailPage } from './backlog-approve-fail';
import { BacklogService } from '../backlogService';

@NgModule({
  declarations: [
    BacklogApproveFailPage,
  ],
  imports: [
    IonicPageModule.forChild(BacklogApproveFailPage),
  ],
  providers: [BacklogService]
})
export class BacklogApproveFailPageModule {}
