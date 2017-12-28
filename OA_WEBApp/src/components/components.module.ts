import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { EmptyComponent } from './empty/empty';
@NgModule({
	declarations: [EmptyComponent],
	imports: [IonicModule],
	exports: [EmptyComponent]
})
export class ComponentsModule {}
