import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContractRenewViewPage } from './contract-renew-view';
import { ContractService } from '../../contract-service';

@NgModule({
  declarations: [
    ContractRenewViewPage,
  ],
  imports: [
    IonicPageModule.forChild(ContractRenewViewPage),
  ],
  providers: [ContractService],
  exports: [ContractRenewViewPage]
})
export class ContractRenewViewPageModule {}
