import { EmptyModule } from './../../../components/empty/empty.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicleSchedulingPage } from './vehicle-scheduling';
import { CarService } from '../car_service';

@NgModule({
  declarations: [
    VehicleSchedulingPage,
  ],
  imports: [
    IonicPageModule.forChild(VehicleSchedulingPage),
    EmptyModule
  ],
  providers: [CarService]
})
export class VehicleSchedulingPageModule {}
