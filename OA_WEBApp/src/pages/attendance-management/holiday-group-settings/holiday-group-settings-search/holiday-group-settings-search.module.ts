import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HolidayGroupSettingsSearchPage } from './holiday-group-settings-search';

@NgModule({
  declarations: [
    HolidayGroupSettingsSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(HolidayGroupSettingsSearchPage),
  ],
})
export class HolidayGroupSettingsSearchPageModule {}
