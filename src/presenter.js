import Matriz from "./crearmatriz";
import { Matriz } from "./classmatriz";
const cadenalimite = document.querySelector("#cadena");
const form = document.querySelector("#sumar-form");
// const div = document.querySelector("#resultado-div");
// Obtener la referencia al elemento div que contendrá la tabla
var tablaDiv = document.getElementById("tabla-matriz");




form.addEventListener("submit", (event) => {
  event.preventDefault();
  let mat = new Matriz(3,3);
  console.log(mat.obtenerDimesion());
  /*let miMatriz = Matriz(cadenalimite.value);
  var tabla = document.createElement("table");
  for (var i = 0; i < miMatriz.length; i++) {
  var fila = tabla.insertRow();
  for (var j = 0; j < miMatriz[i].length; j++) {
    var celda = fila.insertCell();
    celda.appendChild(document.createTextNode(miMatriz[i][j]));
  }
}
tablaDiv.appendChild(tabla);
*/
});


