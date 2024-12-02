/*
Ejercicio4:MatricesyAplanado
Dadaunamatrizbidimensionaldeenteros,creaunafunciónque:
- AplanelamatrizsinutilizarArray.flat().
- Calculeelpromediodeloselementosdelamatriz.
*/

let matriz = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"]
];

// Función para aplanar la matriz sin usar Array.flat()
function aplanarMatriz(matriz) {
    let resultado = [];
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            resultado.push(parseInt(matriz[i][j], 10)); // Convertir cada valor a número
        }
    }
    return resultado;
}

// Función para calcular el promedio de los elementos de la matriz
function calcularPromedio(array) {
    let suma = array.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    return suma / array.length;
}

// Aplanar la matriz
let matrizAplanada = aplanarMatriz(matriz);
alert("Matriz aplanada: " + matrizAplanada.toString());

// Calcular el promedio de los elementos
let promedio = calcularPromedio(matrizAplanada);
alert("El promedio de los elementos de la matriz es: " + promedio.toFixed(2));
