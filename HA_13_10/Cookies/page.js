"use client"
import {useState} from "react"
import Upgrades from "./upgrades"

export default function Home() {
  //State variablen: 
  // useState erstellt eine Konstante und eine Funktion, die diese Konstante verändert
  // Bei Veränderung der Konstante wird die Website (Komponente) neu gerendered
  const [cookieCount, setCookieCount] = useState(0)
  const [clickPower, setClickPower] = useState(1)

  // Upgrades als Array von Objekten
  const upgrades = [
    {cost: 10, power: 1},
    {cost: 100, power: 10}
  ]

  // Bei click auf den Cookie erhöhe cookieCount anhand der clickPower
  const handleClick = () => {
    setCookieCount(cookieCount + clickPower)
  }

  // Bei click auf upgrade button: 
  // kosten erfassen, vorhandene cookies überprüfen, anpassen und clickpower erhöhen
  const handleUpgrade = (id) => {
    let costs = upgrades[id - 1].cost
    let power = upgrades[id - 1].power
    if (cookieCount >= costs){
      setCookieCount(cookieCount - costs)
      setClickPower(clickPower + power)
    }
  }

  // React-HTML (Upgrades als Komponente)
  return (
    <div>
    <h1>Cookie Clicker</h1>
    <img src="/cookie.png" 
    alt="Cookie" 
    onClick={handleClick}
    style={{cursor: "pointer"}}></img>
    <p>Cookies: {cookieCount}</p>
    <p>Click Power: {clickPower}</p>
    <Upgrades handleUpgrade={handleUpgrade}></Upgrades>
    </div>
  )
}
