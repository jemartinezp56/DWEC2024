function showAnimalInfo(animal) {
    const animalName = document.getElementById('animal-name');
    const animalDescription = document.getElementById('animal-description');
    const animalInfoSection = document.getElementById('animal-info');

    let description = '';

    switch(animal) {
        case 'León':
            description = 'El león es conocido como el "rey de la selva" por su majestuosa apariencia y posición en la cadena alimentaria.';
            break;
        case 'Tigre':
            description = 'El tigre es el felino más grande del mundo, conocido por su hermoso pelaje rayado y su increíble poder.';
            break;
        case 'Elefante':
            description = 'El elefante es el animal terrestre más grande, famoso por su memoria, inteligencia y comportamiento social.';
            break;
        case 'Jirafa':
            description = 'La jirafa es el animal más alto del mundo, famosa por su largo cuello que le permite alcanzar las.';
    }
}