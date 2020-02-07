import { CoordonneI } from '../models/coordonne.interface';

export class Coordonne implements CoordonneI {
    coords = {
        accuracy: 42,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: 0,
        longitude: 0,
        speed: null,
    }
}