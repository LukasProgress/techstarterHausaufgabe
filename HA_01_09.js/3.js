function removeFromArray(arr, ...argsToRemove) {
    // Verwende die Methode 'filter', um alle Elemente im Array zu behalten,
    // die nicht in 'argsToRemove' enthalten sind.
    const filteredArray = arr.filter(item => !argsToRemove.includes(item));
    return filteredArray;
  }
  
  // Beispielaufruf der Funktion
  const originalArray = [1, 2, 3, 4];
  const newArray = removeFromArray(originalArray, 3);
  console.log(newArray); // Ausgabe: [1, 2, 4]  