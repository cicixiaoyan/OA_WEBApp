import { EmptyModule } from './../../../components/empty/empty.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaffFileMaintenance } from './staff-file-maintenance';
import { StaffFileMaintenanceService } from './staff-file-maintenance-service';

@NgModule({
  declarations: [
    StaffFileMaintenance,
  ],
  imports: [
    IonicPageModule.forChild(StaffFileMaintenance),
    EmptyModule
  ],
  exports: [StaffFileMaintenance],
  providers: [StaffFileMaintenanceService]
})
export class StaffFileMaintenancePageModule {}
