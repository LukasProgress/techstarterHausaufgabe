const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');


const books = [
  {
    id: 1,
    title: 'Buch 1: The Blue Castle',
    author: 'Autor 1: The Project Gutenberg',
    source: 'TheBlueCastle.txt'
  },
  {
    id: 2,
    title: 'Buch 2: The Scarlet Letter',
    author: 'Autor 2: The Project Gutenberg',
    source: 'TheScarletLetter.txt'
  }
];


app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  let bookList = '<ul>';
  books.forEach((book) => {
    bookList += `
      <li>
        <p>${book.title} von ${book.author}</p>
        <a href="/read/${encodeURIComponent(book.source)}" target="_blank"><button>Lesen</button></a>
      </li>
    `;
  });
  bookList += '</ul>';


  res.send(`
    <h1>Meine Bibliothek</h1>
    ${bookList}
    <a href="/add"><button>Buch hinzufügen</button></a>
  `);
});


app.get('/add', (req, res) => {
  res.send(`
    <h1>Buch hinzufügen</h1>
    <form action="/addBook" method="post">
      <label for="title">Titel:</label>
      <input type="text" id="title" name="title"><br>
      <label for="author">Autor:</label>
      <input type="text" id="author" name="author"><br>
      <label for="url">URL zur .txt-Datei:</label>
      <input type="text" id="url" name="url"><br>
      <input type="submit" value="Buch hinzufügen">
    </form>
  `);
});


app.post('/addBook', async (req, res) => {
  const { title, author, url } = req.body;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Fehler beim Herunterladen der Datei');
    }


    const text = await response.text();
    const fileName = `book${books.length + 1}.txt`;

    fs.writeFileSync(fileName, text);

    const newBook = {
      id: books.length + 1,
      title,
      author,
      source: fileName
    };
    books.push(newBook);

    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Ein Fehler ist aufgetreten.');
  }
});


app.get('/read/:file', (req, res) => {
  const fileName = req.params.file;
  res.sendFile(fileName, { root: './' });
});


app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});

// Quelle: Node.js offizielle Website https://nodejs.org/de

// Quelle: Express.js Dokumentation https://expressjs.com/

// Quelle: Node-fetch GitHub Repository https://github.com/node-fetch/node-fetch

