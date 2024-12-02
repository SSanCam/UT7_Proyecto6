# Resumen Teórico de JavaScript

## 1. Uso básico de JavaScript
- **`console.log()`**:
  - Imprime mensajes en la consola del navegador o terminal.
  - Ejemplo: `console.log("Hola Mundo");`
- **Comentarios:**
  - De una sola línea: `// Este es un comentario.`
  - Multilínea: 
    ```
    /*
    Este es un comentario
    en varias líneas.
    */
    ```

## 2. Variables y Tipos de Datos
- **Declaración de variables:**
  - `let`: Para variables que cambian.
  - `const`: Para constantes.
  - Ejemplo:
    ```javascript
    let numero = 5;
    const nombre = "Juan";
    ```
- **Tipos de datos:**
  - Números (`number`), cadenas de texto (`string`), booleanos (`true`/`false`), objetos, arrays, etc.
- **Concatenación y Template Literals:**
  - Uso de `` para integrar variables en cadenas.
    ```javascript
    console.log(`Hola, mi nombre es ${nombre}`);
    ```

## 3. Operadores
- **Matemáticos:** `+`, `-`, `*`, `/`, `%`, `**`.
- **Comparación:** `===`, `>`, `<`, etc.
- **Lógicos:** `&&`, `||`, `!`.

## 4. Condicionales
- Uso de `if`, `else if`, `else`:
  ```javascript
  if (numero % 2 === 0) {
    console.log("Es par");
  } else {
    console.log("Es impar");
  }

## 5. Bucles
- for:
  ```
  for (let i = 1; i <= 10; i++) {
  console.log(i);
  }
  

## 6. Funciones

- Declaración de funciones: 
  ```
  function sumar(a, b) {
  return a + b;
    }
    console.log(sumar(3, 5)); // 8

- Validación de parámetros
  ```
  if (typeof radio !== "number") {
  console.error("El parámetro debe ser un número");
    }
## 7. Manipulación de Arrays
- Declaración : `let numeros = [1, 2, 3, 4, 5];`
- Métodos:
  
  * `.map()`: Transforma cada elemento:
    ```
    let cuadrados = numeros.map(num => num ** 2);

  * `.filter()`: Filtra elementos
    ```
    let pares = numeros.filter(num => num % 2 === 0);

  * `.sort()` : Ordena elementos
    ```
    numeros.sort((a, b) => b - a); // Descendente

## 8. Objetos
- **Declaración:**
  ```javascript
  let alumno = { nombre: "Juan", calificacion: 8 };

