import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicleSchedulingViewPage } from './vehicle-scheduling-view';
import { CarService } from '../../car_service';

@NgModule({
  declarations: [
    VehicleSchedulingViewPage,
  ],
  imports: [
    IonicPageModule.forChild(VehicleSchedulingViewPage),
  ],
  providers: [CarService]
})
export class VehicleSchedulingViewPageModule {}
