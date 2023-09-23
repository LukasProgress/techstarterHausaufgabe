import express from 'express';
import fs from 'fs';
import fetch from 'node-fetch';
import path from 'path';

const port = 4587;
const app = express();
app.use(express.urlencoded({ extended: true }));

// Initialisieren das Bücher-Array
let books = [
    { id: 1, title: "Frankenstein", author: "Mary Shelley", source: "84-0.txt" },
    { id: 2, title: "Pride and Prejudice", author: "Jane Austen", source: "pnp.txt" },
    { id: 3, title: "Alice's Adventures in Wonderland", author: "Lewis Carroll", source: "alice.txt" },
];

// Überprüfen  ob die books.json-Datei existiert, und ladet die Bücher 
if (fs.existsSync('./books.json')) {
    const booksData = fs.readFileSync('./books.json', 'utf-8');
    books = JSON.parse(booksData);
}

app.get('/add', function (req, res) {
    const formHTML = `
        <form action="/addBook" method="POST">
            <label for="title">Titel:</label>
            <input type="text" id="title" name="title" required><br>
            <label for="author">Autor:</label>
            <input type="text" id="author" name="author" required><br>
            <label for="url">URL:</label>
            <input type="url" id="url" name="url" required><br>
            <input type="submit" value="Buch hinzufügen">
        </form>
    `;
    res.send(formHTML);
});

app.post('/addBook', async function (req, res) {
    const { title, author, url } = req.body;

    // Buchtext von der URL holen
    const response = await fetch(url);
    const bookText = await response.text();

    // Buch speichern
    const fileName = `${title.split(' ').join('_')}.txt`;
    fs.writeFileSync(path.join('./books', fileName), bookText);

    // Buch zum Array hinzufügen und Array speichern
    books.push({ id: books.length + 1, title, author, source: fileName });
    fs.writeFileSync('./books.json', JSON.stringify(books));

    res.redirect('/');
});

app.get("/", (req, res) => {
    res.send(homepage(books));
});

app.get("/books/:file", (req, res) => {
    const source = req.params["file"];
    res.sendFile(path.join(__dirname, '/books/', source));
});

function homepage(books) {
    const listElements = books.map(book =>
        `<li>${book.title} by ${book.author}
        <button onclick="window.location.href='/books/${book.source}'">lesen</button></li>`
    ).join("");

    return `
    <h1>Meine Bibliothek</h1>
    <ul>
        ${listElements}
    </ul>
    <button onclick="window.location.href='/add'">Buch hinzufügen</button>`;
}

app.listen(port, () => {
    console.log("Server listening on port", port);
});

