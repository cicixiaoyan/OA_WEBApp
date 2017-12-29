import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MailWrite } from './mail-write';
import { MailService } from "../mailService";
import { DirectivesModule } from '../../../directives/directives.module';
@NgModule({
    declarations: [
        MailWrite
    ],
    imports: [
        IonicPageModule.forChild(MailWrite),
        DirectivesModule
    ],
    exports: [
        MailWrite
    ],
    providers: [MailService]
})
export class MailWriteModule { }
