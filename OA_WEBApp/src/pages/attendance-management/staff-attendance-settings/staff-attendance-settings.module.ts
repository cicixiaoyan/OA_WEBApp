import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaffAttendanceSettingsPage } from './staff-attendance-settings';
import { ComponentsModule } from '../../../components/components.module';
import { StaffAttendanceSettingsService } from './staff-attendance-settings-service';
@NgModule({
  declarations: [
    StaffAttendanceSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(StaffAttendanceSettingsPage),
    ComponentsModule
  ],
  providers: [StaffAttendanceSettingsService]
})
export class StaffAttendanceSettingsPageModule {}
