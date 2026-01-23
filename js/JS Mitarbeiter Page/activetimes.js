function updateWorkStatus() {
    const dot = document.getElementById('status-dot');
    const text = document.getElementById('status-text');
    const now = new Date();
    const hour = now.getHours();

    // Geschäftszeiten: 08:00 bis 20:00 Uhr
    if (hour >= 8 && hour < 20) {
        dot.style.backgroundColor = '#2ecc71'; 
        dot.style.boxShadow = '0 0 10px #2ecc71';
        dot.classList.add('pulse');
        text.innerText = 'Unser Team ist aktuell aktiv im Einsatz';
    } else {
        dot.style.backgroundColor = '#e74c3c'; 
        dot.style.boxShadow = '0 0 10px #e74c3c';
        dot.classList.remove('pulse'); 
        text.innerText = 'Das Team ist aktuell im wohlverdienten Feierabend';
    }
}

// Beim Laden ausführen
window.onload = updateWorkStatus;