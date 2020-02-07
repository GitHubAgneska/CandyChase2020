import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandyDetailsPage } from './candy-details';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    CandyDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CandyDetailsPage),
    PipesModule
  ],
})
export class CandyDetailsPageModule {}
