import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Candy } from '../../models/candy.model';
import { Level } from '../../models/level.model';
import { LevelServiceProvider } from '../level-api-service/level-api.service';
import { BackpackServiceProvider } from '../backpack-service/backpack-service';

@Injectable()
export class LevelService{

  constructor( 
    public http: HttpClient,
    public backpackService: BackpackServiceProvider,
    public levelProvider: LevelServiceProvider
    ) {}

  public totalPoints: number;
  public totalPoints$;
  public totalCandy: number;
  
  public levels: Level[];
  public level: Level;
  public levelName: string;
  public levelImg: string;
  public bannerMessage: string;

  public nextLevel: Level;
  public myArrayOfLevels;

  // keep track of current level name --  
  public levelName$ = new BehaviorSubject("1");
  currentLevel = this.levelName$.asObservable();

  // keep track of current level --> whole object
  // public level$: BehaviorSubject<Level> = new BehaviorSubject(this.level);
  // currentLevel = this.level$.asObservable();

  // method for components to update current level (besides regular count)
  public update_level(levelName: string) {
  this.levelName$.next(levelName);
  }


  retriveLevelList() {
    this.levelProvider.getLevelList().subscribe((response:Level[]) => {
      this.myArrayOfLevels = response;
    } );
  }

  retrieveCurrentTotalPoints(){
    this.totalPoints$ = this.backpackService.currentBackpackCount.subscribe(data => { this.totalPoints = data});
    console.log('TOTAL POINTS RETRIEVED: ', this.totalPoints);
  }

  setCurrentLevel(totalPoints:number) {

      if (totalPoints <= 7 ) {
        this.level = this.myArrayOfLevels[0];
        this.level.levelName = this.myArrayOfLevels[0].levelName;
        //console.log( "je suis LEVEL NAME: ",this.level.levelName);
        this.level.levelImg = this.myArrayOfLevels[0].levelImg;
        this.level.bannerMessage = this.myArrayOfLevels[0].bannerMessage;
        this.level.levelCard = this.myArrayOfLevels[0].levelCard;

        this.nextLevel = this.myArrayOfLevels[1];
        this.nextLevel.levelName = this.myArrayOfLevels[1].levelName;
        this.nextLevel.levelCard = this.myArrayOfLevels[1].levelCard;
        this.nextLevel.levelCardName = this.myArrayOfLevels[1].levelCardName;
      }
      if (totalPoints > 7 && totalPoints <= 12 ) {
        this.level = this.myArrayOfLevels[1];
        this.level.levelName = this.myArrayOfLevels[1].levelName;
        //console.log( "je suis LEVEL NAME: ",this.level.levelName);
        this.level.levelImg = this.myArrayOfLevels[1].levelImg;
        this.level.bannerMessage = this.myArrayOfLevels[1].bannerMessage;
        this.level.levelCard = this.myArrayOfLevels[1].levelCard;

        this.nextLevel = this.myArrayOfLevels[2];
        this.nextLevel.levelName = this.myArrayOfLevels[2].levelName;
        this.nextLevel.levelCard = this.myArrayOfLevels[2].levelCard;
        this.nextLevel.levelCardName = this.myArrayOfLevels[2].levelCardName;
      }
      if (totalPoints > 12 && totalPoints <= 18 ) {
        this.level = this.myArrayOfLevels[2];
        this.level.levelName = this.myArrayOfLevels[2].levelName;
        console.log( "je suis LEVEL NAME: ",this.level.levelName);
        this.level.levelImg = this.myArrayOfLevels[2].levelImg;
        this.level.bannerMessage = this.myArrayOfLevels[2].bannerMessage;
        this.level.levelCard = this.myArrayOfLevels[2].levelCard;

        this.nextLevel = this.myArrayOfLevels[3];
        this.nextLevel.levelName = this.myArrayOfLevels[3].levelName;
        this.nextLevel.levelCard = this.myArrayOfLevels[3].levelCard;
        this.nextLevel.levelCardName = this.myArrayOfLevels[3].levelCardName;
      }
      if (totalPoints > 18 ) {
        this.level = this.myArrayOfLevels[3];
        this.level.levelName = this.myArrayOfLevels[3].levelName;
        console.log( "je suis LEVEL NAME: ",this.level.levelName);
        this.level.levelImg = this.myArrayOfLevels[3].levelImg;
        this.level.bannerMessage = this.myArrayOfLevels[3].bannerMessage;
        this.level.levelCard = this.myArrayOfLevels[3].levelCard;

        this.nextLevel = this.myArrayOfLevels[4];
        this.nextLevel.levelName = this.myArrayOfLevels[4].levelName;
        this.nextLevel.levelCard = this.myArrayOfLevels[4].levelCard;
        this.nextLevel.levelCardName = this.myArrayOfLevels[4].levelCardName;
      }
      // this.update_level(this.level);
      this.update_level(this.levelName);
  }

}
