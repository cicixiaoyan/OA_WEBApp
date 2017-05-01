import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountPasswordedit } from './account-passwordedit';

@NgModule({
  declarations: [
    AccountPasswordedit,
  ],
  imports: [
    IonicPageModule.forChild(AccountPasswordedit),
  ],
  exports: [
    AccountPasswordedit
  ]
})
export class AccountPasswordeditModule {}
