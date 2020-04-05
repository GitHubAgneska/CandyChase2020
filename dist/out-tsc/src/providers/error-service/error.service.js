import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// @ USE
// Logic for parsing error messages and stack traces from the server and client
var ErrorServiceProvider = /** @class */ (function () {
    function ErrorServiceProvider(http) {
        this.http = http;
    }
    ErrorServiceProvider.prototype.getClientMessage = function (error) {
        if (!navigator.onLine) {
            return 'No Internet Connection';
        }
        return error.message ? error.message : error.toString();
    };
    ErrorServiceProvider.prototype.getClientStack = function (error) {
        return error.stack;
    };
    ErrorServiceProvider.prototype.getServerMessage = function (error) {
        return error.message;
    };
    ErrorServiceProvider.prototype.getServerStack = function (error) {
        // handle stack trace
        return 'stack';
    };
    ErrorServiceProvider = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ErrorServiceProvider);
    return ErrorServiceProvider;
}());
export { ErrorServiceProvider };
//# sourceMappingURL=error.service.js.map