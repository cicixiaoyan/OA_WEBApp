import { NgModule } from '@angular/core';
import { AutotextareaDirective } from './autotextarea/autotextarea';
import { CounterDirective } from './counter.directive';
@NgModule({
	declarations: [AutotextareaDirective,
    CounterDirective
],
	imports: [],
	exports: [AutotextareaDirective]
})
export class DirectivesModule {}
