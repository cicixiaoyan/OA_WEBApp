import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MailRead } from './mail-read';
import { MailService } from "../mailService";
import { PipesModule } from './../../../pipes/pipes.module';

@NgModule({
    declarations: [
        MailRead,
    ],
    imports: [
        IonicPageModule.forChild(MailRead),
        PipesModule
    ],
    exports: [
        MailRead
    ],
    providers: [MailService]
})
export class MailReadModule { }
