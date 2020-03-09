export interface CandyI {
    
    _id: string;
    product_name: string;
    generic_name_fr?: string;
    image_front_url?: string;
    amountInBackpack?: number;

    brands_tags?: any[];
    ingredients_tags?: any[];
    nutriscore_data?: {};
    additive_tags?: any[];

    candyChecklist?: any[];
}


export interface CandyChecklistI {

    additives: boolean;
    preservatives: boolean;
    transfats: boolean;
    glutenFree: boolean;
    vegan: boolean;
    vegetarian: boolean;
    
}