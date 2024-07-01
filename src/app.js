/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Obtenemos el elemento html excusa
let excusa = document.getElementById("excusa");

const quienArray = [
  "Mi vecino",
  "Mi primo",
  "Mi gato",
  "Mi perro",
  "Mi llama",
  "Mi Novia"
];
const accionArray = ["rompió", "quemó", "tiró", "robó", "ensució", "escondió"];

const queArray = [
  "mi billetera",
  "mi celular",
  "mi mochila",
  "mi Auto",
  "mi pantalón",
  "mi almuerzo"
];
const cuandoArray = [
  "mientras dormía",
  "mientras estaba en el gimnasio",
  "durante el almuerzo",
  "cuando fui al mercado",
  "mientras me bañaba",
  "durante el desayuno"
];
//Arrays de arrays
const Arrays = [quienArray, accionArray, queArray, cuandoArray];

//Función que devuelve un número ramdom y recibe un el número máximo que puede devolver
function ramdom(maxNumInt) {
  let num = Math.round(Math.random() * maxNumInt);
  return num;
}

window.onload = function() {
  let quien = quienArray[Math.floor(Math.random() * quienArray.length)];
  let accion = accionArray[Math.floor(Math.random() * accionArray.length)];
  let que = queArray[Math.floor(Math.random() * queArray.length)];
  let cuando = cuandoArray[Math.floor(Math.random() * cuandoArray.length)];

  //Imprimimos en la consola y modificamos el contenido del elemento html con id excusa
  console.log(`${quien} ${accion} ${que} ${cuando}`);
  excusa.innerHTML = `${quien} ${accion} ${que} ${cuando}`;
};
