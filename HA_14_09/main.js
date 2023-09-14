
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
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    getEmployeeCount() {
        return this.employees.length;
    }
}

class Employee {
    constructor(department, name, salary) {
        this.department = department;
        this.name = name;
        this.salary = salary;
    }
}

const bigMoneyCorp = new Company("Big Money Corporations");

let finance = new Department(bigMoneyCorp, "Finance", "Gerhard Geldsack");
let hr = new Department(bigMoneyCorp, "Human Ressources", "Albrecht Aasgeier");
let marketing = new Department(bigMoneyCorp, "Marketing", "Magnus McMamakind");
let production = new Department(bigMoneyCorp, "Production", "Hannes Gierschlund" );

let allEmployees = [];
allEmployees.push(new Employee(finance, "Gerhard Geldsack", 2000000));
allEmployees.push(new Employee(hr, "Albrecht Aasgeier", 3500000));
allEmployees.push(new Employee(marketing, "Magnus McMamakind", 2350000));
allEmployees.push(new Employee(finance, "Lukas Probst", 45000));
allEmployees.push(new Employee(finance, "Marcus Wunderle", 46000));
allEmployees.push(new Employee(finance, "Andreas Armschlucker", 29500));
allEmployees.push(new Employee(finance, "Roman Relativarm", 30400));
allEmployees.push(new Employee(production, "Hannes Gierschlund", 20000000));
allEmployees.push(new Employee(production, "Mirko Ohnegeld", 450));
allEmployees.push(new Employee(production, "Joe Forms-a-union", 500));



//==============================================================================
// FUNCTIONS

function getBoss(employeeName) {
    const employee = allEmployees.find(emp => emp.name === employeeName);
    if (employee) {
        const department = employee.department;
        return department.boss;
    } else {
        return "Employee not found.";
    }
}

function raiseIncome(departmentName, raiseAmount) {
    const department = allEmployees.find(dep => dep.department.name === departmentName);
    if (department) {
        for (const employee of department.employees) {
            if (employee.name !== department.boss) {
                employee.salary += raiseAmount;
            }
        }
    }
}

function doubleBossIncome(departmentName) {
    const department = allEmployees.find(dep => dep.department.name === departmentName);
    if (department) {
        const boss = department.employees.find(emp => emp.name === department.boss);
        if (boss) {
            boss.salary *= 2;
        }
    }
}

function averageIncome(departmentName) {
    const department = allEmployees.find(dep => dep.department.name === departmentName);
    if (department) {
        let totalSalary = 0;
        for (const employee of department.employees) {
            totalSalary += employee.salary;
        }
        return totalSalary / department.getEmployeeCount();
    }
    return 0;
}

//==============================================================================
//main function (Diese rufen wir auf, wenn die Datei ausgeführt wird.)
function main(){
    console.log("Namen aller Angestellten:");
    allEmployees.forEach(employee => {
        console.log(employee.name);
    });

    console.log("Namen aller Angestellten in HR:");
    hr.employees.forEach(employee => {
        console.log(employee.name);
    });

    console.log("Namen aller Angestellten mit Gehalt über 35.000:");
    allEmployees.forEach(employee => {
        if (employee.salary > 35000) {
            console.log(employee.name);
        }
    });

    // TODO: 4. Nutze die Funktion getBoss() um den Chef von "Andreas Armschlucker" zu finden und auszugeben.
    console.log("Chef von Andreas Armschlucker: " + getBoss("Andreas Armschlucker"));

    // TODO: 5. Nutze die Funktion raiseIncome() um allen Angestellten, die in "Human Ressources" arbeiten (Außer dem chef) 
    //         eine Gehaltserhöhung von 4000 im Jahr zu geben
    raiseIncome("Human Ressources", 4000);

    // TODO: 6. Nutze die Funktion doubleBossIncome() um dem Boss von HR das doppelte Gehalt zu geben
    doubleBossIncome("Human Ressources");

    // TODO: 7. Nutzt averageIncome() um euch das Durchschnittsgehalt eures eigenen Departments ausgeben zu lassen.
    console.log("Durchschnittsgehalt in My Department: " + averageIncome("My Department"));
}

main();
