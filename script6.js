//EjercicioF
/*
El aeropuerto El Dorado se encuentra en remodelación y requiere un programa para suministrarlo a su personal de seguridad
 con el objetivo de brindar información a los turistas sobre donde se debe tramitar las salidas internacionales para nacionales y extranjeros. 
 Se le solicita diseñar este programa para que reciba el primer dígito de un número de pasaporte y que muestre el valor
 booleano que indique si el turista es del país o extranjero. Todos los No. de pasaporte que inicien con la letra A son nacionales.
 */

//Pedir al usuario que ingrese el primer dígito del número de pasaporte
var primerDigitoPasaporte = prompt(
  "Ingrese el primer dígito del número de pasaporte:"
);

// Verificar si el turista es del país o extranjero
var esNacional = primerDigitoPasaporte === "A";

// Mostrar el resultado en la consola
console.log("¿El turista es del país?");
console.log(esNacional);
