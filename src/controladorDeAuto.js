function Matriz(filas, columnas) {
    var matriz = [];
    for (var i = 0; i < filas; i++) {
      matriz[i] = [];
      for (var j = 0; j < columnas; j++) {
        
        matriz[i][j] = "0"; 
      }
    }
    return matriz;
  }
  
  export default Matriz;