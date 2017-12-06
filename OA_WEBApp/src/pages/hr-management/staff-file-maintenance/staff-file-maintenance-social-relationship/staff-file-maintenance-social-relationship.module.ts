import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaffFileMaintenanceSocialRelationship } from './staff-file-maintenance-social-relationship';

@NgModule({
  declarations: [
    StaffFileMaintenanceSocialRelationship,
  ],
  imports: [
    IonicPageModule.forChild(StaffFileMaintenanceSocialRelationship),
  ],
  exports: [StaffFileMaintenanceSocialRelationship]
})
export class StaffFileMaintenanceSocialRelationshipPageModule {}
