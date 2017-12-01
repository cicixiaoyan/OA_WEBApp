import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessageReadOutPage } from './message-read-out';
import { MessageService } from '../messageService';
@NgModule({
  declarations: [
    MessageReadOutPage,
  ],
  imports: [
    IonicPageModule.forChild(MessageReadOutPage),
  ],
  exports: [MessageReadOutPage],
  providers: [MessageService]
})
export class MessageReadOutPageModule {}
