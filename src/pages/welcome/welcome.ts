import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { MapPage } from '../map/map';
import { GeolocServiceProvider } from  '../../providers/geoloc-service/geoloc-service';
import { CandyService } from '../../providers/candy-api-service/candy-api-service';

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

    this.candyService.getAllCandyFromApi()
    .subscribe(
      response => {
        console.log('candy loaded');
        // console.log(this.candyList);
      }
    )
  }



  start(): void {
    this.navCtrl.push(TabsPage);
  }

}
