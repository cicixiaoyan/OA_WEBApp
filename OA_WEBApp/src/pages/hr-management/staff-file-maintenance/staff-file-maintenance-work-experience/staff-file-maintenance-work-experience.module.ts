import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaffFileMaintenanceWorkExperience } from './staff-file-maintenance-work-experience';
import { StaffFileMaintenanceWorkExperienceAddModule } 
from './staff-file-maintenance-work-experience-add/staff-file-maintenance-work-experience-add.module';
import { StaffFileMaintenanceService } from '../staff-file-maintenance-service';

@NgModule({
  declarations: [
    StaffFileMaintenanceWorkExperience,
  ],
  imports: [
    IonicPageModule.forChild(StaffFileMaintenanceWorkExperience),
    StaffFileMaintenanceWorkExperienceAddModule
  ],
  exports: [StaffFileMaintenanceWorkExperience],
  providers: [StaffFileMaintenanceService]
})
export class StaffFileMaintenanceWorkExperiencePageModule {}
