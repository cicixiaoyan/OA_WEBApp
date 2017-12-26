import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaffPopoverPage } from './staff-popover';

@NgModule({
  declarations: [
    StaffPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(StaffPopoverPage),
  ],
})
export class StaffPopoverPageModule {}
