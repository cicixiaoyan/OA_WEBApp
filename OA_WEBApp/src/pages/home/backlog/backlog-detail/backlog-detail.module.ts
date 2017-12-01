import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BacklogDetail } from './backlog-detail';
import { BacklogService } from "../backlogService";
@NgModule({
    declarations: [
        BacklogDetail,
    ],
    imports: [
        IonicPageModule.forChild(BacklogDetail),
    ],
    exports: [
        BacklogDetail
    ],
    providers: [BacklogService]
})
export class BacklogDetailModule { }
