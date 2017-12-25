import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContractMaintenancePage } from './contract-maintenance';
import { ContractService } from '../contract-service';
import { ComponentsModule } from '../../../../components/components.module';
@NgModule({
  declarations: [
    ContractMaintenancePage,
  ],
  imports: [
    IonicPageModule.forChild(ContractMaintenancePage),
    ComponentsModule
  ],
  providers: [ContractService],
  exports: [ContractMaintenancePage]
})
export class ContractMaintenancePageModule {}
