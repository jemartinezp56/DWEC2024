//Cread un script en el que, a partir de una página web con un párrafo que explica la opinión 
//sobre una receta de cocina y un enlace, al pulsar en este último
//se abra una caja de texto solicitando la opinión sobre esta al usuario y el anexo 
//al texto anterior (similar a las opiniones que se adjuntan en ciertos periódicos web 
//sobre las noticias publicadas). 

function opinionLink(){

const opinion = prompt("Escribe tu opinión sobre la receta");
console.log(opinion);
const opinionDada = document.getElementById("opinionDada");
opinionDada.innerHTML += opinion + "<br>";
}


