import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarPage } from './car';
import { CarService } from './car_service';
@NgModule({
  declarations: [
    CarPage,
  ],
  imports: [
    IonicPageModule.forChild(CarPage),
  ],
  exports: [CarPage],
  providers: [CarService]
})
export class CarPageModule {}
