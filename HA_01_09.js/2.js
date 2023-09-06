//Funktion kehrt die Eingabezeichenfolge 'str' um.
function reverseString(str) {
    // Methode 'split', um Zeichenfolge in ein Array von Buchstaben aufzuteilen,
    // dann die Methode 'reverse', um das Array umzukehren, und schließlich 'join', um es wieder in eine Zeichenfolge zu konvertieren.
    const reversedStr = str.split('').reverse().join('');
    return reversedStr; // Gibt die umgekehrte Zeichenfolge zurück
  }
  
  // Beispielaufruf der Funktion
  const reversedText = reverseString('hello there');
  console.log(reversedText); // Ausgabe: 'ereht olleh'
  