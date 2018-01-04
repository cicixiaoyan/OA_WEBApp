import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicleSchedulingPage } from './vehicle-scheduling';

@NgModule({
  declarations: [
    VehicleSchedulingPage,
  ],
  imports: [
    IonicPageModule.forChild(VehicleSchedulingPage),
  ],
})
export class VehicleSchedulingPageModule {}
