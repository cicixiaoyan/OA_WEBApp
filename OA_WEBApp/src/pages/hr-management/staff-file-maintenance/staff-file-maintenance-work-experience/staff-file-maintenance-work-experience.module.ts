import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaffFileMaintenanceWorkExperience } from './staff-file-maintenance-work-experience';

@NgModule({
  declarations: [
    StaffFileMaintenanceWorkExperience,
  ],
  imports: [
    IonicPageModule.forChild(StaffFileMaintenanceWorkExperience),
  ],
  exports: [StaffFileMaintenanceWorkExperience]
})
export class StaffFileMaintenanceWorkExperiencePageModule {}
