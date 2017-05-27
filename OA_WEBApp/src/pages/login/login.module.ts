import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { FindPasswordModule } from './find-password/find-password.module';

@NgModule({
    declarations: [
        LoginPage
    ],
    imports: [
        IonicPageModule.forChild(LoginPage),
        FindPasswordModule
    ],
    exports: [
        LoginPage
    ]
})
export class LoginModule { }
