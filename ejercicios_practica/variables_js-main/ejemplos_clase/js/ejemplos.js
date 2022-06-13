'use strict';

//Sobre comentarios:

// Este es un comentario de una sola línea (se usan dos / al inicio)

/* Este es un comentario de más de una línea de código,
se utiliza para apertura y cierre estos simbolos
*/

//Uso de variables:

//Asignacion de variables:

let miNumero = 10;

//Variable de tipo Number:
let miPrimeraCaja = 10;

//Variable de tipo String:
let miSegundaCaja = "Este es un texto";

//Variable de tipo Boolean:
let miTercerCaja = true;

// Operadores aritméticos: +,-,*,/
const numero1 = 10;
const numero2 = 5;
 
console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 * numero2);
console.log(numero1 / numero2);

// Uso de concatenadores!

// Declaración de variables
const texto1 = "Mi nombre es";
const nombre = "carlos";
const nacimiento = 1990;
const texto2 = "nací en el año:";

//Impresión por consola de variables:
//console.log(texto1 + nombre + texto2 + nacimiento);

//Impresión por consola de variables y de strings de espacios:
console.log(texto1 + " " + nombre + ", " + texto2 + " " + nacimiento);

// Acumuladores:

let acumulador = 0;

acumulador = acumulador + 1;
console.log("acumulador vale: " + acumulador);

acumulador = acumulador + 1;
console.log("acumulador vale: " + acumulador);

acumulador = acumulador + 1;
console.log("acumulador vale: " + acumulador);

acumulador += 1;
console.log("acumulador vale: " + acumulador);

acumulador += 1;
console.log("acumulador vale: " + acumulador);
