import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContractChoosePage } from './contract-choose';

@NgModule({
  declarations: [
    ContractChoosePage,
  ],
  imports: [
    IonicPageModule.forChild(ContractChoosePage),
  ],
})
export class ContractChoosePageModule {}
