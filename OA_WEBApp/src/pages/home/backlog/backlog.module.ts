import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Backlog } from './backlog';
import { BacklogService } from "./backlogService";
import { EmptyModule } from '../../../components/empty/empty.module';

@NgModule({
    declarations: [
        Backlog,
    ],
    imports: [
        IonicPageModule.forChild(Backlog),
        EmptyModule
    ],
    exports: [
        Backlog
    ],
    providers: [BacklogService]
})
export class BacklogModule { }
