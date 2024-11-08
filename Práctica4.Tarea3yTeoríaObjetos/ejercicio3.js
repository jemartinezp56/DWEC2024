let posInicial = null;
let posFinal = null;
const imagen = document.getElementById('icono');

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();

    const x = event.clientX;
    const y = event.clientY;

    if (posInicial === null) {
        posInicial = { x, y };
    } else if (posFinal === null) {
        posFinal = { x, y };
    } else {
        posInicial = { x, y };
        posFinal = null;
    }

    console.log("Primera posición:", posInicial);
    console.log("Segunda posición:", posFinal);
});

imagen.addEventListener('click', function() {
    if (posInicial && posFinal) {
        animarMovimiento(imagen, posInicial, posFinal, 1000);
    }
});

function animarMovimiento(elemento, inicio, fin, duracion) {
    const distanciaX = fin.x - inicio.x;
    const distanciaY = fin.y - inicio.y;
    const inicioTiempo = performance.now();

    function mover(timestamp) {
        const tiempoTranscurrido = timestamp - inicioTiempo;
        const progreso = Math.min(tiempoTranscurrido / duracion, 1);

        const posicionX = inicio.x + distanciaX * progreso;
        const posicionY = inicio.y + distanciaY * progreso;

        elemento.style.left = `${posicionX}px`;
        elemento.style.top = `${posicionY}px`;

        if (progreso < 1) {
            requestAnimationFrame(mover);
        }
    }

    requestAnimationFrame(mover);
}
