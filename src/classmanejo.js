
export class Conduccion {
    constructor(mapa, coordenadas) {
        this._mapa = mapa;
        this._coordenadas = coordenadas;
        this._posActualF=this.coordenadas.filas;
        this._posActualC=this._coordenadas.columnas;
    }

    get mapa() {
        return this._mapa;
    }
    get coordenadas() {
        return this._coordenadas;
    }

    get posActualF() {
        return this._posActualF;
    }
    get posActualC() {
        return this._posActualC;
    }

    set posActualF(nuevo_posActualF){
        this._posActualF=nuevo_posActualF;
    }
    set posActualC(nuevo_posActualC){
        this._posActualC=nuevo_posActualC;
    }

    insertar_Vehiculo_en_mapa() {
        this.mapa.insertar_valor_por_defecto("[ ]");
        const columna = this.coordenadas.x - 1;
        const fila = this.mapa.filas - this.coordenadas.y;
        this.mapa.matriz[fila][columna] = 1;
        this.posActualF=fila;
        this.posActualC=columna;

    }
    Movimientos(serieDeMovimientos){
       for(let i=0;i<serieDeMovimientos.length;i++){
        if (this.coordenadas.orientacion=="N") {
            this.MovimientoConOrientacionNorte(serieDeMovimientos[i]);
        }
        if (this.coordenadas.orientacion=="E") this.MovimientoConOrientacionEste(serieDeMovimientos[i]);
        if (this.coordenadas.orientacion=="O") this.MovimientoConOrientacionOeste(serieDeMovimientos[i]);
        }
    }

    MovimientoConOrientacionNorte(cadena) {
        //A -1filas; I -1columnas ;D+1columnas
        console.log(`${this.posActualF}`);
        let nuevaFila=this.posActualF;
        let nuevaColumna=this.posActualC;

        if(cadena=="A"&& (nuevaFila-1 >= 0))
        {
            nuevaFila--;
       
        }
        if(cadena=="I"&& (nuevaColumna - 1 >= 0)) nuevaColumna-=1;
        if(cadena=="D"&& (nuevaColumna+1<this.mapa.columnas))nuevaColumna+=1;
        
        this.mapa.matriz[this.posActualF][this.posActualC]="[ ]";
        this.mapa.matriz[nuevaFila][nuevaColumna]=2;
        this.posActualF=nuevaFila;
        this.posActualC=nuevaColumna;

    }
    MovimientoConOrientacionEste(cadena){
        //A +1columna; I-1fila ; D+1 fila 
        let nuevaFila=this.posActualF;
        let nuevaColumna=this.posActualC;
        if(cadena=="A"&& (nuevaColumna+1<this.mapa.columnas))nuevaColumna+=1;
        if(cadena=="I"&& (nuevaFila-1>=0))nuevaFila-=1;
        if(cadena=="D"&& (nuevaFila+1<this.mapa.filas))nuevaFila+=1;
        this.mapa.matriz[this.posActualF][this.posActualC]="[ ]";
        this.mapa.matriz[nuevaFila][nuevaColumna]=2;
        this.posActualF=nuevaFila;
        this.posActualC=nuevaColumna;

    }

    MovimientoConOrientacionOeste(cadena) {
        //A -1columna; I+1fila ; D-1 fila
        let nuevaFila=this.posActualF;
        let nuevaColumna=this.posActualC;
        if(cadena=="A"&& (nuevaColumna-1>=0)) nuevaColumna-=1;
        if(cadena=="I"&& (nuevaFila+1<this.mapa.filas))nuevaFila+=1;
        if(cadena=="D"&& (nuevaFila-1>=0)) nuevaFila-=1;
        this.mapa.matriz[this.posActualF][this.posActualC]="[ ]";
        this.mapa.matriz[nuevaFila][nuevaColumna]=2;
        this.posActualF=nuevaFila;
        this.posActualC=nuevaColumna;
    }
    

}
