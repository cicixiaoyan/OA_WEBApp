import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactsPopoverPage } from './contacts-popover';

@NgModule({
  declarations: [
    ContactsPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactsPopoverPage),
  ],
  exports: [ContactsPopoverPage]
})
export class ContactsPopoverPageModule {}
