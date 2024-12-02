class Personaje {
    // Constructor básico
    constructor(nombre, raza){
        this.nombre = nombre;
        this.raza = raza;
        this.nivel = 1; // Los personajes comienzan en nivel 1
        this.hp = 100;  // Los personajes comienzan con 100 puntos de vida
    }

    // Método para subir de nivel cuando el personaje llega a 0 puntos de vida
    subirNivel() {
        if (this.hp === 0) {
            console.log(this.nombre + " ha sido derrotado y vuelve al nivel 1 con 100 puntos de vida.");
            this.nivel = 1;  // Restablecer nivel a 1
            this.hp = 100;    // Restablecer puntos de vida a 100
        }
    }
}

// Creamos dos personajes:
let pj1 = new Personaje("Aragorn", "Humano");
let pj2 = new Personaje("Legolas", "Elfo");

// Almacenamos los personajes en un Array
let personajes = [pj1, pj2];

console.log("Nuestros personajes son: ", personajes);

// Método para atacar a otro personaje
function attack(atacante, enemigo) {
    console.log(atacante.nombre + " ataca a " + enemigo.nombre);
    enemigo.hp -= 10; // Resta 10 puntos de vida por ataque
    if (enemigo.hp < 0) {
        enemigo.hp = 0; // Asegurar que la vida no baje de 0
    }
    console.log(enemigo.nombre + " ahora tiene " + enemigo.hp + " puntos de vida.");
    if (enemigo.hp === 0) {
        enemigo.subirNivel(); // Si la vida llega a 0, subir nivel
    }
}

// Método para curar al personaje
function heal(personaje) {
    console.log(personaje.nombre + " se está curando.");
    personaje.hp += 20; // Sumar 20 puntos de vida
    if (personaje.hp > 100) {
        personaje.hp = 100; // No puede exceder 100 puntos de vida
    }
    console.log(personaje.nombre + " ahora tiene " + personaje.hp + " puntos de vida.");
}

// Pruebas del combate
attack(pj1, pj2); // Aragorn ataca a Legolas
heal(pj2);        // Legolas se cura
attack(pj2, pj1); // Legolas ataca a Aragorn
heal(pj1);        // Aragorn se cura
attack(pj1, pj2); // Aragorn ataca de nuevo a Legolas
attack(pj1, pj2); // Aragorn ataca de nuevo a Legolas
attack(pj1, pj2); // Aragorn ataca de nuevo a Legolas (Legolas llega a 0 HP y se reinicia)
