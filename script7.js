//Eejercicio 2
/*
Considerando que 𝑎 = 4, 𝑏=7, 𝑐=2𝑏, 𝑥=𝑎 , 𝑦=3𝑥, 𝑢=6, 𝑤=10; crear un algoritmo con JavaScript que realice 
y muestre el resultado en consola de las siguientes operaciones algebraica:
a. 𝑎𝑏𝑐
b. 𝑎2+𝑏92
c. 𝑥+𝑦𝑢+𝑤𝑎
d. 𝑥𝑦(𝑧+𝑤)
*/
2. // Definir las variables
var a = 4;
var b = 7;
var c = 2 * b;
var x = a;
var y = 3 * x;
var u = 6;
var w = 10;

// Operación a
var resultadoA = a / (b * c);

// Operación b
var resultadoB = (a / 2) + (b / 9) * 2;

// Operación c
var resultadoC = (x + y) / (u + w / a);

// Operación d
var resultadoD = x * y / (a + w);

// Mostrar resultados en la consola
console.log("Resultado de la operación a:", resultadoA);
console.log("Resultado de la operación b:", resultadoB);
console.log("Resultado de la operación c:", resultadoC);
console.log("Resultado de la operación d:", resultadoD);

