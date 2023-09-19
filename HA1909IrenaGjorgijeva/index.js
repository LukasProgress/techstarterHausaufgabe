const express = require('express');
const app = express();
const port = 3001;

// Standard-Route ("/") - Startseite mit Hyperlinks
app.get('/', (req, res) => {
  // Verwende HTML, um Hyperlinks zu anderen Seiten hinzuzufügen
  const homepage = `
    <h1>Willkommen auf der Startseite!</h1>
    <ul>
      <li><a href="/greet">Einfache Begrüßung</a></li>
      <li><a href="/oldhtml">Alte HTML-Seite</a></li>
      <li><a href="/cat/Hausaugaben von Irena Gjorgijeva am 19 09 2023 ">Katzenbild mit Text (Meow)</a></li>
    </ul>
  `;
  res.send(homepage);
});

// Route "/greet" - Einfache Begrüßung
app.get('/greet', (req, res) => {
  res.send('<h1>Hallo und Herzlich Willkommen zur Hausaufgabe am 19/09/2023!</h1>');
});

// Route "/oldhtml" - Senden einer alten HTML-Datei
app.get('/oldhtml', (req, res) => {
  res.sendFile('old.html', { root: './' });
});

// Route "/cat/:says" - Katzenbildroute
app.get('/cat/:says', (req, res) => {
  const { says } = req.params;
  const imageUrl = `http://cataas.com/cat/says/${says}`;

  // Katzenbild von der imageUrl senden
  // beispielsweise in einer HTML-Response anzeigen

  res.send(`<img src="${imageUrl}" alt="Cat MEOW" />`);
});

// Starte  Express-Server
app.listen(port, () => {
  console.log(`Server auf http://localhost:${port} gestartet.`);
});
