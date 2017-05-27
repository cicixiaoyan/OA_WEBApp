import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Newwork } from './newwork';

@NgModule({
    declarations: [
        Newwork,
    ],
    imports: [
        IonicPageModule.forChild(Newwork),
    ],
    exports: [
        Newwork
    ]
})
export class NewworkModule { }
