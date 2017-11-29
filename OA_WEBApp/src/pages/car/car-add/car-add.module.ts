import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarAddPage } from './car-add';
import { CarService } from '../car_service';
@NgModule({
  declarations: [
    CarAddPage,
  ],
  imports: [
    IonicPageModule.forChild(CarAddPage),
  ],
  exports: [CarAddPage],
  providers: [CarService]
})
export class CarAddPageModule {}
