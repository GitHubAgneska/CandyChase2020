import { CandyAPIService } from '../../providers/candy-api-service/candy-api.service'; 
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CandyDetailsPage } from '../candy-details/candy-details';
import { Candy } from '../../models/candy.model';
import { BackpackServiceProvider } from '../../providers/backpack-service/backpack-service';
import { KeyvaluePipe } from '../../pipes/keyvalue/keyvalue';
import { ShortenStringPipe } from '../../pipes/shorten-string/shorten-string';

@Component({
  selector: 'page-backpack',
  templateUrl: 'backpack.html'
})
export class BackpackPage implements OnInit{
  
  public candyItem: Candy;
  public collectedCandy:Candy[];
  
  public totalCandy: number;
  public levelName: string;
  public currentLevel: {};
  
  public geo:any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private candyService: CandyAPIService,
    private backpackService: BackpackServiceProvider,
    public keyvaluepipe: KeyvaluePipe,
    public shortenString: ShortenStringPipe  ) {
      // this.currentLevel = { "idLevel":"", "levelName": "", "levelImg": "", "bannerMessage":"", "levelCard":"", "levelCardName":"" };
  }

  public ngOnInit() {
    // retrieve all candy items
      this.setBackpack();
  }

  public ionViewDidEnter() {
    // retrieve total candy/ points
    this.backpackService.currentBackpackCount.subscribe(data => this.totalCandy = data);
    //console.log("TOTAL CANDY AT INIT: ", this.totalCandy);
  }

  public setBackpack() {
    this.backpackService.currentBackpack.subscribe(data => this.collectedCandy = data);
    //console.log("COLLECTED CANDY RETRIEVED ON INIT: ", this.collectedCandy);
  }

  seeCandyInfos(id:string | number) {
    this.navCtrl.push(CandyDetailsPage, { idparam: id });
  }
}
