//Ejercicio3c
/*
Crear una fórmula para saber si un número es o no es un múltiplo de 2.
*/

//Pedir al usuario que ingrese un número
const numero = prompt("ingrese un numero");

if (numero % 2 == 0) {
  alert(numero + "es multiplo de 2");
} else {
  alert(numero + "no es multiplo de 2");
}
