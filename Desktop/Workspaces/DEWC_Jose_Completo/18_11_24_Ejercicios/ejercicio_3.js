RegExp.test;

/* 
usa regex.test() para verificar si una cadena de texto contiene exactamente 3 digitos
 Crea una variable con una cadena de texto
 Verifica si la cadena tiene exactamente 3 digitos consecutivos
 console.log()Para q sea de 3 digitos hay q usar llaves

let patron = /\d[3]/ ;

let cadTexto = "wer";
let cadNum = "123";
let numNoConse = "111";

console.log(patron.test(parseInt(cadTexto)));
console.log(patron.test(parseInt(cadNum)));
console.log(patron.test(parseInt(numNoConse)));
*/

/* Comprobar que una cadena de texto tenga una letra mayúscula. 


let patron = /[A-Z]/
let ej1 = "Hola";
let ej2 = "hola";
let ej3 = "HOLA";

console.log(patron.test(ej1));
console.log(patron.test(ej2));
console.log(patron.test(ej3));
*/

// Date.now () milisegundos transcurridos desde media noche de 1 Ene. de 1970 y actualidad. (epoch time)



// Cuanto tiempo tarda un bucle for encontar de  1 a 10 millones
let fechaInicial = Date.now();

for (i = 1; i != 10000000; i++) {

}
let fechafinal = Date.now();

console.log(fechafinal - fechaInicial);
