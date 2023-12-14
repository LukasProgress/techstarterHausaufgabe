import express from 'express'

const port = 3000
const app = express()

//Die Books ressource hält alle Bücher:
const books = [
    {id: 1, title: "Frankenstein", author:"Mary Shelley", source:"84-0.txt"},
    {id: 2, title: "Pride and Prejudice", author:"Jane Austen", source:"pnp.txt"},
    {id: 3, title: "Alice's Adventures in Wonderland", author:"Lewis Carroll", source:"alice.txt"}
]

//Die Homepage "/" wird als Funktion generiert, um die books aktuell halten zu können
const homepage = () =>`
<h1>Meine Bibliothek</h1>
<ul>
    ${renderBooks()}
</ul>
`

//die Funktion renderBooks() nimmt das books array zur hand und wandelt es in einen entsprechenden HTML code um
function renderBooks() {
    const listElements = books.map(book => 
        `<li>${book.title} by ${book.author}   
        <button onclick="window.location.href='/books/${book.source}'">lesen</button> `)
    return listElements.join("")
}


//-----------------------------------------------------------
// HTTP METHODS:
const htmlString = `
  <button id="buchHinzufuegenButton">Buch hinzufügen</button>
  <form action="/add" method="GET">
    <label for="title">Titel:</label>
    <input type="text" id="title" name="title" required><br>
    
    <label for="author">Autor:</label>
    <input type="text" id="author" name="author" required><br>
    
    <label for="url">URL (.txt Datei):</label>
    <input type="text" id="url" name="url" value="https://www.gutenberg.org/cache/epub/37106/pg37106.txt" required><br>
    
    <input type="submit" value="Buch hinzufügen">
  </form>
`;

//Home page
app.get("/", (req, res) => {
    res.send(homepage())
})

//Bücher lesen
app.get("/books/:file", (req, res) => {
    const source = req.params["file"]
    res.sendFile("/books/" + source, {root: "."})
})

const fs = require('fs');
const axios = require('axios'); // Installieren Sie das "axios" Modul, um HTTP-Anfragen durchzuführen

const url = 'https://www.gutenberg.org/cache/epub/37106/pg37106.txt'; // Beispiel-URL

axios.get(url)
  .then(response => {
    // Speichern Sie den heruntergeladenen Text in einer Datei
    fs.writeFileSync('heruntergeladenesBuch.txt', response.data);

    // Fügen Sie das heruntergeladene Buch dem Array hinzu
    const buch = {
      title: req.body.title,
      author: req.body.author,
      url: 'heruntergeladenesBuch.txt' // Hier den Pfad zur gespeicherten Datei verwenden
    };

    // Fügen Sie das Buch dem Array hinzu und speichern Sie das Array als JSON-Datei
    const bücher = [...bisherigeBücher, buch];
    fs.writeFileSync('bücher.json', JSON.stringify(bücher));

    // Senden Sie eine Antwort an den Client
    res.send('Buch wurde hinzugefügt');
  })
  .catch(error => {
    // Handle Fehler bei der Anforderung oder dem Speichern
    console.error(error);
    res.status(500).send('Fehler beim Hinzufügen des Buches');
  });




app.listen(port, () => {
    console.log("Server listening on port", port)
})