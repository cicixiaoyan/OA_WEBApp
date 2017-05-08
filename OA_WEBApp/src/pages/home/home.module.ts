import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Home } from './home';

import { BacklogModule } from './backlog/backlog.module';
import { BacklogDetailModule } from './backlog/backlog-detail/backlog-detail.module';
import { ContactsModule } from './contacts/contacts.module';
import { ContactsDetailModule } from './contacts/contacts-detail/contacts-detail.module';
import { NewworkModule } from './newwork/newwork.module';
import { NewworkDetailModule } from './newwork/newwork-detail/newwork-detail.module';


@NgModule({
  declarations: [
    Home,
  ],
  imports: [
    IonicPageModule.forChild(Home),
    BacklogModule,
    BacklogDetailModule,
    ContactsModule,
    ContactsDetailModule,
    NewworkModule,
    NewworkDetailModule
  ],
  exports: [
    Home
  ]
})
export class HomeModule {}
