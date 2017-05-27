import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MailRead } from './mail-read';

@NgModule({
    declarations: [
        MailRead,
    ],
    imports: [
        IonicPageModule.forChild(MailRead)
    ],
    exports: [
        MailRead
    ]
})
export class MailReadModule { }
