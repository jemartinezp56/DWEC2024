//Crear una función que calcule el mcm de un número indefinido de números que se pasan como parámetros
//de la función. Esta función se puede implementar de varias maneras, pero vamos a ir a una simple a partir de la
//siguiente definición:
//"el mcm de un conjunto de números es el primer número donde la división entre todos los anteriores es exacta"

const prompt = require("prompt-sync")();
let numeros = prompt("Escribe los numeros separados por , que quieras");
function mcm(numeros) {
let array = numeros.split(',').map(Number); 
let resultado = array[0]; 

for (let i = 1; i < array.length; i++) {
    resultado = operacion(resultado, array[i]); 
}

return resultado;
}

function operacion(num1, num2) {
let numMayor = Math.max(num1, num2);
let mcm = numMayor;

while (true) {
    if (mcm % num1 == 0 && mcm % num2 == 0) {
        return mcm;
    }
    mcm += numMayor; 
    }
}


console.log(mcm(numeros));