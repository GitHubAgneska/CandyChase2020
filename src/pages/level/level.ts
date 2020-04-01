import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CandyAPIService } from '../../providers/candy-api-service/candy-api.service';
// import { LevelServiceProvider } from '../../providers/level-api-service/level-api-service';
import { Level } from '../../models/level.model';
import { BackpackServiceProvider } from '../../providers/backpack-service/backpack-service';
import { MyCardsPage } from '../my-cards/my-cards';
import { Subscription } from 'rxjs';
import { LevelService } from '../../providers/level-service/level.service';

@IonicPage()
@Component({
  selector: 'page-level',
  templateUrl: 'level.html',
})
export class LevelPage implements OnInit {
  
  public levels: Level[];
  public level: Level;
  public currentLevel: Level;
  public currentLevel$;

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
    public candyService: CandyAPIService,
    public backpackService: BackpackServiceProvider,
    public levelService: LevelService
    ) {
      this.levels = [];
      this.level = { "idLevel":"", "levelName": "", "levelImg": "", "bannerMessage":"", "levelCard":"", "levelCardName":"" };
      this.nextLevel = { "idLevel":"", "levelName": "", "levelImg": "", "bannerMessage":"", "levelCard":"",  "levelCardName":"" };
    }

    public ngOnInit() {}
    
    public ionViewDidEnter():void{

      this.levelService.setCurrentLevel();
      this.currentLevel$ = this.levelService.currentLevel.subscribe(data => this.currentLevel.levelName = data)
      console.log('CURRENT LEVEL RETRIEVED: ', this.currentLevel.levelName);
    }

    public goToMyCards() {
      this.navCtrl.push(MyCardsPage);
    }

    public ionViewDidLeave():void {}
}
