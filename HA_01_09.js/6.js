// firePosition ist die Position, in der die Waffe abgefeuert wird.
let firePosition = 1;

// Die Ausgabe von spinChamber ist eine "random" Zahl und kann als Parameter an die Funktion fireGun übergeben werden.
const spinChamber = () => {
  return Math.floor(Math.random() * 6) + 1; // Zufällige Zahl zwischen 1 und 6
};

// fireGun prüft ob die Zahl aus spinChamber mit der Zahl aus firePosition übereinstimmt,
// falls JA return "Du bist 🔫" falls NEIN return "Spiel weiter 🎲".
const fireGun = (bulletPosition) => {
  if (bulletPosition === firePosition) {
    return "Du bist 🔫";
  } else {
    return "Spiel weiter 🎲";
  }
};

console.log(fireGun(spinChamber()));