import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GeolocServiceProvider } from '../../providers/geoloc-service/geoloc-service';
import { Coordonne } from '../../models/coordonne.model';
import { Geolocation } from '@ionic-native/geolocation';
import { MyAddressesPage } from '../my-addresses/my-addresses';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  @ViewChild('map') mapContainer: ElementRef;

  public map: any;
  public geo: Coordonne;

  public currentUserAgeRange:number;

  constructor(
    public navCtrl: NavController,
    public geolocService: GeolocServiceProvider,
    public geolocation: Geolocation) {
    }

  public ngOnInit(): void {
    // this.currentUserAgeRange = this.geolocService.getCurrentAgeRange();
    // console.log(this.currentUserAgeRange);
    this.geolocService.loadmap();
  }

  public ionViewDidEnter(): void {
    // console.log("ENTERED");
  }

  public ionViewDidLoad() {
    // console.log("LOADED");
    this.geo = this.geolocService.getGeo();
    console.log(this.geo);
    if (this.geo != undefined) {
      this.geolocService.setMarker();
    }
    this.geolocService.getLocation();
    // this.newCoords(500);
  }


  public addCircle(){
    this.geolocService.addCircle();
    // this.geolocService.addBoundaries();
  }  

  public myAddresses() {
    this.navCtrl.push(MyAddressesPage);
  }

}