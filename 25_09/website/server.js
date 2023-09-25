const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Statische Dateien (HTML, CSS, JS, etc.) aus dem aktuellen Verzeichnis bereitstellen
app.use(express.static(path.join(__dirname, '.')));

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
