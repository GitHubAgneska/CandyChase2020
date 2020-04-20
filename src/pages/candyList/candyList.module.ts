import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandyListPage } from './candyList';

@NgModule({
    declarations: [
        CandyListPage,
    ],
    imports: [
        IonicPageModule.forChild(CandyListPage),
    ],
})
export class ListPageModule { }