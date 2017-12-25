import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaffFileMaintenanceWorkExperience } from './staff-file-maintenance-work-experience';
import { StaffFileMaintenanceWorkExperienceAddModule } 
from './staff-file-maintenance-work-experience-add/staff-file-maintenance-work-experience-add.module';

@NgModule({
  declarations: [
    StaffFileMaintenanceWorkExperience,
  ],
  imports: [
    IonicPageModule.forChild(StaffFileMaintenanceWorkExperience),
    StaffFileMaintenanceWorkExperienceAddModule
  ],
  exports: [StaffFileMaintenanceWorkExperience]
})
export class StaffFileMaintenanceWorkExperiencePageModule {}
