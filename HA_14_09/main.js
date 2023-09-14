//------------------------------------------------------------------------------ 
// CLASSES

//TODO: 1. Erstelle die beiden Klassen "Department" und "Employee"
class Company {
    constructor(name){
        this.name = name;
    }
}

class Department {
    constructor(name, company, boss) {
        this.name = name;
        this.company = company;
        this.boss = boss;
    }
}

class Employee {
    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
}




//==============================================================================
// OBJECT INSTANCES
const bigMoneyCorp = new Company("Big Money Corporations");


let finance = new Department(bigMoneyCorp, "Finance", "Gerhard Geldsack");
let hr = new Department(bigMoneyCorp, "Human Ressources", "Albrecht Aasgeier");
let marketing = new Department(bigMoneyCorp, "Marketing", "Magnus McMamakind");

//TODO: 2. Füge ein weiteres Department hinzu (eignes)
let tech = new Department(bigmoneyCorp, "Tech", "Timour Miagol");

//Wir speichern alle angestellten in einem einzigen Array:
let allEmployees = []
allEmployees.push(new Employee(finance, "Gerhard Geldsack", 2000000));
allEmployees.push(new Employee(hr, "Albrecht Aasgeier", 3500000));
allEmployees.push(new Employee(marketing, "Magnus McMamakind", 2350000));
allEmployees.push(new Employee(finance, "Lukas Probst", 45000));
allEmployees.push(new Employee(finance, "Marcus Wunderle", 46000));
allEmployees.push(new Employee(finance, "Andreas Armschlucker", 29500));
allEmployees.push(new Employee(finance, "Roman Relativarm", 30400));
// FÜR Aufgabe 2  Chef der mehr verdient
allEmployees.push(new Employee(tech, "Timour Miagol", 2000000))
// ANGEllstellte des neuen departments
allEmployees.push(new Employee(tech, "NPC1", 80000))
allEmployees.push(new Employee(tech, "NPC2", 80000))
allEmployees.push(new Employee(tech, "NPC3", 80000))
// Neue engestellten für hr
allEmployees.push(new Employee(hr, "hrNPC1", 70000))
allEmployees.push(new Employee(hr, "hrNPC2", 60000))
allEmployees.push(new Employee(hr, "hrNPC3", 65000))
//neue angestellten für marketing
allEmployees.push(new Employee(marketing, "marketingNPC1", 65000))
allEmployees.push(new Employee(marketing, "marketingNPC2", 65000))
allEmployees.push(new Employee(marketing, "marketingNPC3", 65000))





// TODO: 2. Füge mindestens je 3 neue Angestellte bei hr und marketing, sowie eurem department hinzu.
//==============================================================================
// FUNCTIONS



// + Mitarbeiter des Departments



// 3 neue angestellte für HR





// FUNCTIONS
function getBoss(department) {
    return department.boss;
  }
  
  
  
  function raiseIncome(employee, amount) {
    employee.salary = amount + employee.solary;
  }
  

  
  function doubleBossIncome(department) {
    const boss = getBoss(department);
    raiseIncome(boss, boss.salary);
  }
  
  
  function averageIncome(employees) {
    let totalSalary = 0;
    for (let employee of employees) {
      totalSalary += employee.salary;
    }
    return totalSalary / employees.length;
  }


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