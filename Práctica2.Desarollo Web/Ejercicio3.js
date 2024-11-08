//3- Crea una función que, dada una cadena de texto, devuelve una nueva cadena cambiando la primera letra de
//cada palabra en mayúsculas.
const prompt = require("prompt-sync")();
function esText(frase) {
    let palabras = frase.split(' '); 
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i]) { 
            palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substr(1);
        }
    }
    return palabras.join(' ');
}
let frase = prompt("Introduce la cadena de texto");
let resultado = esText(frase);
console.log(resultado);
