import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticeDetail } from './notice-detail';

@NgModule({
    declarations: [
        NoticeDetail,
    ],
    imports: [
        IonicPageModule.forChild(NoticeDetail),
    ],
    exports: [
        NoticeDetail
    ]
})
export class NoticeDetailModule { }
