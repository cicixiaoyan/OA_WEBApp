import { EmptyModule } from './../../../../components/empty/empty.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContractMaintenancePage } from './contract-maintenance';
import { ContractService } from '../contract-service';
@NgModule({
  declarations: [
    ContractMaintenancePage,
  ],
  imports: [
    IonicPageModule.forChild(ContractMaintenancePage),
    EmptyModule
  ],
  providers: [ContractService],
  exports: [ContractMaintenancePage]
})
export class ContractMaintenancePageModule {}
