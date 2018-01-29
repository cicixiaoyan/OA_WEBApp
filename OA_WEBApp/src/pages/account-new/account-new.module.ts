import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountNewPage } from './account-new';

@NgModule({
  declarations: [
    AccountNewPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountNewPage),
  ],
})
export class AccountNewPageModule {}
