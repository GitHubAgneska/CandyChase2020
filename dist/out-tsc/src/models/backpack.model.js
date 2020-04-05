var Backpack = /** @class */ (function () {
    // candyTypes = [];
    // totalCandyTypes = null;
    function Backpack(fields) {
        this.userId = null;
        this.backpackId = null;
        this.itemsInBackpack = [];
        if (fields) {
            Object.assign(this, fields);
        }
    }
    return Backpack;
}());
export { Backpack };
//# sourceMappingURL=backpack.model.js.map