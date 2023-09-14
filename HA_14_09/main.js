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
        this.employees = [];
    }
}

class Employee {
    constructor(department, name, salary){
        this.department = department;
        this.name = name;
        this.salary = salary;
        department.employees.push(this);    }
}

//==============================================================================
// ... (Code zum Erstellen von Unternehmen, Abteilungen und Angestellten)

//==============================================================================
//main function (Diese rufen wir auf, wenn die Datei ausgeführt wird.)
function main(){
    //TODO: 3. Gib die Namen aller Angestellter auf der Konsole aus:
    console.log("Namen aller Angestellten:");
    allEmployees.forEach(employee => {
        console.log(employee.name);
    });

    //TODO: 3. Gib die Namen aller Angestellter in hr auf der Konsole aus:
    console.log("Namen aller Angestellten in HR:");
    hr.employees.forEach(employee => {
        console.log(employee.name);
    });

    //TODO: 3. Gib die Namen aller Angestellten mit einem Gehalt von mehr als 35.000 im Jahr aus
    console.log("Namen aller Angestellten mit einem Gehalt von mehr als 35.000 im Jahr:");
    allEmployees.forEach(employee => {
        if (employee.salary > 35000) {
            console.log(employee.name);
        }
    });

    //TODO: 4. Nutze die Funktion getBoss() um den Chef von "Andreas Armschlucker" zu finden und auszugeben.
    function getBoss(employeeName) {
        const employee = allEmployees.find(e => e.name === employeeName);
        if (employee) {
            console.log(`Der Chef von ${employeeName} ist ${employee.department.boss}`);
        } else {
            console.log(`${employeeName} wurde nicht gefunden.`);
        }
    }

    getBoss("Andreas Armschlucker");

    //TODO: 5. Nutze die Funktion raiseIncome() um allen Angestellten, die in "Human Resources" arbeiten (Außer dem Chef) 
    //         eine Gehaltserhöhung von 4000 im Jahr zu geben
    function raiseIncome(departmentName, raiseAmount) {
        const department = allDepartments.find(d => d.name === departmentName);
        if (department) {
            department.employees.forEach(employee => {
                if (employee.name !== department.boss) {
                    employee.salary += raiseAmount;
                }
            });
            console.log(`Gehaltserhöhung für ${departmentName} Mitarbeiter wurde durchgeführt.`);
        } else {
            console.log(`Abteilung ${departmentName} wurde nicht gefunden.`);
        }
    }

    raiseIncome("Human Resources", 4000);

    //TODO: 6. Nutze die Funktion doubleBossIncome() um dem Boss von HR das doppelte Gehalt zu geben
    function doubleBossIncome(departmentName) {
        const department = allDepartments.find(d => d.name === departmentName);
        if (department) {
            const boss = department.employees.find(employee => employee.name === department.boss);
            if (boss) {
                boss.salary *= 2;
                console.log(`Das Gehalt von ${boss.name} wurde verdoppelt.`);
            } else {
                console.log(`Chef von ${departmentName} wurde nicht gefunden.`);
            }
        } else {
            console.log(`Abteilung ${departmentName} wurde nicht gefunden.`);
        }
    }

    doubleBossIncome("Human Resources");

    //TODO: 7. Nutzt averageIncome() um euch das Durchschnittsgehalt eures eigenen Departments ausgeben zu lassen.
    function averageIncome(departmentName) {
        const department = allDepartments.find(d => d.name === departmentName);
        if (department) {
            const totalSalary = department.employees.reduce((sum, employee) => sum + employee.salary, 0);
            const average = totalSalary / department.employees.length;
            console.log(`Durchschnittsgehalt in ${departmentName}: ${average}`);
        } else {
            console.log(`Abteilung ${departmentName} wurde nicht gefunden.`);
        }
    }

    averageIncome("My Department");
}

main();
