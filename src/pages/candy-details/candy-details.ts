import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CandyService } from '../../providers/candy-api-service/candy-api-service';
import { Candy, CandyChecklist } from '../../models/candy.model';
import { KeyvaluePipe } from '../../pipes/keyvalue/keyvalue';
import { RemoveUnderscorePipe } from '../../pipes/remove-underscore/remove-underscore';
import { RemoveCharsPipe } from '../../pipes/remove-chars/remove-chars';

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

  public candyChecklist: CandyChecklist;
  public additives: boolean;
  public preservatives: boolean;
  public organic: boolean;
  public glutenFree: boolean;
  public vegan: boolean;
  public vegetarian: boolean;

  public iconTrue = 'assets/icon/icon_true.png';
  public iconFalse = 'assets/icon/icon_false.png';

  public showIngredients: boolean;
  public showAllergens: boolean;
  public showNutriscore: boolean;
  public selected: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public candyService: CandyService,
    public keyvaluepipe: KeyvaluePipe,
    public removeUnderscore: RemoveUnderscorePipe,
    public removeChars: RemoveCharsPipe
    ) {

      this.candyId = this.navParams.get("idparam");
      this.candyItem = { _id:"", product_name: "", generic_name_fr:"",
      image_front_url:"", brands_tags: [], ingredients_tags:[],
      nutriscore_data:[], additives_tags:[], allergens_hierarchy:[], labels:""};

      this.candyChecklist = { additives: false,
                              preservatives: false,
                              organic: false,
                              glutenFree: false,
                              vegan: false,
                              vegetarian: false };

      this.showIngredients = false;
      this.showAllergens = false;
      this.showNutriscore = false;
    }

  ionViewDidLoad() {}

  public ngOnInit() : void {

    this.candyService.getCandyById(this.candyId)
    .subscribe( (response:Candy ) => {
      this.candyItem = response;
      this.candyOfList = response;

      this.candyItem.product_name = response.product_name;
      this.candyItem.image_front_url = response.image_front_url;
      this.candyItem.ingredients_tags = response.ingredients_tags;
      this.candyItem.nutriscore_data = response.nutriscore_data;
      this.candyItem.allergens_hierarchy = response.allergens_hierarchy;
      this.candyItem.additives_tags = response.additives_tags;
      this.candyItem.labels = response.labels;

      console.log('candy response: ', response);
      
      for ( const x of this.candyItem.allergens_hierarchy ) {
        if (x === 'gluten' ) {
          this.candyChecklist.glutenFree = false;
          this.glutenFree = false;
        }
      }
     /*  ( x === 'milk' ||  x === 'butter' ||  x === 'eggs') */
      for (const x of this.candyItem.ingredients_tags ) { 
        if ( x === 'milk'){
          this.vegan = false;
        }
        if ( x === 'gelatin'){
          this.vegetarian = false;
          this.vegan = false;
        } else { this.vegetarian = true;}
      }

      if ( this.candyItem.additives_tags && this.candyItem.additives_tags.length>0){
        this.additives = true;
      }

      if ( this.candyItem.labels && this.candyItem.labels.length > 0 ) {
        this.candyItem.labels.split(',').forEach(x => { if ( x === 'bio' ||  x === 'ab') {
          this.organic = true;}
        });
      }
    })
  }

  toggleIngredients() {
    this.showIngredients = !this.showIngredients;
    this.selected =! this.selected;
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
