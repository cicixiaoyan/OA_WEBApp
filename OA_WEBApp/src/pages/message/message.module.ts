import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagePage } from './message';
import { MessageService } from './messageService';

@NgModule({
  declarations: [
    MessagePage,
  ],
  imports: [
    IonicPageModule.forChild(MessagePage),
  ],
  providers: [MessageService],
  exports: [
    MessagePage
  ]
})
export class MessagePageModule {}
