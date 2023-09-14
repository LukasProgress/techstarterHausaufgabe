//------------------------------------------------------------------------------ 
// CLASSES

//TODO: 1. Erstelle die beiden Klassen "Department" und "Employee"
class Company {
    constructor(name){
        this.name = name;
    }
}
class Department {
    constructor(company, name, boss) {
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
let it = new Department(bigMoneyCorp, "it", "Paul Firewall");

//Wir speichern alle angestellten in einem einzigen Array:
let allEmployees = []
allEmployees.push(new Employee(finance, "Gerhard Geldsack", 2000000));
allEmployees.push(new Employee(hr, "Albrecht Aasgeier", 3500000));
allEmployees.push(new Employee(marketing, "Magnus McMamakind", 2350000));
allEmployees.push(new Employee(finance, "Lukas Probst", 45000));
allEmployees.push(new Employee(finance, "Marcus Wunderle", 46000));
allEmployees.push(new Employee(finance, "Andreas Armschlucker", 29500));
allEmployees.push(new Employee(finance, "Roman Relativarm", 30400));
allEmployees.push(new Employee(it, "Paul Firewall", 80000000));
// TODO: 2. Füge mindestens je 3 neue Angestellte bei hr und marketing, sowie eurem department hinzu.
allEmployees.push(new Employee(hr, "Alibaba", 3500000));
allEmployees.push(new Employee(hr, "Albrecht Geier", 3500000));
allEmployees.push(new Employee(hr, "Albrecht Eier", 3500000));

allEmployees.push(new Employee(marketing, "Magnus Mamakind", 1350000));
allEmployees.push(new Employee(marketing, "Magnus Kind", 2500000));
allEmployees.push(new Employee(marketing, "Magnus McMama", 350000));

allEmployees.push(new Employee(it, "Pauli Wall", 3000000));
allEmployees.push(new Employee(it, "Paula Fire", 4000000));
allEmployees.push(new Employee(it, "Fritz Fischer", 1000000));
//==============================================================================
// FUNCTIONS

//TODO: 4. Funktion getBoss
function getBoss(employeeName) {
    const employee = allEmployees.find(employee => employee.name === employeeName);
    if (employee) {
      const department = employee.department;
      const boss = allEmployees.find(employee => employee.name === department.boss);
      if (boss) {
        return boss.name;
      } else {
        return "Chef nicht gefunden";
      }
    } else {
      return "Mitarbeiter nicht gefunden";
    }
  }
//---------------------------------------------------------------------------------------------------------------
//TODO: 5. Funktion raiseIncome
function raiseIncome(department, amount) {
    allEmployees
      .filter(employee => employee.departmentepartment === department)
      .map(employee => {
        employee.salary += amount;
        return employee;
      });
  }
//---------------------------------------------------------------------------------------------------------------
//TODO: 6. doubleBossIncome
function doubleBossIncome() {
    const boss = allEmployees.find(employee => employee.department === hr && employee.name === hr.boss);
    if (boss) {
      boss.salary *= 2;
    }
  }
//---------------------------------------------------------------------------------------------------------------
//TODO: 7. averageIncome
function averageIncome(department) {
    const employees = allEmployees.filter(employee => employee.department === department);
    if (employees.length === 0) {
      return 0;
    }
    const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
    return totalSalary / employees.length;
  }
  
//=====================================================================================================================
//main function (Diese rufen wir auf, wenn die Datei ausgeführt wird.)

function main(){
    //TODO: 3. Gib die Namen aller Angestellter auf der Konsole aus:
/*const employeeNames = allEmployees.map(employee => employee.name);
console.log(employeeNames);*/
 //====================================================================================================================   
    //TODO: 3. Gib die Namen aller Angestellter in hr auf der Konsole aus:
   /* const hrEmployeeNames = allEmployees
  .filter(employee => employee.department.name === "Human Ressources")
  .map(employee => employee.name);
console.log(hrEmployeeNames);*/
//=====================================================================================================================
    //TODO: 3. Gib die Namen aller Angestellten mit einem Gehalt von mehr als 35.000 im Jahr aus
   /* const highSalaryEmployeeNames = allEmployees
  .filter(employee => employee.salary > 35000)
  .map(employee => employee.name);
console.log(highSalaryEmployeeNames);*/
 //====================================================================================================================   
    //TODO: 4. Nutze die Funktion getBoss() um den Chef von "Andreas Armschlucker" zu finden und auszugeben.
    
      /*const boss = getBoss("Andreas Armschlucker");
        console.log(boss);*/
//=====================================================================================================================
 //TODO: 5. Nutze die Funktion raiseIncome() um allen Angestellten, die in "Human Ressources" arbeiten (Außer dem chef) 
    //         eine Gehaltserhöhung von 4000 im Jahr zu geben
      
      /*raiseIncome("hr", 4000);*/
//======================================================================================================================
    //TODO: 6. Nutze die Funktion doubleBossIncome() um dem Boss von HR das doppelte gehalt zu geben
    
      /*doubleBossIncome();*/
      //================================================================================================================  

    //TODO: 7. Nutzt averageIncome() um euch das Durschnittsgehalt eures eigenen Departments ausgeben zu lassen.
    
      const durchschnittsgehalt = averageIncome(it);
      console.log(`Das Durchschnittsgehalt im Department "it" beträgt ${durchschnittsgehalt}`);
 //=====================================================================================================================     
    
}

main();