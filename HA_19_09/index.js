const express = require('express');
const app = express();

// Route für die Hauptseite "/"
app.get('/', (req, res) => {
  // html mit links
  const htmlResponse = `
    <html>
      <head>
        <title>Hauptseite</title>
      </head>
      <body>
        <h1>Willkommen auf der Hauptseite</h1>
        <p>Wähle eine der folgenden Optionen:</p>
        <ul>
          <li><a href="/greet">Begrüßung anzeigen</a></li>
          <li><a href="/oldhtml">Alte HTML-Seite anzeigen</a></li>
          <li><a href="/cat/Meow">Katzenbild anzeigen</a></li>
        </ul>
      </body>
    </html>
  `;
  res.

  send(htmlResponse);
  });

//Route greet
app.get('/greet', (req, res) => {
  res.send('<h1>Hallo und Herzlich Willkommen!</h1>');
});

//Route oldhtml
app.get('/oldhtml', (req, res) => {
  res.sendFile('old.html', { root: './' }, (err) => {
    if (err) {
      res.status(500).send('Fehler beim Laden der HTML-Datei');
    }
  });
});

// Route "/cat/:says"
app.get('/cat/:says', (req, res) => {
  // Den Parameter "says" aus der URL abrufen
  const saysText = req.params.says;

  // Die URL für das Katzenbild erstellen
  const catImageUrl = `https://cataas.com/cat/says/${saysText}`;

  // Eine HTML-Seite mit dem Katzenbild erstellen und senden
  const htmlResponse = `<html><body><h1>Cat as a Service</h1><img src="${catImageUrl}" alt="Cat"></body></html>`;
  res.send(htmlResponse);
});

// Starte den Server auf Port 3000
const port = 3001;
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
