import { NgModule } from '@angular/core';
import { KeysPipe } from './keys/keys';
import { KeyvaluePipe } from './keyvalue/keyvalue';
import { RemoveUnderscorePipe } from './remove-underscore/remove-underscore';
@NgModule({
	declarations: [KeysPipe,
    KeyvaluePipe,
    RemoveUnderscorePipe,
    RemoveUnderscorePipe],
	imports: [],
	exports: [KeysPipe,
    KeyvaluePipe,
    RemoveUnderscorePipe,
    RemoveUnderscorePipe]
})
export class PipesModule {}
