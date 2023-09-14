// CLASSES ////N IFDSIFNIDSFNSOIDFN Irgendwie hab ich die Aufgabe vollkommen zerschossen, mir fehlte leider die Zeit um von vorn zu beginnen
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
let hr = new Department(bigMoneyCorp, "Human Resources", "Albrecht Aasgeier");
let marketing = new Department(bigMoneyCorp, "Marketing", "Magnus McMamakind");

let tech = new Department(bigMoneyCorp, "Tech", "Timour Miagol");

let allEmployees = [];
allEmployees.push(new Employee(finance, "Gerhard Geldsack", 2000000));
allEmployees.push(new Employee(hr, "Albrecht Aasgeier", 3500000));
allEmployees.push(new Employee(marketing, "Magnus McMamakind", 2350000));
allEmployees.push(new Employee(finance, "Lukas Probst", 45000));
allEmployees.push(new Employee(finance, "Marcus Wunderle", 46000));
allEmployees.push(new Employee(finance, "Andreas Armschlucker", 29500));
allEmployees.push(new Employee(finance, "Roman Relativarm", 30400));

allEmployees.push(new Employee(tech, "Timour Miagol", 2000000));
allEmployees.push(new Employee(tech, "NPC1", 80000));
allEmployees.push(new Employee(tech, "NPC2", 80000));
allEmployees.push(new Employee(tech, "NPC3", 80000));

allEmployees.push(new Employee(hr, "hrNPC1", 70000));
allEmployees.push(new Employee(hr, "hrNPC2", 60000));
allEmployees.push(new Employee(hr, "hrNPC3", 65000));

allEmployees.push(new Employee(marketing, "marketingNPC1", 65000));
allEmployees.push(new Employee(marketing, "marketingNPC2", 65000));
allEmployees.push(new Employee(marketing, "marketingNPC3", 65000));

//==============================================================================
// FUNCTIONS

function getBoss(employeeName) {
    const employee = allEmployees.find(employee => employee.name === employeeName);
    if (employee) {
      const department = employee.department;
      if (department && department.boss === employee) {
        return department.boss;
      }
    }
    return null;
  }

function raiseIncome(department, amount) {
    const employeesInDepartment = allEmployees.filter(employee => employee.department === department);
    const employeesWithoutBoss = employeesInDepartment.filter(employee => employee.name !== department.boss);
    const raise = amount / employeesWithoutBoss.length;
    employeesWithoutBoss.forEach(employee => employee.salary += raise);
}

function averageIncome(department) {
    const employeesInDepartment = allEmployees.filter(employee => employee.department === department);
    const salaries = employeesInDepartment.map(employee => employee.salary);
    const totalSalary = salaries.reduce((a, b) => a + b, 0);
    return totalSalary / salaries.length;
}

//==============================================================================
// MAIN FUNCTION

function main() {
    let names = allEmployees.map(employee => employee.name);
    console.log(names);

    const hrEmployees = allEmployees.filter(employee => employee.department.name === "Human Resources");
    const hrNames = hrEmployees.map(employee => employee.name);
    console.log(hrNames);

    const highSalaryEmployees = allEmployees.filter(employee => employee.salary > 35000);
    const highSalaryNames = highSalaryEmployees.map(employee => employee.name);
    console.log(highSalaryNames);

    const armschluckersBoss = getBoss(armschlucker.name);
    if (armschluckersBoss) {
      console.log(armschluckersBoss.name);
    } else {
      console.log("Chef nicht gefunden.");
    }

    raiseIncome(hr, 4000);

    const techAverageSalary = averageIncome(tech);
    console.log(`Durchschnittsgehalt im Tech-Department: ${techAverageSalary}`);
}

main();