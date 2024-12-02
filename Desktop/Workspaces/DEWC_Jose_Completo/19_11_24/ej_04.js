// shift()
// ejercicio 1
/*

let atendidos = [];
let fila = [];
let cansados = [];

for (i = 1; i < 6 ; i ++){
    fila.push("cliente_" + i);
}

atendidos.push(fila.shift(), fila.shift());

cansados.push(fila.pop(), fila.pop());

console.log("Clientes atendidos: " + atendidos);
console.log("Clientes que se fueron: " + cansados);
console.log("Clientes restantes en la fila: " + fila);
*/

// .unshift()
//ejercicio 1
/*
let listaInvitados = ["Carlos", "Ana", "Luis"];

listaInvitados.unshift("Sofía", "Miguel");

console.log(listaInvitados);
*/

// ejercicio 2
/*
let colaClientes = [];
let clientesAtendidos = [];
let clientesCansados = [];
let index = 1;

for (i = 1; i <= 5; i++) {

    colaClientes.push("cliente" + index );
    colaClientes.unshift("VIP" + index );

    clientesAtendidos.push(colaClientes.shift());

    if (colaClientes.length > 3){
        clientesCansados.push(colaClientes.pop());
    }
    

    console.log(`
        Turno: ${i}
        Clientes en cola: ${colaClientes}
        Clientes atendidos: ${clientesAtendidos}
        Clientes que se fueron por esperar demasiado: ${clientesCansados}
        _________________________________________________________________
        `);
        
        index++

}
        */

// ejercicio 3: verificar si letra dni es correcto o no 
/*
let letras  = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B" , "N" ,"J" ,"Z" ,"S" ,"Q" ,"V" ,"H" ,"L" ,"C" ,"K" ,"E"];

let dniCompleto = "48973391C";


let letraDni = dniCompleto[dniCompleto.length -1].toUpperCase();

let numDni = parseInt(dniCompleto.slice(0, -1),10);


let letraCalculada = letras[numDni % 23];

if (letraCalculada === letraDni){
    console.log("Tu letra es correcta.");
} else {
    console.log("Tu letra es incorrecta");
}
console.log(letraDni);
console.log(numDni);
console.log(letraCalculada);
*/

// Ejercicio final - 3
/* Crea una función que valide si una matricula de coche española es correcta.
Las matriculas tiene formato: 4 digitos + 3 letras (NO vocales)
la funcion debe verificar que se cumple con el formato y devolver el mensaje de si es valida o no 


function validarMatricula (matricula) {

    let caracteresProhibidos = ["A" ,"E" ,"I" ,"O" ,"U" ,"Ñ"];
    let regex = /^\d{4 [B-DF-HJ-TV-Z]/ ;
      // Validar que la matrícula tenga exactamente 7 caracteres
    if (matricula.length !== 7) {
        return "La matrícula no es válida: debe tener 7 caracteres (4 dígitos + 3 letras).";
    } else if (!regex.test(numerosMatricula)) {
        return console.log("Formato incorrecto")
    } else if (matricula.includes(caracteresProhibidos)) {
        return "Caracteres no válidos."
    } else {
        return "Válido."
    }

}

// Ejemplo de uso
let matricula = "1234BCD765";
console.log(validarMatricula(matricula)); // Matrícula válida

let matricula2 = "1234AEF";
console.log(validarMatricula(matricula2)); // Contiene vocal

let matricula3 = "12Ñ4BCD";
console.log(validarMatricula(matricula3)); // Formato incorrecto


======================
function validarMatricula(matricula) {
    let caracteresProhibidos = ["A", "E", "I", "O", "U", "Ñ"];

    // Validar que la matrícula tenga exactamente 7 caracteres
    if (matricula.length !== 7) {
        return "La matrícula no es válida: debe tener 7 caracteres (4 dígitos + 3 letras).";
    }

    // Separar números y letras
    let numerosMatricula = matricula.slice(0, 4); // Primeros 4 caracteres
    let letrasMatricula = matricula.slice(4); // Últimos 3 caracteres

    // Validar que los primeros 4 caracteres sean dígitos
    if (!/^\d{4}$/.test(numerosMatricula)) {
        return "La matrícula no es válida: los 4 primeros caracteres deben ser dígitos.";
    }

    // Validar que las letras no contengan caracteres prohibidos
    for (let letra of letrasMatricula) {
        if (caracteresProhibidos.includes(letra)) {
            return `La matrícula no es válida: contiene caracteres no permitidos (${letra}).`;
        }
    }

    // Validar que las letras sean 3 consonantes válidas
    if (!/^[B-DF-HJ-NP-TV-Z]{3}$/.test(letrasMatricula)) {
        return "La matrícula no es válida: las letras deben ser 3 consonantes (sin vocales ni Ñ).";
    }

    return "La matrícula es válida.";
}

// Ejemplo de uso
let matricula = "1234BCD";
console.log(validarMatricula(matricula)); // Matrícula válida

let matricula2 = "1234AEF";
console.log(validarMatricula(matricula2)); // Contiene vocal

let matricula3 = "123ÑBCD";
console.log(validarMatricula(matricula3)); // Formato incorrecto

let matricula4 = "12BCDF";
console.log(validarMatricula(matricula4)); // Formato incorrecto (menos de 4 números)
===============================================================================
*/

// Otro ejercicio
function matrices(matriz) {
    let maximo = -Infinity; // Cambié a -Infinity para encontrar el máximo correctamente
    let minimo = Infinity; // Dejar en Infinity para encontrar el mínimo correctamente

    let coordenadasMaximo = [0, 0];
    let coordenadasMinimo = [0, 0];

    // Recorrer filas y columnas
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) { // Asegúrate de usar matriz[i].length
            if (matriz[i][j] > maximo) {
                maximo = matriz[i][j];
                coordenadasMaximo = [i, j];
            }
            if (matriz[i][j] < minimo) {
                minimo = matriz[i][j];
                coordenadasMinimo = [i, j];
            }
        }
    }

    // Mostrar resultados
    console.log(`Máximo: ${maximo} en las coordenadas (${coordenadasMaximo[0]}, ${coordenadasMaximo[1]})`);
    console.log(`Mínimo: ${minimo} en las coordenadas (${coordenadasMinimo[0]}, ${coordenadasMinimo[1]})`);
}

const matriz = [
    [3.5, -2.1, 7.8, 1.4],
    [-9.3, 5.2, -0.5, 8.9],
    [4.1, 6.6, -3.8, 2.2],
    [-7.7, 0, 1.3, -4.9],
];

// Llamar a la función correctamente
matrices(matriz);
