// Diese Funktion wiederholt eine Zeichenfolge 'str' 'num' Mal.
function repeatString(str, num) {
  // Überprüfen, ob 'num' eine positive ganze Zahl ist
  if (num <= 0) {
    return ''; // Wenn 'num' nicht positiv ist, wird eine leere Zeichenfolge zurückgegeben
  }

  let repeatedString = ''; // Eine leere Zeichenfolge zum Speichern des wiederholten Ergebnisses

  for (let i = 0; i < num; i++) {
    repeatedString += str; // Füge 'str' zur 'repeatedString' hinzu
  }

  return repeatedString; // Gib die wiederholte Zeichenfolge zurück
}

// Beispielaufruf der Funktion
const repeatedText = repeatString('hey', 3);
console.log(repeatedText); // Ausgabe: 'heyheyhey'