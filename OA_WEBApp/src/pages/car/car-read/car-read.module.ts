import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarReadPage } from './car-read';
import { CarService } from '../car_service';
@NgModule({
  declarations: [
    CarReadPage,
  ],
  imports: [
    IonicPageModule.forChild(CarReadPage),
  ],
  exports: [CarReadPage],
  providers: [CarService]
})
export class CarReadPageModule {}
