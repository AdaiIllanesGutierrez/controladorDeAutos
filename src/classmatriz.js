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

    get matriz() {
        return this._matriz;    
    }

    obtenerDimension() {
        const tamanio = `${this.filas}x${this.columnas}`;
        return tamanio;
    }

    insertar_valor_por_defecto(valor) {
        for(var i = 0; i < this.filas; i ++) {
            for(var j = 0; j < this.columnas; j += 1) {
                this.matriz[i][j] = valor;
            }
        }
    }
}