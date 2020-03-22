import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Candy } from '../../models/candy.model';
import { Level } from '../../models/level.model';
import { LevelServiceProvider } from '../level-api-service/level-api-service';

@Injectable()
export class LevelProvider {

  constructor(public http: HttpClient) {
    
  }

  public levels: Level[];
  public level: Level;
  public levelName: string;
  public levelImg: string;
  public bannerMessage: string;

  public nextLevel: Level;
  public myArray;



}
