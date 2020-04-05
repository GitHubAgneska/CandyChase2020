import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
// * https://angular.io/guide/dependency-injection-in-action#supply-a-custom-provider-with-inject
// There are times when the dependency we define is either a primitive, object, or function. 
// In such a scenario, the class token cannot be used as there is no class. 
// Angular solves this problem using InjectionToken 
export var BROWSER_STORAGE = new InjectionToken('Browser Storage');
// factory: () => localStorage ;
// The factory function returns the localStorage property that is 
// attached to the browser window object.
// original syntax ( issue ): 
/* export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage
}); */
var BrowserStorageService = /** @class */ (function () {
    function BrowserStorageService(storage, http) {
        this.storage = storage;
        this.http = http;
    }
    // The Inject decorator is a constructor parameter used to specify a custom provider 
    // of a dependency. This custom provider can now be overridden during testing 
    // with a mock API of localStorage instead of interacting with real browser APIs.
    BrowserStorageService.prototype.get = function (key) {
        this.storage.getItem(key);
    };
    BrowserStorageService.prototype.set = function (key, value) {
        this.storage.setItem(key, value);
    };
    BrowserStorageService.prototype.remove = function (key) {
        this.storage.removeItem(key);
    };
    BrowserStorageService.prototype.clear = function () {
        this.storage.clear();
    };
    BrowserStorageService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(0, Inject(BROWSER_STORAGE)),
        tslib_1.__metadata("design:paramtypes", [Storage, HttpClient])
    ], BrowserStorageService);
    return BrowserStorageService;
}());
export { BrowserStorageService };
//# sourceMappingURL=browserStorage-service.js.map