import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainingMaintenanceSetPage } from './training-maintenance-set';
import { TrainingMaintenanceService } from '../training-maintenance_service';

@NgModule({
  declarations: [
    TrainingMaintenanceSetPage,
  ],
  imports: [
    IonicPageModule.forChild(TrainingMaintenanceSetPage),
  ],
  exports: [TrainingMaintenanceSetPage],
  providers: [TrainingMaintenanceService]
})
export class TrainingMaintenanceSetPageModule {}
