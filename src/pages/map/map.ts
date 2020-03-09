import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GeolocServiceProvider } from '../../providers/geoloc-service/geoloc-service';
import { Coordonne } from '../../models/coordonne.model';
import { Geolocation } from '@ionic-native/geolocation';
import { MyAddressesPage } from '../my-addresses/my-addresses';
import leaflet from 'leaflet';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  @ViewChild('map') mapContainer: ElementRef;

  public map: any;
  public geo: Coordonne;
 //  public currentUserAgeRange:number;

  constructor(
    public navCtrl: NavController,
    public geolocService: GeolocServiceProvider,
    public geolocation: Geolocation) {}

  public ngOnInit(): void {
    // this.currentUserAgeRange = this.geolocService.getCurrentAgeRange();
    // console.log(this.currentUserAgeRange);
  }

  public ionViewWillEnter(): void {}

  
  public ionViewDidEnter() {
      this.geolocService.newCoords(500);
      this.geolocService.loadmap();
  }

  public addCircle(){
    this.geolocService.addCircle();
  }  

  public myAddresses() {
    this.navCtrl.push(MyAddressesPage);
  }

  public ionViewWillLeave() {
    // if(this.map) { this.map.remove(); }
  }

}