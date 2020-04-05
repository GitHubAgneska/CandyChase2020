var Candy = /** @class */ (function () {
    function Candy(fields) {
        this._id = "";
        this.product_name = "no_name";
        this.generic_name_fr = "no_img_url";
        this.image_front_url = "no_url";
        this.amountInBackpack = 0;
        this.brands_tags = [];
        this.ingredients_tags = [];
        this.nutriscore_data = {};
        this.additives_tags = [];
        this.allergens_hierarchy = [];
        this.labels = "";
        this.candyChecklist = CandyChecklist;
        if (fields) {
            Object.assign(this, fields);
        }
    }
    return Candy;
}());
export { Candy };
var CandyChecklist = /** @class */ (function () {
    function CandyChecklist() {
        this.additives = false;
        this.preservatives = false;
        this.organic = false;
        this.glutenFree = false;
        this.vegan = false;
        this.vegetarian = false;
    }
    return CandyChecklist;
}());
export { CandyChecklist };
//# sourceMappingURL=candy.model.js.map