// Aufgabe 7 "nested for loop" "verschachtelte for-Schleife"
// Äußere Schleife
for (let i = 1; i <= 9; i++) {
  let output = "";
  // Innere Schleife
  for (let j = 1; j <= i; j++) {
    output += j;
  }
  console.log(output);
}