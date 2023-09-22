import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Bücherliste
const books = [
  {
    id: 1,
    title: 'Metamorphosis',
    author: 'Franz Kafka',
    source: 'Metamorphosis.txt',
  },
  {
    id: 2,
    title: 'My Life - Volume 1',
    author: 'Richard Wagner',
    source: 'My Life.txt',
  },
  {
    id:3,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    source: 'Pride and Prejudice.txt'
  }

];

// Hier starte ich den Server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Routen definieren

app.get('/', (req, res) => {
    res.send(`
      <h1>Meine Bibliothek</h1>
      <ul>
        ${books.map(book => `
          <li>${book.title} von ${book.author}
            <a href="/read/${book.source}"><button>Lesen</button></a>
          </li>`).join('')}
      </ul>
    `);
  });
  

  app.get('/read/:file', (req, res) => {
    const { file } = req.params;
    res.sendFile(file, { root: './buecher' });
  });
  

  app.get('/add', (req, res) => {
    res.send(`
      <h2>Buch hinzufügen</h2>
      <form action="/addBook" method="post">
        <label for="title">Titel:</label>
        <input type="text" name="title" id="title"><br>
        <label for="author">Autor:</label>
        <input type="text" name="author" id="author"><br>
        <label for="url">URL zur .txt-Datei:</label>
        <input type="text" name="url" id="url"><br>
        <input type="submit" value="Hinzufügen">
      </form>
    `);
  });
  
  app.post('/addBook', (req, res) => {
 
  });
  
  app.post('/addBook', (req, res) => {

  });
  