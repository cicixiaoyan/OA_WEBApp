import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessageReadPage } from './message-read';

@NgModule({
  declarations: [
    MessageReadPage,
  ],
  imports: [
    IonicPageModule.forChild(MessageReadPage),
  ],
  exports: [
    MessageReadPage
  ]
})
export class MessageReadPageModule {}
