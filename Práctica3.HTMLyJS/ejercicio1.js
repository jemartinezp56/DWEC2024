//1. Cread un script que, a partir de una página web formada por 2 párrafos, 
//en cuyo texto se encuentran tres enlaces web,  realice lo siguiente: 

//a) Calcule el número de enlaces que tiene la página web. 
const elements = document.querySelectorAll("a");
console.log(elementos.length);

//b) Retorne la dirección a la que dirige el último enlace. 
const endLink = elementos[elementos.length-1].href;
console.log(endLink);

//c) Calcule el número de enlaces del primer párrafo. 
const firstParagraph = document.getElementById("primerEnlace");
const linkFirstParagraph = primerParrafo.querySelectorAll("a");
const total = linkFirstParagraph.length;
console.log(total);