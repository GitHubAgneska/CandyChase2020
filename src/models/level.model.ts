import { LevelI } from './level.interface';

export class Level implements LevelI {

    idLevel? = null;
    levelName = '';
    // totalPoints = null;
    levelImg = '';
    bannerMessage = '';
    levelCard = '';
    levelCardName= '';

    constructor (fields?: Partial<LevelI>) {
        if (fields) {
            Object.assign(this, fields);
        }
    }   

}