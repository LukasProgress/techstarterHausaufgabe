import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();
const port = 3000;

app.use(bodyParser.json());

let books = [
  { id: 1, titel: "Clou", autor: "Gutenberg", source: "clou.txt" },
  { id: 2, titel: "Scie", autor: "Gutenberg", source: "scie.txt" },
  { id: 3, titel: "The", autor: "Gutenberg", source: "the.txt" },
  { id: 4, titel: "Whit", autor: "Gutenberg", source: "whit.txt" }
];

app.get('/', (req, res) => {
  let html = '<h1>My Biblio</h1><ul>';
  books.map(book => {
    html += `<li>${book.titel} - ${book.autor} <a href="/read/${book.source}"><button>read</button></a></li>`;
  });
  html += '</ul>';

  // Add the "add Book" button
  html += '<a href="/add"><button>add Book</button></a>';

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
      <input type="text" name="url" id="url" required><br>

      <input type="submit" value="Submit">
    </form>
  `;

  res.send(form);
});

app.post('/addBook', (req, res) => {
  const { title, author, url } = req.body;

  // Use fs to copy the text of the page and save it on your computer
  fs.readFile(url, 'utf8', (err, data) => {
    if (err) throw err;

    const book = {
      id: books.length + 1,
      titel: title,
      autor: author,
      source: `${title.toLowerCase()}.txt`
    };

    // Add the downloaded book to the array
    books.push(book);

    // Save the array to your computer using JSON.stringify
    fs.writeFile('books.json', JSON.stringify(books), err => {
      if (err) throw err;
      console.log('Book added successfully');
    });
  });

  res.redirect('/');
});

app.get('/read/:file', (req, res) => {
  const fileName = req.params.file;
  res.sendFile(fileName, { root: "./" });
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
