import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
var MapServiceProvider = /** @class */ (function () {
    function MapServiceProvider(http) {
        this.http = http;
    }
    MapServiceProvider = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], MapServiceProvider);
    return MapServiceProvider;
}());
export { MapServiceProvider };
//# sourceMappingURL=map-service.js.map