
import {insercion_Recorrido_del_Carro,MostrarPosInicial,MostrarMov,MostrarPosFinal} from "./crearmatriz";
const cadenalimite = document.querySelector("#cadena");
const form = document.querySelector("#sumar-form");
// const div = document.querySelector("#resultado-div");
// Obtener la referencia al elemento div que contendrá la tabla
var tablaDiv = document.getElementById("tabla-matriz");
let posInicialDiv=document.getElementById("posInicial");
let movimientosDiv=document.getElementById("movimientos");
let posFinalDiv=document.getElementById("posFinal");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let miMatriz = insercion_Recorrido_del_Carro(cadenalimite.value);
  var tabla = document.createElement("table");
  for (var i = 0; i < miMatriz.length; i++) {
  var fila = tabla.insertRow();
  for (var j = 0; j < miMatriz[i].length; j++) {
    var celda = fila.insertCell();
    celda.appendChild(document.createTextNode(miMatriz[i][j]));
  }
}

//tablaDiv.appendChild(tabla);
console.log(MostrarPosInicial());
//posInicialDiv.innerHTML(MostrarPosInicial());
posInicialDiv.innerHTML = "<p>" + MostrarPosInicial()+ "</p>";
movimientosDiv.innerHTML = "<p>" + MostrarMov()+ "</p>";
posFinalDiv.innerHTML="<p>"+MostrarPosFinal()+"</p>";

});


