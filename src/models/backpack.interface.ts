import { CandyTypeInBackpackI } from "./candyTypeInBackpack.interface";

export interface BackpackI {

    userId: number;
    backpackId: number;
    itemsInBackpack: CandyTypeInBackpackI[];

    // candyTypes: any[];
    // totalCandyTypes: number;

}