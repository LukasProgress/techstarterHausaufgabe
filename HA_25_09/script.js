// Dieses Skript wird ausgeführt, wenn die Seite geladen ist
// und erstellt das Navigationsmenü dynamisch

var links = [
    {
      text: "Hauptseite",
      url: "index.html"
    },
    {
      text: "Produkt",
      url: "produkt.html"
    },
    {
      text: "Über uns",
      url: "ueber-uns.html"
    },
    {
      text: "Datenschutz",
      url: "datenschutz.html"
    },
    {
      text: "AGB",
      url: "agb.html"
    }
  ];
  
  
  var menu = document.createElement("ul"); // greift auf das ul zu

  for (var i = 0; i < links.length; i++) {
    var link = document.createElement("li"); 
    link.innerHTML = `<a href="${links[i].url}">${links[i].text}</a>`;  //verändert die HTML
    menu.appendChild(link);
  }
  
  
  document.body.appendChild(menu); // fürs dom
  