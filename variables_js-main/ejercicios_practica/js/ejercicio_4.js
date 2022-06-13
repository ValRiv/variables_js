"use strict";

/* Tarea
 * Objetivos: adquirir herramientas para identificar 
 * problemas en el código, identificando si se producen
 * errores de sintaxis o de lógica.
 * debe descomentar cada ejercicio!
 */
 
 //-------------------------------------------------------------------
// 4. Realice un acumulador utilizando una variable, debe acumular en 5 lineas
//    de código el numero 100, comenzando desde el 1.

let acumulador = 1; //No utilizar mas variables ;D

while(acumulador<=99){

    acumulador= parseInt(acumulador);
 
    acumulador=acumulador+1; 
}
 
console.log("El resultado del programa es: " + acumulador);