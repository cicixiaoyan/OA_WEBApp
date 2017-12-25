import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContractSettingPage } from './contract-setting';
import { ContractService } from '../contract-service';
@NgModule({
  declarations: [
    ContractSettingPage,
  ],
  imports: [
    IonicPageModule.forChild(ContractSettingPage),
  ],
  providers: [ContractService],

})
export class ContractSettingPageModule {}
