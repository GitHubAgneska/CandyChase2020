import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { MapPage } from '../map/map';
import { GeolocServiceProvider } from  '../../providers/geoloc-service/geoloc-service';


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
    public geolocService: GeolocServiceProvider) { }

  /*   GoToPage(): void {
      setTimeout(() => {
        this.navCtrl.push(TabsPage);
      }, 1500);
    } */

  public ionViewDidLoad() {
   //  this.geolocService.getLocation();
   //  this.geolocService.loadmap();
  }

  start(): void {
    this.navCtrl.push(TabsPage);
  }

}
