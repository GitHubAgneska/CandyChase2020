import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Candy } from '../../models/candy.model';
import { Level } from '../../models/level.model';
import { LevelServiceProvider } from '../level-api-service/level-api.service';

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

}

// TODO : + backend => create new backpack for each user