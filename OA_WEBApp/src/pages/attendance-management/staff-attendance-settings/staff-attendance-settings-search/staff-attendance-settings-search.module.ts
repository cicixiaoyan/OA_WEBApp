import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaffAttendanceSettingsSearchPage } from './staff-attendance-settings-search';

@NgModule({
  declarations: [
    StaffAttendanceSettingsSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(StaffAttendanceSettingsSearchPage),
  ],
})
export class StaffAttendanceSettingsSearchPageModule {}
