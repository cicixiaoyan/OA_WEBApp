import { EmptyModule } from './../../../../components/empty/empty.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContractRenewPage } from './contract-renew';
import { ContractService } from '../contract-service';
@NgModule({
  declarations: [
    ContractRenewPage,
  ],
  imports: [
    IonicPageModule.forChild(ContractRenewPage),
    EmptyModule
  ],
  providers: [ContractService],
  exports: [ContractRenewPage]
})
export class ContractRenewPageModule {}
