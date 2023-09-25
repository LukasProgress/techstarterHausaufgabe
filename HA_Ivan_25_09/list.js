// Lambdafunktion

const ausgabeBestellliste = liste => {
    liste.forEach(item => console.log(item));
};

// Testaufruf

const bestellungen = ["Kapern", "Senf", "Butter", "Eier", "Hackfleisch", "Kartoffeln", "Zwiebeln"];
ausgabeBestellliste(bestellungen);
