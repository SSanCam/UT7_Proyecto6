/*
Implementa un script que tome una cadena codificada en ROT13 como entrada y devuelva la cadena decodificada. 
Los caracteres no alfabéticos deben permanecer sin cambios.
*/

// Función rot13 para decodificar/codificar
function rot13(str) {
    let transformed = "";
  
    // Recorrer cada carácter de la cadena
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
  
        // Letras mayúsculas
        if (charCode >= 65 && charCode <= 90) {
            charCode = ((charCode - 65 + 13) % 26) + 65;
        }
        // Letras minúsculas
        else if (charCode >= 97 && charCode <= 122) {
            charCode = ((charCode - 97 + 13) % 26) + 97;
        }

        // Agregar el carácter transformado o no modificado
        transformed += String.fromCharCode(charCode);
    }
  
    return transformed;
}

// Ejemplo de uso
let entradaCodificada = "Guvf vf n 987 grfg zrffntr!";
let salidaDecodificada = rot13(entradaCodificada);
console.log(salidaDecodificada); // "This is a 987 test message!"
