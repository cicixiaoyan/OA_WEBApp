import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessageWritePage } from './message-write';
import { MessageService } from '../messageService';

@NgModule({
  declarations: [
    MessageWritePage,
  ],
  imports: [
    IonicPageModule.forChild(MessageWritePage),
  ],
  providers: [MessageService],
  exports: [
    MessageWritePage
  ]
})
export class MessageWritePageModule {}
