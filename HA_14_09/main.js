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

let it = new Department(bigMoneyCorp, "IT", "boss");

//Wir speichern alle angestellten in einem einzigen Array:
let allEmployees = []
allEmployees.push(new Employee(finance, "Gerhard Geldsack", 2000000));
allEmployees.push(new Employee(hr, "Albrecht Aasgeier", 3500000));
allEmployees.push(new Employee(marketing, "Magnus McMamakind", 2350000));
allEmployees.push(new Employee(finance, "Lukas Probst", 45000));
allEmployees.push(new Employee(finance, "Marcus Wunderle", 46000));
allEmployees.push(new Employee(finance, "Andreas Armschlucker", 29500));
allEmployees.push(new Employee(finance, "Roman Relativarm", 30400));
allEmployees.push(new Employee(it, "boss", 5000000));

// TODO: 2. Füge mindestens je 3 neue Angestellte bei hr und marketing, sowie eurem department hinzu.

allEmployees.push(new Employee(hr, "Max Mustermann", 40000));
allEmployees.push(new Employee(hr, "Martina Musterfrau", 45000));
allEmployees.push(new Employee(hr, "Klaus Kleber", 50000));
allEmployees.push(new Employee(marketing, "Bibi Bloxberg", 40000));
allEmployees.push(new Employee(marketing, "Benjamin Blümchen", 45000));
allEmployees.push(new Employee(marketing, "Harry Potter", 50000));
allEmployees.push(new Employee(it, "Bernd Stromberg", 40000));
allEmployees.push(new Employee(it, "Walter White", 45000));
allEmployees.push(new Employee(it, "Clark Kent", 50000));

// FUNCTIONS

//TODO: 4. Funktion getBoss

//TODO: 5. Funktion raiseIncome

//TODO: 6. doubleBossIncome

//TODO: 7. averageIncome


//==============================================================================
//main function (Diese rufen wir auf, wenn die Datei ausgeführt wird.)
function main(){

    //TODO: 3. Gib die Namen aller Angestellter auf der Konsole aus:

    let listAllEmployees = allEmployees.map(employee => employee.name);
    // console.log(listAllEmployees);

    //TODO: 3. Gib die Namen aller Angestellter in hr auf der Konsole aus:

    let hrEmployees = allEmployees.filter(employee => employee.department === hr);
    let hrEmployeesNames = hrEmployees.map(employee => employee.name);
    //console.log(hrEmployeesNames)

    //TODO: 3. Gib die Namen aller Angestellten mit einem Gehalt von mehr als 35.000 im Jahr aus

    let salaryOver35k = allEmployees.filter(employee => employee.salary >= 35000);
    let EmployeeNames = salaryOver35k.map(employee => employee.name);
    //console.log(EmployeeNames)
    
    //TODO: 4. Nutze die Funktion getBoss() um den Chef von "Andreas Armschlucker" zu finden und auszugeben.

    function getBoss(employee){
        const department = employee.department
    }
        const andreasArmschlucker = allEmployees.find(employee => employee.name === "Andreas Armschlucker");
        const boss = getBoss(andreasArmschlucker);

        if (boss) {
            console.log(`${andreasArmschlucker.name}'s Chef ist ${boss.name}`);
          } else {
            console.log(`${andreasArmschlucker.name} hat keinen Chef.`);
          }


    //TODO: 5. Nutze die Funktion raiseIncome() um allen Angestellten, die in "Human Ressources" arbeiten (Außer dem chef) 
    //         eine Gehaltserhöhung von 4000 im Jahr zu geben

    function raiseIncome(department, amount){

    }

    //TODO: 6. Nutze die Funktion doubleBossIncome() um dem Boss von HR das doppelte gehalt zu geben

    //TODO: 7. Nutzt averageIncome() um euch das Durschnittsgehalt eures eigenen Departments ausgeben zu lassen.
    
}

main();