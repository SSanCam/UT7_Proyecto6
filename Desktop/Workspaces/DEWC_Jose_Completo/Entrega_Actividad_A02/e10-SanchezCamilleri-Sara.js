/*
Crea un script que pida al usuario un número entre 1 y 12 (representando los meses del año) 
y devuelva el número de días en el mes correspondiente. 
Considera que febrero tiene 28 días y los meses de abril, junio, septiembre y noviembre tienen 30.
*/

let mes; 
do {
    mes = parseInt(prompt("Introdúce el número del mes del año [1-12] >> "));
} while (isNaN(mes) || mes < 1 || mes > 12);

switch (mes) {
    case 1: // Enero
    case 3: // Marzo
    case 5: // Mayo
    case 7: // Julio
    case 8: // Agosto
    case 10: // Octubre
    case 12: // Diciembre
        dias = 31;
        break;

    // Agrupar meses con 30 días
    case 4: // Abril
    case 6: // Junio
    case 9: // Septiembre
    case 11: // Noviembre
        dias = 30;
        break;

    // Caso especial para febrero
    case 2: // Febrero
        dias = 28;
        break;

    default: "Mes no encontrado.";
    break;
}
alert("El mes " + mes + " tiene " + dias + " dias.")