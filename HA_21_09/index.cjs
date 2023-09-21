const express = require('express');
const app = express();

const port = 3000;

const books = [
  {
    id: 1,
    title: 'Buch 1: The Blue Castle',
    author: 'Autor 1: The Project Gutenberg',
    source: 'The Blue Castle.txt',
  },
  {
    id: 2,
    title: 'Buch 2: The Scarlet Letter',
    author: 'Autor 2: The Project Gutenberg',
    source: 'The Scarlet Letter.txt',
  },
];

app.get('/', (req, res) => {
  res.send(`
    <h1>Meine Bibliothek</h1>
    <ul>
      ${books.map((book) => `
        <li>
          <p>${book.title} von ${book.author}</p>
          <a href="/read/${book.source}" target="_blank"><button>Lesen</button></a>
        </li>
      `).join('')}
    </ul>
  `);
});

app.get('/read/:file', (req, res) => {
  const fileName = req.params.file;
  res.sendFile(fileName, { root: './' });
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});

