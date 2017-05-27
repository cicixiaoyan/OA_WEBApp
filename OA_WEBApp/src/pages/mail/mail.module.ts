import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mail } from './mail';
import { MailReadOutboxModule } from "./mail-read-outbox/mail-read-outbox.module";
import { MailService } from "./mailService";
@NgModule({
    declarations: [
        Mail,
    ],
    imports: [
        IonicPageModule.forChild(Mail),
        MailReadOutboxModule
    ],
    exports: [
        Mail
    ],
    providers: [MailService]
})
export class MailModule { }
