import { Coordenada } from "./classcoordenada";
import { Matriz } from "./classmatriz";
export class Conduccion {
    constructor(mapa, coordenadas) {
        this._mapa = mapa;
        this._coordenadas = coordenadas;
        this._posActualF;
        this._posActualC;
    }

    get mapa() {
        return this._mapa;
    }
    get coordenadas() {
        return this._coordenadas;
    }

    insertar_Vehiculo_en_mapa() {
        this.mapa.insertar_valor_por_defecto(0);
        const columna = this.coordenadas.x - 1;
        const fila = this.mapa.filas - this.coordenadas.y;
        this.mapa.matriz[fila][columna] = 1;
    }
}