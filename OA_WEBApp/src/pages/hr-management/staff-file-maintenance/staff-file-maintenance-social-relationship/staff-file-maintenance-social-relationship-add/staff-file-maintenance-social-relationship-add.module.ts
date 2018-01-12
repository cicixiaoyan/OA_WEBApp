import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaffFileMaintenanceSocialRelationshipAddPage } from './staff-file-maintenance-social-relationship-add';
import { StaffFileMaintenanceService } from '../../staff-file-maintenance-service';

@NgModule({
  declarations: [
    StaffFileMaintenanceSocialRelationshipAddPage,
  ],
  imports: [
    IonicPageModule.forChild(StaffFileMaintenanceSocialRelationshipAddPage),
  ],
  providers: [StaffFileMaintenanceService]
})
export class StaffFileMaintenanceSocialRelationshipAddPageModule {}
