import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CandyService } from '../../providers/candy-api-service/candy-api-service';
// import { LevelServiceProvider } from '../../providers/level-api-service/level-api-service';
import { Level } from '../../models/level.model';
import { BackpackServiceProvider } from '../../providers/backpack-service/backpack-service';
import { MyCardsPage } from '../my-cards/my-cards';
import { Subscription } from 'rxjs';


@IonicPage()
@Component({
  selector: 'page-level',
  templateUrl: 'level.html',
})
export class LevelPage implements OnInit {
  
  public levels: Level[];
  public level: Level;
  public currentLevel: Level;
  public levelName: string;
  public levelImg: string;
  public bannerMessage: string;

  public nextLevel: Level;
  
  public myArray;

  public totalCandy: number;
  public totalPoints: number;

  constructor( 
    public navCtrl: NavController,
    public navParams: NavParams,
    public candyService: CandyService,
    public backpackService: BackpackServiceProvider,
    ) {
      this.levels = [];
      this.level = { "idLevel":"", "levelName": "", "levelImg": "", "bannerMessage":"", "levelCard":"", "levelCardName":"" };
      this.nextLevel = { "idLevel":"", "levelName": "", "levelImg": "", "bannerMessage":"", "levelCard":"",  "levelCardName":"" };
    }

    public ngOnInit() { this.setLevel(); }

    public ionViewDidEnter():void{}

    public setLevel() {
      //this.backpackService.currentBackpackCount.subscribe(data => this.totalCandy = data);
      // console.log('candy total: ' + this.totalCandy);
      this.backpackService.currentLevel.subscribe(data => { this.level.levelName = data; console.log(this.level.levelName); })
    }

    public goToMyCards() {
      this.navCtrl.push(MyCardsPage);
    }

    public ionViewDidLeave():void {}
}
