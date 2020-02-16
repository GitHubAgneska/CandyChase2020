import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { MapPage } from '../map/map';
import { GeolocServiceProvider } from  '../../providers/geoloc-service/geoloc-service';
import { CandyService } from '../../providers/candy-api-service/candy-api-service';
import { Observable } from 'rxjs';
import { CandyI } from '../../models/candy.interface';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  public batsBg = "assets/graphicMat/gradient_bats.png";
  public img_candyTitle = "assets/graphicMat/title_candy.png";
  public img_chaseTitle = "assets/graphicMat/title_chase.png";
  public img_circles = "assets/graphicMat/circles.png";
  
  candy$: Observable<Array<CandyI>>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public geolocService: GeolocServiceProvider,
    public candyService: CandyService ) { }

  /*   GoToPage(): void {
      setTimeout(() => {
        this.navCtrl.push(TabsPage);
      }, 1500);
    } */

  public ionViewDidLoad() {
    // get coords as soon as app opens
    this.geolocService.getLocation();
    // get candy as 'hot observable' and cache response
    this.candy$ = this.candyService.candy;
  }



  start(): void {
    this.navCtrl.push(TabsPage);
  }

}
