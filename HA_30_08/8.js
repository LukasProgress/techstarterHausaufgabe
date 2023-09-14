// Aufgabe 7 "nested for loop" "verschachtelte for-Schleife"
// Äußere Schleife für Zeilen
for (let i = 1; i <= 9; i++) {
    let row = ''; // Variable zur Speicherung der Zeile
  
    // Innere Schleife für Sterne in der aktuellen Zeile
    for (let j = 1; j <= i; j++) {
      row += '*'; // Füge einen Stern zur Zeile hinzu
    }
  
    console.log(row); // Gib die aktuelle Zeile aus
  }  