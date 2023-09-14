// Funktion, Summe der Längen aller Wörter mithilfe von map und reduce zu berechnen
function sumWordLengths(words) {
    // map-Funktion, um die Längen der Wörter zu extrahieren
    const wordLengths = words.map(word => word.length);
    
    // reduce-Funktion, um die Summe der Längen zu berechnen
    const totalLength = wordLengths.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    return totalLength;
  }
  
  // Beispiel-Eingabe
  const inputWords = ['DesktopPC', 'Laptop', 'MobileDevice'];
  
  // Berechnung der Summe der Wortlängen und Ausgabe
  const sum = sumWordLengths(inputWords);
  console.log(sum); // Ausgabe: 27