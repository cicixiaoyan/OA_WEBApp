import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountEdit } from './account-edit';

@NgModule({
  declarations: [
    AccountEdit,
  ],
  imports: [
    IonicPageModule.forChild(AccountEdit),
  ],
  exports: [
    AccountEdit
  ]
})
export class AccountEditModule {}
