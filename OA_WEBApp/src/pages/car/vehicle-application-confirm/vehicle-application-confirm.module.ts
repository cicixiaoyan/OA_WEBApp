import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicleApplicationConfirmPage } from './vehicle-application-confirm';
import { CarService } from '../car_service';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    VehicleApplicationConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(VehicleApplicationConfirmPage),
    ComponentsModule
  ],
  providers: [CarService]
})
export class VehicleApplicationConfirmPageModule {}
