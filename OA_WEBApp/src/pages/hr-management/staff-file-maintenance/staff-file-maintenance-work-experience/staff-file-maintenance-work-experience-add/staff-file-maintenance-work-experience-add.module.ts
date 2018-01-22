import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaffFileMaintenanceWorkExperienceAdd } from './staff-file-maintenance-work-experience-add';
import { StaffFileMaintenanceService } from '../../staff-file-maintenance-service';

@NgModule({
  declarations: [
    StaffFileMaintenanceWorkExperienceAdd,
  ],
  imports: [
    IonicPageModule.forChild(StaffFileMaintenanceWorkExperienceAdd),
  ],
  exports: [
    StaffFileMaintenanceWorkExperienceAdd
  ],
  providers: [StaffFileMaintenanceService]
})
export class StaffFileMaintenanceWorkExperienceAddModule {}
