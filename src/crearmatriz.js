import { Matriz } from "./classmatriz";
import { Conduccion } from "./classmanejo";
import { Coordenada } from "./classcoordenada";

function prueba1(limitecadena) {
  let instrucciones = limitecadena.split("/");
  let dimMatriz = instrucciones[0].split(",");
  let posInicial = instrucciones[1];
  let secuencia=instrucciones[2];
  console.log(secuencia);
  posInicial = InsertarPosIni(posInicial);

  const filas = parseInt(dimMatriz[0]); 
  const columnas = parseInt(dimMatriz[1]);

  const x = parseInt(posInicial[0]);
  const y = parseInt(posInicial[1]);
  const orientacion = posInicial[2];

  let carro = new Conduccion(new Matriz(filas,columnas),new Coordenada(x,y,orientacion));
  carro.insertar_Vehiculo_en_mapa();
  carro.Movimientos(secuencia);
  return carro.mapa.matriz;
}

function InsertarPosIni(cadenaPosini) {
  const orientacion = cadenaPosini[cadenaPosini.length - 1];
  cadenaPosini = cadenaPosini.substring(0, cadenaPosini.length - 1);// elimina la ultima posicion 
  cadenaPosini = cadenaPosini.split(",");
  cadenaPosini.push(orientacion);
  return cadenaPosini;
}

export default prueba1;