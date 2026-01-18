// Funktion, die prüft, ob Elemente im Sichtfeld sind
const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; // Schwellenwert in Pixeln

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
        // Optional: .remove('active'), wenn es beim Hochscrollen wieder verschwinden soll
    });
};

// Event-Listener für das Scrollen hinzufügen
window.addEventListener('scroll', revealElements);

// Einmal beim Laden ausführen, falls Elemente schon im Sichtfeld sind
revealElements();