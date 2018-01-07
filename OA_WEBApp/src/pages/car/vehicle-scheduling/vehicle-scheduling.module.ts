import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicleSchedulingPage } from './vehicle-scheduling';
import { ComponentsModule } from '../../../components/components.module';
import { CarService } from '../car_service';

@NgModule({
  declarations: [
    VehicleSchedulingPage,
  ],
  imports: [
    IonicPageModule.forChild(VehicleSchedulingPage),
    ComponentsModule
  ],
  providers: [CarService]
})
export class VehicleSchedulingPageModule {}
