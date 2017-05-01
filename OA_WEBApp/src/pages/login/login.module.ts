import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { FindPassword } from './find-password/find-password'
 
@NgModule({
  declarations: [
    LoginPage,
    FindPassword
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  exports: [
    LoginPage,
    FindPassword
  ]
})
export class LoginModule {}
