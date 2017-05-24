import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Backlog } from './backlog';
import { BacklogService } from "./backlogService";

@NgModule({
  declarations: [
    Backlog,
  ],
  imports: [
    IonicPageModule.forChild(Backlog),
  ],
  exports: [
    Backlog
  ],
  providers: [BacklogService]
})
export class BacklogModule {}
