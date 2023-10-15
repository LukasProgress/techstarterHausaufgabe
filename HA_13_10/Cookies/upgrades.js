import React from "react"

//Upgrades bekommen die Funktion handleUpgrade als "prop" (Argument)
//Somit kann die Funktion hier als onClick gesetzt werden
// !! Muss hier als Funktion gesetzt werden (mit () =>...), da sonst sofortige auswertung
function Upgrades({ handleUpgrade }) {
    return (
      <div>
        <button onClick={() => handleUpgrade(1)}>1 More cookie per click (Cost: 10)</button>
        <br />
        <button onClick={() => handleUpgrade(2)}>10 More cookie per click (Cost: 100)</button>
        <br />
        <button onClick={() => handleUpgrade(3)}>1 Cookie per second (Cost: 50)</button>
        <br />
        <button onClick={() => handleUpgrade(4)}>10 Cookies per second (Cost: 500)</button>
      </div>
    );
  }

export default Upgrades