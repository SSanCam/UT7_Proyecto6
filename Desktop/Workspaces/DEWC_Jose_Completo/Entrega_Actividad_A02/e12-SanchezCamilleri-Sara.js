/*
Implementa una función findPairs() que acepte dos números entre 1 y 100 
y calcule todos los números pares en ese rango. Incluye validaciones 
para las entradas y muestra los resultados.
*/

function findPairs(num1, num2) {
    // Validación de las entradas
    if (isNaN(num1) || isNaN(num2)) {
        return "Ambos valores deben ser números.";
    }
    if (num1 < 1 || num1 > 100 || num2 < 1 || num2 > 100) {
        return "Los números deben estar entre 1 y 100.";
    }

    // Asegurar que num1 sea menor que num2
    let inicio = Math.min(num1, num2);
    let fin = Math.max(num1, num2);

    // Calcular los números pares en el rango
    let pares = [];
    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }

    // Devolver el resultado
    return pares.length > 0 ? pares : "No hay números pares en este rango.";
}

// Solicitar los dos números al usuario mediante prompt
let num1 = parseInt(prompt("Introduce el primer número (entre 1 y 100): "), 10);
let num2 = parseInt(prompt("Introduce el segundo número (entre 1 y 100): "), 10);

// Validar y mostrar los resultados
let resultado = findPairs(num1, num2);
alert("Los números pares en el rango son: " + resultado);
