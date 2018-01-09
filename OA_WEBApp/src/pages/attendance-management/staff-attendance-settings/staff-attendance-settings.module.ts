import { EmptyModule } from './../../../components/empty/empty.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaffAttendanceSettingsPage } from './staff-attendance-settings';
import { StaffAttendanceSettingsService } from './staff-attendance-settings-service';
@NgModule({
  declarations: [
    StaffAttendanceSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(StaffAttendanceSettingsPage),
    EmptyModule
  ],
  providers: [StaffAttendanceSettingsService]
})
export class StaffAttendanceSettingsPageModule {}
