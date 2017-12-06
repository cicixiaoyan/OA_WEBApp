import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaffFileMaintenance } from './staff-file-maintenance';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    StaffFileMaintenance,
  ],
  imports: [
    IonicPageModule.forChild(StaffFileMaintenance),
    ComponentsModule
  ],
  exports: [StaffFileMaintenance]
})
export class StaffFileMaintenancePageModule {}
