import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindPassword } from './find-password';

@NgModule({
    declarations: [
        FindPassword,
    ],
    imports: [
        IonicPageModule.forChild(FindPassword),
    ],
    exports: [
        FindPassword
    ]
})
export class FindPasswordModule { }
