import { EmptyModule } from './../../../components/empty/empty.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainingMaintenancePage } from './training-maintenance';
import { TrainingMaintenanceService } from './training-maintenance_service';
@NgModule({
  declarations: [
    TrainingMaintenancePage,
  ],
  imports: [
    IonicPageModule.forChild(TrainingMaintenancePage),
    EmptyModule
  ],
  exports: [TrainingMaintenancePage],
  providers: [TrainingMaintenanceService]
})
export class TrainingMaintenancePageModule {}
