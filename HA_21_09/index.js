import express from "express"

const app = express()
const port = 3000

app.get(`/`, (req, res) => {
    res.send("Hi Lukas!");

});

const books = [
    {
        id: 1,
        title: 'Moby Dick',
        author: 'Herman Melville',
        source: 'techstarterHausaufgabe\HA_21_09\Moby-Dick.txt'
    },
    {
        id: 2,
        title: 'Frankenstein',
        author: 'Mary Wollstonecraft Shelley',
        source: 'techstarterHausaufgabe\HA_21_09\Frankenstein.txt'
    },
    {
        id: 2,
        title: 'The Strange Case of Dr. Jekyll and Mr. Hyde',
        author: 'Robert Louis Stevenson',
        source: 'techstarterHausaufgabe\HA_21_09\The Strange Case of Dr. Jekyll and Mr. Hyde.txt'
    }
];

app.get(`/books`, (req, res) => {
    res.json(books);
});

app.listen(port, () => {
    console.log(`Express-Server lauscht Port ${port}`);
});
