import React from "react"

//Upgrades bekommen die Funktion handleUpgrade als "prop" (Argument)
//Somit kann die Funktion hier als onClick gesetzt werden
// !! Muss hier als Funktion gesetzt werden (mit () =>...), da sonst sofortige auswertung
function Upgrades({handleUpgrade}){
    return (
        <div>
            <button onClick={() => handleUpgrade(1)}>1 More cookie per click (Cost: 10)</button>
            <br></br>
            <button onClick={() => handleUpgrade(2)}>10 More cookie per click (Cost: 100)</button>
        </div>
    )
}

export default Upgrades