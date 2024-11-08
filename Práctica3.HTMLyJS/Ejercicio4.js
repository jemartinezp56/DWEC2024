document.addEventListener('mousemove', function(event) {
    const x = event.clientX;
    const y = event.clientY;
    document.getElementById('coordenadas').textContent = `X: ${x} , Y: ${y}`;
});