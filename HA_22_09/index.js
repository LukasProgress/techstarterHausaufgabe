import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import axios from 'axios';

const app = express();
const port = 3000;

app.use(bodyParser.json());

let books = [];

app.get('/', (req, res) => {
  let html = '<h1>My Biblio</h1><ul>';
  books.forEach((book, index) => {
    html += `<li>${book.title} - ${book.author} <a href="/read/${index}"><button>read</button></a></li>`;
  });
  html += '</ul>';

  html += '<a href="/add"><button>Add Book</button></a>';

  res.send(html);
});

app.get('/add', (req, res) => {
  const form = `
    <form action="/addBook" method="post">
      <label for="title">Title:</label>
      <input type="text" name="title" id="title" required><br>

      <label for="author">Author:</label>
      <input type="text" name="author" id="author" required><br>

      <label for="url">URL:</label>
      <input type="url" name="url" id="url" required><br>

      <input type="submit" value="Submit">
    </form>
  `;

  res.send(form);
});

app.post('/addBook', async (req, res) => {
  const { title, author, url } = req.body;

  try {
    const response = await axios.get(url);
    const textContent = response.data;

    const fileName = `${title.toLowerCase().replace(/\s/g, '_')}.txt`;

    fs.writeFileSync(fileName, textContent);

    const book = {
      title,
      author,
      source: fileName,
    };

    books.push(book);

    fs.writeFileSync('books.json', JSON.stringify(books));

    res.redirect('/');
  } catch (error) {
    res.status(500).send('Error adding book: ' + error.message);
  }
});

app.get('/read/:index', (req, res) => {
  const index = req.params.index;
  if (index >= 0 && index < books.length) {
    const book = books[index];
    const fileName = book.source;
    res.sendFile(fileName, { root: "./" });
  } else {
    res.status(404).send('Book not found');
  }
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
