
import { Component } from '@angular/core';
import { MapPage } from '../map/map';
import { ListPage } from '../list/list';
import { BackpackPage } from '../backpack/backpack';
import { LevelPage } from '../level/level';
import { MyHomePage } from '../my-home/my-home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListPage;
  tab2Root = MapPage;
  tab3Root = BackpackPage;
  tab4Root = LevelPage;
  tab5Root = MyHomePage;

  constructor() {
  }
}
