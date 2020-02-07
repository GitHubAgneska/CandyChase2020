import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyHomePage } from './my-home';

@NgModule({
  declarations: [
    MyHomePage,
  ],
  imports: [
    IonicPageModule.forChild(MyHomePage),
  ],
})
export class MyHomePageModule {}
