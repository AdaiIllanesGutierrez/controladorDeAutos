import { Matriz } from "./classmatriz";
import { Conduccion } from "./classmanejo";
import { Coordenada } from "./classcoordenada";
function cMatriz(limitecadena) {
  const limites = obtenerNumeros(limitecadena);
  const filas = parseInt(limites[0]); 
  const columnas = parseInt(limites[1]);
  /*let matriz = new Array(filas);
  for (var i = 0; i < filas; i++) {
    matriz[i] = new Array(columnas);
  }*/
  //let matriz1 = new Matriz(filas, columnas);
  let con = new Conduccion(new Matriz(filas, columnas), new Coordenada(2,3,"N"));
  con.insertar_Vehiculo_en_mapa();
  return con.mapa.matriz;
}

function obtenerNumeros(cadena) {
  const numerosEnCadena = cadena.split(",");
  const numeros = [];
  for (let i = 0; i < numerosEnCadena.length; i++) {
    const numero = parseInt(numerosEnCadena[i]);

    if (!isNaN(numero)) {
      numeros.push(numero);
    }
  }
  
  return numeros;
}

function valoresparaMatriz(matriz) {
  for(var fila = 0; fila < matriz.length; fila ++) {
    for(var columna = 0; columna < matriz[fila].length; columna ++) {
      matriz[fila][columna] = "0"
    }
  }
} 


export default cMatriz;