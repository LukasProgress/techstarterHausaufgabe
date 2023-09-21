import express from "express";
import bodyParser from "body-parser";
import path from "path";
import fs from "fs";

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Array für Bücher erstellen
let books = [
  {
    id: 1,
    title: "Romeo and Juliet",
    author: "William Shakespeare",
    source: "Romeo and Juliet.txt"
  },
  {
    id: 2,
    title: "The Complete Works of William Shakespeare",
    author: "William Shakespeare",
    source: "The Complete Works of William Shakespeare.txt"
  },
  {
    id: 3,
    title: "The Republic",
    author: "Plato",
    source: "The Republic.txt"
  },{
    id: 4,
    title: "Metamorphosis",
    author: "Franz Kafka",
    source: "Metamorphosis.txt"
  },
];

// Füge neues Buch zur Liste hinzu
function addBook(title, author, source) {
  const newBook = {
    id: books.length + 1,
    title,
    author,
    source: source, // relative URL zur Textdatei
  };
  books.push(newBook);
}

// Route für die Home-Seite ("/")
app.get("/", (req, res) => {
  const bookList = books.map((book) => {
    return `
      <li>
        ${book.title} by ${book.author}
        <a href="/read/${book.source}"><button>lesen</button></a>
      </li>
    `;
  }).join('');

  const html = `
    <h1>Irenas virtuelle Bibliothek</h1>
    <ul>${bookList}</ul>
    <a href="/add"><button>Buch hinzufügen</button></a>
  `;
  res.send(html);
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});

// Route für das Lesen der Textdateien
app.get("/read/:file", (req, res) => {
  const { file } = req.params;
  const filePath = path.resolve(process.cwd(), "books", file);
  res.sendFile(filePath);
});

app.get("/add", (req, res) => {
  const form = `
    <h2>Buch hinzufügen</h2>
    <form method="post" action="/addBook">
      <label for="title">Titel:</label>
      <input type="text" id="title" name="title" required><br>

      <label for="author">Autor:</label>
      <input type="text" id="author" name="author" required><br>

      <label for="source">URL zur .txt-Datei:</label>
      <input type="url" id="source" name="source" required><br>

      <button type="submit">Buch hinzufügen</button>
    </form>
  `;
  res.send(form);
});

app.post("/addBook", async (req, res) => {
  const { title, author, source } = req.body;

  // Lade Buch von URL herunter und speichere auf eigenen Server
  // Verwende "fs" Modul, um die Datei zu speichern
  const fileName = source.split('/').pop();
  const filePath = path.resolve(__dirname, "books", fileName);

  const fileStream = fs.createWriteStream(filePath);
  const response = await fetch(source); // "node-fetch" installiert, um "fetch" zu verwenden

  response.body.pipe(fileStream);

  fileStream.on('finish', () => {
    // Füge Buch dem Array von Büchern hinzu
    addBook(title, author, fileName);

    // Speichere das aktualisierte Array in einer Datei
    fs.writeFileSync(path.resolve(__dirname, "books.json"), JSON.stringify(books));

    res.redirect("/"); // Leite Benutzer zur Homepage zurück
  });
});