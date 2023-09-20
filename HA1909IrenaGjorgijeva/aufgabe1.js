const express = require('express');
const app = express();
const port = 7654; // Port auf 7654 geändert

// Routenbehandlung für die Wurzel-URL
app.get('/', (req, res) => {
  res.send('Hallo, Welt! Dies ist ein einfacher Express.js-Server von Irena Gjorgijeva am 19.09.2023.');
});

// Starte den Server und lausche auf dem angegebenen Port
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
}); 