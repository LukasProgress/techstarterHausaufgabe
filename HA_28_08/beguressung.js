const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Bitte geben Sie Ihren Namen ein: ", function(name) {
  if (name) {
    console.log(`Hallo ${name}! Willkommen auf meiner Webseite.`);
  } else {
    console.log("Hallo! Willkommen als UNBEKANNT auf meiner Webseite.");
  }
  rl.close();
});