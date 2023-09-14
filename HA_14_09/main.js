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
        this.company = company;
        this.name = name;
        this.boss = boss;
    }
}
class Employee {
    constructor(department, name, salary){
        this.department = department;
        this.name = name;
        this.salary = salary;
    }
}







//==============================================================================
// OBJECT INSTANCES
const bigMoneyCorp = new Company("Big Money Corporations");

let finance = new Department(bigMoneyCorp, "Finance", "Gerhard Geldsack");
let hr = new Department(bigMoneyCorp, "Human Ressources", "Albrecht Aasgeier");
let marketing = new Department(bigMoneyCorp, "Marketing", "Magnus McMamakind");

//TODO: 2. Füge ein weiteres Department hinzu
let it = new Department(bigMoneyCorp, "IT", "Nikolas Fettzwerk" )

//Wir speichern alle angestellten in einem einzigen Array:
let allEmployees = []
allEmployees.push(new Employee(finance, "Gerhard Geldsack", 2000000));
allEmployees.push(new Employee(hr, "Albrecht Aasgeier", 3500000));
allEmployees.push(new Employee(marketing, "Magnus McMamakind", 2350000));
allEmployees.push(new Employee(finance, "Lukas Probst", 45000));
allEmployees.push(new Employee(finance, "Marcus Wunderle", 46000));
allEmployees.push(new Employee(finance, "Andreas Armschlucker", 29500));
allEmployees.push(new Employee(finance, "Roman Relativarm", 30400));
// TODO: 2. Füge mindestens je 3 neue Angestellte bei hr und marketing, sowie eurem department hinzu.
allEmployees.push(new Employee(hr, "Albrecht Besbeier", 3500000));
allEmployees.push(new Employee(hr, "Albrecht Cesgeier", 3300000));
allEmployees.push(new Employee(hr, "Albrecht Desgeier", 3700000));
//==============================================================================
allEmployees.push(new Employee(marketing, "Magnus McPapakind", 2430000));
allEmployees.push(new Employee(marketing, "Magnus McOpakind", 2650000));
allEmployees.push(new Employee(marketing, "Magnus McOmakind", 2750000));

allEmployees.push(new Employee(it, "Nikolas Fettzwerk", 17500000));
allEmployees.push(new Employee(it, "Nikolas Bettzwerk", 6400000 ));
allEmployees.push(new Employee(it, "Nikolas Notzwerk", 5700000));
// FUNCTIONS

//TODO: 4. Funktion getBoss

//TODO: 5. Funktion raiseIncome

//TODO: 6. doubleBossIncome

//TODO: 7. averageIncome





//==============================================================================
//main function (Diese rufen wir auf, wenn die Datei ausgeführt wird.)
function main(){
    //TODO: 3. Gib die Namen aller Angestellter auf der Konsole aus:

    //TODO: 3. Gib die Namen aller Angestellter in hr auf der Konsole aus:

    //TODO: 3. Gib die Namen aller Angestellten mit einem Gehalt von mehr als 35.000 im Jahr aus
    
    //TODO: 4. Nutze die Funktion getBoss() um den Chef von "Andreas Armschlucker" zu finden und auszugeben.

    //TODO: 5. Nutze die Funktion raiseIncome() um allen Angestellten, die in "Human Ressources" arbeiten (Außer dem chef) 
    //         eine Gehaltserhöhung von 4000 im Jahr zu geben

    //TODO: 6. Nutze die Funktion doubleBossIncome() um dem Boss von HR das doppelte gehalt zu geben

    //TODO: 7. Nutzt averageIncome() um euch das Durschnittsgehalt eures eigenen Departments ausgeben zu lassen.
    
}

main();