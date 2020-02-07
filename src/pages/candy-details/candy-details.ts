import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CandyService } from '../../providers/candy-api-service/candy-api-service';
import { Candy } from '../../models/candy.model';
import { KeyvaluePipe } from '../../pipes/keyvalue/keyvalue';

@IonicPage()
@Component({
  selector: 'page-candy-details',
  templateUrl: 'candy-details.html',
})
export class CandyDetailsPage {

  public candyList: Candy[];
  public candyItem:Candy;
  public candyOfList:{};
  public candyId: string | number;

  public showIngredients: boolean;
  public showAllergens: boolean;
  public showNutriscore: boolean;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public candyService: CandyService,
    public keyvaluepipe: KeyvaluePipe 
    ) {

      this.candyId = this.navParams.get("idparam");
      this.candyItem = { _id:"", product_name: "", generic_name_fr:"",
      image_front_url:"", brands_tags: [], ingredients_tags:[],
      nutriscore_data:[], additive_tags:[]};

      this.showIngredients = false;
      this.showAllergens = false;
      this.showNutriscore = false;

    }

  ionViewDidLoad() {}

  public ngOnInit() : void {

    this.candyService.getCandyById(this.candyId)
    .subscribe( (response:Candy ) => {
      this.candyItem = response;
      console.log("je suis candyItem response: " , this.candyItem);

      this.candyOfList = response;
      console.log("je suis candyOfList", this.candyOfList);

      this.candyItem.product_name = response.product_name;
      this.candyItem.image_front_url = response.image_front_url;
      this.candyItem.ingredients_tags = response.ingredients_tags;
      this.candyItem.nutriscore_data = response.nutriscore_data;

      console.log(this.candyItem.product_name, this.candyItem.ingredients_tags)
    })
  }

  toggleIngredients() {
    this.showIngredients = !this.showIngredients;
  }

  toggleAllergens(){
    this.showAllergens = !this.showAllergens;
  }

  toggleNutriscore(){
    this.showNutriscore = !this.showNutriscore;
  }


  goBack(){
    this.navCtrl.pop();
  }

}
