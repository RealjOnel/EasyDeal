function nextStep(choice) {
    const question = document.getElementById('finder-question');
    const options = document.getElementById('finder-options');
    const result = document.getElementById('finder-result');
    const recommended = document.getElementById('recommended-pack');

    // Einfache Logik:
    if (choice === 'beginner') {
        recommended.innerText = 'Starter Pack';
    } else {
        recommended.innerText = 'Lifestyle Pack (Premium)';
    }

    // Animation: Ausblenden und Einblenden
    question.style.display = 'none';
    options.style.display = 'none';
    result.style.display = 'block';
}

function resetFinder() {
    document.getElementById('finder-question').style.display = 'block';
    document.getElementById('finder-options').style.display = 'flex';
    document.getElementById('finder-result').style.display = 'none';
}