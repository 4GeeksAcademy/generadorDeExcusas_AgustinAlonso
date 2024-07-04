/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/* ===> BUENAS PRÁCTICAS <=== 

Tanto en el archivo app.js como en index.html fueron modificados para reflejar buenas prácticas de codificación, ya que éste ejercicio no presenta ninguna estructura condicional if con buenas prácticas, dejaré un ejemplo a continuación de lo entendido durante la clase, pero que no afecta la funcionalidad del ejercico.

Buenas prácticas que se aplicaron:
  - La estructura condicional if se escribió de forma concisa si el uso excesivo de de {}.
  - Se identó correctamente el código html y js.
  - Todas las variables, arrays y funciones fueron declaradas con nombres descriptivos y empiezan con 
    minúsculas, no incluyen tildes y si se componen de más de una palabra, cada palabra después de la primera empieza con mayúscula.
  - Se comentó el código correctamente.
  - Se usó el método de concatenación template literals.
*/
let llueveAfuera = true;
let haceFrio = false;

if (llueveAfuera && haceFrio) console.log("Hay que salir abrigado y con paragüas");
else if (llueveAfuera && !haceFrio) console.log("Salir de remera a mojarse con la lluvia");
else if (!llueveAfuera && haceFrio) console.log("Hay que salir abrigado")
else console.log('Vamos a la plaza a pasar la tarde, no  hace frío y no está lloviendo')

//Obtenemos el elemento html excusa
let excusa = document.getElementById("excusa");

//Los siguientes cuatro arrays contienen los elementos para cada parte de la excusa que seran seleccionados aleatoriamente.
const quienArray = [
  "Mi vecino",
  "Mi primo",
  "Mi gato",
  "Mi perro",
  "Mi llama",
  "Mi Novia",
];

const accionArray = ["rompió", "quemó", "tiró", "robó", "ensució", "escondió"];

const queArray = [
  "mi billetera",
  "mi celular",
  "mi mochila",
  "mi Auto",
  "mi pantalón",
  "mi almuerzo",
];

const cuandoArray = [
  "mientras dormía",
  "mientras estaba en el gimnasio",
  "durante el almuerzo",
  "cuando fui al mercado",
  "mientras me bañaba",
  "durante el desayuno",
];

//Cada vez que la página cargue, se ejecuta la siguiente función.
window.onload = function() {
  //Asignamos aleatoriamente un valor a cada parte de la excusa.
  let quien = quienArray[Math.floor(Math.random() * quienArray.length)];
  let accion = accionArray[Math.floor(Math.random() * accionArray.length)];
  let que = queArray[Math.floor(Math.random() * queArray.length)];
  let cuando = cuandoArray[Math.floor(Math.random() * cuandoArray.length)];

  //Imprimimos en la consola y modificamos el contenido del elemento html con id excusa
  console.log(`${quien} ${accion} ${que} ${cuando}`);
  excusa.innerHTML = `${quien} ${accion} ${que} ${cuando}`;
};
