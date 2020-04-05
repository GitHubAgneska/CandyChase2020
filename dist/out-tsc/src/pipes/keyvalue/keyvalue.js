import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var KeyvaluePipe = /** @class */ (function () {
    function KeyvaluePipe() {
    }
    KeyvaluePipe.prototype.transform = function (object) {
        var a = [];
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                a.push({ key: key, value: object[key] });
            }
        }
        console.log("je suis keyvalue pipe object: ", a);
        return a;
    };
    KeyvaluePipe = tslib_1.__decorate([
        Pipe({
            name: 'keyvalue',
            pure: true
            // https://www.bennadel.com/blog/3325-understanding-pipe-instantiation-life-cycles-in-angular-4-2-3.htm
        })
    ], KeyvaluePipe);
    return KeyvaluePipe;
}());
export { KeyvaluePipe };
//# sourceMappingURL=keyvalue.js.map