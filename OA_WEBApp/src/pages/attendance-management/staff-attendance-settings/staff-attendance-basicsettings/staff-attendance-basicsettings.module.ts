import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaffAttendanceBasicsettingsPage } from './staff-attendance-basicsettings';
import { StaffAttendanceSettingsService } from '../staff-attendance-settings-service';
@NgModule({
  declarations: [
    StaffAttendanceBasicsettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(StaffAttendanceBasicsettingsPage),
  ],
  providers: [StaffAttendanceSettingsService]
})
export class StaffAttendanceBasicsettingsPageModule {}
