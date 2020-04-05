import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    //Takes a value and makes it lowercase
    KeysPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.toLowerCase();
    };
    KeysPipe = tslib_1.__decorate([
        Pipe({
            name: 'keys',
        })
    ], KeysPipe);
    return KeysPipe;
}());
export { KeysPipe };
//# sourceMappingURL=keys.js.map