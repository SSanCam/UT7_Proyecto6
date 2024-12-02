// 1. ejercicio FINAAALLLL

let listaEspera = [];
let clientesAtendidos = [];
listaEspera.push("Ana", "Luis", "Sofía", "Carlos");

clientesAtendidos.push(listaEspera.pop(), listaEspera.pop());

listaEspera.push("Mariana");

console.log("Lista clientes atendidos: " + clientesAtendidos + "\n");
console.log("Lista de espera actual: " + listaEspera + "\n");

