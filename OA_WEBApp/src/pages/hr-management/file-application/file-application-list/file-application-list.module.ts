import { EmptyModule } from './../../../../components/empty/empty.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FileApplicationListPage } from './file-application-list';
import { FileApplicationService } from '../fileApplicationService';

@NgModule({
    declarations: [
        FileApplicationListPage,
    ],
    imports: [
        IonicPageModule.forChild(FileApplicationListPage),
        EmptyModule
    ],
    providers: [FileApplicationService]
})
export class FileApplicationListPageModule { }
