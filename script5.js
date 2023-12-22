//Ejercicioe
/* 
Hacer un algoritmo con JavaScript que reciba cualquier letra del abecedario y muestre en consola el valor booleano que indique si es o no una vocal.
*/

//pedir al usuario que ingrese una letra
// Pedir al usuario que ingrese una letra
var letra = prompt("Ingrese una letra del abecedario:");

// Convertir la letra ingresada a minúscula para simplificar la comparación
letra = letra.toLowerCase();

// Verificar si la letra es una vocal
var esVocal = letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u';

// Mostrar el resultado en la consola
console.log("¿La letra ingresada es una vocal?");
console.log(esVocal);


