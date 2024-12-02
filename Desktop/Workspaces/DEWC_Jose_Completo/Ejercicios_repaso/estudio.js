// console.log("Hola Mundo");

/*
let num1 = 5;
let num2 = 3;

console.log(num1 + num2);
*/
/*
let nombre = "Juan";
let apellido ="Pérez";

let nombre_completo = nombre + " " + apellido;

console.log(nombre_completo);
console.log(`${nombre} ${apellido}`);
*/
/* ejercicio 4 y 5 
let numero = 5
let numero2 = 3

if (numero % 2 == 0) {
    console.log(`${numero} es un número par.`);
} else {
    console.log(`${numero} es un número impar.`);
}

if (numero < numero2) {
    console.log(`${numero} es menor que ${numero2}.`);
} else if (numero > numero2){
    console.log(`${numero} es mayor que ${numero2}.`);
} else {
    console.log(`${numero} es igual a ${numero2}.`);
}
*/
/*
let sumaImpares = 0 ;

for (i = 1; i <= 50; i++) {
    if (i % 2 != 0) {
        sumaImpares += i;
    }
}
console.log(`La suma de todos los numeros impares es de: ${sumaImpares}`);
*/
/*
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) { 
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
*/
/*
function calcularAreaCirculo (radio) {
    if (typeof radio !== "number") {
        console.error("El parámetro 'radio' debe ser un número.");
        return;
    }
    let pi = Math.PI;
    let area = pi * (radio**2);
    return area;
}

console.log(calcularAreaCirculo(10));
*/

/*
function contarVocales(texto) {
    // Contador total y contadores individuales
    let numeroVocales = 0;
    let a = 0, e = 0, i = 0, o = 0, u = 0;

    // Convertir el texto a minúsculas
    texto = texto.toLowerCase();

    for (let char of texto) {
        if (char === "a") a++;
        else if (char === "e") e++;
        else if (char === "i") i++;
        else if (char === "o") o++;
        else if (char === "u") u++;
    }

    // Sumar todas las vocales para el total
    numeroVocales = a + e + i + o + u;

    console.log(`Vocales individuales: A=${a}, E=${e}, I=${i}, O=${o}, U=${u}`);
    return numeroVocales;
}

let texto = "Hola, ¿cómo estás? Esta es una prueba.";
console.log(texto);
console.log(`En el texto hay ${contarVocales(texto)} vocales.`);
*/

/*
function encontrarMayor (listaNumeros) {
    
    let mayor = listaNumeros[0];

    for (let numero of listaNumeros) {
        if (numero > mayor){
            mayor = numero;
        }
    }

    return (`El número mayo es: ${mayor}`);

}

let listaNumeros = [1,2,10,4,5,25,6];
console.log(encontrarMayor(listaNumeros));
*/
let listaAlumnos = [
    { nombre: "Juan", calificacion: 8 },
    { nombre: "Ana", calificacion: 5 },
    { nombre: "Luis", calificacion: 4 },
    { nombre: "Maria", calificacion: 7 },
];

/*
function filtrarAprobados(listaAlumnos) {
    const aprobados = listaAlumnos
      .filter(alumno => alumno.calificacion >= 6) // Filtrar aprobados
      .map((alumno, indice) => ({ // Crear nuevo objeto con índice personalizado
        Indica: indice + 1, // Cambiar la propiedad del índice
        Nombre: alumno.nombre,
        Calificacion: alumno.calificacion,
      }));
    return aprobados; // Devolver el array limpio
}

// Mostrar resultados sin índice automático
const resultado = filtrarAprobados(listaAlumnos);
console.table(resultado); // Mostrará solo las columnas personalizadas
*/
/* sort() descendente
function ordenarPorCalificacion (listaAlumnos) {
    return listaAlumnos
    .sort((alumnoA, alumnoB) => alumnoB.calificacion - alumnoA.calificacion)
    .map(alumno => ({ // Mapear para ajustar formato si es necesario
        Nombre: alumno.nombre,
        Calificacion: alumno.calificacion
      }));

}

console.table(ordenarPorCalificacion(listaAlumnos));
*/
/* sort ascendente
function ordenarPorCalificacion(listaAlumnos) {
    return listaAlumnos
        .sort((alumnoA, alumnoB) => alumnoA.calificacion - alumnoB.calificacion) // Cambia a orden ascendente
        .map(alumno => ({ 
            Nombre: alumno.nombre,
            Calificacion: alumno.calificacion
        }));
}

console.table(ordenarPorCalificacion(listaAlumnos));
*/
/*
function calcularPromedio (alumnos) {
    
    let suma = alumnos.reduce((acumulador, alumno) => acumulador + alumno.calificacion, 0);
    let media = suma / alumnos.length;
    return media.toFixed(2);
}
console.log("El promedio de las calificaciones de los alumnos es de: " + calcularPromedio(listaAlumnos));
*/
/*
function alumnoConCalificacionBaja (alumnos) {
    return alumnos.reduce((acumulador, alumno) => {
        // Compara la calificación actual con la más baja encontrada hasta ahora
        return alumno.calificacion < acumulador.calificacion ? alumno : acumulador;
    });
}
const alumnoMenor = alumnoConCalificacionBaja(listaAlumnos);
console.log(`El alumno con la calificación más baja es ${alumnoMenor.nombre} con ${alumnoMenor.calificacion}.`);
*/
/*
function contarAprobadosYReprobados (alumnos) {
    return alumnos
        .reduce((acumulador, alumno) => {
            if (alumno.calificacion >= 5){
                acumulador.aprobados++;
            } else {
                acumulador.reprobados++;
            }
            return acumulador;
        }, {aprobados : 0, reprobados : 0});
}
console.log(contarAprobadosYReprobados(listaAlumnos));
*/
/*
function calcularPromedioAprobados (alumnos) {
    
    let aprobados = alumnos.filter(alumno => alumno.calificacion >= 5);
    let suma = aprobados.reduce((acumulador, alumno) => acumulador + alumno.calificacion, 0);
    let media = suma / aprobados.length;
    return media.toFixed(2);
}

console.log(calcularPromedioAprobados(listaAlumnos)); // Salida esperada: 7.00
*/

function encontrarMejorAlumno (alumnos) {
    return alumnos.reduce((acumulador, alumno) => {
        return alumno.calificacion > acumulador.calificacion ? alumno : acumulador;
    }, alumnos[0]);
}

console.log(encontrarMejorAlumno(listaAlumnos));