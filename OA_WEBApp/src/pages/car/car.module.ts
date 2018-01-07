import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarPage } from './car';
import { CarService } from './car_service';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CarPage,
  ],
  imports: [
    IonicPageModule.forChild(CarPage),
    ComponentsModule
  ],
  exports: [CarPage],
  providers: [CarService]
})
export class CarPageModule {}
