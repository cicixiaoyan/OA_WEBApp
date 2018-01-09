import { EmptyModule } from './../../../../components/empty/empty.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContractListPage } from './contract-list';
import { ContractService } from '../contract-service';
@NgModule({
  declarations: [
    ContractListPage,
  ],
  imports: [
    IonicPageModule.forChild(ContractListPage),
    EmptyModule
  ],
  providers: [ContractService],
  exports: [ContractListPage]
})
export class ContractListPageModule {}
