import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MailWrite } from './mail-write';
import { MailService } from "../mailService";
@NgModule({
    declarations: [
        MailWrite
    ],
    imports: [
        IonicPageModule.forChild(MailWrite),
    ],
    exports: [
        MailWrite
    ],
    providers: [MailService]
})
export class MailWriteModule { }
