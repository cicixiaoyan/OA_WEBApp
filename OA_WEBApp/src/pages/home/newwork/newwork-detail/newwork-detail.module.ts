import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewworkDetail } from './newwork-detail';

@NgModule({
  declarations: [
    NewworkDetail,
  ],
  imports: [
    IonicPageModule.forChild(NewworkDetail),
  ],
  exports: [
    NewworkDetail
  ]
})
export class NewworkDetailModule {}
