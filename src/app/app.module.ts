
/* import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth'; */
import { firebaseConfig } from '../../config';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyApp } from './app.component';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { FormsModule } from '@angular/forms';

import { Geolocation } from '@ionic-native/geolocation';
import { GeolocServiceProvider } from '../providers/geoloc-service/geoloc-service';
import { Diagnostic } from '@ionic-native/diagnostic';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CandyService } from '../providers/candy-api-service/candy-api-service';
import { LevelServiceProvider } from '../providers/level-api-service/level-api-service';
import { BackpackServiceProvider } from '../providers/backpack-service/backpack-service';

import { PipesModule } from '../pipes/pipes.module';
import { KeyvaluePipe } from '../pipes/keyvalue/keyvalue';
import { RemoveUnderscorePipe } from '../pipes/remove-underscore/remove-underscore';

import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { MyHomePage } from './../pages/my-home/my-home';
import { MapPage } from '../pages/map/map';
import { ListPage } from '../pages/list/list';
import { BackpackPage } from '../pages/backpack/backpack';
import { LevelPage } from './../pages/level/level';
import { CandyDetailsPage } from './../pages/candy-details/candy-details';
import { MyAddressesPage } from '../pages/my-addresses/my-addresses';

import { RulesPage } from '../pages/rules/rules';
import { LegalPage } from '../pages/legal/legal';
import { AboutPage } from '../pages/about/about';
import { AgeSelectPage } from '../pages/age-select/age-select';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    WelcomePage,
    LoginPage,
    MapPage,
    BackpackPage,
    ListPage,
    MyHomePage,
    LevelPage,
    CandyDetailsPage,
    RulesPage,
    LegalPage,
    AboutPage,
    MyAddressesPage,
    AgeSelectPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    PipesModule,
    IonicModule.forRoot(MyApp),
/*     AngularFireModule.initializeApp(firebaseConfig.fire), */
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    WelcomePage,
    MapPage,
    BackpackPage,
    ListPage,
    TabsPage,
    RulesPage,
    LegalPage,
    AboutPage,
    MyAddressesPage,
    MyHomePage,
    LevelPage,
    CandyDetailsPage,
    AgeSelectPage
  ],
  providers: [
/*     AngularFireAuth, */
    StatusBar,
    Geolocation,
    Diagnostic,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CandyService,
    GeolocServiceProvider,
    LevelServiceProvider,
    KeyvaluePipe,
    RemoveUnderscorePipe,
    BackpackServiceProvider
  ],
  exports : [
    KeyvaluePipe,
    RemoveUnderscorePipe
  ]
})
export class AppModule {}
