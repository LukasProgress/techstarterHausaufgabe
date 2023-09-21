import express from 'express';

import fs from 'fs/promises';

const app = express();

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
    let htmlContent = '<h1>Meine Bibliothek</h1>';
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


app.listen(port, () =>{
    console.log(`Server laeuft auf Port ${port} `)
});