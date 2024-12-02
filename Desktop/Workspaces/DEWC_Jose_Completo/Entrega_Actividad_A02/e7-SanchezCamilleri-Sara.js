/*
Ejercicio7:JerarquíadeClases
Define una clase Animal con propiedadescomonombreyedad,yunmétodohablar().Creados
subclases:PerroyGato,queheredendeAnimalysobreescribanelmétodohablar().
*/

// Definir la clase base Animal
class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    hablar() {
        alert("${this.nombre} está haciendo un sonido!");
    }
}

// Subclase Perro que hereda de Animal
class Perro extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad);
    }

    hablar() {
        alert("${this.nombre} hace guau!");
    }
}

// Subclase Gato que hereda de Animal
class Gato extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad);
    }

    hablar() {
        alert("${this.nombre} hace miau!");
    }
}

// Crear instancias de Perro y Gato
let perro = new Perro("El perro Bob", 5);
perro.hablar(); // Salida: "El perro Bob hace guau!"

let gato = new Gato("Calcetines", 3);  // Añadir la edad faltante
gato.hablar(); // Salida: "Calcetines hace miau!"
