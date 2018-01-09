import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicleApplicationConfirmPage } from './vehicle-application-confirm';
import { CarService } from '../car_service';
import { EmptyModule } from '../../../components/empty/empty.module';

@NgModule({
  declarations: [
    VehicleApplicationConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(VehicleApplicationConfirmPage),
    EmptyModule
  ],
  providers: [CarService]
})
export class VehicleApplicationConfirmPageModule {}
