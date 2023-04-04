//import Matriz from "./controladorDeAuto";

// const first = document.querySelector("#primer-numero");
// const second = document.querySelector("#segundo-numero");
// const form = document.querySelector("#sumar-form");
// const div = document.querySelector("#resultado-div");

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

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // const firstNumber = Number.parseInt(first.value);
  // const secondNumber = Number.parseInt(second.value);

  // div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
 
});
