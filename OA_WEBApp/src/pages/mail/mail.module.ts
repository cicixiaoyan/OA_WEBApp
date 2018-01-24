import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mail } from './mail';
import { MailService } from "./mailService";
import { EmptyModule } from './../../components/empty/empty.module';

@NgModule({
    declarations: [
        Mail,
    ],
    imports: [
        IonicPageModule.forChild(Mail),
        EmptyModule
    ],
    exports: [
        Mail
    ],
    providers: [MailService]
})
export class MailModule { }
