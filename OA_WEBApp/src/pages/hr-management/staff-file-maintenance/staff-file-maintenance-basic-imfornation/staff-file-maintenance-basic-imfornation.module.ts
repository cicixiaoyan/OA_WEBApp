import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaffFileMaintenanceBasicImfornation } from './staff-file-maintenance-basic-imfornation';
import { StaffFileMaintenanceService } from '../staff-file-maintenance-service';

@NgModule({
  declarations: [
    StaffFileMaintenanceBasicImfornation,
  ],
  imports: [
    IonicPageModule.forChild(StaffFileMaintenanceBasicImfornation),
  ],
  exports: [StaffFileMaintenanceBasicImfornation],
  providers: [StaffFileMaintenanceService]
})
export class StaffFileMaintenanceBasicImfornationPageModule {}
