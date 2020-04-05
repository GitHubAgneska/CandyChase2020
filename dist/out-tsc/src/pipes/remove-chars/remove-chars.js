import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var RemoveCharsPipe = /** @class */ (function () {
    function RemoveCharsPipe() {
    }
    RemoveCharsPipe.prototype.transform = function (value) {
        if (value.charAt(2) === ':') {
            return value.substring(3, value.length);
            // or return value.slice(3, value.length);
        }
        return value;
    };
    RemoveCharsPipe = tslib_1.__decorate([
        Pipe({
            name: 'removeChars',
        })
    ], RemoveCharsPipe);
    return RemoveCharsPipe;
}());
export { RemoveCharsPipe };
//# sourceMappingURL=remove-chars.js.map