import { Tabs } from 'ionic-angular';
import { Component, ChangeDetectorRef } from '@angular/core';
import { Events } from 'ionic-angular';
import { MapPage } from '../map/map';
import { CandyListPage } from '../candyList/candyList';
import { BackpackPage } from '../backpack/backpack';
import { LevelPage } from '../level/level';
import { MyHomePage } from '../my-home/my-home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

    constructor( public events: Events, public detectorRef: ChangeDetectorRef )  {
      
    }

  public tab1Root = CandyListPage;
  public tab2Root = MapPage;
  public tab3Root = BackpackPage;
  public tab4Root = LevelPage;
  public tab5Root = MyHomePage;
}
