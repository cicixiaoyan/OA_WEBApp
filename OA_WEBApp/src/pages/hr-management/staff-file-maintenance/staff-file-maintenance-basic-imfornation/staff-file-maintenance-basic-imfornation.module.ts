import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaffFileMaintenanceBasicImfornation } from './staff-file-maintenance-basic-imfornation';

@NgModule({
  declarations: [
    StaffFileMaintenanceBasicImfornation,
  ],
  imports: [
    IonicPageModule.forChild(StaffFileMaintenanceBasicImfornation),
  ],
  exports: [StaffFileMaintenanceBasicImfornation]
})
export class StaffFileMaintenanceBasicImfornationPageModule {}
