/*
Implementa una función calcularSumaPrecios() que reciba un array de objetos con 
propiedades nombre y precio, y devuelva la suma total de todos los precios utilizando reduce().
*/
class Producto{
    nombre;
    precio;
}
// Varios objetos Producto
let producto1 = new Producto("Chicharrones", 2);
let producto2 = new Producto("Papas", 0.5);
let producto3 = new Producto("Papel higienico", 1);
// Mi lista de productos 
let stock = [producto1, producto2, producto3];


function calcularSumaPrecios(stock) {
    // Usamos reduce() para sumar todos los precios
    let sumaTotal = stock.reduce((acumulador, stock) => {
        return acumulador + stock.precio;
    }, 0);

    return sumaTotal;
}

let total = calcularSumaPrecios(stock);
alert("La suma total de los precios es: " + total.toFixed(2));