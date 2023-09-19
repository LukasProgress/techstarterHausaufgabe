const express = require('express');
const app = express();
const port = 3000;

// Standard-Route ("/") - Startseite
app.get('/', (req, res) => {
  res.send('Willkommen auf Irenas Startseite!');
});

// Route "/greet" - Einfache Begrüßung
app.get('/greet', (req, res) => {
  res.send('<h1>Hallo und Herzlich Willkommen zu Hausaufgabe am 19.09.2023!</h1>');
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

  res.send(`<img src="${imageUrl}" alt="Cat" />`);
});

// Starte  Express-Server
app.listen(port, () => {
  console.log(`Server auf http://localhost:${port} gestartet.`);
});