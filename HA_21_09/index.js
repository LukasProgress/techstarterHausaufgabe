import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs/promises';
import fetch from 'node-fetch'; 

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));




const port = 3000;


const buecher = [
    {
        id:1,
        titel: 'Moby Dick',
        author: 'Herman Melville',
        source: './2701-0.txt'
    },
    {
        id:2,
        titel: 'Frankenstein',
        author: 'Mary Wollstonecraft Shelly',
        source: './pg84.txt'
    },
    {
        id:3,
        titel: 'Dracula',
        author: 'Bram Stoker',
        source: './pg345.txt'
    },
    {
        id:4,
        titel: 'My Life - Volume 1',
        author: 'Richard Wagner',
        source: './pg5197.txt'
    },
]

app.get('/', (req, res) => {
    let htmlContent = `<h1>Meine Bibliothek</h1>
                        <a href='/add'>
                            <button>Buch hinzufuegen</button>
                            </a>`;
    htmlContent += '<ul>';
    buecher.map(buch => {
        htmlContent += `
        <li>
            ${buch.titel} - ${buch.author}
            <a href='/read/${encodeURIComponent(buch.source)}'>
                <button>lesen</button>
            </a>
        </li>`;
    });
    htmlContent += '</ul>';
    res.send(htmlContent);
});

app.get('/read/:file', (req, res) => {
    const { file } = req.params;
    const filepath = decodeURIComponent(file);
    res.sendFile(filepath, { root: "./" }, (err) => {
        if (err) res.status(404).send('File not found');
    });
});

app.get('/add', (req, res) => {
    const form = `
        <form action="/addBook" method="post">
            Title: <input type="text" name="title" required><br>
            Author: <input type="text" name="author" required><br>
            URL: <input type="text" name="url" required><br>
            <input type="submit" value="Submit">
        </form>
        `;

        res.send(form);
})

app.post('/addBook', async (req, res) => {
    const { title, author, url } = req.body

    try {
        const response = await fetch(url);
        const text = await response.text();
        const filename = `./${title.replace(/ /g, '_')}.txt`
        await fs.writeFile(filename, text, 'utf-8');

        buecher.push({
            id:buecher.length + 1,
            titel: title,
            author: author,
            source: filename
        });

        await fs.writeFile('./buecher.json', JSON.stringify(buecher), 'utf-8');
        
        res.redirect('/');
    } catch (error) {
        res.send('Fehler aufgetreten' + error.message);
    }
})


app.listen(port, () =>{
    console.log(`Server laeuft auf Port ${port} `)
});