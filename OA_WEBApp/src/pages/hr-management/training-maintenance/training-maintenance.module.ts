import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainingMaintenancePage } from './training-maintenance';
import { TrainingMaintenanceService } from './training-maintenance_service';
import { ComponentsModule } from '../../../components/components.module';
@NgModule({
  declarations: [
    TrainingMaintenancePage,
  ],
  imports: [
    IonicPageModule.forChild(TrainingMaintenancePage),
    ComponentsModule
  ],
  exports: [TrainingMaintenancePage],
  providers: [TrainingMaintenanceService]
})
export class TrainingMaintenancePageModule {}
