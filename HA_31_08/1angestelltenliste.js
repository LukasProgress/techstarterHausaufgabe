class Employee {
  constructor(department, name, salary) {
    this.department = department;
    this.name = name;
    this.salary = salary;
  }
}

class Department {
  constructor(company, name, boss) {
    this.company = company;
    this.name = name;
    this.boss = boss;
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  raiseIncome(amount) {
    this.employees.forEach(employee => {
      if (employee !== this.boss) {
        employee.salary += amount;
      }
    });
  }
}

class Company {
  constructor(name) {
    this.name = name;
    this.departments = [];
  }

  addDepartment(department) {
    this.departments.push(department);
  }
}

// Instanzen erstellen
const techStarter = new Company("TechStarter");

// Departments
const finances = new Department(techStarter, "Finances", "CFO");
const hr = new Department(techStarter, "Human Resources", "HR Director");
const marketing = new Department(techStarter, "Marketing", "CMO");
const sales = new Department(techStarter, "Sales", "Verkaufsleiter"); // Neues Department

// Angestellte
const cfo = new Employee(finances, "John Smith", 1500000);
const hrDirector = new Employee(hr, "Alice Johnson", 1200000);
const cmo = new Employee(marketing, "David Miller", 1300000);
const salesDirector = new Employee(sales, "Verkaufsleiter", 2000000); // Neuer Chef

const hrEmployee1 = new Employee(hr, "Anna Müller", 80000);
const hrEmployee2 = new Employee(hr, "Max Schmidt", 85000);
const hrEmployee3 = new Employee(hr, "Laura Wagner", 82000);

const marketingEmployee1 = new Employee(marketing, "Julia Keller", 90000);
const marketingEmployee2 = new Employee(marketing, "Simon Becker", 92000);
const marketingEmployee3 = new Employee(marketing, "Lisa Schneider", 95000);

const salesEmployee1 = new Employee(sales, "Michael Maier", 100000);
const salesEmployee2 = new Employee(sales, "Andreas Armschlucker", 98000);
const salesEmployee3 = new Employee(sales, "Tom Weber", 105000);

// Mitarbeiter hinzufügen
finances.addEmployee(cfo);
hr.addEmployee(hrDirector);
marketing.addEmployee(cmo);
sales.addEmployee(salesDirector);

hr.addEmployee(hrEmployee1);
hr.addEmployee(hrEmployee2);
hr.addEmployee(hrEmployee3);

marketing.addEmployee(marketingEmployee1);
marketing.addEmployee(marketingEmployee2);
marketing.addEmployee(marketingEmployee3);

sales.addEmployee(salesEmployee1);
sales.addEmployee(salesEmployee2);
sales.addEmployee(salesEmployee3);

// Departments hinzufügen
techStarter.addDepartment(finances);
techStarter.addDepartment(hr);
techStarter.addDepartment(marketing);
techStarter.addDepartment(sales);

// Aufgabe 2: Namen aller Angestellten ausgeben (Nutzung der map-Funktion)
const allEmployeeNames = techStarter.departments.flatMap(department => department.employees.map(employee => employee.name));
console.log("Aufgabe 2: Namen aller Angestellten:");
console.log(allEmployeeNames);

// Aufgabe 3: Namen aller Angestellten mit Gehalt über 35000 ausgeben (Nutzung von Filter und Map)
const above35000EmployeeNames = techStarter.departments.flatMap(department =>
  department.employees.filter(employee => employee.salary > 35000).map(employee => employee.name)
);
console.log("Aufgabe 3: Namen aller Angestellten mit Gehalt über 35000:");
console.log(above35000EmployeeNames);

// Aufgabe 4: getBoss-Funktion
function getBoss(employee) {
  return employee.department.employees.find(emp => emp.name === employee.department.boss);
}

// Verwende die Funktion getBoss, um den Chef des Angestellten "Andreas Armschlucker" zu finden
const andreas = techStarter.departments.flatMap(department => department.employees)
  .find(employee => employee.name === "Andreas Armschlucker");

if (andreas) {
  const bossOfAndreas = getBoss(andreas);
  console.log("Aufgabe 4: Chef von Andreas Armschlucker:");
  console.log(bossOfAndreas);
} else {
  console.log("Angestellter 'Andreas Armschlucker' nicht gefunden.");
}

// Aufgabe 5: raiseIncome-Funktion
function raiseIncome(department, amount) {
  department.raiseIncome(amount);
  console.log(`Aufgabe 5: Gehälter im Department '${department.name}' wurden erhöht.`);
}

// Erhöhe Gehälter im Department "Marketing" um 50000
raiseIncome(marketing, 50000);

// Aufgabe 6: doubleBossIncome-Funktion
function doubleBossIncome(department) {
  const boss = department.employees.find(employee => employee.name === department.boss);
  if (boss) {
    boss.salary *= 2;
    console.log(`Aufgabe 6: Gehalt von ${boss.name}, dem Chef von ${department.name}, wurde verdoppelt.`);
  } else {
    console.log(`Chef des Departments ${department.name} nicht gefunden.`);
  }
}

// Verwende die Funktion doubleBossIncome, um das Gehalt des Chefs von HR zu verdoppeln
doubleBossIncome(hr);

// Aufgabe 7: averageIncome-Funktion
function averageIncome(department) {
  const totalIncome = department.employees.reduce((sum, employee) => sum + employee.salary, 0);
  return totalIncome / (department.employees.length + 1); // +1 für den Boss
}

// Verwende die Funktion averageIncome, um das Durchschnittsgehalt des Departments "Human Resources" zu berechnen
const hrDepartment = techStarter.departments.find(department => department.name === "Human Resources");
if (hrDepartment) {
  const avgIncomeHR = averageIncome(hrDepartment);
  console.log("----------------------------------");
  console.log(`Aufgabe 7: Durchschnittsgehalt im Department 'Human Resources': ${avgIncomeHR}`);
  console.log("----------------------------------");
} else {
  console.log("Department 'Human Resources' nicht gefunden.");
}