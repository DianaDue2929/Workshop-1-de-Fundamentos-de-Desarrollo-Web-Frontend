//Ejercicio b
/*
La tienda “Mis Zapatos” está de aniversario, por esta razón está 
realizando un descuento del 50% para compras mayores o iguales a 
los $100.000 COP. Se le pide realizar un algoritmo que reciba el 
valor de una compra y muestre en consola el valor booleano que 
indique si la compra recibe o no el descuento.
*/

//Pedir al usuario que ingrese el valor de su compra 
const valorCompra = prompt("ingrese el valor de su compra en COP");

const descuentoMayor100000 = Number(valorCompra) > 100000
const descuentoIgual100000 = Number(valorCompra) == 100000
const ejerciciob = descuentoIgual100000 || descuentoMayor100000
console.log("respuesta ejerciciob es: " + ejerciciob)
