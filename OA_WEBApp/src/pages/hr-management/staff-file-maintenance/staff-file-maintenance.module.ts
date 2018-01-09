import { EmptyModule } from './../../../components/empty/empty.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaffFileMaintenance } from './staff-file-maintenance';

@NgModule({
  declarations: [
    StaffFileMaintenance,
  ],
  imports: [
    IonicPageModule.forChild(StaffFileMaintenance),
    EmptyModule
  ],
  exports: [StaffFileMaintenance]
})
export class StaffFileMaintenancePageModule {}
