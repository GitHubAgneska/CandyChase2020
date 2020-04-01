import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LevelServiceProvider } from '../../providers/level-api-service/level-api.service';
import { Level } from '../../models/level.model';
import { BackpackServiceProvider } from '../../providers/backpack-service/backpack-service';

@IonicPage()
@Component({
  selector: 'page-my-cards',
  templateUrl: 'my-cards.html',
})
export class MyCardsPage {
  public levelName: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public backpackService: BackpackServiceProvider,
    public levelService: LevelServiceProvider) {
  }

  ionViewDidLoad() {
   // this.levelService.currentLevel.subscribe(data => { this.levelName = data }); 
    console.log("level name = " + this.levelName);
  }

}
