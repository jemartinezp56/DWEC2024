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
    return ` Nombre: ${this.nombre} ${this.apellido1} ${this.apellido2}` + ` Fecha de Nacimiento: ${this.fechaNacimiento}` +
            ` Estudios: ${this.estudios}` + ` Curso: ${this.curso}` + ` Teléfono: ${this.telefono}`;
    }
}

console.log(alumno1.muestra());
