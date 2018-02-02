import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mail } from './mail';
import { MailService } from "./mailService";
import { EmptyModule } from './../../components/empty/empty.module';
import { TabSlideModule } from '../../components/tab-slide/tab-slide.module';

@NgModule({
    declarations: [
        Mail,
    ],
    imports: [
        IonicPageModule.forChild(Mail),
        EmptyModule,
        TabSlideModule
    ],
    exports: [
        Mail
    ],
    providers: [MailService]
})
export class MailModule { }
