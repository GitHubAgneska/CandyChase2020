import { Component, OnInit } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Candy ,CandyChecklist } from '../../models/candy.model';
import { CandyI, CandyChecklistI } from '../../models/candy.interface';
import { CandyService } from '../../providers/candy-api-service/candy-api-service';
import { BackpackServiceProvider } from '../../providers/backpack-service/backpack-service'
import { GeolocServiceProvider } from '../../providers/geoloc-service/geoloc-service';
import { ShortenStringPipe } from '../../pipes/shorten-string/shorten-string';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit {

  candyList$: Observable<Array<CandyI>>;

  public candyList: CandyI[];
  public candyItem: Candy;
  public candyChecklist: CandyChecklist;

  public itemsInBackpack: Candy[];
  public totalCandy: number;

  public geo: any;

  constructor(
    private toast: ToastController,
    public candyService: CandyService,
    public backpackService: BackpackServiceProvider,
    public geolocation: Geolocation,
    public geolocService: GeolocServiceProvider,
    public shortenString: ShortenStringPipe) {

    this.candyList = [];
    this.candyItem = { _id: "", product_name: "", amountInBackpack: 0,
      image_front_url: "", brands_tags: [], ingredients_tags: [],
      nutriscore_data: [], additives_tags: [], allergens_hierarchy:[] };
      
    this.candyChecklist = { additives: false,
                            preservatives: false,
                            organic: false,
                            glutenFree: false,
                            vegan: false,
                            vegetarian: false };
    this.itemsInBackpack = [];
    this.totalCandy = 0;
    // this.youLevelUp = false;
  }

  public ngOnInit(): void {}

  public ionViewWillEnter() {

    //this.candyList$ = this.candyService.candy;
    this.candyService.getAllCandyFromApi()
      .subscribe(
        (response: CandyI[]) => {
          this.candyList = response;
          // console.log(this.candyList);
        }
      )
  }

  public addCandyToBackpack(candyItem:Candy) {

    this.backpackService.currentBackpackCount.subscribe(data => this.totalCandy = data);
    
    this.candyItem = candyItem;
    this.candyItem.product_name = candyItem.product_name;
    this.candyItem._id = candyItem._id;
    this.candyItem.amountInBackpack = candyItem.amountInBackpack | 0;

    // new candy has not been added yet
    let added = false;
  
    // look into items of backpack if new candy id already exists
    for (let item of this.itemsInBackpack) {
      // if id exists : only increase amount of this candy
      if (item.product_name === this.candyItem.product_name) {
        item.amountInBackpack +=1;
        added = true;
        break;
      }
    }
    // if id does not exist : add new candy to backpack (and increase amount)
    if (!added) {
      this.candyItem.amountInBackpack += 1;
      this.itemsInBackpack.push(this.candyItem);
    }
    //console.log("ITEMS : ", this.itemsInBackpack);
    //console.log(this.itemsInBackpack.forEach(item => console.log(item.amountInBackpack)));

    // save new total of all candy
    this.backpackService.update_totalCandyCount(this.totalCandy+=1);
    // save backpack new state 
    this.backpackService.update_backpack(this.itemsInBackpack);
    
    //this.geolocService.getLocation();

    // alert new points as user clicks '+' 
    this.toast.create({
      message: `+1 Point! ${name}`,
      duration: 300,
      position: "middle",
      cssClass: "custom-toast"
    }).present();
    this.toast.create({
      message: `TOTAL POINTS :`+ this.totalCandy + `!`,
      duration: 400,
      position: "middle",
      cssClass: "custom-toast"
    }).present();

    if ( this.totalCandy%5 === 0 ){
      this.toast.create({
        duration: 800,
        position: "middle",
        cssClass: "levelUp"
      }).present();
      this.toast.create({

        duration: 400,
        position: "middle",
        cssClass: "newCard"
      }).present();
    }
  }
}




/*
  public getLocation() {
    this.geolocation.getCurrentPosition().then((res) => {
      this.geolocService.setGeo(res);
      console.log('latitude: ' + res.coords.latitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  } */
