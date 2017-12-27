import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContractListPage } from './contract-list';
import { ContractService } from '../contract-service';
import { ComponentsModule } from '../../../../components/components.module';
@NgModule({
  declarations: [
    ContractListPage,
  ],
  imports: [
    IonicPageModule.forChild(ContractListPage),
    ComponentsModule
  ],
  providers: [ContractService],
  exports: [ContractListPage]
})
export class ContractListPageModule {}
