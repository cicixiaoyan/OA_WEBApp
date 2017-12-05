import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MailRead } from './mail-read';
import { MailService } from "../mailService";
@NgModule({
    declarations: [
        MailRead,
    ],
    imports: [
        IonicPageModule.forChild(MailRead),
    ],
    exports: [
        MailRead
    ],
    providers: [MailService]
})
export class MailReadModule { }
