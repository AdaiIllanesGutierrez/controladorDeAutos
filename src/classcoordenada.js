export class Coordenada {
    constructor(x, y, orientacion) {
        this._x = x;
        this._y = y;
        this._orientacion = orientacion;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }
}