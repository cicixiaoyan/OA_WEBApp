import { CarService } from './../car_service';
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
  providers: [CarService]
})
export class VehicleApplicationPageModule {}
