import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HolidayGroupSettingsViewPage } from './holiday-group-settings-view';
import { HolidayGroupSettingsService } from '../holiday-group-settings-service';
import { DirectivesModule } from '../../../../directives/directives.module';
@NgModule({
  declarations: [
    HolidayGroupSettingsViewPage,
  ],
  imports: [
    IonicPageModule.forChild(HolidayGroupSettingsViewPage),
    DirectivesModule
  ],
  providers: [HolidayGroupSettingsService]
})
export class HolidayGroupSettingsViewPageModule {}
