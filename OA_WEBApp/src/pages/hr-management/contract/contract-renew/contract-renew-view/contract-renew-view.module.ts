import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContractRenewViewPage } from './contract-renew-view';
import { ContractService } from '../../contract-service';
import { PipesModule } from '../../../../../pipes/pipes.module';

@NgModule({
  declarations: [
    ContractRenewViewPage,
  ],
  imports: [
    IonicPageModule.forChild(ContractRenewViewPage),
    PipesModule
  ],
  providers: [ContractService],
  exports: [ContractRenewViewPage]
})
export class ContractRenewViewPageModule {}
