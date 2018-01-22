import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { FileChooseComponent } from './file-choose';
@NgModule({
	declarations: [FileChooseComponent],
	imports: [IonicModule],
	exports: [FileChooseComponent]
})
export class FileChooseModule {}
