import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Candy } from '../../models/candy.model';
import { BackpackServiceProvider } from '../backpack-service/backpack-service';

@Injectable()
export class CandyService {

    public candyList: Candy[];
    public candyItem:Candy;

    constructor(private httpService: Http, public backpackService: BackpackServiceProvider) {

        this.candyItem = { "_id": "", "product_name": "", "amountInBackpack": null };
    }

    // get all candy list from api, max 50 results  | => TO DO : clean up doublons in list
    public getAllCandyFromApi(): Observable<Candy[]> {
        return this.httpService.get("https://world.openfoodfacts.org/cgi/search.pl?search_terms=bonbon&search_simple=1&action=process&json=1&page_size=50")
        .pipe(
            map(
            (response: Response) => {
                const result: Candy[] = response.json().products as Candy[]; // '.products' => for object from api contains 2 other main fields!
                // console.log(result);
                return result;
                }
            )
        )   
    }

    // get candy by id from api
    public getCandyById(candyId:string | number): Observable<Candy> {
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


