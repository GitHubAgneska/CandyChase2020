import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgeSelectPage } from './age-select';

@NgModule({
  declarations: [
    AgeSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(AgeSelectPage),
  ],
})
export class AgeSelectPageModule {}
