import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { KeysPipe } from './keys/keys';
import { KeyvaluePipe } from './keyvalue/keyvalue';
import { RemoveUnderscorePipe } from './remove-underscore/remove-underscore';
import { ShortenStringPipe } from './shorten-string/shorten-string';
import { RemoveCharsPipe } from './remove-chars/remove-chars';
var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = tslib_1.__decorate([
        NgModule({
            declarations: [KeysPipe,
                KeyvaluePipe,
                RemoveUnderscorePipe,
                RemoveUnderscorePipe,
                ShortenStringPipe,
                RemoveCharsPipe],
            imports: [],
            exports: [KeysPipe,
                KeyvaluePipe,
                RemoveUnderscorePipe,
                RemoveUnderscorePipe,
                ShortenStringPipe,
                RemoveCharsPipe]
        })
    ], PipesModule);
    return PipesModule;
}());
export { PipesModule };
//# sourceMappingURL=pipes.module.js.map