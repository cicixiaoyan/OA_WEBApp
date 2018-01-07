import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Home } from './home';
import { QuillModule } from 'ngx-quill';
@NgModule({
    declarations: [
        Home,
    ],
    imports: [
        IonicPageModule.forChild(Home),
        QuillModule
    ],
    exports: [
        Home
    ]
})
export class HomeModule { }
