const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function berechneDurchschnitt(zahlen) {
  if (zahlen.length === 0) {
    return 0;
  }

  let summe = 0;
  for (let zahl of zahlen) {
    summe += zahl;
  }

  return summe / zahlen.length;
}

rl.question("Liste von Zahlen eingeben und durch Komma trennen: ", function(zahlenEingabe) {
  const zahlenListe = zahlenEingabe.split(",").map(Number);
  const durchschnitt = berechneDurchschnitt(zahlenListe);
  console.log(`Durchschnitt: ${durchschnitt}`);
  rl.close();
});
