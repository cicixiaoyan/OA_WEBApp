import { EmptyModule } from './../../../../components/empty/empty.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FileApplicationListPage } from './file-application-list';
import { FileApplicationService } from '../fileApplicationService';
import { TabSlideModule } from '../../../../components/tab-slide/tab-slide.module';
import { GetdatediffPipeModule } from '../../../../pipes/getdatediff/getdatediff.module';
@NgModule({
    declarations: [
        FileApplicationListPage,
    ],
    imports: [
        IonicPageModule.forChild(FileApplicationListPage),
        EmptyModule,
        TabSlideModule,
        GetdatediffPipeModule
    ],
    providers: [FileApplicationService]
})
export class FileApplicationListPageModule { }
