import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaffFileMaintenanceSocialRelationship } from './staff-file-maintenance-social-relationship';
import { StaffFileMaintenanceService } from '../staff-file-maintenance-service';

@NgModule({
  declarations: [
    StaffFileMaintenanceSocialRelationship,
  ],
  imports: [
    IonicPageModule.forChild(StaffFileMaintenanceSocialRelationship),
  ],
  exports: [StaffFileMaintenanceSocialRelationship],
  providers: [StaffFileMaintenanceService]
})
export class StaffFileMaintenanceSocialRelationshipPageModule {}
