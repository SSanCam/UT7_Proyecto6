/*
Ejercicio1:FuncionesPredefinidasyDefinicióndeFunciones


// Función para sumar dos números
function suma(num1, num2) {
    return num1 + num2;
}

// Generar números aleatorios entre 1 y 10
let num1Rand = Math.floor(Math.random() * 10) + 1;
let num2Rand = Math.floor(Math.random() * 10) + 1;

// Mostrar el resultado de la suma de los números aleatorios
alert("Los números aleatorios " + num1Rand + " y " + num2Rand + " suman un total de: " + suma(num1Rand, num2Rand));

// Solicitar números al usuario y validarlos
let numPedido1;
let numPedido2;

do {
    numPedido1 = prompt("Introduce un número entero: ");
    numPedido2 = prompt("Introduce otro número: ");
    
    // Validar que ambos son números válidos
    if (isNaN(numPedido1) || isNaN(numPedido2)) {
        alert("Por favor, introduce números válidos.");
    } else {
        // Convertir a número
        numPedido1 = parseInt(numPedido1, 10);
        numPedido2 = parseFloat(numPedido2);
    }
} while (isNaN(numPedido1) || isNaN(numPedido2));

// Mostrar el resultado de la suma de los números ingresados por el usuario
let sumaPorTeclado = suma(numPedido1, numPedido2);
alert("La suma de ambos números es: " + sumaPorTeclado.toFixed(2));
*/
// Función de suma
function suma(num1, num2) {
    return num1 + num2;
  }
  
// Solicitar números
let num1 = parseInt(prompt("Introduce un número:"));
let num2 = parseInt(prompt("Introduce otro número:"));

// Mostrar el resultado en el DOM
const divResultado = document.getElementById("resultado");
divResultado.textContent = `La suma de ${num1} y ${num2} es ${suma(num1, num2)}`;
