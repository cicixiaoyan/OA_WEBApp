import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicleApplicationPage } from './vehicle-application';

@NgModule({
  declarations: [
    VehicleApplicationPage,
  ],
  imports: [
    IonicPageModule.forChild(VehicleApplicationPage),
  ],
})
export class VehicleApplicationPageModule {}
