import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Willkommen auf der Startseite!');
  });

  const books = [
    {
      id: 1,
      title: 'Dracula',
      author: 'Bram Stoker',
      source: '/Buecher/Dracula.txt'
    },
    {
      id: 2,
      title: 'Frankenstein',
      author: 'Mary Wollstonecraft Shelley',
      source: '/Buecher/Frankenstein.txt'
    },
    {
      id: 3,
      title: 'Metamorphosis',
      author: 'Franz Kafka',
      source: '/Buecher/Metamorphosis.txt'
    },
    {
      id: 4,
      title: 'Middlemarch',
      author: 'George Eliot',
      source: '/Buecher/Middlemarch.txt'
    },
    {
      id: 5,
      title: 'Moby-Dick',
      author: 'Herman Melville',
      source: '/Buecher/Moby.txt'
    },
    {
      id: 6,
      title: 'Romeo and Juliet',
      author: 'William Shakespeare',
      source: '/Buecher/Romeo.txt'
    },
  ];
  
  app.listen(port, () => {
    console.log(`Der Server läuft auf Port ${port}`);
  });
  