const express = require('express');
const app = express();
const port = 3000;

// Beispiel-Buchdaten
const books = [
  {
    id: 1,
    title: 'Buch 1',
    author: 'Autor 1',
    source: 'TheCambridge.txt'
  },
  {
    id: 2,
    title: 'Buch 2',
    author: 'Autor 2',
    source: 'EvenStephen.txt'
  },
  // Weitere Bücher hier hinzufügen
];

// Express-Middleware für JSON-Anfragen verarbeiten
app.use(express.json());

// Starte den Express-Server
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});

// Routen definieren

// Homepage
app.get('/', (req, res) => {
  res.send(`
    <h1>Meine Bibliothek</h1>
    <ul>
      ${books.map(book => `
        <li>${book.title} von ${book.author}
          <a href="/read/${book.source}" target="_blank">
            <button>Lesen</button>
          </a>
        </li>
      `).join('')}
    </ul>
  `);
});

// Bücher-Ressource
app.get('/books', (req, res) => {
  res.json(books);
});

// Route zum Lesen der Textdateien
app.get('/read/:file', (req, res) => {
  const { file } = req.params;
  res.sendFile(file, { root: './' });
});

// Fange unbekannte Routen ab
app.use((req, res) => {
  res.status(404).send('404 - Seite nicht gefunden');
});

