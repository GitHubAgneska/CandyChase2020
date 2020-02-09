import { Component, OnInit } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Candy } from '../../models/candy.model';
import { CandyService } from '../../providers/candy-api-service/candy-api-service';
import { BackpackServiceProvider } from '../../providers/backpack-service/backpack-service'
import { GeolocServiceProvider } from '../../providers/geoloc-service/geoloc-service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit {

  public candyList: Candy[];
  public candyItem: Candy;

  public itemsInBackpack: Candy[];
  public totalCandy: number;

  public geo: any;

  constructor(
    private toast: ToastController,
    public candyService: CandyService,
    public backpackService: BackpackServiceProvider,
    public geolocation: Geolocation,
    public geolocService: GeolocServiceProvider) {

    this.candyList = [];
    this.candyItem = {
      _id: "", product_name: "", amountInBackpack: 0,
      image_front_url: "", brands_tags: [], ingredients_tags: [],
      nutriscore_data: [], additive_tags: []
    };
    this.itemsInBackpack = [];
    this.totalCandy = 0;
  }

  public ngOnInit(): void {
    this.candyService.getAllCandyFromApi()
      .subscribe(
        response => {
          this.candyList = response;
          // console.log(this.candyList);
        }
      )
  }

  public addCandyToBackpack(candyItem:Candy) {

    this.backpackService.currentBackpackCount.subscribe(data => this.totalCandy = data);
    
    // alert points as a new candy has been added
    this.toast.create({
        message: `+1 Point! ${name}`,
        duration: 300,
        position: "middle",
        cssClass: "custom-toast"
      }).present();

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