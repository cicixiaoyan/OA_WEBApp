import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaffFileMaintenanceEducation } from './staff-file-maintenance-education';

@NgModule({
  declarations: [
    StaffFileMaintenanceEducation,
  ],
  imports: [
    IonicPageModule.forChild(StaffFileMaintenanceEducation),
  ],
  exports: [StaffFileMaintenanceEducation]
})
export class StaffFileMaintenanceEducationPageModule {}
