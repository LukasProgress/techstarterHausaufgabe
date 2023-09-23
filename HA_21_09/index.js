import express from 'express';
import { json, urlencoded } from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);





const app = express();
const port = 3000;

const books = ([
  {
    id: 1,
    title: 'TheCambridge',
    author: 'Unbekannt',
    source: 'TheCambridge.txt' 
  },
  {
    id: 2,
    title: 'EvenStephen',
    author: 'Todd L. W. Doney',
    source: 'EvenStephen.txt' 
  },
  {
    id: 3,
    title: 'Little Women',
    author: 'Louisa May Alcott',
    source: 'Little Women.txt'
  
}]);

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});

app.get('/', (req, res) => {
  const bookList = books.map(book => `
    <li>${book.title} von ${book.author}
      <a href="/read/${book.source}" target="_blank">
        <button>Lesen</button>
      </a>
    </li>
  `).join('');

  res.send(`
    <h1>Meine Bibliothek</h1>
    <ul>
      ${bookList}
    </ul>
    <a href="/add"><button>Buch hinzufügen</button></a>
  `);
});

app.get('/books', (req, res) => {
  res.json(books);
});

app.get('/read/:file', (req, res) => {
  const { file } = req.params;
  const filePath = join(__dirname, 'public', 'books', file);


  res.sendFile(filePath);
});

app.get('/add', (req, res) => {
  res.send(`
    <h1>Buch hinzufügen</h1>
    <form action="/addBook" method="post">
      <label for="title">Titel:</label>
      <input type="text" id="title" name="title"><br><br>
      <label for="author">Autor:</label>
      <input type="text" id="author" name="author"><br><br>
      <label for="url">URL zur .txt-Datei:</label>
      <input type="text" id="url" name="url"><br><br>
      <input type="submit" value="Buch hinzufügen">
    </form>
  `);
});

app.post('/addBook', async (req, res) => {
  const { title, author, url } = req.body;

  try {
    
    const fileName = join(__dirname, 'public', 'books', `${title}.txt`);
    
    
    const response = await axios.get(url);
    await fs.writeFile(fileName, response.data, 'utf-8');
    console.log(`Das Buch wurde unter ${fileName} gespeichert.`);

    
    const newBook = {
      id: books.length + 1,
      title,
      author,
      source: `books/${title}.txt`, 
    };

    
    books.push(newBook);

    
    res.redirect('/');
  } catch (error) {
    console.error('Fehler beim Herunterladen und Speichern des Buchtextes:', error.message);
    res.status(500).send('Fehler beim Hinzufügen des Buches.');
  }
});
