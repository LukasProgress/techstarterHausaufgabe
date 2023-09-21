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
    title: 'Moby Dick',
    author: 'Herman Melville',
    source: '/Moby-Dick.txt'
  },
  {
    id: 2,
    title: 'Frankenstein',
    author: 'Mary Wollstonecraft Shelley',
    source: '/Frankenstein.txt'
  },
  {
    id: 3,
    title: 'The Strange Case of Dr. Jekyll and Mr. Hyde',
    author: 'Robert Louis Stevenson',
    source: '/The Strange Case of Dr. Jekyll and Mr. Hyde.txt'
  }

];

app.get('/', (req, res) => {
    res.send('<h1>Meine Bibliothek</h1>' +
      '<ul>' +
      books.map(book => `<li>${book.title} - ${book.author} <button onclick="window.location.href='/read${book.source}'">lesen</button></li>`).join('') +
      '</ul>' 
      );
  });

  

app.get('/read/:file', (req, res) => {
  const file = req.params.file;
  res.sendFile(file, { root: __dirname });
});

const port = 3000;
const port1 = 80;

app.listen(port,port1, () => {
  console.log(`Server läuft auf Port ${port}`);
});