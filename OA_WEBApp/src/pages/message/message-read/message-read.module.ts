import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessageReadPage } from './message-read';
import { MessageService } from '../messageService';
@NgModule({
  declarations: [
    MessageReadPage,
  ],
  imports: [
    IonicPageModule.forChild(MessageReadPage)
  ],
  exports: [
    MessageReadPage
  ],
  providers: [MessageService]
})
export class MessageReadPageModule {}
