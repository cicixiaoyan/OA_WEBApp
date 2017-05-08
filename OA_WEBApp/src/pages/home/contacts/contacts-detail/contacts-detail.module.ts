import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactsDetail } from './contacts-detail';

@NgModule({
  declarations: [
    ContactsDetail,
  ],
  imports: [
    IonicPageModule.forChild(ContactsDetail),
  ],
  exports: [
    ContactsDetail
  ]
})
export class ContactsDetailModule {}
