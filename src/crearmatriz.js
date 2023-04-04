function Matriz(filas, columnas) {
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