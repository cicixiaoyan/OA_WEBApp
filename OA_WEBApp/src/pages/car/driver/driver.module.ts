import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverPage } from './driver';
import { CarService } from '../car_service';
import { EmptyModule } from '../../../components/empty/empty.module';
@NgModule({
  declarations: [
    DriverPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverPage),
    EmptyModule
  ],
  exports: [DriverPage],
  providers: [CarService]
})
export class DriverPageModule {}
