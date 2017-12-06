import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainingMaintenanceSearch } from './training-maintenance-search';
@NgModule({
  declarations: [
    TrainingMaintenanceSearch
  ],
  imports: [
    IonicPageModule.forChild(TrainingMaintenanceSearch),
  ],
  exports: [TrainingMaintenanceSearch],
})
export class TrainingMaintenancePageModule {}
