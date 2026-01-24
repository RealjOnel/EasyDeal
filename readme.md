HTML PLACEHOLDER (das hier für jede einzelne neue Seite einfügen, damit der Style rübergezogen wird):
INNERHALB "MAIN" KANN MAN DANN DIE SPEZIFISCHE SEITEN KOMPONENTEN CODEN

```
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EasyDeal | SEITENNAME</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    
    <header class="main-header">
        <div class="logo">Easy<span class="green-text">Deal</span></div>
        <nav>
            <ul class="nav-links">
              <li><a href="../index.html" class="active">Home</a></li>
              <li><a href="../Other Pages/überuns.html">Über uns</a></li>
                <li class="dropdown">
                  <a href="./Packs Pages/main.html">Packs</a>
                    <ul class="dropdown-menu">
                      <li><a href="#">Starter Packs</a></li>
                      <li><a href="#">Lifestyle Packs</a></li>
                      <li><a href="#">Limited Edition</a></li>
                    </ul>
                 </li>
              <li><a href="../Other Pages/quality.html">Qualität</a></li>
              <li><a href="../Other Pages/mitarbeiter.html">Mitarbeiter</a></li>
             <li><a href="#" class="contact-btn">Kontakt</a></li>
            </ul>
        </nav>
    </header>

<main>
</main>

<footer class="main-footer">
    <div class="footer-container">
        <div class="footer-section about">
            <div class="logo">Easy<span class="green-text">Deal</span></div>
            <p>Dein Lifestyle, unser Expertenwissen. Wir vereinfachen den Zugang zu Premium-Produkten – direkt, sicher und ohne Aufwand.</p>
        </div>

        <div class="footer-section links">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="../index.html">Home</a></li>
                <li><a href="überuns.html">Über uns</a></li>
                <li><a href="#">Packs</a></li>
                <li><a href="#">Kontakt</a></li>
            </ul>
        </div>

        <div class="footer-section legal">
            <h3>Rechtliches</h3>
            <ul>
                <li><a href="#">Impressum</a></li>
                <li><a href="#">Datenschutz</a></li>
                <li><a href="#">AGB</a></li>
                <li><a href="#">Widerruf</a></li>
            </ul>
        </div>

        <div class="footer-section socials">
            <h3>Follow Us</h3>
            <div class="social-icons">
                <a href="#" class="social-btn">Instagram</a>
                <a href="#" class="social-btn">X (Twitter)</a>
                <a href="#" class="social-btn">YouTube</a>
            </div>
        </div>
    </div>

    <div class="footer-bottom">
        <p>&copy; 2026 EasyDeal. Alle Rechte vorbehalten. | 18+ Produkte.</p>
    </div>
</footer>
</body>
</html>

BITTE BEACHTEN DAS MAN DIE LINKS UND DIE ACTIVE CLASS ENTSPRECHEND CHANGED!