import express from "express";
import bodyParser from "body-parser";
import path from "path";

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Array für Bücher erstellen
const books = [
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