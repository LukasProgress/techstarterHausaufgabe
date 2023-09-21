import express from 'express';
import fs from 'fs';
import { fileURLToPath } from 'url'; // Importieren Sie 'fileURLToPath' aus dem 'url'-Modul
import path from 'path';

const __filename = fileURLToPath(import.meta.url); // Konvertieren Sie __filename
const __dirname = path.dirname(__filename); // Konvertieren Sie __dirname

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Route zum Anzeigen einer Liste der verfügbaren Bücher
app.get('/books', (req, res) => {
  const booksDirectory = path.join(__dirname, 'books');
  fs.readdir(booksDirectory, (err, files) => {
    if (err) {
      res.status(500).send('Fehler beim Lesen des Buchverzeichnisses.');
    } else {
      const bookList = files.map((file) => {
        return {
          name: file,
          link: `/books/${file}`,
        };
      });
      res.json(bookList);
    }
  });
});

// Route zum Servieren eines einzelnen Buches
app.get('/books/:bookName', (req, res) => {
  const { bookName } = req.params;
  const bookPath = path.join(__dirname, 'books', bookName);

  fs.readFile(bookPath, 'utf-8', (err, content) => {
    if (err) {
      res.status(404).send('Buch nicht gefunden.');
    } else {
      res.send(content);
    }
  });
});

app.listen(port, () => {
  console.log(`Der Server ist auf http://localhost:${port} gestartet.`);
});