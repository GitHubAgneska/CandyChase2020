import { BackpackI } from './backpack.interface';

export class Backpack implements BackpackI {

    userId = null;    
    backpackId = null;
    itemsInBackpack = [];
    // candyTypes = [];
    // totalCandyTypes = null;

    constructor(fields?: Partial<BackpackI>) {
        if(fields) {
            Object.assign(this, fields)
        }
    }
}