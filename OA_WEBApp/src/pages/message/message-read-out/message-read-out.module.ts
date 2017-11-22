import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessageReadOutPage } from './message-read-out';

@NgModule({
  declarations: [
    MessageReadOutPage,
  ],
  imports: [
    IonicPageModule.forChild(MessageReadOutPage),
  ],
})
export class MessageReadOutPageModule {}
