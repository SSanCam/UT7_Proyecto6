/*
FunciónRecursiva
*/

// Función recursiva para repetir una cadena 'n' veces
function conceptRecursion(n, cadena) {
    // Condición base: si n es 1, simplemente retorna la cadena
    if (n === 1) {
        return cadena;
    } else if (n > 1) {
        // Llamada recursiva: concatenar la cadena con la llamada a la función con n-1
        return cadena + conceptRecursion(n - 1, cadena);
    } else {
        // Caso donde n es menor o igual a 0 (evitar repeticiones inválidas)
        return "";
    }
}

// Solicitar el número de repeticiones y validar
let repeticion;
do {
    repeticion = parseInt(prompt("Introduce el número de veces que vamos a repetir la cadena \"bauuuba\": "), 10);
    if (isNaN(repeticion) || repeticion <= 0) {
        alert("Por favor, introduce un número entero válido mayor que 0.");
    }
} while (isNaN(repeticion) || repeticion <= 0);

// Cadena a repetir
let cadena = "bauuuba\n";

// Mostrar el resultado usando la función recursiva
alert(conceptRecursion(repeticion, cadena));
