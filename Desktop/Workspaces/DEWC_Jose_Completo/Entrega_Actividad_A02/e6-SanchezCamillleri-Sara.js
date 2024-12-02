/*
Ejercicio6:FiltradoyTransformacióndeDatos
Crea una función filtrarYTransformar() que reciba un array de números y devuelva un nuevo
arrayquecontengasololosnúmerosimpares,multiplicadospor2.Utilizafilter()ymap().
*/

let numeros = [42, 17, 8, 23, 91, 56, 3, 77];

function filtrarYTransformar(lista) {
    // Filtrar los impares y luego multiplicar cada uno por 2 en una sola línea
    return lista
        .filter(numero => numero % 2 !== 0)  // Filtrar los impares
        .map(numero => numero * 2);           // Multiplicar cada impar por 2
}

alert("Vamos a tomar los impares de nuestra lista:\n" + numeros +
    "\ny mostrar el resultado de cada uno al multiplicarlo por dos:\n" + filtrarYTransformar(numeros));
