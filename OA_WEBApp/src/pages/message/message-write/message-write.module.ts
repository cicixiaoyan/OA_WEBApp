import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessageWritePage } from './message-write';

@NgModule({
  declarations: [
    MessageWritePage,
  ],
  imports: [
    IonicPageModule.forChild(MessageWritePage),
  ],
})
export class MessageWritePageModule {}
