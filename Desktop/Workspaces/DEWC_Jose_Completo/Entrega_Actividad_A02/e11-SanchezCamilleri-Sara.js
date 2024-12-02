/*
Escribe un script que simule el lanzamiento de 2 dados utilizando Math.random(). 
Haz 36,000 lanzamientos y muestra cuántas veces ha salido cada resultado 
(la suma de los valores de los dos dados).
*/

function lanzarDados() {
    // Simular el lanzamiento de un dado (valor entre 1 y 6)
    return Math.floor(Math.random() * 6) + 1;
}

function simulacionDados(nLanzamientos) {
    // Inicializar un objeto para contar las ocurrencias de cada suma (de 2 a 12)
    let resultados = {
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
        12: 0
    };

    // Realizar los lanzamientos
    for (let i = 0; i < nLanzamientos; i++) {
        let dado1 = lanzarDados();
        let dado2 = lanzarDados();
        let suma = dado1 + dado2;

        // Incrementar el contador para la suma obtenida
        resultados[suma]++;
    }

    // Devolver los resultados
    return resultados;
}

// Simulación de 36,000 lanzamientos
let nLanzamientos = 36000;
let resultados = simulacionDados(nLanzamientos);

// Mostrar los resultados
let mensaje = "Resultados de " + nLanzamientos + " lanzamientos de dos dados:\n";
for (let suma in resultados) {
    mensaje += "Suma " + suma + ": " + resultados[suma] + " veces\n";
}
alert(mensaje);
