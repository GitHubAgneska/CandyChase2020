import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var ShortenStringPipe = /** @class */ (function () {
    function ShortenStringPipe() {
    }
    ShortenStringPipe.prototype.transform = function (value, maxChars) {
        var lastEmptyIndex = null;
        if (value.length > maxChars) {
            if (value.charAt(maxChars - 1) != ' ') {
                for (var i = maxChars - 1; i >= 0; i--) {
                    if (value[i] == ' ') {
                        lastEmptyIndex = i;
                        break;
                    }
                    else {
                        lastEmptyIndex = lastEmptyIndex;
                    }
                }
            }
            else {
                lastEmptyIndex = value[maxChars];
            }
            return value.substring(0, lastEmptyIndex);
        }
        else {
            return value;
        }
    };
    ShortenStringPipe = tslib_1.__decorate([
        Pipe({
            name: 'shortenString',
        })
    ], ShortenStringPipe);
    return ShortenStringPipe;
}());
export { ShortenStringPipe };
//# sourceMappingURL=shorten-string.js.map