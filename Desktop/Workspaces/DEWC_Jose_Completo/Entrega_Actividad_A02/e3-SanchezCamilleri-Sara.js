/*
ArraysyOperacionesAgregadas
*/


let listaNumeros = [5, 12, 8, 130, 44];

// Mostrar la lista de números
alert("Tenemos una lista de números: " + listaNumeros.toString());

// Función de filtrado con validación de entrada
let numeroPedido;
do {
    numeroPedido = parseInt(prompt("Introduce un número entero y veremos cuántos de la lista son mayores: "), 10);
    if (isNaN(numeroPedido)) {
        alert("Por favor, introduce un número válido.");
    }
} while (isNaN(numeroPedido));

let numerosMayores = listaNumeros.filter(function(numero) {
    return numero > numeroPedido;
});
alert("Los números mayores al que has proporcionado son: " + numerosMayores.toString());

// Función de reducción para sumar los números de la lista
alert("Vamos a sumar todos los números de la lista.");
let sumaTotal = listaNumeros.reduce(function(acumulador, valorActual) {
    return acumulador + valorActual;
}, 0);
alert("La suma total es de " + sumaTotal);

// Función de filtrado para obtener solo los números pares
let numPares = listaNumeros.filter(function(num) {
    return num % 2 === 0;
});

alert("Los números pares de esta lista son: " + numPares.toString());