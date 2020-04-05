import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandyDetailsPage } from './candy-details';
import { PipesModule } from '../../pipes/pipes.module';
var CandyDetailsPageModule = /** @class */ (function () {
    function CandyDetailsPageModule() {
    }
    CandyDetailsPageModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                CandyDetailsPage,
            ],
            imports: [
                IonicPageModule.forChild(CandyDetailsPage),
                PipesModule
            ],
        })
    ], CandyDetailsPageModule);
    return CandyDetailsPageModule;
}());
export { CandyDetailsPageModule };
//# sourceMappingURL=candy-details.module.js.map