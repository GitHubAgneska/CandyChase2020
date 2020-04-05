import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var RemoveUnderscorePipe = /** @class */ (function () {
    function RemoveUnderscorePipe() {
    }
    RemoveUnderscorePipe.prototype.transform = function (value) {
        var toReplace = /[-_]/gm;
        if (value) {
            return value = value.toString().replace(toReplace, ' ');
        }
    };
    RemoveUnderscorePipe = tslib_1.__decorate([
        Pipe({
            name: 'removeUnderscore',
            pure: true
        })
    ], RemoveUnderscorePipe);
    return RemoveUnderscorePipe;
}());
export { RemoveUnderscorePipe };
//# sourceMappingURL=remove-underscore.js.map