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
    constructor(department, name, salary) {
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
let verprasser = new Department(bigMoneyCorp, "Verprassung", "Ahmet Clanmitgliedus");

//Wir speichern alle angestellten in einem einzigen Array:
let allEmployees = []
allEmployees.push(new Employee(finance, "Gerhard Geldsack", 2000000));
allEmployees.push(new Employee(hr, "Albrecht Aasgeier", 3500000));
allEmployees.push(new Employee(marketing, "Magnus McMamakind", 2350000));
allEmployees.push(new Employee(finance, "Lukas Probst", 45000));
allEmployees.push(new Employee(finance, "Marcus Wunderle", 46000));
allEmployees.push(new Employee(finance, "Andreas Armschlucker", 29500));
allEmployees.push(new Employee(finance, "Roman Relativarm", 30400));

// TODO: 3. Füge mindestens je 3 neue Angestellte bei hr und marketing, sowie eurem department hinzu.
allEmployees.push(new Employee(verprasser, "Ahmet Clanmitgliedus", 123456789));
allEmployees.push(new Employee(verprasser, "Anton Berta", 6500));
allEmployees.push(new Employee(verprasser, "Horst Hrubesh", 5500));
allEmployees.push(new Employee(verprasser, "Heung Min Son", 5000));
allEmployees.push(new Employee(marketing, "Christian Lindner", 8000));
allEmployees.push(new Employee(marketing, "Richie Rich", 7000));
allEmployees.push(new Employee(marketing, "Jordan Belfort", 6500));
allEmployees.push(new Employee(hr, "Arne Friedrich", 45000));
allEmployees.push(new Employee(hr, "Christopher hinterm Lenz", 5000));
allEmployees.push(new Employee(hr, "Arjen Robben", 7000));

//==============================================================================
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