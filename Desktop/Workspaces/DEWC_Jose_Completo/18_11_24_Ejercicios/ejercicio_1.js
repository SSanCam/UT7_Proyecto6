// Coger un String por teclado y parsearlo a Int.
let numeroInt
let numeroString;

do {
    numeroString = prompt("Introduce un número entero: ");
    numeroInt = parseInt(numeroString);
} while (isNaN(numeroInt));

alert(numeroInt);