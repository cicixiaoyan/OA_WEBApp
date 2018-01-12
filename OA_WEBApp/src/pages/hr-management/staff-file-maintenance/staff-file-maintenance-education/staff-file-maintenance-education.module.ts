import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaffFileMaintenanceEducation } from './staff-file-maintenance-education';
import { StaffFileMaintenanceService } from '../staff-file-maintenance-service';

@NgModule({
  declarations: [
    StaffFileMaintenanceEducation,
  ],
  imports: [
    IonicPageModule.forChild(StaffFileMaintenanceEducation),
  ],
  exports: [StaffFileMaintenanceEducation],
  providers: [StaffFileMaintenanceService]
})
export class StaffFileMaintenanceEducationPageModule {}
