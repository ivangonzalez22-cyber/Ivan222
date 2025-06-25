document.addEventListener('DOMContentLoaded', () => {
    const revealButton = document.getElementById('revealButton');
    const secretMessage = document.getElementById('secretMessage');
    const greeting = document.getElementById('greeting');

    const loveNotes = [
        "Mi Corazón,",
        "Mi Amor,",
        "Cariño Mío,",
        "Mi Vida,",
        "Mi Sol,"
    ];
    let noteIndex = 0;

    // Cambia el saludo cada 3 segundos
    setInterval(() => {
        noteIndex = (noteIndex + 1) % loveNotes.length;
        greeting.textContent = loveNotes[noteIndex];
    }, 3000);

    revealButton.addEventListener('click', () => {
        if (secretMessage.classList.contains('hidden')) {
            secretMessage.classList.remove('hidden');
            secretMessage.classList.add('visible');
            revealButton.textContent = "¡Ya lo sabes!";
            // Opcional: Desactivar el botón después de revelar
            // revealButton.disabled = true;
        } else {
            // Si quieres que el botón también oculte el mensaje
            // secretMessage.classList.remove('visible');
            // secretMessage.classList.add('hidden');
            // revealButton.textContent = "Haz Clic Aquí";
        }
    });
});