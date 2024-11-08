const dni = document.getElementById("dni");
const isError = document.getElementById("mensajeError");
isError.textContent = '';

if (!dni) {
    isError.textContent = "Completa el campo DNI.";
    return;
}




const email = "ejemplo@dominio.com";
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
if (emailPattern.test(email)) {
    console.log("El correo electrónico es válido");
} else {
console.log("El correo electrónico no es válido");
}