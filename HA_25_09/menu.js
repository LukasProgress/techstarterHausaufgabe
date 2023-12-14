// menu.js
document.addEventListener("DOMContentLoaded", function () {
    const menuContainer = document.getElementById("menu-container");
    
    const menuHTML = `
        <nav>
            <ul>
                <li><a href="index.html">Startseite</a></li>
                <li><a href="produkt.html">Produkt</a></li>
                <li><a href="ueber-uns.html">Über uns</a></li>
                <li><a href="datenschutz.html">Datenschutz</a></li>
                <li><a href="agb.html">AGB</a></li>
            </ul>
        </nav>
    `;

    menuContainer.innerHTML = menuHTML;
});
