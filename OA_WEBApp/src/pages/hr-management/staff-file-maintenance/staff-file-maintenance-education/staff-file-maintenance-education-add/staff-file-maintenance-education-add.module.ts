import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaffFileMaintenanceEducationAddPage } from './staff-file-maintenance-education-add';
import { StaffFileMaintenanceService } from '../../staff-file-maintenance-service';

@NgModule({
  declarations: [
    StaffFileMaintenanceEducationAddPage,
  ],
  imports: [
    IonicPageModule.forChild(StaffFileMaintenanceEducationAddPage),
  ],
  providers: [StaffFileMaintenanceService]
})
export class StaffFileMaintenanceEducationAddPageModule {}
