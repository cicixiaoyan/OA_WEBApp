import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicleApplicationConfirmViewPage } from './vehicle-application-confirm-view';

@NgModule({
  declarations: [
    VehicleApplicationConfirmViewPage,
  ],
  imports: [
    IonicPageModule.forChild(VehicleApplicationConfirmViewPage)
  ],
})
export class VehicleApplicationConfirmViewPageModule {}
