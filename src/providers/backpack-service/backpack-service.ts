import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Candy } from '../../models/candy.model';
import { Level } from '../../models/level.model';

@Injectable()
export class BackpackServiceProvider {

  public candyList: Candy[];
  public candyItem: Candy;

  public itemsInBackpack: Candy[];

  public totalPoints: number;
  public totalCandy: number;

  // keep track of backpack state --
  private backpack$ = new BehaviorSubject([]);
  currentBackpack = this.backpack$.asObservable();

  // keep track of candy total --  
  private totalCandyInBackpack$ = new BehaviorSubject(0);
  currentBackpackCount = this.totalCandyInBackpack$.asObservable();

  // keep track of current level --  
  private levelName$ = new BehaviorSubject("");
  currentLevel = this.levelName$.asObservable();
  // ---

  constructor(
    public http: HttpClient) {

    this.itemsInBackpack = [];
    this.candyItem = { "_id": "", "product_name": "", "amountInBackpack": 0 };
    this.totalPoints = 0;
  }

  // method for components to update backpack
  public update_backpack(itemsInBackpack: Candy[]) {
    this.backpack$.next(itemsInBackpack);
    }

  // method for components to update total candy
  public update_totalCandyCount(totalCandy: number) {
    this.totalCandyInBackpack$.next(totalCandy);
  }

  // method for components to update current level (besides regular count)
  public update_level(levelName: string) {
    this.levelName$.next(levelName);
  }
}

// TODO : + backend => create new backpack for each user