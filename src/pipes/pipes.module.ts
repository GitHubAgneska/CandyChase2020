import { NgModule } from '@angular/core';
import { KeysPipe } from './keys/keys';
import { KeyvaluePipe } from './keyvalue/keyvalue';
@NgModule({
	declarations: [KeysPipe,
    KeyvaluePipe],
	imports: [],
	exports: [KeysPipe,
    KeyvaluePipe]
})
export class PipesModule {}
