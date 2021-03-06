import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagePage } from './message';
import { MessageService } from './messageService';
import { EmptyModule } from './../../components/empty/empty.module';
import { TabSlideModule } from '../../components/tab-slide/tab-slide.module';

@NgModule({
  declarations: [
    MessagePage,
  ],
  imports: [
    IonicPageModule.forChild(MessagePage),
    EmptyModule,
    TabSlideModule
  ],
  providers: [MessageService],
  exports: [
    MessagePage
  ]
})
export class MessagePageModule {}
