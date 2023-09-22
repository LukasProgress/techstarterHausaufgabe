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

//Home page
app.get("/", (req, res) => {
    res.send(homepage())
})

//Bücher lesen
app.get("/books/:file", (req, res) => {
    const source = req.params["file"]
    res.sendFile("/books/" + source, {root: "."})
})





app.listen(port, () => {
    console.log("Server listening on port", port)
})