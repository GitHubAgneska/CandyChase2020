import * as tslib_1 from "tslib";
// DEPENDENCIES ***********************************************************************************
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyApp } from './app.component';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';
import { GeolocServiceProvider } from '../providers/geoloc-service/geoloc.service';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// SERVICES ***************************************************************************************
import { CandyAPIService } from '../providers/candy-api-service/candy-api.service';
import { LevelServiceProvider } from '../providers/level-api-service/level-api.service';
import { BackpackServiceProvider } from '../providers/backpack-service/backpack-service';
import { MapServiceProvider } from '../providers/map-service/map-service';
import { LevelService } from '../providers/level-service/level.service';
import { BrowserStorageService } from '../providers/storage-service/browserStorage-service';
import { ErrorServiceProvider } from '../providers/error-service/error.service';
// PIPES *******************************************************************************************
import { PipesModule } from '../pipes/pipes.module';
import { KeyvaluePipe } from '../pipes/keyvalue/keyvalue';
import { RemoveUnderscorePipe } from '../pipes/remove-underscore/remove-underscore';
import { ShortenStringPipe } from '../pipes/shorten-string/shorten-string';
import { RemoveCharsPipe } from '../pipes/remove-chars/remove-chars';
// PAGES *******************************************************************************************
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { MyHomePage } from './../pages/my-home/my-home';
import { MapPage } from '../pages/map/map';
import { ListPage } from '../pages/list/list';
import { BackpackPage } from '../pages/backpack/backpack';
import { LevelPage } from './../pages/level/level';
import { CandyDetailsPage } from './../pages/candy-details/candy-details';
import { MyAddressesPage } from '../pages/my-addresses/my-addresses';
import { MyCardsPage } from '../pages//my-cards/my-cards';
// STATIC PAGES **************************************************************************************
import { RulesPage } from '../pages/rules/rules';
import { LegalPage } from '../pages/legal/legal';
import { AboutPage } from '../pages/about/about';
import { AgeSelectPage } from '../pages/age-select/age-select';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
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
                AgeSelectPage,
                MyCardsPage
            ],
            imports: [
                BrowserModule,
                HttpModule,
                HttpClientModule,
                FormsModule,
                PipesModule,
                IonicModule.forRoot(MyApp),
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
                AgeSelectPage,
                MyCardsPage
            ],
            providers: [
                /*     AngularFireAuth, */
                StatusBar,
                Geolocation,
                // Diagnostic,
                SplashScreen,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                CandyAPIService,
                GeolocServiceProvider,
                LevelServiceProvider,
                BackpackServiceProvider,
                KeyvaluePipe,
                RemoveUnderscorePipe,
                ShortenStringPipe,
                RemoveCharsPipe,
                MapServiceProvider,
                LevelService,
                BrowserStorageService,
                ErrorServiceProvider
                // { provide: BROWSER_STORAGE, {} etc  } => ? 
            ],
            exports: [
                KeyvaluePipe,
                RemoveUnderscorePipe,
                ShortenStringPipe,
                RemoveCharsPipe
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map