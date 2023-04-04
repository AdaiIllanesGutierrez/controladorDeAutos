//import Matriz from "./controladorDeAuto";

// const first = document.querySelector("#primer-numero");
// const second = document.querySelector("#segundo-numero");
// const form = document.querySelector("#sumar-form");
// const div = document.querySelector("#resultado-div");
// Obtener la referencia al elemento div que contendrá la tabla
var tablaDiv = document.getElementById("tabla-matriz");

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
var miMatriz=Matriz(3,4);
console.log(miMatriz);

var tabla = document.createElement("table");
var encabezado = tabla.createTHead().insertRow();

for (var i = 0; i < miMatriz.length; i++) {
  var fila = tabla.insertRow();
  for (var j = 0; j < miMatriz[i].length; j++) {
    var celda = fila.insertCell();
    celda.appendChild(document.createTextNode(miMatriz[i][j]));
  }
}

// Agregar la tabla al elemento div
tablaDiv.appendChild(tabla);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // const firstNumber = Number.parseInt(first.value);
  // const secondNumber = Number.parseInt(second.value);

  // div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
 
});
