import { CandyI } from "./candy.interface";

export interface BackpackI {

    userId: number;
    backpackId: number;
    itemsInBackpack: CandyI[];

    // candyTypes: any[];
    // totalCandyTypes: number;

}