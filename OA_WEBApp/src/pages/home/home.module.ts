import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Home } from './home';

import { BacklogModule } from './backlog/backlog.module'

@NgModule({
  declarations: [
    Home,
  ],
  imports: [
    IonicPageModule.forChild(Home),
    BacklogModule
  ],
  exports: [
    Home
  ]
})
export class HomeModule {}
