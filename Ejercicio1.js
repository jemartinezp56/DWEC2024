//1. Crea una función que devuelve el resultado del lanzamiento de un dado, es decir, un número natural aleatorio
//entre 1 y 6. (1 punto)

function numRandom() {
    let random = Math.floor(Math.random() * 6) + 1;
    return random;
}
console.log(numRandom());