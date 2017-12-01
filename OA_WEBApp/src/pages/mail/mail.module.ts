import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mail } from './mail';
import { MailService } from "./mailService";
@NgModule({
    declarations: [
        Mail,
    ],
    imports: [
        IonicPageModule.forChild(Mail)
    ],
    exports: [
        Mail
    ],
    providers: [MailService]
})
export class MailModule { }
