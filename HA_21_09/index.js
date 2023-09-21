import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import fs from 'fs'
import fetch from 'node-fetch'
import { fileURLToPath } from 'url'

// Holen des aktuellen Verzeichnis
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Initialisieren der Express-App
const app = express()
const port = 3000

// Middleware zum Parsen von eingehenden Anforderungen mit urlencoded Nutzlasten
app.use(bodyParser.urlencoded({ extended: true }))

// Initialbuchliste
let books = [
    { id: 1, titel: 'Romeo and Juliet', author: 'William Shakespeare', source: 'techstarterHausaufgabe/HA_21_09/romeoundjulia.txt' },
    { id: 2, titel: 'Frankenstein; Or, The Modern Prometheus', author: 'Mary Wollstonecraft Shelley', source: 'techstarterHausaufgabe/HA_21_09/frankenstein.txt' },
    { id: 3, titel: 'Moby-Dick; or The Whale', author: 'Herman Melville', source: 'techstarterHausaufgabe/HA_21_09/mobydick.txt' },
    { id: 4, titel: 'Dracula', author: 'Bram Stoker', source: 'techstarterHausaufgabe/HA_21_09/dracula.txt' },
    { id: 5, titel: 'Alice Adventures in Wonderland', author: 'Lewis Carroll', source: 'techstarterHausaufgabe/HA_21_09/aliceimwunderland.txt' },
]

// Route für die Hauptseite
app.get('/', (req, res) => {
    // Erstellen einer HTML-Liste für Bücher mit Lese-Buttons
    const bookListHtml = books.map(book => `
        <li>
            ${book.titel} von ${book.author} 
            <a href="/read/${path.basename(book.source)}"><button>lesen</button></a>
        </li>
    `).join('')

    // Senden Sie die komplette HTML-Seite als Antwort
    res.send(`
        <h1>Meine Bibliothek</h1>
        <ul>
            ${bookListHtml}
        </ul>
        <a href="/add"><button>Buch hinzufügen</button></a>
    `)
})

// Route zum Anzeigen von Büchern
app.get('/read/:file', (req, res) => {
    const filePath = path.join('./', req.params.file)
    // Sendet die Buchdatei als Antwort
    res.sendFile(filePath, { root: './' })
})

// Route zum Hinzufügen von Büchern (Formularseite)
app.get('/add', (req, res) => {
    res.send(`
        <h2>Buch hinzufügen</h2>
        <form action="/addBook" method="post">
            Titel: <input type="text" name="title"><br>
            Autor: <input type="text" name="author"><br>
            URL: <input type="text" name="url"><br>
            <button type="submit">Buch hinzufügen</button>
        </form>
    `)
})

// Route zum Verarbeiten des Formulars zum Hinzufügen von Büchern
app.post('/addBook', async (req, res) => {
    try {
        const { title, author, url } = req.body

        // Buchtext von der URL herunterladen
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Fehler beim Herunterladen des Buches von ${url}: ${response.statusText}`)
        }
        const bookContent = await response.text()

        // Buchtext auf dem Rechner speichern
        const fileName = path.basename(url)
        const directory = path.join(__dirname)
        const filePath = path.join(directory, fileName)
        fs.writeFileSync(filePath, bookContent)

        // Buch der Liste hinzufügen
        const newBook = {
            id: books.length + 1,
            titel: title,
            author: author,
            source: filePath
        }
        books.push(newBook)

        // Speichern der aktualisierten Buchliste in einer Datei
        fs.writeFileSync(path.join(directory, 'books.json'), JSON.stringify(books))

        // Zur Hauptseite weiterleiten
        res.redirect('/')
    } catch (error) {
        console.error(error)
        res.status(500).send(`Ein Fehler ist aufgetreten: ${error.message}`)
    }
})

// Starten des Servers
app.listen(port, () => {
    console.log(`Server listens on port ${port}`)
})