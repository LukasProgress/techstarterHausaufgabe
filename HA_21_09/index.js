import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.json());

const books = [
  {
    id: 1,
    title: 'Twenty Years After',
    author: 'Alexandre Dumas',
    source: '/TwentyYearsAfter.txt'
  },
  {
    id: 2,
    title: 'The Expedition of Humphry Clinker',
    author: 'Tobias Smollett',
    source: '/TheExpeditionofHumphryClinker.txt'
  },
  {
    id: 3,
    title: 'Romeo and Juliet',
    author: 'William Shakespeare',
    source: '/RomeoandJuliet.txt'
  },
  {
    id: 4,
    title: 'Moby Dick',
    author: 'Herman Melville',
    source: '/MobyDick.txt'
  },
  {
    id: 5,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    source: '/PrideandPrejudice.txt'
  }
];

app.get('/', (req, res) => {
  res.send('<h1>Meine Bibliothek</h1><ul>' +
    books.map(book => `<li>${book.title} - ${book.author} <button onclick="window.location.href='/read${book.source}'">lesen</button></li>`).join('') +
    '</ul>');
});

app.get('/read/:file', (req, res) => {
  const file = req.params.file;
  res.sendFile(file, { root: __dirname });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
