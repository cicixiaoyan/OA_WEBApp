import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Backlog } from './backlog';

@NgModule({
  declarations: [
    Backlog,
  ],
  imports: [
    IonicPageModule.forChild(Backlog),
  ],
  exports: [
    Backlog
  ]
})
export class BacklogModule {}
