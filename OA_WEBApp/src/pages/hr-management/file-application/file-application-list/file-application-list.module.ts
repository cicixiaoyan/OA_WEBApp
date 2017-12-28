import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FileApplicationListPage } from './file-application-list';
import { FileApplicationService } from '../fileApplicationService';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
    declarations: [
        FileApplicationListPage,
    ],
    imports: [
        IonicPageModule.forChild(FileApplicationListPage),
        ComponentsModule
    ],
    providers: [FileApplicationService]
})
export class FileApplicationListPageModule { }
