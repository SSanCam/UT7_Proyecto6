/*
Implementa una función isLeapYear() que acepte dos años entre 2001 y 2500 
y muestre todos los años bisiestos en ese rango. Incluye validaciones para las entradas.
*/
function isLeapYear(year) {
    // Un año es bisiesto si es divisible por 4, pero no por 100, excepto que sea divisible por 400
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function mostrarAniosBisiestos(inicio, fin) {
    let bisiestos = [];

    // Recorrer el rango de años e identificar los bisiestos
    for (let year = inicio; year <= fin; year++) {
        if (isLeapYear(year)) {
            bisiestos.push(year);
        }
    }

    // Devolver los años bisiestos encontrados
    return bisiestos.length > 0 ? bisiestos : "No hay años bisiestos en este rango.";
}

// Solicitar el primer año con validaciones
let anioInicio;
do {
    anioInicio = parseInt(prompt("Introduce el primer año (entre 2001 y 2500): "), 10);
    if (isNaN(anioInicio) || anioInicio < 2001 || anioInicio > 2500 || anioInicio.toString().length !== 4) {
        alert("Por favor, introduce un año válido entre 2001 y 2500.");
    }
} while (isNaN(anioInicio) || anioInicio < 2001 || anioInicio > 2500 || anioInicio.toString().length !== 4);

// Solicitar el segundo año con validaciones
let anioFin;
do {
    anioFin = parseInt(prompt("Introduce el segundo año (entre 2001 y 2500): "), 10);
    if (isNaN(anioFin) || anioFin < 2001 || anioFin > 2500 || anioFin.toString().length !== 4) {
        alert("Por favor, introduce un año válido entre 2001 y 2500.");
    }
} while (isNaN(anioFin) || anioFin < 2001 || anioFin > 2500 || anioFin.toString().length !== 4);

// Asegurar que el inicio sea menor que el fin
if (anioInicio > anioFin) {
    [anioInicio, anioFin] = [anioFin, anioInicio]; // Intercambiar si el inicio es mayor
}

// Mostrar los años bisiestos en el rango
let resultado = mostrarAniosBisiestos(anioInicio, anioFin);
alert("Los años bisiestos entre " + anioInicio + " y " + anioFin + " son:\n" + resultado);
