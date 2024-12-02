/*
Crea una clase Estudiante que contenga propiedades como nombre, edad, y notas. 
Incluye métodos para agregar una nota, calcular el promedio y determinar si ha aprobado. 
Crea un objeto Estudiante y utiliza sus métodos para realizar pruebas.
*/

class Estudiante {
    nombre;
    edad;
    notas;

    // Constructor
    constructor(nombre, edad, notas = []) {  // Inicializamos notas como un array vacío por defecto
        this.nombre = nombre;
        this.edad = edad;
        this.notas = notas;
    }

    // Método para agregar una nueva nota
    agregarNota(nuevaNota) {
        this.notas.push(nuevaNota);
    }

    // Método para calcular la nota media
    notaMedia() {
        let media = 0;

        // Verificar si hay notas
        if (this.notas.length > 0) {
            for (let nota of this.notas) {
                media += nota;
            }
            return media / this.notas.length; // Retornar el promedio
        } else {
            return null; // Retorna null si no hay notas
        }
    }

    // Método para determinar si el estudiante ha aprobado
    aprobado() {
        let media = this.notaMedia();  // Obtener el promedio

        // Verificar si hay notas registradas
        if (media === null) {
            return "Aún no tienes notas registradas."; // Manejar el caso sin notas
        }

        // Verificar si ha aprobado o no
        return media >= 5 ? "Has aprobado." : "Has suspendido.";
    }
}

// Crear un objeto Estudiante y probar los métodos
let paquito = new Estudiante("Paquito", 18);
console.log(paquito.notaMedia());  // Debería indicar que aún no hay notas
console.log(paquito.aprobado());  // Debería indicar que no tiene notas

// Agregar notas y probar de nuevo
paquito.agregarNota(6);
paquito.agregarNota(8);
console.log(paquito.notaMedia());  // Debería mostrar el nuevo promedio
console.log(paquito.aprobado());  // Debería indicar si ha aprobado o no
