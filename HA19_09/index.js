import express from 'express';

const app = express();
const port = 3000; // Port zwischen 3000 und 8000, also 3000


app.get('/greet', (req, res) => {
  res.send('<h1>Hallo und Herzlich Willkommen!</h1>');
});

app.get('/oldhtml', (req, res) => {
  res.sendFile('old.html', { root: './' });
});

app.get('/cat/:says', (req, res) => {
  const { says } = req.params;
  const imageUrl = `https://cataas.com/cat/says/${says}`;
  res.send(`<img src="${imageUrl}" alt="Cat Image"/>`);
});

app.listen(port, () => {
  console.log(`Der Server läuft auf http://localhost:${port}`);
});
