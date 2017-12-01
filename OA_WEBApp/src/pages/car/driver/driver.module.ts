import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverPage } from './driver';
import { CarService } from '../car_service';
@NgModule({
  declarations: [
    DriverPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverPage),
  ],
  exports: [DriverPage],
  providers: [CarService]
})
export class DriverPageModule {}
