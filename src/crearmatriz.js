
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

// Ejemplo de uso:
//const cadenaDeNumeros = "1,2,3,4,5";
//const numeros = obtenerNumeros(cadenaDeNumeros);
//console.log(numeros); // Imprime [1, 2, 3, 4, 5]

function Matriz(cadenaDeNumeros) {
  const numeros = obtenerNumeros(cadenaDeNumeros);
  let filas=numeros[0];
  let columnas= numeros[1];
  let matriz = new Array(filas);
  for (var i = 0; i < filas; i++) {
    matriz[i] = new Array(columnas);
  }
  valoresparaMatriz(matriz);
  return matriz;
}

function valoresparaMatriz(matriz) {
  for(var fila = 0; fila < matriz.length; fila ++) {
    for(var columna = 0; columna < matriz[fila].length; columna ++) {
      matriz[fila][columna] = "0"
    }
  }
} 
export default Matriz;