import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GeolocServiceProvider } from '../../providers/geoloc-service/geoloc-service';
import { MapPage } from '../map/map';

@IonicPage()
@Component({
  selector: 'page-age-select',
  templateUrl: 'age-select.html',
})
export class AgeSelectPage {

  public ageRange: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public geolocService: GeolocServiceProvider) {
  }

  ionViewDidLoad() {}

  setAge(ageRange:number){
    this.ageRange = ageRange;
    console.log("AGE: ", this.ageRange);
    // this.geolocService.currentUserAgeRange.subscribe(currentAge => this.ageRange = currentAge);
    this.geolocService.setCurrentAgeRange(this.ageRange);
    this.navCtrl.push(MapPage)
/*     .then(() => {
          const index = this.navCtrl.getActive().index;
          this.navCtrl.remove(index-1);
      }); */
  }
  
}
