import express from 'express';
import bodyParser from 'body-parser';

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
    let html = '<h1>Meine Bibliothek</h1><ul>';
    books.map(book => {
        html += `<li>${book.titel} - ${book.autor} <a href="/read/${book.source}"><button>lesen</button></a></li>`;
    });
    html += '</ul>';
    res.send(html);
});
app.get('/read/:file', (req, res) => {
    const fileName = req.params.file;
    res.sendFile(fileName, { root: "./" });
});
app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
});
