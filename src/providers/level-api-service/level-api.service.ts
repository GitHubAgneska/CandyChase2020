import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Level } from '../../models/level.model';

@Injectable()
export class LevelServiceProvider {

  public level: Level;
  public levelList: Level[];

  public levelListUrl = 'assets/levelsData.json';

  public totalCandy: number;
  public totalPoints: number;

  constructor(private httpService: Http) {

    this.levelList = [];
    // this.level = { "idLevel": "", "levelName": "", "levelImg": "", "bannerMessage": "", "levelCard": "", "levelCardName": "" };
  }

  // retrieve all models of json 'level models' from local folder
  getLevelList(): Observable<Level[]> {
    return this.httpService.get(this.levelListUrl)
      .pipe(
        map(
          (response: Response) => {
            const result: Level[] = response.json() as Level[];
            //console.log("je suis levellist 0", result[0]);
            return result;
          }
        )
      );
  }

  // retrieve models of level objects by id in json from local folder
  getLevelById(idLevel: string | number) {
  }
}
