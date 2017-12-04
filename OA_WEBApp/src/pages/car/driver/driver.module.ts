import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverPage } from './driver';
import { CarService } from '../car_service';
import { ComponentsModule } from '../../../components/components.module';
@NgModule({
  declarations: [
    DriverPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverPage),
    ComponentsModule
  ],
  exports: [DriverPage],
  providers: [CarService]
})
export class DriverPageModule {}
