const express = require('express');
const app = express();
const port = 3000;

app.get('/greet', (req, res) => {
  res.send('<h1>Hallo und Herzlich Willkommen!</h1>');
});

app.get('/oldhtml', (req, res) => {
  res.sendFile('index.html', { root: './' });
});

app.get('/cat/:says', (req, res) => {
  const text = req.params.says;
  const catImageUrl = `https://cataas.com/cat/says/${text}`;
  res.send(`<img src="${catImageUrl}" alt="Katzenbild">`);
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
