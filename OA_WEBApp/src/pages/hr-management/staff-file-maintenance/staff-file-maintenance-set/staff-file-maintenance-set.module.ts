import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaffFileMaintenanceSet } from './staff-file-maintenance-set';

@NgModule({
  declarations: [
    StaffFileMaintenanceSet,
  ],
  imports: [
    IonicPageModule.forChild(StaffFileMaintenanceSet),
  ],
  exports: [StaffFileMaintenanceSet]
})
export class StaffFileMaintenanceSetPageModule {}
