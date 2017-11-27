import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetmobilePopoverPage } from './getmobile-popover';

@NgModule({
  declarations: [
    GetmobilePopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(GetmobilePopoverPage),
  ],
  exports: [GetmobilePopoverPage]
})
export class GetmobilePopoverPageModule {}
