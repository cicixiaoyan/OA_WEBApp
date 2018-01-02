import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HolidayGroupSettingsPage } from './holiday-group-settings';
import { HolidayGroupSettingsService } from './holiday-group-settings-service';
import { ComponentsModule } from '../../../components/components.module';
@NgModule({
  declarations: [
    HolidayGroupSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(HolidayGroupSettingsPage),
    ComponentsModule
  ],
  providers: [HolidayGroupSettingsService]
})
export class HolidayGroupSettingsPageModule {}
