// HA_25_09.js
export const handler = async (event) => {
  if (!event || !event.bestellliste || event.bestellliste.length === 0) {
    console.log("Die Bestellliste ist leer.");
    return;
  }

  const ausgabe = event.bestellliste.join(', ');

  console.log(`Die Bestellliste enthält: ${ausgabe}`);
};

handler({ bestellliste: ["Kapern", "Senf", "Butter", "Eier", "Hackfleisch", "Kartoffeln", "Zwiebeln"] });
