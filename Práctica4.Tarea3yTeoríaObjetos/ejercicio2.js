class Alumno {
    constructor(nombre, apellido1, apellido2, fechaNacimiento, estudios, curso, telefono) {
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.fechaNacimiento = fechaNacimiento;
        this.estudios = estudios;
        this.curso = curso;
        this.telefono = telefono;
    }

    muestra() {
        return `Nombre: ${this.nombre} ${this.apellido1} ${this.apellido2}
                Fecha de Nacimiento: ${this.fechaNacimiento}
                Estudios: ${this.estudios}
                Curso: ${this.curso}
                Teléfono: ${this.telefono}`;
    }
}

function mostrarModal(mensaje) {
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modalContent");
    modalContent.innerHTML = mensaje;
    modal.style.display = "flex";
}

function cerrarVentana() {
    document.getElementById("formularioAlumno").reset(); 
    document.getElementById("modal").style.display = "none";
    verificarFormulario(); 
}

function llenarCursos() {
    const selectCurso = document.getElementById("curso");
    for (let year = 2000; year <= new Date().getFullYear(); year++) {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        selectCurso.appendChild(option);
    }
}

function validarNombre(nombre) {
    return /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(nombre) && nombre.trim() !== '';
}

function validarApellido(apellido) {
    return /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(apellido) && apellido.trim() !== '';
}

function validarFecha(fecha) {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
    if (!regex.test(fecha)) return false;

    const [dia, mes, anio] = fecha.split('/').map(Number);
    const fechaNacimiento = new Date(anio, mes - 1, dia);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    if (hoy.getMonth() < mes - 1 || (hoy.getMonth() === mes - 1 && hoy.getDate() < dia)) edad--;
    return edad >= 18; 
}

function validarTelefono(telefono) {
    return /^\d{9}$/.test(telefono);
}

function verificarCampo(id) {
    const campo = document.getElementById(id);
    if (campo.value.trim() === "") {
        mostrarModal(`El campo ${campo.name} es obligatorio.`);
    }
}

function ocultarMensajeError(id) {
    document.getElementById("modal").style.display = "none";
}

function verificarFechaNacimiento() {
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    if (!validarFecha(fechaNacimiento)) {
        mostrarModal("Debe ingresar una fecha válida y ser mayor de 18 años.");
    }
}

function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const apellido1 = document.getElementById("apellido1").value;
    const apellido2 = document.getElementById("apellido2").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const estudios = document.getElementById("estudios").value;
    const curso = document.getElementById("curso").value;
    const telefono = document.getElementById("telefono").value;

    if (!validarNombre(nombre)) return mostrarModal("Nombre inválido o vacío");
    if (!validarApellido(apellido1)) return mostrarModal("Primer apellido inválido o vacío");
    if (apellido2 && !validarApellido(apellido2)) return mostrarModal("Segundo apellido inválido");
    if (!validarFecha(fechaNacimiento)) return mostrarModal("Fecha de nacimiento inválida o menor de 18 años");
    if (!estudios) return mostrarModal("Seleccione una opción de estudios");
    if (!curso) return mostrarModal("Seleccione un curso");
    if (!validarTelefono(telefono)) return mostrarModal("Teléfono inválido (9 dígitos)");

    const alumno = new Alumno(nombre, apellido1, apellido2, fechaNacimiento, estudios, curso, telefono);
    mostrarModal(`Registro Exitoso:<br>${alumno.muestra()}`);
}

function verificarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const apellido1 = document.getElementById("apellido1").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const estudios = document.getElementById("estudios").value;
    const curso = document.getElementById("curso").value;
    const telefono = document.getElementById("telefono").value;

    const botonRegistrar = document.getElementById("registrarBtn");
    if (
        validarNombre(nombre) &&
        validarApellido(apellido1) &&
        validarFecha(fechaNacimiento) &&
        estudios !== "" &&
        curso !== "" &&
        validarTelefono(telefono)
    ) {
        botonRegistrar.disabled = false;
    } else {
        botonRegistrar.disabled = true;
    }
}

window.onload = function() {
    llenarCursos();
    document.getElementById("formularioAlumno").addEventListener("input", verificarFormulario);
};
