import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Candy } from '../../models/candy.model';
import { CandyI } from '../../models/candy.interface';

import { BackpackServiceProvider } from '../backpack-service/backpack-service';
import { shareReplay } from 'rxjs/operators';
const CACHE_SIZE = 2;

@Injectable()
export class CandyService {

    private cache$: Observable<Array<CandyI>>;
    public candyList: CandyI[];
    public candyItem: CandyI;

    constructor(
        private httpService: Http,
        public backpackService: BackpackServiceProvider) {

        this.candyItem = { "_id": "", "product_name": "", "amountInBackpack": null };
    }

    // share a single instance of api request across all subscribers
    get candy() {
        if (!this.cache$) {
            this.cache$ = this.getAllCandyFromApi().pipe(
                shareReplay(CACHE_SIZE)
            );
        }
        return this.cache$;
    }


    // get all candy list from api, max 50 results  | => TO DO : clean up doublons in list
    public getAllCandyFromApi(): Observable<CandyI[]> {
        return this.httpService.get("https://world.openfoodfacts.org/cgi/search.pl?search_terms=bonbon&search_simple=1&action=process&json=1&page_size=50")
            .pipe(
                map(
                    (response: Response) => {
                        const result: CandyI[] = response.json().products as CandyI[]; // '.products' => for object from api contains 2 other main fields!
                        console.log(result);
                        return result;
                    }
                )
            )
    }

    // get candy by id from api
    public getCandyById(candyId: string | number): Observable<Candy> {
        return this.httpService.get("https://world.openfoodfacts.org/api/v0/product/" + candyId + ".json").pipe(
            map(
                (response: Response) => {
                    const result: Candy = response.json().product as Candy;
                    // console.log(result);
                    return result;
                }
            )
        )
    }

}


