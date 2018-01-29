import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeNewPage } from './home-new';

@NgModule({
  declarations: [
    HomeNewPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeNewPage),
  ],
})
export class HomeNewPageModule {}
