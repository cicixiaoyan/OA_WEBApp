import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaffFileMaintenanceWorkExperienceAdd } from './staff-file-maintenance-work-experience-add';

@NgModule({
  declarations: [
    StaffFileMaintenanceWorkExperienceAdd,
  ],
  imports: [
    IonicPageModule.forChild(StaffFileMaintenanceWorkExperienceAdd),
  ],
  exports: [
    StaffFileMaintenanceWorkExperienceAdd
  ]
})
export class StaffFileMaintenanceWorkExperienceAddModule {}
