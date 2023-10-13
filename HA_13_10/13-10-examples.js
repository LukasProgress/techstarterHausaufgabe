// 13.10. 
// Arrays

let arr = [10, 20, 30, 40, 0, 90]
let arr2 = ["apple", "banana", "pear", "cherry"]

let x = arr[2]
console.log(x)
arr.push(-10, 2, -20, 45)
arr = [...arr, -10, 2, -20, 45]
console.log(arr)

//"Die 1. Zahl ist -10"
//"Die 2. Zahl ist 2"
//...
for (let i = 0; i < arr.length; i++){
    console.log("Die " + (i+1) + ". Zahl ist " + arr[i])
}


let i = 0
for (let element of arr){
    i++
    console.log("Die " + i + ". Zahl ist " + element)
}

// Löse mit einem FOR-LOOP!:
// Ist Element 'x' in einem array 'xs' -> boolean
// Löse ohne in und ohne filter
// Bonus: Funktion howOften(): "Wie oft ist x in xs?"
// Bonus 2: Funktion indicesOf(): An welchen Indizes von xs ist x? -> return array
function isIn (x, xs) {
    for (let element of xs){
        if (element === x){
            return true
        }
    }

    return false
}

console.log(isIn(33, arr))
console.log(isIn("banana", arr2))

function howOften(x, xs){
    let count = 0
    for (let element of xs){
        if (element === x){
            count++
        }
    }
    return count
}

console.log(howOften(20, arr))
console.log(howOften(-20, arr))

// Bonus 2: Funktion indicesOf(): An welchen Indizes von xs ist x? -> return array
function indicesOf(x, xs) {
    let indizes = []
    for (let i = 0; i < xs.length; i++){
        if (xs[i] === x){
            indizes.push(i)
        }
    }
    return indizes
}

// Map und Filter 

// Map: Wende eine funktion auf jedes Element im array an. f(x) auf jedes x in xs

// Mit for-loop, NICHT mit map:
// Funktion: Multipliziere jedes Element in xs mit 2
function multByTwo(xs){
    for (let i = 0; i < xs.length; i++){
        xs[i] = xs[i] * 2
    }
}

arr.map((x) => x * 2)

// Funktion: Ist x größer als 10? [0, 80, 2, 11] -> [false, true, false, true]
function biggerThan10(xs){
    for (let i = 0; i < xs.length; i++){
        xs[i] = xs[i] > 10
    }
}

arr.map((x) => x > 10)

let persons = [
    {name: "Lukas", age: 27}, 
    {name: "Dimi", age: 30}, 
    {name: "Marcus", age: 29},
    {name: "Bartek", age: 27}
]



function names(xs){
    xs.map((x) => x.name)
}







// Filter: Prüfe jedes Element auf ein Kriterium (Prädikat p) und gib array zurück mit Elementen
//         die dieses Kriterium erfüllen. p(x) auf jedes x in xs | return ys mit p(x) === true

function filterBiggerThan10(xs){
    let solution = []
    for (let i = 0; i < xs.length; i++){
        if (xs[i] > 10){
            solution.push(xs[i])
        }
    }
    return solution
}

arr.filter((x) => x > 10)

// filtert einträge: Behalte nur die Personen, die 27 Jahre alt sind
function filter27YearsOld(xs){
    let solution = []
    for (let i = 0; i < xs.length; i++){
        if (xs[i].age === 27){
            solution.push(xs[i])
        }
    }
    return solution
}

persons.filter((x) => x.age === 27)

