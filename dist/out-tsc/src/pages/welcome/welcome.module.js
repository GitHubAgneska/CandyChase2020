import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomePage } from './welcome';
var WelcomePageModule = /** @class */ (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                WelcomePage,
            ],
            imports: [
                IonicPageModule.forChild(WelcomePage),
            ],
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());
export { WelcomePageModule };
//# sourceMappingURL=welcome.module.js.map