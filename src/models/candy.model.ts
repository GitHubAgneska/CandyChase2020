import { CandyI } from './candy.interface';

export class Candy implements CandyI {

    _id = "";
    product_name = "no_name";
    generic_name_fr? = "no_img_url";
    image_front_url? = "no_url";
    amountInBackpack? = 0;

    brands_tags?  = [];
    ingredients_tags? = [];
    nutriscore_data? = {};
    additive_tags? = [];

    constructor(fields?: Partial<CandyI>)  {
        if(fields) {
            Object.assign(this, fields)
        }
    }
}