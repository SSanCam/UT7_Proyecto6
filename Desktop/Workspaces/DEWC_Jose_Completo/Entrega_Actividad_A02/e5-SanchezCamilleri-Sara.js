/*
Define un objeto Libro con propiedades como título, autor, y paginas. 
Incluye un método resumen() que devuelva una descripción del libro. 
Crea un array de objetos Libro, recorrelo y utiliza el método en cada uno para mostrar su descripción en la página.
*/
/*
Define un objeto Libro con propiedades como título, autor, y paginas. 
Incluye un método resumen() que devuelva una descripción del libro. 
Crea un array de objetos Libro, recorrelo y utiliza el método en cada uno para mostrar su descripción en la página.
*/


let libro1 = {
    titulo: "Libro 1",
    autor: "Autor",
    paginas: 123,
    resumen: "Este es el resumen del libro 1."
}

let libro2 = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    paginas: 417,
    resumen: "Un clásico de la literatura, narra la historia de la familia Buendía en el pueblo ficticio de Macondo."
};

let libro3 = {
    titulo: "1984",
    autor: "George Orwell",
    paginas: 328,
    resumen: "Una novela distópica que explora el control totalitario y la represión política en una sociedad futura."
};

function resumen (libro){
    return libro.resumen;
}

let libreria = [libro1, libro2, libro3];

let estante = libreria.map(function(libro) {
    return libro.titulo ? libro.titulo : " ";
})

let numLibro;
do{
    numLibro = parseInt(prompt("Los libros en el estante son:\n " + estante.join("\n") + "\nIntroduce el numero del libro para saber el resumen"));
} while (isNaN(numLibro) || numLibro < 1 || numLibro > libreria.length);

alert(resumen(libreria[numLibro - 1]));