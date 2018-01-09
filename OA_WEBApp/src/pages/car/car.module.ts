import { EmptyModule } from './../../components/empty/empty.module';
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
    EmptyModule
  ],
  exports: [CarPage],
  providers: [CarService]
})
export class CarPageModule {}
