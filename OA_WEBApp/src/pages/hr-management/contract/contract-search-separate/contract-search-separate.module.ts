import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContractSearchSeparatePage } from './contract-search-separate';

@NgModule({
  declarations: [
    ContractSearchSeparatePage,
  ],
  imports: [
    IonicPageModule.forChild(ContractSearchSeparatePage),
  ],
})
export class ContractSearchSeparatePageModule {}
