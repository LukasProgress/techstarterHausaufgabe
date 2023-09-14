const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Bitte die erste Zahl eingeben: ", function(zahl1Str) {
  rl.question("Bitte die zweite Zahl eingeben: ", function(zahl2Str) {
    const zahl1 = parseFloat(zahl1Str);
    const zahl2 = parseFloat(zahl2Str);

    // Rechenoperationen durchführen
    const summe = zahl1 + zahl2;
    const differenz = zahl1 - zahl2;
    const produkt = zahl1 * zahl2;
    const quotient = zahl1 / zahl2;

    // Ergebnisse ausgeben
    console.log(`Summe: ${summe}`);
    console.log(`Differenz: ${differenz}`);
    console.log(`Produkt: ${produkt}`);
    console.log(`Quotient: ${quotient}`);

    rl.close();
  });
});
