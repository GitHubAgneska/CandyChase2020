var Level = /** @class */ (function () {
    function Level(fields) {
        this.idLevel = null;
        this.levelName = '';
        // totalPoints = null;
        this.levelImg = '';
        this.bannerMessage = '';
        this.levelCard = '';
        this.levelCardName = '';
        if (fields) {
            Object.assign(this, fields);
        }
    }
    return Level;
}());
export { Level };
//# sourceMappingURL=level.model.js.map