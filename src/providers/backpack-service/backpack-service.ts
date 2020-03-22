import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Candy } from '../../models/candy.model';
import { Level } from '../../models/level.model';
import { LevelServiceProvider } from '../level-api-service/level-api-service';

@Injectable()
export class BackpackServiceProvider {

  public candyList: Candy[];
  public candyItem: Candy;
  public itemsInBackpack: Candy[];
  public totalPoints: number;
  public totalCandy: number;

  public levels: Level[];
  public level: Level;
  public levelName: string;
  public levelImg: string;
  public bannerMessage: string;

  public nextLevel: Level;
  public myArray;

  // keep track of backpack state --
  private backpack$ = new BehaviorSubject([]);
  currentBackpack = this.backpack$.asObservable();

  // keep track of candy total --  
  private totalCandyInBackpack$ = new BehaviorSubject(0);
  currentBackpackCount = this.totalCandyInBackpack$.asObservable();

  // keep track of current level --  
  private level$ = new BehaviorSubject({});
  currentLevel = this.level$.asObservable();
  // ---

  constructor(
    public http: HttpClient, private levelService: LevelServiceProvider) {

    this.itemsInBackpack = [];
    this.candyItem = { "_id": "", "product_name": "", "amountInBackpack": 0 };
    this.totalPoints = 0;
    this.levels = [];
    this.level = { "idLevel":"", "levelName": "", "levelImg": "", "bannerMessage":"", "levelCard":"", "levelCardName":"" };
    this.nextLevel = { "idLevel":"", "levelName": "", "levelImg": "", "bannerMessage":"", "levelCard":"",  "levelCardName":"" };
  }

  // method for components to update backpack
  public update_backpack(itemsInBackpack: Candy[]) {
    this.backpack$.next(itemsInBackpack);
    }

  // method for components to update total candy
  public update_totalCandyCount(totalCandy: number) {
    this.totalCandyInBackpack$.next(totalCandy);
  }

  // method for components to exceptionally update current level (besides regular points count)
  public update_level(level: {}) {
    this.level$.next(level);
  }
  // method for components to retrieve current level
  public getCurrentLevel() {
    return this.currentLevel;
  }


  // Set level according to current total candy/total points, using json 'levelmodels'
  setCurrentLevel(totalPoints:number) {

    this.levelService.getLevelList().subscribe((response:Level[]) => {

      this.myArray = response;
      console.log("response modellist: ", this.myArray[0]);
      console.log("je suis myarray dans setcurrentLevel: ", this.myArray);
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
        console.log( "je suis LEVEL NAME: ",this.level.levelName);
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
        console.log( "je suis LEVEL NAME: ",this.level.levelName);
        this.level.levelImg = this.myArray[3].levelImg;
        this.level.bannerMessage = this.myArray[3].bannerMessage;
        this.level.levelCard = this.myArray[3].levelCard;

        this.nextLevel = this.myArray[4];
        this.nextLevel.levelName = this.myArray[4].levelName;
        this.nextLevel.levelCard = this.myArray[4].levelCard;
        this.nextLevel.levelCardName = this.myArray[4].levelCardName;
      }
      this.update_level(this.level);
    });
  }
}

// TODO : + backend => create new backpack for each user