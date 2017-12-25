import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContractSearchPage } from './contract-search';
import { ContractService } from '../contract-service';
@NgModule({
  declarations: [
    ContractSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(ContractSearchPage),
  ],
  providers: [ContractService]
})
export class ContractSearchPageModule {}
