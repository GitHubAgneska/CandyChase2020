import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CandyService } from '../../providers/candy-api-service/candy-api-service';
// import { LevelServiceProvider } from '../../providers/level-api-service/level-api-service';
import { Level } from '../../models/level.model';
import { BackpackServiceProvider } from '../../providers/backpack-service/backpack-service';
import { MyCardsPage } from '../my-cards/my-cards';

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
    //private levelService: LevelServiceProvider
    ) {
      this.levels = [];
      this.level = { "idLevel":"", "levelName": "", "levelImg": "", "bannerMessage":"", "levelCard":"", "levelCardName":"" };
      this.nextLevel = { "idLevel":"", "levelName": "", "levelImg": "", "bannerMessage":"", "levelCard":"",  "levelCardName":"" };
    }

    public ngOnInit() {}

    public ionViewWillEnter():void{ 

      this.backpackService.currentLevel.subscribe(data => { this.levelName = data }); 
      console.log("backpackservice triggered");
    }


  public goToMyCards() {
    this.navCtrl.push(MyCardsPage);
  }

  public ionViewDidLeave():void {}
}
