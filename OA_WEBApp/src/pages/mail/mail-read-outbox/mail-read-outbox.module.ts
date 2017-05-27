import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MailReadOutbox } from './mail-read-outbox';

@NgModule({
    declarations: [
        MailReadOutbox,
    ],
    imports: [
        IonicPageModule.forChild(MailReadOutbox),
    ],
    exports: [
        MailReadOutbox
    ]
})
export class MailReadOutboxModule { }
