import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { MapPage } from '../map/map';
import { ListPage } from '../list/list';
import { RulesPage } from '../rules/rules';
import { LoginPage } from  '../login/login';
import { LegalPage } from '../legal/legal';
import { AboutPage } from '../about/about';
import { AgeSelectPage } from '../age-select/age-select';

@IonicPage()
@Component({
  selector: 'page-my-home',
  templateUrl: 'my-home.html',
})
export class MyHomePage {

  public batsBg = "assets/graphicMat/gradient_bats.png";
  public img_candyTitle = "assets/graphicMat/title_candy.png";
  public img_chaseTitle = "assets/graphicMat/title_chase.png";
  public img_circles = "assets/graphicMat/circles.png";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams ) {}


  goto() :void {
    this.navCtrl.push(ListPage);
  }

  goToStart() {
    this.navCtrl.push(AgeSelectPage);
  }

  goToRules() {
    this.navCtrl.push(RulesPage);
  }

  goToLogin() {
    this.navCtrl.push(LoginPage);
  }

  goToLegal() {
    this.navCtrl.push(LegalPage);
  }

  goToAbout() {
    this.navCtrl.push(AboutPage);
  }

}
