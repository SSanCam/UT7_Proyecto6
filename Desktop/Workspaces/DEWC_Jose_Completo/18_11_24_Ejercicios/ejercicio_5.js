/*
    Un código que imprima por pantalla por pantalla los números del 1-99 y que ponga 
    "Buzz" si es divisible por 2 -- da 0 si se divide entre 2
    "Bizz" si es divisible por 3 // sumando los digitos dan 3
    "Boss" si es divisible por 5 -- cuando acaba en 0 o 5
    "Yeah" si es primo -- si es menor o = a 1 no es primo
*/

   //primo
function primo (numero) {
    for ( i = 2 ; i < numero; i++) {
        if (numero % i === 0) {
           return false
        }
    }

    return true;

}



for (i = 1; i < 100; i ++) {
    
    let cadenaMostrar = "";

    // div 2
    cadenaMostrar = cadenaMostrar + i + ": ";

    if ( i %2 === 0){
        cadenaMostrar = cadenaMostrar + "Buzz" + " ";
    }

    // div 3 
    if (i % 3 === 0){
        cadenaMostrar = cadenaMostrar + "Bizz" + " "
    }

    // div 5
    if (i % 5 === 0){
        cadenaMostrar = cadenaMostrar + "Boss" + " "
    }

    // Primo
    if (primo(i)) {
        cadenaMostrar = cadenaMostrar + "Yeah";
    }

    console.log(cadenaMostrar);

}
