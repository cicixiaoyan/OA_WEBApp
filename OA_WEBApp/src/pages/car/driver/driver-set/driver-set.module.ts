import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverSetPage } from './driver-set';
import { CarService } from '../../car_service';
@NgModule({
  declarations: [
    DriverSetPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverSetPage),
  ],
  exports: [DriverSetPage],
  providers: [CarService]
})
export class DriverSetPageModule {}
