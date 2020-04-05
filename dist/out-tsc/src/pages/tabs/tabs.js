import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { Events } from 'ionic-angular';
import { MapPage } from '../map/map';
import { ListPage } from '../list/list';
import { BackpackPage } from '../backpack/backpack';
import { LevelPage } from '../level/level';
import { MyHomePage } from '../my-home/my-home';
var TabsPage = /** @class */ (function () {
    function TabsPage(events, detectorRef) {
        this.events = events;
        this.detectorRef = detectorRef;
        this.tab1Root = ListPage;
        this.tab2Root = MapPage;
        this.tab3Root = BackpackPage;
        this.tab4Root = LevelPage;
        this.tab5Root = MyHomePage;
    }
    TabsPage = tslib_1.__decorate([
        Component({
            templateUrl: 'tabs.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Events, ChangeDetectorRef])
    ], TabsPage);
    return TabsPage;
}());
export { TabsPage };
//# sourceMappingURL=tabs.js.map