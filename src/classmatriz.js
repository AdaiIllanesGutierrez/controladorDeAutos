export class Matriz {
    constructor(filas, columnas) {
        this._filas = parseInt(filas);
        this._columnas = parseInt(columnas);
        this._matriz = new Array(filas);
        for(var i = 0; i < filas; i++) {
            this._matriz[i] = new Array(columnas);
        }
    }

    get filas() {
        return this._filas;
    }

    get columnas() {
        return this._columnas;    
    }

    obtenerDimesion() {
        
        const tamanio = `${this.filas}x${this.columnas}`;
        return tamanio;
    }
}