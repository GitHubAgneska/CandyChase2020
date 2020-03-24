import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CandyService } from '../../providers/candy-api-service/candy-api-service';
import { LevelServiceProvider } from '../../providers/level-api-service/level-api-service';
import { Level } from '../../models/level.model';
import { BackpackServiceProvider } from '../../providers/backpack-service/backpack-service';

@IonicPage()
@Component({
  selector: 'page-level',
  templateUrl: 'level.html',
})
export class LevelPage implements OnInit {
  
  public levels: Level[];
  public level: Level;
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
    private levelService: LevelServiceProvider) {

      this.levels = [];
      this.level = { "idLevel":"", "levelName": "", "levelImg": "", "bannerMessage":"", "levelCard":"", "levelCardName":"" };
      this.nextLevel = { "idLevel":"", "levelName": "", "levelImg": "", "bannerMessage":"", "levelCard":"",  "levelCardName":"" };
    }

    public ngOnInit() {}

    public ionViewWillEnter():void{ this.backpackService.getCurrentLevel()}
    // public ionViewWillEnter():void{ this.backpackService.currentLevel.subscribe(data => { this.levelName = data.levelName } ) }

/*
  public ngOnInit() {
    this.backpackService.currentBackpackCount.subscribe(data => this.totalPoints = data);
    this.totalCandy = this.totalPoints;
    // console.log(this.totalPoints);
  }
  
  public ionViewWillEnter():void{  
    this.setCurrentLevel(this.totalPoints);   
  }

  // retrieve current total candy/total points from candy service, 
  // and set level accordingly, using json 'levelmodels'
  setCurrentLevel(totalPoints:number) {
    this.backpackService.currentBackpackCount.subscribe(data => this.totalPoints = data);
    //console.log('total Points retrieved by level service: ', this.totalPoints);
  
    this.levelService.getLevelList().subscribe((response:Level[]) => {

      this.myArray = response;
      //console.log("response modellist: ", this.myArray[0]);
      //console.log("je suis myarray dans setcurrentLevel: ", this.myArray);
      if (totalPoints <= 7 ) {
        this.level = this.myArray[0];
        this.level.levelName = this.myArray[0].levelName;
        //console.log( "je suis LEVEL NAME: ",this.level.levelName);
        this.level.levelImg = this.myArray[0].levelImg;
        this.level.bannerMessage = this.myArray[0].bannerMessage;
        this.level.levelCard = this.myArray[0].levelCard;

        this.nextLevel = this.myArray[1];
        this.nextLevel.levelName = this.myArray[1].levelName;
        this.nextLevel.levelCard = this.myArray[1].levelCard;
        this.nextLevel.levelCardName = this.myArray[1].levelCardName;
      }
      if (totalPoints > 7 && totalPoints <= 12 ) {
        this.level = this.myArray[1];
        this.level.levelName = this.myArray[1].levelName;
        //console.log( "je suis LEVEL NAME: ",this.level.levelName);
        this.level.levelImg = this.myArray[1].levelImg;
        this.level.bannerMessage = this.myArray[1].bannerMessage;
        this.level.levelCard = this.myArray[1].levelCard;

        this.nextLevel = this.myArray[2];
        this.nextLevel.levelName = this.myArray[2].levelName;
        this.nextLevel.levelCard = this.myArray[2].levelCard;
        this.nextLevel.levelCardName = this.myArray[2].levelCardName;
      }
      if (totalPoints > 12 && totalPoints <= 18 ) {
        this.level = this.myArray[2];
        this.level.levelName = this.myArray[2].levelName;
        //console.log( "je suis LEVEL NAME: ",this.level.levelName);
        this.level.levelImg = this.myArray[2].levelImg;
        this.level.bannerMessage = this.myArray[2].bannerMessage;
        this.level.levelCard = this.myArray[2].levelCard;

        this.nextLevel = this.myArray[3];
        this.nextLevel.levelName = this.myArray[3].levelName;
        this.nextLevel.levelCard = this.myArray[3].levelCard;
        this.nextLevel.levelCardName = this.myArray[3].levelCardName;
      }
      if (totalPoints > 18 ) {
        this.level = this.myArray[3];
        this.level.levelName = this.myArray[3].levelName;
        //console.log( "je suis LEVEL NAME: ",this.level.levelName);
        this.level.levelImg = this.myArray[3].levelImg;
        this.level.bannerMessage = this.myArray[3].bannerMessage;
        this.level.levelCard = this.myArray[3].levelCard;

        this.nextLevel = this.myArray[4];
        this.nextLevel.levelName = this.myArray[4].levelName;
        this.nextLevel.levelCard = this.myArray[4].levelCard;
        this.nextLevel.levelCardName = this.myArray[4].levelCardName;
      }
      this.backpackService.update_level(this.level.levelName);
    });
  } */

  public ionViewDidLeave():void {}
}
