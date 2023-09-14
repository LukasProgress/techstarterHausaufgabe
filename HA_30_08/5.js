// Aufgabe 5: Zählen, wie oft die Zahl 2 in n passt (ohne Rest)
const n = 235; // Wert ändern, um zu testen

let count = 0; // Variable zur Speicherung der Anzahl von Durchläufen
for (let i = n; i >= 2; i -= 2) {
  count++; // Inkrementiere den Zähler bei jedem Durchlauf
}

console.log(count); // Gibt die Anzahl aus, wie oft 2 in n passt