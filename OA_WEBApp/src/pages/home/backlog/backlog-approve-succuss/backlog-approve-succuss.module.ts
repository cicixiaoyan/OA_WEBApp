import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BacklogApproveSuccussPage } from './backlog-approve-succuss';
import { BacklogService } from '../backlogService';

@NgModule({
  declarations: [
    BacklogApproveSuccussPage,
  ],
  imports: [
    IonicPageModule.forChild(BacklogApproveSuccussPage),
  ],
  providers: [BacklogService]
})
export class BacklogApproveSuccussPageModule {}
