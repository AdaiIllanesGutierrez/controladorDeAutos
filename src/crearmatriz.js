import { Matriz } from "./classmatriz";
import { Conduccion } from "./classmanejo";
import { Coordenada } from "./classcoordenada";
let instrucciones;
let dimMatriz;
let posInicial ;
let secuencia;
let posFinalFila;
let posFinalColumna;
let carro;
function prueba1(limitecadena) {
  instrucciones = limitecadena.split("/");
  dimMatriz = instrucciones[0].split(",");
  posInicial = instrucciones[1];
  secuencia=instrucciones[2];

  posInicial = InsertarPosIni(posInicial);

  const filas = parseInt(dimMatriz[0]); 
  const columnas = parseInt(dimMatriz[1]);

  const x = parseInt(posInicial[0]);
  const y = parseInt(posInicial[1]);
  const orientacion = posInicial[2];

  carro = new Conduccion(new Matriz(filas,columnas),new Coordenada(x,y,orientacion));
  carro.insertar_Vehiculo_en_mapa();
  carro.Movimientos(secuencia);
  //posInicial=carro.coordenadas.x;
  posFinalFila=carro._posActualF+1;
  posFinalColumna=carro._posActualC+1;
  return carro.mapa.matriz;
}

function MostrarPosInicial(){
  return posInicial;
}

function MostrarMov(){
  return secuencia;
}

function MostrarPosFinal(){
 let nPosFinal="";
 
  nPosFinal= toString(carro.mapa.filas);
  console.log(nPosFinal);
  return nPosFinal;
}

function InsertarPosIni(cadenaPosini) {
  const orientacion = cadenaPosini[cadenaPosini.length - 1];
  cadenaPosini = cadenaPosini.substring(0, cadenaPosini.length - 1);// elimina la ultima posicion 
  cadenaPosini = cadenaPosini.split(",");
  cadenaPosini.push(orientacion);
  return cadenaPosini;
}

export {prueba1,MostrarPosInicial,MostrarMov,MostrarPosFinal};