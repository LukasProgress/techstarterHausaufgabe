//==============================================================================
// KI-Koproduktion!! Nicht Bewerten, wenn möglich unterschiede erklären <3
// CLASSES

//TODO: 1. Erstelle die beiden Klassen "Department" und "Employee"
class Company {
  constructor(name) {
    this.name = name;
  }
}

class Department {
  constructor(company, name, boss) {
    this.company = company;
    this.name = name;
    this.boss = boss;
    this.employees = [];
  }
}

class Employee {
  constructor(department, name, salary) {
    this.department = department;
    this.name = name;
    this.salary = salary;
    department.employees.push(this);
  }
}

//==============================================================================
// OBJECT INSTANCES
const bigMoneyCorp = new Company("Big Money Corporations");

let finance = new Department(bigMoneyCorp, "Finance", "Gerhard Geldsack");
let hr = new Department(bigMoneyCorp, "Human Ressources", "Albrecht Aasgeier");
let marketing = new Department(bigMoneyCorp, "Marketing", "Magnus McMamakind");

//TODO: 2. Füge ein weiteres Department hinzu
let it = new Department(bigMoneyCorp, "IT", "Ingo Internet");

//Wir speichern alle angestellten in einem einzigen Array:
let allEmployees = [];
allEmployees.push(new Employee(finance, "Gerhard Geldsack", 2000000));
allEmployees.push(new Employee(hr, "Albrecht Aasgeier", 3500000));
allEmployees.push(new Employee(marketing, "Magnus McMamakind", 2350000));
allEmployees.push(new Employee(finance, "Lukas Probst", 45000));
allEmployees.push(new Employee(finance, "Marcus Wunderle", 46000));
allEmployees.push(new Employee(finance, "Andreas Armschlucker", 29500));
allEmployees.push(new Employee(finance, "Roman Relativarm", 30400));
allEmployees.push(new Employee(it, "Ingo Internet", 2500000));
// TODO: 2. Füge mindestens je 3 neue Angestellte bei hr und marketing, sowie eurem department hinzu.
allEmployees.push(new Employee(hr, "Albrecht Basgeier", 350003));
allEmployees.push(new Employee(hr, "Albrecht Casgeier", 350002));
allEmployees.push(new Employee(hr, "Albrecht Dasgeier", 350001));
allEmployees.push(new Employee(marketing, "Magnus AcMamakind", 235003));
allEmployees.push(new Employee(marketing, "Magnus BcMamakind", 235002));
allEmployees.push(new Employee(marketing, "Magnus CcMamakind", 235001));
allEmployees.push(new Employee(it, "Ingo Anternet", 250003));
allEmployees.push(new Employee(it, "Ingo Bnternet", 250002));
allEmployees.push(new Employee(it, "Ingo Cnternet", 250001));
//==============================================================================
// FUNCTIONS
//TODO: 4. Funktion getBoss
function getBoss(employeeName) {
  const employee = allEmployees.find((employee) => employee.name === employeeName);
  if (employee) {
    const department = employee.department;
    const boss = allEmployees.find((employee) => employee.name === department.boss);
    if (boss) {
      return boss.name;
    } else {
      return "Chef nicht gefunden";
    }
  } else {
    return "Mitarbeiter nicht gefunden";
  }
}

//TODO: 5. Funktion raiseIncome
function raiseIncome(departmentName, amount) {
  allEmployees
    .filter((employee) => employee.department.name === departmentName && employee.name !== employee.department.boss)
    .forEach((employee) => {
      employee.salary += amount;
    });
}

//TODO: 6. Funktion doubleBossIncome
function doubleBossIncome(department) {
  const boss = department.employees.find((employee) => employee.name === department.boss);
  if (boss) {
    boss.salary *= 2;
  }
}

//TODO: 7. Funktion averageIncome
function averageIncome(departmentName) {
  const employees = allEmployees.filter((employee) => employee.department.name === departmentName);
  if (employees.length === 0) {
    return 0;
  }
  const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
  return totalSalary / employees.length;
}

//=====================================================================================================================
//main function (Diese rufen wir auf, wenn die Datei ausgeführt wird.)
function main() {
  //TODO: 3. Gib die Namen aller Angestellten auf der Konsole aus:
  const employeeNames = allEmployees.map((employee) => employee.name);
  console.log("Namen aller Angestellten:");
  console.log(employeeNames);
  console.log("-------------------------");

  //TODO: 3. Gib die Namen aller Angestellten in HR auf der Konsole aus:
  const hrEmployeeNames = allEmployees
    .filter((employee) => employee.department.name === "Human Ressources")
    .map((employee) => employee.name);
  console.log("Namen aller Angestellten in HR:");
  console.log(hrEmployeeNames);
  console.log("-------------------------");

  //TODO: 3. Gib die Namen aller Angestellten mit einem Gehalt von mehr als 35.000 im Jahr aus
  const highSalaryEmployeeNames = allEmployees
    .filter((employee) => employee.salary > 35000)
    .map((employee) => employee.name);
  console.log("Namen aller Angestellten mit einem Gehalt von mehr als 35.000 im Jahr:");
  console.log(highSalaryEmployeeNames);
  console.log("-------------------------");

  //TODO: 4. Nutze die Funktion getBoss() um den Chef von "Andreas Armschlucker" zu finden und auszugeben.
  const boss = getBoss("Andreas Armschlucker");
  console.log("Chef von Andreas Armschlucker:", boss);
  console.log("-------------------------");

  //TODO: 5. Nutze die Funktion raiseIncome() um allen Angestellten, die in "Human Ressources" arbeiten (außer dem Chef),
  //       eine Gehaltserhöhung von 4000 im Jahr zu geben.
  raiseIncome("Human Ressources", 4000);
  console.log("Gehaltserhöhung in Human Ressources:");
  allEmployees
    .filter((employee) => employee.department.name === "Human Ressources")
    .forEach((employee) => {
      console.log(`${employee.name}: ${employee.salary}`);
    });
  console.log("-------------------------");

  //TODO: 6. Nutze die Funktion doubleBossIncome() um dem Boss von HR das doppelte Gehalt zu geben.
  console.log("Gehalt des HR-Chefs vor der Verdopplung:", hr.employees.find((employee) => employee.name === hr.boss).salary);
  doubleBossIncome(hr);
  console.log("Gehalt des HR-Chefs nach der Verdopplung:", hr.employees.find((employee) => employee.name === hr.boss).salary);
  console.log("-------------------------");

  //TODO: 7. Nutze die Funktion averageIncome() um das Durchschnittsgehalt im IT-Department auszugeben.
  const averageSalary = averageIncome("IT");
  console.log("Durchschnittsgehalt im IT-Department:", averageSalary);
}

main();
