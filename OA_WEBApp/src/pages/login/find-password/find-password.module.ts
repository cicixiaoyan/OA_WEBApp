import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindPassword } from './find-password';
import { LoginService } from '../LoginService';
@NgModule({
    declarations: [
        FindPassword,
    ],
    imports: [
        IonicPageModule.forChild(FindPassword),
    ],
    exports: [
        FindPassword
    ],
    providers: [LoginService]
})
export class FindPasswordModule { }
