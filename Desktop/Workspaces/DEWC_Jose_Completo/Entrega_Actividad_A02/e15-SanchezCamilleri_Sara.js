/*
Toma uno de los ejercicios anteriores y añade comentarios explicativos en cada parte del código. 
Realiza pruebas en diferentes escenarios y documenta si el comportamiento es el esperado.
*/
// Función para determinar si un año es bisiesto
function isLeapYear(year) {
    // Un año es bisiesto si es divisible por 4 y no por 100, a menos que también sea divisible por 400
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Función para mostrar los años bisiestos en el rango dado
function mostrarAniosBisiestos(inicio, fin) {
    let bisiestos = []; // Array para almacenar los años bisiestos

    // Recorrer todos los años en el rango de inicio a fin
    for (let year = inicio; year <= fin; year++) {
        if (isLeapYear(year)) { // Si el año es bisiesto, añadirlo al array
            bisiestos.push(year);
        }
    }

    // Devolver el array de años bisiestos o un mensaje si no hay bisiestos
    return bisiestos.length > 0 ? bisiestos : "No hay años bisiestos en este rango.";
}

// Solicitar el primer año, con validación de que sea un número entre 2001 y 2500
let anioInicio;
do {
    anioInicio = parseInt(prompt("Introduce el primer año (entre 2001 y 2500): "), 10);
    // Validar que el año sea un número de 4 cifras, entre 2001 y 2500
    if (isNaN(anioInicio) || anioInicio < 2001 || anioInicio > 2500 || anioInicio.toString().length !== 4) {
        alert("Por favor, introduce un año válido entre 2001 y 2500.");
    }
} while (isNaN(anioInicio) || anioInicio < 2001 || anioInicio > 2500 || anioInicio.toString().length !== 4);

// Solicitar el segundo año, aplicando la misma validación
let anioFin;
do {
    anioFin = parseInt(prompt("Introduce el segundo año (entre 2001 y 2500): "), 10);
    // Validar que el año sea un número de 4 cifras, entre 2001 y 2500
    if (isNaN(anioFin) || anioFin < 2001 || anioFin > 2500 || anioFin.toString().length !== 4) {
        alert("Por favor, introduce un año válido entre 2001 y 2500.");
    }
} while (isNaN(anioFin) || anioFin < 2001 || anioFin > 2500 || anioFin.toString().length !== 4);

// Asegurar que el año de inicio sea menor que el año de fin
if (anioInicio > anioFin) {
    // Si el primer año es mayor, intercambiarlos
    [anioInicio, anioFin] = [anioFin, anioInicio];
}

// Mostrar los años bisiestos entre el rango ingresado
let resultado = mostrarAniosBisiestos(anioInicio, anioFin);
alert("Los años bisiestos entre " + anioInicio + " y " + anioFin + " son:\n" + resultado);
