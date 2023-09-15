//------------------------------------------------------------------------------ 
// CLASSES

//TODO: 1. Erstelle die beiden Klassen "Department" und "Employee"
class Company {
    constructor(name){
        this.name = name;
    }
}

class Department {
    constructor(company, name, boss){
        this.company = company
        this.name = name
        this.boss = boss
    }
}

class Employee {
    constructor(department, name, salary) {
        this.department = department
        this.name = name
        this.salary = salary
    }
}




//==============================================================================
// OBJECT INSTANCES
const bigMoneyCorp = new Company("Big Money Corporations");


let finance = new Department(bigMoneyCorp, "Finance", "Gerhard Geldsack");
let hr = new Department(bigMoneyCorp, "Human Ressources", "Albrecht Aasgeier");
let marketing = new Department(bigMoneyCorp, "Marketing", "Magnus McMamakind");
let it = new Department(bigMoneyCorp, "IT", "Lukas Luxusmensch" )

const allDepartments = []
allDepartments.push(finance, hr, marketing, it)

//TODO: 2. Füge ein weiteres Department hinzu

//Wir speichern alle angestellten in einem einzigen Array:
const allEmployees = []
allEmployees.push(new Employee(finance, "Gerhard Geldsack", 2000000));
allEmployees.push(new Employee(hr, "Albrecht Aasgeier", 3500000));
allEmployees.push(new Employee(marketing, "Magnus McMamakind", 2350000));
allEmployees.push(new Employee(finance, "Lukas Probst", 45000));
allEmployees.push(new Employee(finance, "Marcus Wunderle", 46000));
allEmployees.push(new Employee(finance, "Andreas Armschlucker", 29500));
allEmployees.push(new Employee(finance, "Roman Relativarm", 30400));
allEmployees.push(new Employee(hr, "Bartek Bubusan", 60000));
allEmployees.push(new Employee(hr, "Abi Abseitsfahne", 62000));
allEmployees.push(new Employee(hr, "Dennis Doorbell", 30000));
allEmployees.push(new Employee(it, "Ivan Ivanovich", 38000));
allEmployees.push(new Employee(it, "Enrico Eberhart", 32000));
allEmployees.push(new Employee(it, "Cristoph Cramling", 75000));
allEmployees.push(new Employee(it, "Lukas Luxusmensch", 4000000));
allEmployees.push(new Employee(marketing, "Dimi Duschkopf", 70000));
allEmployees.push(new Employee(marketing, "Chris Chross", 61000));
allEmployees.push(new Employee(marketing, "Sarah Sagtnichviel", 45000));
// TODO: 2. Füge mindestens je 3 neue Angestellte bei hr und marketing, sowie eurem department hinzu.
//==============================================================================
// FUNCTIONS

// Namen aller Angestellten
const names = () => {allEmployees.map(x => x.name)};

// Namen aller Angestellten im Bereich HR
const hrnames = () => {allEmployees.filter(x => x.department === hr).map(x => x.name)};

// Namen aller Angestellten mit Gehalt > 35000
const highsalarynames = () => {allEmployees.filter(x => x.salary > 35000).map(x => x.name)};


//TODO: 4. Funktion getBoss
const bosses = allDepartments.map(x => x.boss)


function getBoss(name) {
    return allDepartments.map(x => x.name.boss === name)    
}


console.log(getBoss("Andreas Armschlucker"))


//TODO: 5. Funktion raiseIncome

//TODO: 6. doubleBossIncome

//TODO: 7. averageIncome





//==============================================================================
//main function (Diese rufen wir auf, wenn die Datei ausgeführt wird.)
function main(){
    //TODO: 3. Gib die Namen aller Angestellter auf der Konsole aus:
    console.log(names)
    //TODO: 3. Gib die Namen aller Angestellter in hr auf der Konsole aus:
    console.log(hrnames)
    //TODO: 3. Gib die Namen aller Angestellten mit einem Gehalt von mehr als 35.000 im Jahr aus
    console.log(highsalarynames)
    //TODO: 4. Nutze die Funktion getBoss() um den Chef von "Andreas Armschlucker" zu finden und auszugeben.

    //TODO: 5. Nutze die Funktion raiseIncome() um allen Angestellten, die in "Human Ressources" arbeiten (Außer dem chef) 
    //         eine Gehaltserhöhung von 4000 im Jahr zu geben

    //TODO: 6. Nutze die Funktion doubleBossIncome() um dem Boss von HR das doppelte gehalt zu geben

    //TODO: 7. Nutzt averageIncome() um euch das Durschnittsgehalt eures eigenen Departments ausgeben zu lassen.
    
}

main();