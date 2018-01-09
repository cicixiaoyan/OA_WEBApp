import { EmptyModule } from './../../../components/empty/empty.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HolidayGroupSettingsPage } from './holiday-group-settings';
import { HolidayGroupSettingsService } from './holiday-group-settings-service';
@NgModule({
  declarations: [
    HolidayGroupSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(HolidayGroupSettingsPage),
    EmptyModule
  ],
  providers: [HolidayGroupSettingsService]
})
export class HolidayGroupSettingsPageModule {}
