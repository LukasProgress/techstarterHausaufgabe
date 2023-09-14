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
    constructor(department, name, salary){
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
//TODO: 2. Füge ein weiteres Department hinzu

let it = new Department(bigMoneyCorp, "Technical", "Stefan Klose")

//Wir speichern alle angestellten in einem einzigen Array:
let allEmployees = []
allEmployees.push(new Employee(finance, "Gerhard Geldsack", 2000000));
allEmployees.push(new Employee(hr, "Albrecht Aasgeier", 3500000));
allEmployees.push(new Employee(hr, "Paul Müller", 35000));
allEmployees.push(new Employee(hr, "Anna Schmidt", 35000));
allEmployees.push(new Employee(hr, "Sophie Becker", 35000));
allEmployees.push(new Employee(marketing, "Magnus McMamakind", 2350000));
allEmployees.push(new Employee(marketing, "Laura Weber", 2350));
allEmployees.push(new Employee(marketing, "Luca Schmidt", 2350));
allEmployees.push(new Employee(marketing, "Emma Keller", 2350));
allEmployees.push(new Employee(finance, "Lukas Probst", 45000));
allEmployees.push(new Employee(finance, "Marcus Wunderle", 46000));
allEmployees.push(new Employee(finance, "Andreas Armschlucker", 29500));
allEmployees.push(new Employee(finance, "Roman Relativarm", 30400));
allEmployees.push(new Employee(it, "Sven Müller", 50000));
allEmployees.push(new Employee(it, "Hans Glück", 60000));
allEmployees.push(new Employee(it, "Jonas Schulz", 70000));
allEmployees.push(new Employee(it, "Stefan Klose", 8000000));
// TODO: 2. Füge mindestens je 3 neue Angestellte bei hr und marketing, sowie eurem department hinzu.
//==============================================================================
// FUNCTIONS

//TODO: 4. Funktion getBoss
function getBoss(x) {
    const chef = allEmployees.filter(employee => employee.name === x)
    return chef
}
//console.log(getBoss("Andreas Armschlucker"))

//TODO: 5. Funktion raiseIncome
function raiseIncome(department, amount) {
    const whogetmoremoney = allEmployees.filter(employee => employee.department === department && employee.department.boss !== employee.name)
   

    for (const employee of whogetmoremoney) {
        employee.salary += amount
    }
}
raiseIncome(hr, 4000)
//console.log(allEmployees.filter(employee => employee.department === hr))
//TODO: 6. doubleBossIncome
function doubleBossIncome(department){
    const doublemoney = allEmployees.filter(employee => employee.department === department && employee.department.boss === employee.name)

    for (const employee of doublemoney) {
        employee.salary *= 2
    }
}
doubleBossIncome(hr)
//console.log(allEmployees.filter(employee => employee.department === hr))
//TODO: 7. averageIncome
function averageIncome(department) {
    const personen = allEmployees.filter(employee => employee.department === department)
    const zusammen = personen.reduce((sum, employee) => sum + employee.salary, 0)
    const geteilt = zusammen / personen.length
    return geteilt
}
const durchschnittsgehalt = averageIncome(hr)
//console.log(durchschnittsgehalt)



//==============================================================================
//main function (Diese rufen wir auf, wenn die Datei ausgeführt wird.)
function main(){

    //TODO: 3. Gib die Namen aller Angestellter auf der Konsole aus:
    const employeeNames = allEmployees.map(employee => employee.name);
    //console.log(employeeNames);
    
    //TODO: 3. Gib die Namen aller Angestellter in hr auf der Konsole aus:
    const hrEmployees = allEmployees.filter(employee => employee.department)
    const hrNames = hrEmployees.map(employee => employee.name)
    //console.log(hrNames);
    //TODO: 3. Gib die Namen aller Angestellten mit einem Gehalt von mehr als 35.000 im Jahr aus
    const rich = allEmployees.filter(employee => employee.salary > 35000)
    const richNames = rich.map(employee => employee.name)
    //console.log(richNames)
    //TODO: 4. Nutze die Funktion getBoss() um den Chef von "Andreas Armschlucker" zu finden und auszugeben.
    console.log("hier kommt Aufgabe 4:")
    console.log(getBoss("Andreas Armschlucker"))
    //TODO: 5. Nutze die Funktion raiseIncome() um allen Angestellten, die in "Human Ressources" arbeiten (Außer dem chef) 
    //         eine Gehaltserhöhung von 4000 im Jahr zu geben
    console.log("Hier kommt Aufgabe 5:")
    console.log(allEmployees.filter(employee => employee.department === hr))
    //TODO: 6. Nutze die Funktion doubleBossIncome() um dem Boss von HR das doppelte gehalt zu geben
    console.log("Hier kommt Aufgabe 6:")
    console.log(allEmployees.filter(employee => employee.department === hr && employee.department.boss === employee.name))
    //TODO: 7. Nutzt averageIncome() um euch das Durschnittsgehalt eures eigenen Departments ausgeben zu lassen.
    console.log("Hier kommt Aufgabe 7:")
    console.log(durchschnittsgehalt)

}

main();