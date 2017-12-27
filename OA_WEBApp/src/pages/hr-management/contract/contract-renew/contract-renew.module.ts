import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContractRenewPage } from './contract-renew';
import { ContractService } from '../contract-service';
import { ComponentsModule } from '../../../../components/components.module';
@NgModule({
  declarations: [
    ContractRenewPage,
  ],
  imports: [
    IonicPageModule.forChild(ContractRenewPage),
    ComponentsModule
  ],
  providers: [ContractService],
  exports: [ContractRenewPage]
})
export class ContractRenewPageModule {}
